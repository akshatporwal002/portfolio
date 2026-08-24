type ContributionDay = {
  date: string;
  level: number;
  label: string;
};

type ContributionData = {
  total: number | null;
  days: ContributionDay[];
};

const contributionUrl =
  "https://github.com/users/akshatporwal002/contributions";

function decodeText(value: string) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&#39;", "'")
    .replaceAll("&quot;", '"')
    .replace(/<[^>]+>/g, "")
    .trim();
}

function parseContributions(html: string): ContributionData {
  const totalMatch = html.match(
    /([\d,]+)\s+contributions\s+in the last year/i,
  );
  const days: ContributionDay[] = [];
  const dayPattern =
    /<td[^>]*data-date="([^"]+)"[^>]*data-level="([0-4])"[^>]*><\/td>\s*<tool-tip[^>]*>([\s\S]*?)<\/tool-tip>/g;

  for (const match of html.matchAll(dayPattern)) {
    days.push({
      date: match[1],
      level: Number(match[2]),
      label: decodeText(match[3]),
    });
  }

  days.sort((a, b) => a.date.localeCompare(b.date));

  return {
    total: totalMatch ? Number(totalMatch[1].replaceAll(",", "")) : null,
    days,
  };
}

async function getContributions(): Promise<ContributionData> {
  try {
    const response = await fetch(contributionUrl, {
      headers: {
        Accept: "text/html",
        "User-Agent": "akshatporwal.dev portfolio",
      },
      next: { revalidate: 21_600 },
    });

    if (!response.ok) return { total: null, days: [] };

    return parseContributions(await response.text());
  } catch {
    return { total: null, days: [] };
  }
}

function getGridPosition(date: string, startTime: number) {
  const parsed = new Date(`${date}T00:00:00Z`);
  const offset = Math.round((parsed.getTime() - startTime) / 86_400_000);

  return {
    column: Math.floor(offset / 7) + 1,
    row: parsed.getUTCDay() + 1,
  };
}

export async function GitHubContributionGraph() {
  const contributionData = await getContributions();
  const { days, total } = contributionData;

  if (days.length === 0) {
    return (
      <div className="contribution-graph contribution-graph-empty">
        <p>GitHub activity is temporarily unavailable.</p>
        <a href={contributionUrl}>View activity on GitHub</a>
      </div>
    );
  }

  const firstDate = new Date(`${days[0].date}T00:00:00Z`);
  const startTime = firstDate.getTime();
  const lastPosition = getGridPosition(days.at(-1)!.date, startTime);
  const weekCount = lastPosition.column;
  const monthLabels = Array.from(
    days.reduce((months, day) => {
      const date = new Date(`${day.date}T00:00:00Z`);
      const monthKey = day.date.slice(0, 7);

      if (!months.has(monthKey)) months.set(monthKey, {
        key: day.date,
        label: new Intl.DateTimeFormat("en-AU", { month: "short" }).format(date),
        column: getGridPosition(day.date, startTime).column,
      });

      return months;
    }, new Map<string, { key: string; label: string; column: number }>()),
  ).map(([, month]) => month);

  return (
    <div className="contribution-graph">
      <div className="contribution-graph-heading">
        <p>
          <strong>{total?.toLocaleString("en-AU") ?? "—"}</strong>{" "}
          contributions in the last year
        </p>
        <span>PUBLIC GITHUB ACTIVITY</span>
      </div>

      <div
        className="contribution-scroll"
        role="region"
        aria-label={`${total ?? "Recent"} GitHub contributions in the last year. Scroll horizontally to inspect the full calendar.`}
        tabIndex={0}
      >
        <div className="contribution-calendar">
          <div
            className="contribution-months"
            style={{ gridTemplateColumns: `repeat(${weekCount}, 11px)` }}
            aria-hidden="true"
          >
            {monthLabels.map((month) => (
              <span key={month.key} style={{ gridColumn: month.column }}>
                {month.label}
              </span>
            ))}
          </div>

          <div className="contribution-calendar-body">
            <div className="contribution-weekdays" aria-hidden="true">
              <span style={{ gridRow: 2 }}>Mon</span>
              <span style={{ gridRow: 4 }}>Wed</span>
              <span style={{ gridRow: 6 }}>Fri</span>
            </div>
            <div
              className="contribution-days"
              style={{ gridTemplateColumns: `repeat(${weekCount}, 11px)` }}
              aria-hidden="true"
            >
              {days.map((day) => {
                const position = getGridPosition(day.date, startTime);
                return (
                  <span
                    key={day.date}
                    data-level={day.level}
                    title={day.label}
                    style={{
                      gridColumn: position.column,
                      gridRow: position.row,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="contribution-graph-footer">
        <a
          href="https://docs.github.com/account-and-profile/reference/contribution-settings-and-viewing-activity"
          target="_blank"
          rel="noreferrer"
        >
          How GitHub counts contributions
        </a>
        <div className="contribution-legend" aria-label="Contribution intensity from less to more">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <i key={level} data-level={level} aria-hidden="true" />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}

# CV and navigation update

Source: C:/Users/aoswa/OneDrive/Documents/AkshatPorwalResume.pdf.
The PDF remains outside the public website; resume content lives in src/data/resume.ts.

Public project order follows the resume: Engram, Stonks-in-Hand, LearnLens, Fraud Detection System, Bayesian Insurance Risk Modelling, ASX Stock Data Analysis.
Earlier projects and media remain in src/data/projects.ts and public/projects, but are excluded from public route generation, navigation, galleries and next-project links.

Engram uses original white-theme iPhone captures, copied without pixel edits:
- Memory/design/previews/analytics-ux/iphone/Final-Recall-Overview.png -> public/projects/engram-recall.png
- Memory/design/previews/adaptive-generation-2026-10-11/iphone-existing-review.png -> public/projects/engram-review.png
- Memory/design/previews/analytics-ux/iphone/Final-Deadline-Overview.png -> public/projects/engram-deadline.png

Menu: Home, About, CV, Certifications & skills, Experience, Projects, Contact.
Menu opens in 240ms; content stays inside the panel and scrolls on short screens. OS reduced motion remains supported after removal of pause controls.

Verified: webpack production build, lint, seven room geometry checks, browser menu bounds at 390x500 and 320x320, six gallery entries, Engram detail and next link, Velexar 404, white iPhone image loading and mobile page overflow.
Status: local only, not pushed or deployed.

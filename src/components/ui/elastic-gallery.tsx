"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type MouseEvent } from "react";

export type ElasticGalleryItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  href: string;
  src?: string;
  alt: string;
  position?: string;
};

export function ElasticGallery({ items }: { items: ElasticGalleryItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const pointerType = useRef("");

  function handleClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
    const touchFirst = pointerType.current === "touch" && activeId !== id;
    pointerType.current = "";
    if (!touchFirst) return;

    event.preventDefault();
    setActiveId(id);
  }

  return (
    <div className="elastic-gallery" role="list">
      {items.map((item, index) => {
        const isActive = activeId === item.id;

        return (
          <article
            className="elastic-gallery-item"
            data-active={isActive}
            key={item.id}
            onMouseEnter={() => setActiveId(item.id)}
            role="listitem"
          >
            <Link
              className="elastic-gallery-link"
              href={item.href}
              aria-label={`Read the ${item.title} case study`}
              onClick={(event) => handleClick(event, item.id)}
              onFocus={() => setActiveId(item.id)}
              onPointerDown={(event) => { pointerType.current = event.pointerType; }}
              prefetch={isActive ? null : false}
            >
              <span className="elastic-gallery-image" aria-hidden={!item.src}>
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 680px) calc(100vw - 36px), (max-width: 960px) 70vw, 58vw"
                    style={{ objectPosition: item.position ?? "center" }}
                  />
                ) : null}
              </span>
              <span className="elastic-gallery-scrim" aria-hidden="true" />

              <span className="elastic-gallery-content">
                <span className="elastic-gallery-category">{item.category}</span>
                <strong>{item.title}</strong>
                <span className="elastic-gallery-description">{item.description}</span>
                <span className="elastic-gallery-cta">
                  Case study <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </span>

              <span className="elastic-gallery-inactive-title" aria-hidden="true">
                {item.title}
              </span>
            </Link>
          </article>
        );
      })}
    </div>
  );
}

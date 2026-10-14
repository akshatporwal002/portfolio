"use client";

import Image from "next/image";
import { useState } from "react";
import { MotionToggle } from "./portfolio-motion";

export function PixelRoom({ onHello }: { onHello: () => void }) {
  const [awake, setAwake] = useState(false);
  return <div className={`room-scene ${awake ? "is-awake" : ""}`}><Image src="/art/pixel-room.png" alt="Pixel illustration of Akshat at his desk, with a glowing computer, warm lamp, and his bedroom behind him." fill priority sizes="100vw" /><div className="room-light" aria-hidden="true" /><button className="room-greeting" aria-label="Say hello to Akshat" onClick={() => { setAwake(true); onHello(); }}><span>{awake ? "Hey, welcome to my room!" : "Say hello ↗"}</span></button><span className="room-caption">A little corner of my world.</span><MotionToggle className="room-motion-toggle" /></div>;
}

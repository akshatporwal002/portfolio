import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { SiteHeader } from "../site-header";
import { CaseGallery } from "../case-gallery";
export const metadata: Metadata = { title: "Projects — Akshat Porwal", description: "Selected AI systems, learning products, and engineering work by Akshat Porwal." };
export default function ProjectsPage() { return <><SiteHeader /><main id="content"><CaseGallery projects={projects} /></main></>; }

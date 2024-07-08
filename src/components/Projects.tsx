import React from "react";
import { SiNextdotjs, SiReactquery, SiTailwindcss } from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { cn } from "@/lib/utils";

export default function Projects() {
  const projects = [
    {
      title: "E-Learning Platform",
      tech: [SiNextdotjs, SiReactquery, SiTailwindcss],
      Link: "https://github.com/kursatpolatci/company-website-nextjs",
      cover:
        "/haber.jpg",
      background: "bg-indigo-500",
    },
    {
      title: "E-Learning Platform",
      tech: [SiNextdotjs, SiReactquery, SiTailwindcss],
      Link: "https://github.com/kursatpolatci/company-website-nextjs",
      cover:
        "/haber.jpg",
      background: "bg-green-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title text="Projects 🔗" 
        className="flex flex-col items-center justify-center rotate-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        { projects.map((project, index) => {
          return (
            <Link key={index} href={project.Link}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-x-5"
                >
                  <div className=" space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index}/>
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}

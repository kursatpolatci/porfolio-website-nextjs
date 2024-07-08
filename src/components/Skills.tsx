"use client"
import { 
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript, 
    SiC,
    SiCsharp,
    SiUnity,
    SiHtml5,
    SiCss3,
    SiJavascript
 } from "react-icons/si";
import Title from "./Title";
import { HoverEffect } from "./ui/card-hover-effect";

export default function Skills() {

    const skills = [
        {
            text: "React",
            Icon: SiReact
        },
        {
            text: "Nextjs",
            Icon: SiNextdotjs
        },
        {
            text: "TailwindCSS",
            Icon: SiTailwindcss
        },
        {
            text: "Typescript",
            Icon: SiTypescript
        },
        {
            text: "C",
            Icon: SiC
        },
        {
            text: "C#",
            Icon: SiCsharp
        },
        {
            text: "Unity",
            Icon: SiUnity
        },
        {
            text: "HTML",
            Icon: SiHtml5
        },
        {
            text: "CSS",
            Icon: SiCss3
        },
        {
            text: "Javascript",
            Icon: SiJavascript
        }
    ]
  return (
    <div className=" max-w-5xl mx-auto px-8">
      <Title
        text="Skills </>"
        className="flex flex-col items-center justify-center -rotate-6"
      />

      <HoverEffect items={skills}/>
    </div>
  );
}

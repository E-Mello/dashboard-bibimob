"use client";

import { Suspense, useState } from "react";

import LoadingSkeleton from "@/components/ui/LoadingSkeleton";
import { NextPage } from "next";
import { useRouter } from "next/navigation";

type Project = {
  src: string;
  alt: string;
  title: string;
  description: string;
  images: string[];
  link: string;
};

const ProjectsPage: NextPage = () => {
  const router = useRouter();


  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    document.body.classList.add("overflow-hidden"); // Tentativa de parar com o bug de scroll
    setSelectedProject(project);
  };

  const closeModal = () => {
    document.body.classList.remove("overflow-hidden"); // Tentativa de parar com o bug de scroll
    setSelectedProject(null);
  };

  return (
    <section className="flex flex-col">

    </section>
  );
};

export default ProjectsPage;

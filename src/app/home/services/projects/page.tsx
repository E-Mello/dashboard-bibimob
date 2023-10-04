"use client";

import { Suspense, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import LoadingSkeleton from "~/components/ui/LoadingSkeleton";
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

  // Define an array of project images
  const projectImages: Project[] = [
    {
      src: "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/TestArea.png",
      alt: "Project 1",
      title: "Project 1",
      description: "Description of the project goes here",
      images: [
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/CastleSolo.jpg",
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/Cube.jpg",
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/Fire.jpg?t=2023-06-20T14%3A46%3A16.990Z",
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/MoreMount.jpg",
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/Mount.jpg",
      ],
      link: "https://portal-si.vercel.app/",
    },
    {
      src: "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/TestArea.png",
      alt: "Project 2",
      title: "Project 2",
      description: "Description of the project goes here",
      images: [
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/CastleSolo.jpg",
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/Cube.jpg",
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/Fire.jpg?t=2023-06-20T14%3A46%3A16.990Z",
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/MoreMount.jpg",
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/Mount.jpg",
      ],
      link: "https://portal-si.vercel.app/",
    },
    {
      src: "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/TestArea.png",
      alt: "Project 3",
      title: "Project 3",
      description: "Description of the project goes here",
      images: [
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/CastleSolo.jpg",
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/Cube.jpg",
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/Fire.jpg?t=2023-06-20T14%3A46%3A16.990Z",
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/MoreMount.jpg",
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/Mount.jpg",
      ],
      link: "https://portal-si.vercel.app/",
    },
    {
      src: "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/TestArea.png",
      alt: "Project 4",
      title: "Project 4",
      description: "Description of the project goes here",
      images: [
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/CastleSolo.jpg",
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/Cube.jpg",
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/Fire.jpg?t=2023-06-20T14%3A46%3A16.990Z",
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/MoreMount.jpg",
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/Mount.jpg",
      ],
      link: "https://portal-si.vercel.app/",
    },
    {
      src: "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/TestArea.png",
      alt: "Project 5",
      title: "Project 5",
      description: "Description of the project goes here",
      images: [
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/CastleSolo.jpg",
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/Cube.jpg",
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/Fire.jpg?t=2023-06-20T14%3A46%3A16.990Z",
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/MoreMount.jpg",
        "https://zrohxlcjhxpnojvxpcju.supabase.co/storage/v1/object/public/dashboard.images/Mount.jpg",
      ],
      link: "https://portal-si.vercel.app/",
    },
    // Add more project objects as needed
  ];

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
    <section className="flex flex-col h-full w-full">
      <div className="h-[100vh] flex flex-col">
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 pl-10 pr-10">
          {projectImages.map((project, index) => (
            <div
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              key={index}
            >
              <img
                className="w-full h-64 object-cover object-center rounded-t-lg"
                src={project.src}
                alt={project.alt}
                loading="eager"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400">{project.description}</p>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => openModal(project)}
                    className="text-gray-400 hover:text-white"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="w-full h-full fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div className="bg-zinc-800 rounded-lg p-8 relative w-[50vw] h-[80vh] flex flex-col">
              <div className="flex w-full h-full">
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="grid grid-cols-2 columns-2 w-2/3 rounded-lg bg-zinc-400 p-2 gap-2">
                  {selectedProject.images.map((image, index) => (
                    <div key={index} className="flex w-72">
                      <Suspense
                        fallback={
                          <LoadingSkeleton
                            effect="wave"
                            className="max-w-full h-48 bg-purple-600"
                            shape="rectangular"
                          />
                        }
                      >
                        <Image
                          src={image}
                          alt={`Project ${index + 1}`}
                          className="max-w-full h-48 object-cover"
                          loading="lazy"
                          width={300}
                          height={200}
                        />
                      </Suspense>
                    </div>
                  ))}
                </div>
                <div className="flex w-1/3 flex-col items-center">
                  <h2 className="text-2xl font-bold mb-4">
                    {selectedProject.title}
                  </h2>
                  <p>{selectedProject.description}</p>
                </div>
              </div>
              <div className="flex justify-end">
                <Link
                  href={selectedProject.link}
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700 justify-center flex w-44 text-center items-center h-10 px-4 bg-zinc-300 rounded-full"
                >
                  Go to Project
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;

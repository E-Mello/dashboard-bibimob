"use client";

import Image from "next/image";
import LoadingSkeleton from "@/components/ui/LoadingSkeleton";
import { Suspense } from "react";
import { useRouter } from "next/navigation";

interface SkillCardProps {
  title: string;
  description: string;
  image: string;
}

// Importe as imagens fictícias para representar habilidades

const SkillCard = ({ title, description, image }: SkillCardProps) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <Image
      src={image}
      alt={title}
      className="w-20 h-20 mx-auto mb-4 rounded-full"
      width={500}
      height={500}
    />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-800">{description}</p>
  </div>
);

export default function AboutPage() {
  const router = useRouter();

  const aboutText =
    "Olá! Meu nome é John Doe e sou um desenvolvedor web apaixonado por criar soluções inovadoras. Com mais de 5 anos de experiência, meu objetivo é oferecer serviços de desenvolvimento de alta qualidade, atendendo às necessidades dos clientes de forma eficiente e eficaz. Tenho experiência em diversas tecnologias web, incluindo HTML, CSS, JavaScript, React e Node.js. Minha paixão pelo desenvolvimento vai além do código, pois também sou entusiasta de design e estou sempre em busca de criar interfaces intuitivas e agradáveis. Acredito que a colaboração e a comunicação são fundamentais para o sucesso de um projeto, por isso estou sempre aberto a trabalhar em equipe e compartilhar conhecimentos. Se você está procurando um desenvolvedor comprometido, criativo e confiável, entre em contato comigo. Estou ansioso para contribuir para o sucesso do seu projeto!";

  return (
    <section className="flex flex-col h-full items-center">
      <div className="flex h-[89vh] flex-col gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-6">Sobre Mim</h1>
          <p className="text-gray-800">{aboutText}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard
            title="Desenvolvimento"
            description="Sou especialista em desenvolvimento web, utilizando tecnologias modernas e frameworks populares para criar aplicações robustas e escaláveis."
            image="https://via.placeholder.com/200"
          />

          <SkillCard
            title="Design"
            description="Tenho uma paixão pelo design e estou sempre em busca de criar interfaces atraentes e intuitivas que proporcionem uma ótima experiência de usuário."
            image="https://via.placeholder.com/200"
          />

          <SkillCard
            title="Trabalho em Equipe"
            description="Acredito que o trabalho em equipe é essencial para o sucesso de um projeto. Colaboro de forma eficiente, compartilhando conhecimentos e promovendo um ambiente positivo."
            image="https://via.placeholder.com/200"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-6">Sobre Mim</h1>
          <p className="text-gray-800">{aboutText}</p>
        </div>
      </div>
    </section>
  );
}

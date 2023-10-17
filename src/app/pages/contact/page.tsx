"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import Copyright from "@/components/Copyright";
import Image from "next/image";
import LoadingSkeleton from "@/components/ui/LoadingSkeleton";
import { NextPage } from "next";
import { isDarkModeAtom } from "@/atoms/themeModeAtom";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactPage: NextPage = () => {
  const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);
  const router = useRouter();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulate API request success
    setIsLoading(false);
    setIsSuccess(true);

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className={`flex w-screen h-screen flex-col  justify-center object-end pt-20 ${isDarkMode ? 'bg-yellow-950' : 'bg-slate-300'}`}>
      <div className="w-full h-[80vh] flex flex-col items-center justify-center">
        <div className="w-1/2 p-6 bg-[#a59821] rounded-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">{isSuccess ? "Obrigado por entrar em contato conosco!" : "Entre em contato conosco"}</h1>

          {isSuccess ? (
            <p className={`mb-6 text-center`}>Mensagem enviada com sucesso! O quanto antes lhe retornaremos com um parecer!</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" action="../../auth/email" method='post'>
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-900 font-medium">
                  Nome:
                </label>
                <input
                  type="text"
                  placeholder="Édio de Melo Pereira"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border border-gray-300 text-gray-900 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-900 font-medium">
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="bibimobfinger@gmail.com"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border border-gray-300 text-gray-900 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="telefone" className="text-gray-900 font-medium">
                  Telefone:
                </label>
                <input
                  type="tel"
                  placeholder="66999380002"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border border-gray-300 text-gray-900 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-gray-900 font-medium">
                  Mensagem:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="border text-gray-900 border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>


              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {isLoading ? "Loading..." : "Enviar mensagem"}
              </button>
              {error && <p className="text-red-500">{error}</p>}
            </form>
          )}
        </div>
        <Copyright />
      </div>
      <div className="fixed right-0 bottom-0 pr-7 pb-7">
        <div className="flex flex-col gap-7">
          <a href="https://api.whatsapp.com/send?l=pt&phone=5566999380002" target="_blank" rel="noopener noreferrer"
            className="cursor-pointer hover:shadow-white hover:shadow-xl  hover:transition-shadow delay-100"
          >
            <Image width={50} height={50} src="/WhatsApp.png" alt="WhatsApp" />
          </a>
          <a href="https://www.instagram.com/bibimob_sc/" target="_blank" rel="noopener noreferrer"
            className="cursor-pointer hover:shadow-white hover:shadow-xl hover:transition-shadow delay-100 "
          >
            <Image width={50} height={50} src="/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/bibimobbrasil" target="_blank" rel="noopener noreferrer"
            className="cursor-pointer hover:shadow-white hover:shadow-xl hover:transition-shadow delay-100 "
          >
            <Image width={50} height={50} src="/Facebook.png" alt="Facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

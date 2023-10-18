'use client'

import React, { useState } from "react";

import Image from "next/image";
import { NextPage } from "next";
import { isDarkModeAtom } from "@/atoms/themeModeAtom";
import { useAtom } from "jotai";
import { useRouter } from "next/router";

const EditProfilePage: NextPage = () => {
  const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);
  const [formData, setFormData] = useState({
    nome: "Seu Nome",
    endereco: "Seu Endereço",
    cpf: "Seu CPF",
    senha: "Sua Senha",
    email: "seuemail@example.com",
    cidade: "Sua Cidade",
    // Adicione outros campos de perfil aqui
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Implemente a lógica para salvar os dados do perfil
    console.log("Dados do perfil salvos:", formData);
    // Redirecione para a página de perfil ou outra página
    // router.push('/perfil');
  };

  //Images for this page
  const escrivania = 'https://jquckswgdshzommpnhpb.supabase.co/storage/v1/object/public/BackgroundsPages/escrivania02.jpg'

  return (
    <section className="flex flex-col">
      <Image src={escrivania} alt="Escrivania" width={1980} height={200} className="fixed overflow-hidden z-0" />
      <div className="w-screen h-screen fixed">
        <div className=" min-h-screen flex items-center justify-center">
          <div className={`w-full max-w-md p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-slate-100' : 'bg-gray-800 '}`}>
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? '' : 'text-white'}`}>Editar Perfil</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="nome">
                  Nome:
                </label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="endereco">
                  Endereço:
                </label>
                <input
                  type="text"
                  name="endereco"
                  id="endereco"
                  value={formData.endereco}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="cpf">
                  CPF:
                </label>
                <input
                  type="text"
                  name="cpf"
                  id="cpf"
                  value={formData.cpf}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="senha">
                  Senha:
                </label>
                <input
                  type="password"
                  name="senha"
                  id="senha"
                  value={formData.senha}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="cidade">
                  Cidade:
                </label>
                <input
                  type="text"
                  name="cidade"
                  id="cidade"
                  value={formData.cidade}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              {/* Adicione outros campos de perfil aqui */}
              <button
                type="button"
                onClick={handleSave}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
              >
                Salvar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProfilePage;

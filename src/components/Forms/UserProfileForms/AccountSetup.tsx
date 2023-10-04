import { Form, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

type User = {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: {
    provider: string;
  };
  user_metadata: {
    avatar_url: string;
    full_name: string;
    picture: string;
  };
};

type AccountSetupProps = {
  userData: User;
};

type FormData = {
  fullName: string;
  email: string;
  id: string;
  aud: string;
  role: string;
  email_confirmed_at: string;
  phone: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: {
    provider: string;
  };
  user_metadata: {
    avatar_url: string;
    full_name: string;
    picture: string;
  };
};

export default function AccountSetupForm({ userData }: AccountSetupProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);

    // Aqui você pode realizar uma chamada à API para atualizar os dados no banco de dados

    setTimeout(() => {
      setIsSubmitting(false);
      alert("Dados atualizados com sucesso!");
    }, 1000);
  };

  // Preenche os campos do formulário com os valores do usuário
  useEffect(() => {
    setValue("fullName", userData.user_metadata.full_name);
    setValue("email", userData.email);
    setValue("id", userData.id);
    setValue("aud", userData.aud);
    setValue("role", userData.role);
    setValue("email_confirmed_at", userData.email_confirmed_at);
    setValue("phone", userData.phone);
    setValue("confirmed_at", userData.confirmed_at);
    setValue("last_sign_in_at", userData.last_sign_in_at);
    setValue("app_metadata.provider", userData.app_metadata.provider);
    setValue("user_metadata.avatar_url", userData.user_metadata.avatar_url);
    setValue("user_metadata.picture", userData.user_metadata.picture);
  }, [setValue, userData]);

  return (
    <form
      className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-xl font-bold mb-6">Configurações da conta</p>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="fullName"
        >
          Nome completo
        </label>
        <input
          {...register("fullName", { required: "Campo obrigatório" })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Digite seu nome completo"
        />
        {errors.fullName && (
          <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          E-mail
        </label>
        <input
          {...register("email", { required: "Campo obrigatório" })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="Digite seu e-mail"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Atualizar"}
        </button>
      </div>
    </form>
  );
}

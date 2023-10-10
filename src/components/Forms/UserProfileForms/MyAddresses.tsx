// import { Form, useForm } from "react-hook-form";
// import { useEffect, useState } from "react";

// type User = {
//   id: string;
//   aud: string;
//   role: string;
//   email: string;
//   email_confirmed_at: string;
//   phone: string;
//   confirmed_at: string;
//   last_sign_in_at: string;
//   app_metadata: {
//     provider: string;
//   };
//   user_metadata: {
//     avatar_url: string;
//     full_name: string;
//     picture: string;
//   };
// };

// type Address = {
//   street: string;
//   city: string;
//   state: string;
//   postalCode: string;
// };

// type MyAddressesProps = {
//   userData: User;
// };

// type FormData = {
//   addresses: Address[];
// };

// const myAddresses = [
//   {
//     street: "Rua 1",
//     city: "Cidade 1",
//     state: "Estado 1",
//     postalCode: "CEP 1",
//   },
//   {
//     street: "Rua 2",
//     city: "Cidade 2",
//     state: "Estado 2",
//     postalCode: "CEP 2",
//   },
//   {
//     street: "Rua 3",
//     city: "Cidade 3",
//     state: "Estado 3",
//     postalCode: "CEP 3",
//   },
//   {
//     street: "Rua 4",
//     city: "Cidade 4",
//     state: "Estado 4",
//     postalCode: "CEP 4",
//   },
//   {
//     street: "Rua 5",
//     city: "Cidade 5",
//     state: "Estado 5",
//     postalCode: "CEP 5",
//   },
// ];

// export default function MyAddressesForm({ userData }: MyAddressesProps) {
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//   } = useForm<FormData>();

//   const onSubmit = (data: FormData) => {
//     setIsSubmitting(true);

//     // Aqui você pode realizar uma chamada à API para atualizar os dados no banco de dados

//     setTimeout(() => {
//       setIsSubmitting(false);
//       alert("Dados atualizados com sucesso!");
//     }, 1000);
//   };

//   // Preenche os campos do formulário com os valores do usuário
//   useEffect(() => {
//     setValue("addresses", myAddresses);
//   }, [setValue, userData]);

//   return (
//     <form
//       className="shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
//       onSubmit={handleSubmit(onSubmit)}
//     >
//       <p className="text-xl font-bold mb-6">Configurações de endereço</p>
//       {myAddresses.map((address, index) => (
//         <div key={index} className="grid grid-cols-3">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor={`street${index}`}
//           >
//             Rua
//           </label>
//           <input
//             {...register(`addresses`, {
//               required: "Campo obrigatório",
//             })}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             placeholder="Digite o nome da rua"
//           />

//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor={`city${index}`}
//           >
//             Cidade
//           </label>
//           <input
//             {...register(`addresses`, {
//               required: "Campo obrigatório",
//             })}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             placeholder="Digite o nome da cidade"
//           />

//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor={`state${index}`}
//           >
//             Estado
//           </label>
//           <input
//             {...register(`addresses`, {
//               required: "Campo obrigatório",
//             })}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             placeholder="Digite o nome do estado"
//           />

//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor={`postalCode${index}`}
//           >
//             CEP
//           </label>
//           <input
//             {...register(`addresses`, {
//               required: "Campo obrigatório",
//             })}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             placeholder="Digite o CEP"
//           />
//         </div>
//       ))}
//       <div className="flex items-center justify-between">
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           type="submit"
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? "Enviando..." : "Atualizar"}
//         </button>
//       </div>
//     </form>
//   );
// }

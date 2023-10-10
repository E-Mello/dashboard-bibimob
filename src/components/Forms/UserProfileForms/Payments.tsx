// // import { Form, useForm } from "react-hook-form";
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

// type Card = {
//   cardNumber: string;
//   expirationDate: string;
//   cvv: string;
// };

// type PaymentsProps = {
//   userData: User;
// };

// type FormData = {
//   cards: Card[];
// };

// export default function PaymentsForm({ userData }: PaymentsProps) {
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // const {
//   //   register,
//   //   handleSubmit,
//   //   formState: { errors },
//   //   setValue,
//   // } = useForm<FormData>();

//   const onSubmit = (data: FormData) => {
//     setIsSubmitting(true);

//     // Aqui você pode realizar uma chamada à API para atualizar os dados no banco de dados

//     setTimeout(() => {
//       setIsSubmitting(false);
//       alert("Dados atualizados com sucesso!");
//     }, 1000);
//   };

//   const myPayments = [
//     {
//       cardNumber: "1234 5678 9012 3456",
//       expirationDate: "12/2022",
//       cvv: "123",
//     },
//     {
//       cardNumber: "1234 5678 9012 3456",
//       expirationDate: "12/2022",
//       cvv: "123",
//     },
//   ];

//   // Preenche os campos do formulário com os valores do usuário
//   useEffect(() => {
//     setValue("cards", myPayments);
//   }, [setValue, userData]);

//   return (
//     <form
//       className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
//       onSubmit={handleSubmit(onSubmit)}
//     >
//       <p className="text-xl font-bold mb-6">Configurações de pagamento</p>
//       {myPayments.map((card, index) => (
//         <div key={index} className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor={`cardNumber${index}`}
//           >
//             Número do cartão
//           </label>
//           <input
//             {...register(`cards`, {
//               required: "Campo obrigatório",
//             })}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             placeholder="Digite o número do cartão"
//           />

//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor={`expirationDate${index}`}
//           >
//             Data de expiração
//           </label>
//           <input
//             {...register(`cards`, {
//               required: "Campo obrigatório",
//             })}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             placeholder="Digite a data de expiração"
//           />

//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor={`cvv${index}`}
//           >
//             CVV
//           </label>
//           <input
//             {...register(`cards`, {
//               required: "Campo obrigatório",
//             })}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             placeholder="Digite o CVV"
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

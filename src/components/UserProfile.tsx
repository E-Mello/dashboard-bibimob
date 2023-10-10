// "user client";

// import AccountSetupForm from "./Forms/UserProfileForms/AccountSetup";
// import Image from "next/image";
// import MyAddressesForm from "./Forms/UserProfileForms/MyAddresses";
// import PaymentsForm from "@/components/Forms/UserProfileForms/Payments";
// import PersonalSettingsForm from "./Forms/UserProfileForms/PersonalSettings";
// import { on } from "events";
// import { useState } from "react";

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

// type UserProfileProps = {
//   userData: User;
//   onClose: () => void;
// };

// export default function UserProfile({ userData, onClose }: UserProfileProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState<string | null>(
//     "configuracoesPessoais"
//   );

//   return (
//     <div className="w-full h-full fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
//       <div className="bg-zinc-800 rounded-lg p-2 relative w-[70vw] h-[80vh]  flex flex-col">
//         <button
//           onClick={() => {
//             onClose();
//             setSelectedOption("configuracoesPessoais");
//           }}
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>
//         <div className="flex w-full gap-1 h-full">
//           <div className="flex flex-col w-1/3 border">
//             <div className="flex flex-col w-full">
//               <div className="flex text-center items-center gap-16 justify-center">
//                 <Image
//                   src={userData?.user_metadata.picture || ""}
//                   alt="mdo"
//                   width="80"
//                   height="80"
//                   className="rounded-lg"
//                 />
//                 <label className="text-gray-200">
//                   {userData?.user_metadata.full_name}
//                 </label>
//               </div>
//               <hr />
//               <div className="flex flex-col gap-3 justify-center items-center h-full pt-5">
//                 <button
//                   onClick={() => {
//                     setSelectedOption("configuracoesPessoais");
//                     setIsOpen(false);
//                   }}
//                   className="text-gray-200 hover:bg-[#260d2c] w-full rounded-md"
//                 >
//                   Configurações pessoais
//                 </button>

//                 <button
//                   onClick={() => {
//                     setSelectedOption("pagamentos");
//                     setIsOpen(false);
//                   }}
//                   className="text-gray-200 hover:bg-[#260d2c] w-full rounded-md"
//                 >
//                   Pagamentos
//                 </button>

//                 <button
//                   onClick={() => {
//                     setSelectedOption("meusEnderecos");
//                     setIsOpen(false);
//                   }}
//                   className="text-gray-200 hover:bg-[#260d2c] w-full rounded-md"
//                 >
//                   Meus endereços
//                 </button>

//                 <button
//                   onClick={() => {
//                     setSelectedOption("configuracaoConta");
//                     setIsOpen(false);
//                   }}
//                   className="text-gray-200 hover:bg-[#260d2c] w-full rounded-md"
//                 >
//                   Configuração da conta
//                 </button>
//               </div>
//             </div>
//           </div>
//           {selectedOption && (
//             <div className="flex w-2/3 flex-col border border-red-500 bg-[#260d2c]">
//               {selectedOption === "configuracoesPessoais" && (
//                 // Conteúdo das configurações pessoais
//                 <div className="flex gap-3 justify-center items-center h-full pt-5">
//                   <PersonalSettingsForm userData={userData} />
//                 </div>
//               )}
//               {selectedOption === "pagamentos" && (
//                 // Conteúdo dos pagamentos
//                 <div className="flex flex-col gap-3 justify-center items-center h-full pt-5">
//                   <PaymentsForm userData={userData} />
//                 </div>
//               )}
//               {selectedOption === "meusEnderecos" && (
//                 // Conteúdo dos endereços
//                 <div className="flex flex-col gap-3 justify-center items-center h-full pt-5">
//                   <MyAddressesForm userData={userData} />
//                 </div>
//               )}
//               {selectedOption === "configuracaoConta" && (
//                 // Conteúdo da configuração da conta
//                 <div className="flex flex-col gap-3 justify-center items-center h-full pt-5">
//                   <AccountSetupForm userData={userData} />
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

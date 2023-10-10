// "use client";

// import { useEffect, useRef, useState } from "react";

// import Image from "next/image";
// import Link from "next/link";
// import Tabs from "@/components/tabs/Tabs";
// import TabsContent from "./tabs/TabsContent";
// import TabsLabel from "./tabs/TabsLabel";
// import TabsList from "./tabs/TabsList";
// import UserProfile from "./UserProfile";
// import { supabase } from "@/lib/supabase";

// type User = {
//   id: string;
//   aud: string;
//   role: string;
//   email: string;
//   phone: string;
//   user_metadata: {
//     avatar_url: string;
//     full_name: string;
//     picture: string;
//   };
// };
// type Session = {};

// const ProfileDropdown = () => {
//   const [userData, setUserData] = useState<User>();
//   const [isOpen, setIsOpen] = useState(false);
//   const [session, setSession] = useState<Session | null>(null);
//   const [selectedUser, setSelectedUser] = useState<User | null>(null);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const [selectedOption, setSelectedOption] = useState<string | null>(
//     "configuracoesPessoais"
//   );

//   // useEffect do usuário
//   useEffect(() => {
//     supabase.auth.getUser().then(({ data: { user } }) => {
//       setUserData(user as unknown as User);
//     });
//   }, []);

//   // useEffect da sessão
//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session);
//     });

//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//     });

//     return () => subscription.unsubscribe();
//   }, []);

//   const handleSignOut = async () => {
//     const { error } = await supabase.auth.signOut();
//   };

//   const openUserEdit = (user: User) => {
//     document.body.classList.add("overflow-hidden"); // Tentativa de parar com o bug de scroll
//     setSelectedUser(user);
//   };

//   const closeUserEdit = () => {
//     document.body.classList.remove("overflow-hidden"); // Tentativa de parar com o bug de scroll
//     setSelectedUser(null);
//   };

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleClickOutside = (event: { target: any }) => {
//     if (
//       dropdownRef.current &&
//       !dropdownRef.current.contains(event.target as Node)
//     ) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("click", handleClickOutside);

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative text-end flex rounded-lg " ref={dropdownRef}>
//       <button
//         onClick={toggleDropdown}
//         className="rounded-lg transform transition-all delay-100 duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
//       >
//         <Image
//           src={userData?.user_metadata.avatar_url || ""}
//           alt="mdo"
//           width="32"
//           height="32"
//           className="rounded-lg"
//         />
//       </button>
//       {isOpen && (
//         <div
//           className={`flex relative self-end transition-opacity ${isOpen ? "opacity-100" : "opacity-0"
//             }  duration-300 ease-in-out delay-75`}
//         >
//           <div
//             className={`flex flex-col text-small text-black absolute right-0 mt-2 py-2 w-36 bg-[#685baa] rounded shadow-lg p-2 decoration gap-1 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
//               }`}
//           >
//             <button
//               onClick={() => {
//                 openUserEdit(userData as User);
//                 setIsOpen(false);
//               }}
//               className="cursor-pointer hover:text-white"
//             >
//               Profile Settings
//             </button>

//             <hr className="dropdown-divider" />
//             <button
//               onClick={handleSignOut}
//               className="cursor-pointer hover:text-white"
//             >
//               Sign out
//             </button>
//           </div>
//         </div>
//       )}

//       {selectedUser && (
//         <section className="w-full h-full fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
//           {/* <UserProfile userData={selectedUser} onClose={closeUserEdit} /> */}
//         </section>
//       )}
//     </div>
//   );
// };

// export default ProfileDropdown;

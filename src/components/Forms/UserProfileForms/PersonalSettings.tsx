import { useState } from "react";

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

type PersonalSettingsProps = {
  userData: User;
};

export default function PersonalSettingsForm({
  userData,
}: PersonalSettingsProps) {
  return (
    <div className="">
      <p>Configurações pessoais do usuário</p>
    </div>
  );
}

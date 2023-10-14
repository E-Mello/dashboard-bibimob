'use client'

import { IAdditionalCardFormData, IPaymentFormData } from '@mercadopago/sdk-react/bricks/payment/type';
import { Payment, initMercadoPago } from '@mercadopago/sdk-react';
import React, { useState } from 'react';

initMercadoPago('TEST-69ef9280-c51f-40af-9163-4568e20f26da');

const Faturamento: React.FC = () => {
  const [valor, setValor] = useState(0);
  const [showFatura, setShowFatura] = useState(false);

  const handleGerarFatura = () => {
    // Your logic to generate the invoice
    const valorFatura = 100;
    setValor(valorFatura);

    setShowFatura(true);
  };

  const customization = {
    paymentMethods: {
      creditCard: "all",
      ticket: ["bolbradesco"],
    },
  };

  const onSubmit = async (
    param: IPaymentFormData,
    param2?: IAdditionalCardFormData | null
  ) => {
    // callback chamado ao clicar no botão de submissão dos dados
    return new Promise<void>((resolve, reject) => {
      fetch("/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(param.formData),
      })
        .then((response) => response.json())
        .then((response) => {
          // receber o resultado do pagamento
          resolve();
        })
        .catch((error) => {
          // lidar com a resposta de erro ao tentar criar o pagamento
          reject();
        });
    });
  };

  return (
    <div className='w-full '>
      <h1>Faturamento</h1>
      <button onClick={handleGerarFatura}>Gerar Fatura</button>
      {showFatura && (
        <Payment
          initialization={{ amount: 100 }}
          onSubmit={onSubmit}
          onError={(error) => console.log(error)}
          customization={customization}
        />
      )}
    </div>
  );
};

export default Faturamento;

"use client"

import MercadoPago, { Payment } from 'mercadopago';
import React, { useEffect, useState } from 'react';
import { getPaymentMethods, initMercadoPago } from '@mercadopago/sdk-react';
const client = new MercadoPago({ accessToken: 'TEST-5149555026273123-101407-b3ba1be6a61a6580a9581ef44ac35417-425908276', options: { timeout: 5000, idempotencyKey: 'abc' } });
const payment = new Payment(client);

const body = {
  transaction_amount: 12.34,
  description: '<DESCRIPTION>',
  payment_method_id: '<PAYMENT_METHOD_ID>',
  payer: {
    email: '<EMAIL>'
  },
};

const Faturamento: React.FC = () => {
  const [valor, setValor] = useState(0);
  const [showFatura, setShowFatura] = useState(false);

  const handleGerarFatura = () => {
    // Your logic to generate the invoice
    const valorFatura = 100;
    setValor(valorFatura);

    setShowFatura(true);
  };


  const client = initMercadoPago('TEST-6a3b0b9e-1b1e-4b0e-8b0a-1b0b0b0b0b0b')


  const initialization = {
    amount: 100,
    preferenceId: "<PREFERENCE_ID>",
  };
  const customization = {
    paymentMethods: {
      ticket: "all",
      bankTransfer: "all",
      creditCard: "all",
      debitCard: "all",
      mercadoPago: "all",
    },
  };
  const onSubmit = async (
    { selectedPaymentMethod, formData }: { selectedPaymentMethod: string, formData: { [key: string]: string } }
  ) => {
    // callback chamado ao clicar no botão de submissão dos dados
    return new Promise<void>((resolve, reject) => {
      fetch("/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
  const onError = async (error: any) => {
    // callback chamado para todos os casos de erro do Brick
    console.log(error);
  };

  const [paymentResult, setPaymentResult] = useState<any>(null);

  useEffect(() => {
    payment.create({ body })
      .then((result) => setPaymentResult(result))
      .catch(onError);
  }, []);

  return (
    <div>
      <h1>Faturamento</h1>
      {paymentResult && <p>{JSON.stringify(paymentResult)}</p>}
    </div>
  );
};

export default Faturamento;

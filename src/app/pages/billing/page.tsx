'use client'

import { IAdditionalCardFormData, IPaymentFormData } from '@mercadopago/sdk-react/bricks/payment/type';
import { Payment, initMercadoPago } from '@mercadopago/sdk-react';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { isDarkModeAtom } from '@/atoms/themeModeAtom';
import { useAtom } from 'jotai';

initMercadoPago('TEST-69ef9280-c51f-40af-9163-4568e20f26da');

const Faturamento: React.FC = () => {
  const [valor, setValor] = useState(0);
  const [showFatura, setShowFatura] = useState(false);
  const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);
  const [proximaMensalidade, setProximaMensalidade] = useState('');
  const [diasFaltando, setDiasFaltando] = useState(0);

  // Função para calcular os dias entre duas datas
  const calcularDiasEntreDatas = (data1: Date, data2: Date) => {
    const umDiaEmMilissegundos = 24 * 60 * 60 * 1000;
    return Math.floor((data2.getTime() - data1.getTime()) / umDiaEmMilissegundos);
  };

  useEffect(() => {
    // Simule a data de vencimento (aqui estou usando a data atual + 30 dias como exemplo)
    const dataVencimento = new Date();
    dataVencimento.setDate(dataVencimento.getDate() + 30);

    // Calcule a quantidade de dias faltando para o vencimento
    const hoje = new Date();
    const diasFaltando = calcularDiasEntreDatas(hoje, dataVencimento);

    setProximaMensalidade(dataVencimento.toLocaleDateString());
    setDiasFaltando(diasFaltando);
  }, []);

  const handleGerarFatura = () => {
    // Your logic to generate the invoice
    const valorFatura = 100;
    setValor(valorFatura);
    setShowFatura(true);
  };

  const customization = {
    paymentMethods: {
      creditCard: 'all',
      ticket: ['bolbradesco'],
    },
    style: {
      backgroundColor: '#000000',
    },
  };

  //Images for this page
  const business = 'https://jquckswgdshzommpnhpb.supabase.co/storage/v1/object/public/BackgroundsPages/business02.jpg'
  const money = 'https://jquckswgdshzommpnhpb.supabase.co/storage/v1/object/public/BackgroundsPages/money02.jpg'

  const onSubmit = async (
    param: IPaymentFormData,
    param2?: IAdditionalCardFormData | null
  ) => {
    // Implemente a lógica para processar o pagamento
  };

  return (
    <section className={`w-screen h-screen flex bg-${isDarkMode ? 'black' : 'white'} text-${isDarkMode ? 'white' : 'black'} font-sans`}>
      <Image src={isDarkMode ? business : money} alt="Bibi Mob Brasil" width={1980} height={200} className="fixed overflow-hidden z-0" />
      <div className="self-center flex flex-col w-screen justify-center items-center text-center content-center z-10">
        <h1 className="text-3xl font-semibold mb-6">Faturamento</h1>
        <button onClick={handleGerarFatura} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Gerar Fatura
        </button>
        <div className="w-[30vw] border-2 mt-8 p-4 rounded-lg bg-gray-100">
          {showFatura ? (
            <Payment
              initialization={{ amount: 100 }}
              onSubmit={onSubmit}
              onError={(error) => console.log(error)}
              customization={customization}
            />
          ) : (
            <div>
              <p className={`text-lg font-semibold text-black`}>Próxima mensalidade em: {proximaMensalidade}</p>
              {diasFaltando <= 5 && (
                <button onClick={handleGerarFatura} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  Pagar mensalidade do mês {proximaMensalidade}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Faturamento;
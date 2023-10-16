'use client'

import { Bar, Line } from "react-chartjs-2";
import React, { useEffect, useState } from "react";

import { Chart } from 'chart.js/auto';
import Image from "next/image";

export default function ReportsPage() {
  const [gastos, setGastos] = useState([
    {
      mes: "Janeiro",
      valor: 1000,
    },
    {
      mes: "Fevereiro",
      valor: 2000,
    },
    {
      mes: "Março",
      valor: 3000,
    },
    {
      mes: "Abril",
      valor: 4000,
    },
    {
      mes: "Maio",
      valor: 5000,
    },
    {
      mes: "Junho",
      valor: 6000,
    },
    {
      mes: "Julho",
      valor: 7000,
    },
    {
      mes: "Agosto",
      valor: 8000,
    },
    {
      mes: "Setembro",
      valor: 7000,
    },
    {
      mes: "Outubro",
      valor: 6000,
    },
    {
      mes: "Novembro",
      valor: 5000,
    },
    {
      mes: "Dezembro",
      valor: 4000,
    },

  ]);

  const [gastosAno, setGastosAno] = useState([
    {
      ano: 2023,
      valor: 10000,
    },
    {
      ano: 2022,
      valor: 20000,
    },
    {
      ano: 2023,
      valor: 30000,
    },
    {
      ano: 2024,
      valor: 40000,
    },
    {
      ano: 2025,
      valor: 3000,
    },
    {
      ano: 2026,
      valor: 60000,
    },
    {
      ano: 2027,
      valor: 50000,
    },
    {
      ano: 2028,
      valor: 9000,
    },
    {
      ano: 2029,
      valor: 30000,
    },
  ]);

  useEffect(() => {
    // Criação do gráfico de gastos por mês
    const gastosPorMesData = {
      labels: gastos.map((item) => item.mes),
      datasets: [
        {
          label: "Gastos por Mês",
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(75,192,192,0.4)",
          hoverBorderColor: "rgba(75,192,192,1)",
          data: gastos.map((item) => item.valor),
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: "Mês",
          },
        },
        y: {
          title: {
            display: true,
            text: "Valor",
          },
        },
      },
    };

    const gastosPorMesChart = new Chart("gastosPorMes", {
      type: "bar",
      data: gastosPorMesData,
      options: chartOptions,
    });

    // Criação do gráfico de gastos por ano
    const gastosPorAnoData = {
      labels: gastosAno.map((item) => item.ano),
      datasets: [
        {
          label: "Gastos por Ano",
          fill: false,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          data: gastosAno.map((item) => item.valor),
        },
      ],
    };

    const gastosPorAnoChart = new Chart("gastosPorAno", {
      type: "line",
      data: gastosPorAnoData,
      options: chartOptions,
    });

    // Certifique-se de destruir os gráficos ao desmontar o componente
    return () => {
      gastosPorMesChart.destroy();
      gastosPorAnoChart.destroy();
    };
  }, [gastos, gastosAno]);

  return (
    <section className="flex flex-col">
      <Image src="/reports.jpg" alt="Relatórios" width={1980} height={200} className="fixed overflow-hidden z-0" />
      <div className="fixed w-screen items-center h-screen " style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="flex flex-col gap-5">
          <div className="bg-slate-100 w-[40vw]" style={{ flex: 1, padding: "20px" }}>
            <h2 style={{ textAlign: "center" }}>Gastos por Mês</h2>
            <canvas id="gastosPorMes" />
          </div>
          <div className="bg-red-200 w-[40vw]" style={{ flex: 1, padding: "20px" }}>
            <h2 style={{ textAlign: "center" }}>Gastos por Ano</h2>
            <canvas id="gastosPorAno" />
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import { Navbar } from './navbar/navbar.jsx';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './stats.css';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658']; // cores para cada status

export function Stats() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const loadDogs = () => {
      const storedDogs = JSON.parse(localStorage.getItem('dogs')) || [];
      setDogs(storedDogs);
    };

    loadDogs();

    const handleUpdate = () => loadDogs();
    window.addEventListener('storageUpdate', handleUpdate);

    return () => window.removeEventListener('storageUpdate', handleUpdate);
  }, []);

  const counts = {
    veterinario: dogs.filter((d) => d.local === "veterinario").length,
    petshop: dogs.filter((d) => d.local === "petshop").length,
    adotado: dogs.filter((d) => d.local === "adotado").length,
  };

  const chartData = [
    { name: 'Veterinário', value: counts.veterinario },
    { name: 'Pet Shop', value: counts.petshop },
    { name: 'Adotado', value: counts.adotado },
  ];

  return (
    <>
      <Navbar />
      <div className="stats">
        <div className="stats_div" style={{ maxWidth: "320px" }}>
          <div className="stats_user">
            <h2>🐶 Lista de Cães Cadastrados</h2>
            <ul className="dog-list-stats">
              {dogs.map((dog, i) => (
                <li key={i}>
                  <strong>{dog.nome}</strong> - {dog.idade} anos
                  <span className={`status ${dog.local}`}>{dog.local}</span>
                </li>
              ))}
            </ul>

            <h2>📊 Resumo dos Cães</h2>
            <p>🩺 Veterinário: {counts.veterinario}</p>
            <p>🏪 Pet Shop: {counts.petshop}</p>
            <p>🏠 Adotados: {counts.adotado}</p>

            {/* Gráfico aparece apenas se houver dados */}
            {chartData.reduce((acc, cur) => acc + cur.value, 0) > 0 && (
              <div style={{ marginTop: "20px" }}>
                <PieChart width={300} height={250}>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

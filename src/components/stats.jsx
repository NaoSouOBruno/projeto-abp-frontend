import React, { useEffect, useState } from 'react';
import { Navbar } from './navbar/navbar.jsx';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './stats.css';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

// Função para converter idade (ex: "2 anos", "3 meses") para número em anos (float)
function idadeEmAnos(idadeStr) {
  if (!idadeStr) return 0;
  const idade = idadeStr.toLowerCase();
  if (idade.includes('ano')) {
    const num = parseFloat(idade);
    return isNaN(num) ? 0 : num;
  }
  if (idade.includes('mes')) {
    const num = parseFloat(idade);
    return isNaN(num) ? 0 : num / 12;
  }
  return 0;
}

// Calcula média de idade para um status
function mediaIdadePorStatus(caes, status) {
  const caesDoStatus = caes.filter(cao => cao.status === status);
  if (caesDoStatus.length === 0) return 0;
  const soma = caesDoStatus.reduce((acc, cao) => acc + idadeEmAnos(cao.idade), 0);
  return (soma / caesDoStatus.length).toFixed(2);
}

export function Stats() {
  const [caes, setCaes] = useState([]);

  useEffect(() => {
    const loadCaes = () => {
      const storedCaes = JSON.parse(localStorage.getItem('caes')) || [];
      setCaes(storedCaes);
    };

    loadCaes();

    window.addEventListener('caesAtualizados', loadCaes);
    return () => {
      window.removeEventListener('caesAtualizados', loadCaes);
    };
  }, []);

  const counts = {
    'No Veterinário': caes.filter(c => c.status === 'No Veterinário').length,
    'No Petshop': caes.filter(c => c.status === 'No Petshop').length,
    'No Abrigo': caes.filter(c => c.status === 'No Abrigo').length,
    Adotado: caes.filter(c => c.status === 'Adotado').length,
  };

  const chartData = [
    { name: 'Veterinário', value: counts['No Veterinário'] },
    { name: 'Pet Shop', value: counts['No Petshop'] },
    { name: 'Abrigo', value: counts['No Abrigo'] },
    { name: 'Adotados', value: counts['Adotado'] },
  ];

  return (
    <>
      <Navbar />
      <div className="stats">
        <div className="stats_div" style={{ maxWidth: '320px' }}>
          <div className="stats_user">
            <h2>🐶 Lista de Cães Cadastrados</h2>
            <ul className="dog-list-stats">
              {caes.map(cao => (
                <li key={cao.id}>
                  <strong>{cao.nome}</strong> — {cao.idade}
                  <span className={`status ${cao.status.replace(/\s/g, '').toLowerCase()}`}>
                    {cao.status}
                  </span>
                </li>
              ))}
            </ul>

            <h2>📊 Resumo dos Cães</h2>
            <p>
              🩺 Veterinário: {counts['No Veterinário']} — média: {mediaIdadePorStatus(caes, 'No Veterinário')} anos
            </p>
            <p>
              🏪 Pet Shop: {counts['No Petshop']} — média: {mediaIdadePorStatus(caes, 'No Petshop')} anos
            </p>
            <p>
              🏠 Abrigo: {counts['No Abrigo']} — média: {mediaIdadePorStatus(caes, 'No Abrigo')} anos
            </p>
            <p>
              🎉 Adotados: {counts['Adotado']} — média: {mediaIdadePorStatus(caes, 'Adotado')} anos
            </p>

            {chartData.reduce((acc, cur) => acc + cur.value, 0) > 0 && (
              <div style={{ marginTop: '20px' }}>
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

import React, { useEffect, useState } from 'react';
import { Navbar } from './navbar/navbar.jsx';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './stats.css';

const COLORS = ['#ffb347', '#4fc3f7', '#56e976', '#e95b56'];

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
    'Adotado': caes.filter(c => c.status === 'Adotado').length,
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
            <div className='divTabelaStats'>
              <div className='divCabecalho'>
                <h2 className='tituloTabela'>Relatório Geral - Canil</h2>
              </div>
              <div className='resumoBody'>
                <div className='resumoGrafico'>
                  {chartData.reduce((acc, cur) => acc + cur.value, 0) > 0 && (
                    <div style={{ marginTop: '20px' }}>
                      <PieChart width={300} height={300}>
                        <Pie
                          data={chartData}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          dataKey="value"
                          label
                        >
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </div>
                  )}
                </div>
                <div className='resumoTexto'>

                  <div className='resumoTexto1'>
                    <p className='status noveterinário'>
                      No Veterinário
                    </p>
                    <p className='resumoTextoP'>
                      <strong>Total: {counts['No Veterinário']}</strong> <br/> Média de idade: {mediaIdadePorStatus(caes, 'No Veterinário')} anos
                    </p>
                    <br/>
                    <p className='status nopetshop'>
                      No Petshop
                    </p>
                    <p className='resumoTextoP'>
                      <strong>Total: {counts['No Petshop']}</strong> <br/> Média de idade: {mediaIdadePorStatus(caes, 'No Petshop')} anos
                    </p>
                  </div>

                  <div className='resumoTexto2'>
                    <p className='status noabrigo'>
                      No Abrigo
                    </p>
                    <p className='resumoTextoP'>
                      <strong>Total: {counts['No Abrigo']}</strong> <br/> Média de idade: {mediaIdadePorStatus(caes, 'No Abrigo')} anos
                    </p>
                    <br/>
                    <p className='status adotado'>
                      Adotados
                    </p>
                    <p className='resumoTextoP'>
                      <strong>Total: {counts['Adotado']}</strong> <br/> Média de idade: {mediaIdadePorStatus(caes, 'Adotado')} anos
                    </p>
                  </div>

                </div>
              </div>
            </div>
            <div className='divTabelaStats'>
              <div className='divCabecalho'>
                <h2 className='tituloTabela'>Lista de Cães Cadastrados</h2>
              </div>
              <table className="dog-list-stats">
                {caes.map(cao => (
                  <tr key={cao.id}>
                    <td><strong>{cao.nome}</strong></td>
                    <td>{cao.idade}</td>
                    <td>
                    <span className={`status ${cao.status.replace(/\s/g, '').toLowerCase()}`}>
                      {cao.status}
                    </span>
                    </td>                    
                  </tr>
                ))}
              </table>
            </div>
        </div>
    </>
  );
}

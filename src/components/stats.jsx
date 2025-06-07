import './stats.css';

const dogs = [
  { nome: "Ringo", idade: 3, local: "veterinario" },
  { nome: "Rei Henrique VIII", idade: 2, local: "adotado" },
  { nome: "Wilsinho", idade: 5, local: "petshop" },
  { nome: "Toby", idade: 4, local: "adotado" },
  { nome: "Bruno", idade: 1, local: "veterinario" },
];

export function Stats() {

  const counts = {
    veterinario: dogs.filter((d) => d.local === "veterinario").length,
    petshop: dogs.filter((d) => d.local === "petshop").length,
    adotado: dogs.filter((d) => d.local === "adotado").length,
  };

  return (
    <div className="index">
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
        </div>
      </div>
    </div>
  );
}

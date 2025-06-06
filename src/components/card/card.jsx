import './card.css'

export function Card({
  img,
  nome,
  descricao,
  status,
  onDetalhes,
  children,
}) {

  const statusClass = {
    "No Veterinário": "statusVeterinario",
    "No Petshop": "statusPetshop",
    "No Abrigo": "statusAbrigo",
    "Adotado": "statusAdotado",
  }[status] || "statusVazio";

  return (
    <div className="card">

      {img ? (
        <img
          src={img}
          className="cardImagem"
          alt="cachorro"
        />
      ) : null}

      <div className="cardBody">

        <h5 className="cardTitle">{nome}</h5>

        {descricao ? <p className="cardText">{descricao}</p> : null}

        <span className={`cardStatus ${statusClass}`} title={status}/>

        <a className="btnMaisInformacoes" onClick={onDetalhes}>
          Mais detalhes ››
        </a>

        {children}
      </div>
    </div>
  );
}

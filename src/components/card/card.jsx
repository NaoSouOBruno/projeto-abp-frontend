import './card.css'

export function Card({
  img,
  nome,
  descricao,
  children,
}) {
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

        <a href="#go" className="btnMaisInformacoes">
          Detalhes
        </a>

        {children}
      </div>
    </div>
  );
}

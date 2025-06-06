import './card.css'

export function Card({
  img,
  nome,
  descricao,
  onDetalhes,
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

        <a className="btnMaisInformacoes" onClick={onDetalhes}>
          Mais detalhes ››
        </a>

        {children}
      </div>
    </div>
  );
}

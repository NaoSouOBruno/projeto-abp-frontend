import './card.css'

export function Card({
  img,
  nome,
  descricao,
  status,
  onDetalhes,
  onEditar,
  onExcluir,
  children,
}) {

  const statusClass = {
    "No Veterinário": "statusVeterinario",
    "No Petshop": "statusPetshop",
    "No Abrigo": "statusAbrigo",
    "Adotado": "statusVazio",
  }[status] || "statusVazio";

  return (
    <div className="card">

      {img ? (
        <img
          src={img}
          className="cardImagem"
        />
      ) :
        <img
          src="/src/assets/index/icons/imagemVazia.png"
          className="cardImagem"
        />
      }

      <img
        className='btnEditar'
        src='https://img.icons8.com/?size=100&id=59856&format=png&color=000000'
        onClick={onEditar}
      />

      <img
        className='btnExcluir'
        src='https://img.icons8.com/?size=100&id=68064&format=png&color=A42929'
        onClick={onExcluir}
      />

      <div className="cardBody">

        <h5 className="cardTitle">{nome}</h5>

        {descricao ? <p>{descricao}</p> : <p className="cardTextCinza">Sem descrição.</p>}

        <span className={`cardStatus ${statusClass}`} title={status}/>

        <a className="btnMaisInformacoes" onClick={onDetalhes}>
          Mais detalhes ››
        </a>

        {children}
      </div>
    </div>
  );
}

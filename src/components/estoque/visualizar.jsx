import { useState, useEffect } from 'react';
import './visualizar.css' 

export function Visualizar({openVisualizar,setOpenVisualizar,codigoSelect}){
    
    const img_padrao = "/src/assets/estoque/semimagem.jpg";

    const [DB_ITEM,setDB_ITEM] = useState([]);
    
    useEffect(() => {
            const dados = localStorage.getItem('DB_ITEM'); // pega os daods de local storage se tiver alguma coisa, se não continua vazia
            if (dados !== null && dados !== undefined){
                setDB_ITEM(JSON.parse(dados));
            }
        },[]);    

    const Dado = DB_ITEM.find(item => item.codigo === codigoSelect) || [];
    if (!openVisualizar) return null;

    return(

        <div className="fundo_blur">
                <div id="menu_visualizar">
                    <div id="div_imagem_visualizar">
                        <img src={Dado.imagem === ""? img_padrao : Dado.imagem} alt="imagem" />
                    </div>
                    <div id="conteudo_visualizar">
                        <div id="info_visualizar"> 
                            <h2>Descrição:</h2>
                            <p>{Dado.descricao}</p>
                            <h2>Código:</h2>
                            <p>{Dado.codigo}</p>
                            <h2>Unidade de controle:</h2>
                            <p>{Dado.unidade}</p>
                            <h2>Quantidade:</h2>
                            <p>{Dado.quantidade}</p>
                        </div>
                        <div id="botoes_visualizar">
                            <button onClick={()=>{ setOpenVisualizar(false)}}>Sair</button>
                        </div>
                    </div>
                </div>
            </div>




    )


}



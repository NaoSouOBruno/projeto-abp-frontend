import './visualizar.css' 
import { useState,useEffect } from 'react'

export function Visualizar({openVisualizar,setOpenVisualizar,codigoSelect}){

    const DB_ITEM = JSON.parse(localStorage.getItem("DB_ITEM"));
    const Dado = DB_ITEM.find(item => item.codigo === codigoSelect) || [];
    const img_padrao = "/public/logo.png"

    

    if (!openVisualizar) return null;

    return(

        <div id="fundo">
                <div id="menu">
                    <img src={Dado.imagem === ""? img_padrao : Dado.imagem} alt="imagem" />
                    <h2>Descrição:</h2>
                    <p>{Dado.descricao}</p>
                    <h2>Código:</h2>
                    <p>{Dado.codigo}</p>
                    <h2>Unidade de controle:</h2>
                    <p>{Dado.unidade}</p>
                    <h2>Quantidade:</h2>
                    <p>{Dado.quantidade}</p>
                    <div id="botoes">
                        <button onClick={()=>{ setOpenVisualizar(false)}}>Sair</button>
                    </div>
                </div>
            </div>




    )


}



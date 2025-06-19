import "./registro.css"
import { useEffect, useState } from 'react';


export function Registro ({openRegistro,setOpenRegistro,codigoSelect}){

    const DB_ITEM = JSON.parse(localStorage.getItem("DB_ITEM"));
    const [item_edit,setItem_edit] = useState([""]);
    const Dado = DB_ITEM.find(item => item.codigo === codigoSelect) || []; 

    useEffect(() => {
            setItem_edit(Dado)
        },[]) 


    if (!openRegistro) return null;


    const item_construcao = (e) => {   
            const {name,value} = e.target; 
            setItem_edit((antes) => ({
            ...antes,[name]: value}));}

    const salvar_item = () => { // modifica o item e manda para o local storage
        const item_atualizado = DB_ITEM.map((item) => item.codigo === Dado.codigo ? {...item, imagem:item_edit.imagem, descricao:item_edit.descricao, unidade: item_edit.unidade} : item); //modifica
        console.log(item_atualizado) // teste para ver se tá chegando
        localStorage.setItem("DB_ITEM",JSON.stringify(item_atualizado)); //manda
        setOpenEdit(false); //fecha
        window.location.reload(false); //autualiza janela
        }


    return(

            <div id="fundo">
                    <div id="menu">
                        <h1>Regitro de estoque</h1>
                        
                        <div id="botoes">
                            <button onClick={salvar_item}>Alterar estoque</button>
                            <button onClick={setOpenRegistro}>Cancelar</button>
                        </div>
                        
                    </div>
            </div>





        )













}
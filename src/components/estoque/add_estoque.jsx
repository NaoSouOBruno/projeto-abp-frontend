
import "./add_estoque.css"
import { useState } from "react"


export function Add({open,setOpen}){
        
    const [item_novo,setItem_novo] = useState({imagem: '',nome: '',codigo: '',unidade: '',quantidade: null});

    if (!open) return null;
        
        
    const DB_ITEM = JSON.parse(localStorage.getItem("DB_ITEM"));
        
    const item_construcao = (e) => {
        const {name,value} = e.target;
        setItem_novo((antes) => ({
        ...antes,[name]: value}));
        }



    const add_item = (e) => {
        e.preventDefault();
        const novos_itens = [...DB_ITEM,item_novo];
        localStorage.setItem("DB_ITEM",JSON.stringify(novos_itens));
        setOpen(false);
        }


        
        return (

            <div id="fundo">    
                <div id="menu">
                    <h1>Criação de item</h1>
                    <form action="">
                    <h2>Imagem</h2>
                    <input value={item_novo.imagem} onChange={item_construcao} type="file" name="imagem"  />
                    <h2>Nome</h2>
                    <input value={item_novo.nome} onChange={item_construcao} name="nome" type="text" />
                    <h2>Código</h2>
                    <input value={item_novo.codigo} onChange={item_construcao} name="codigo" type="text" />
                    <h2>Unidade</h2>
                    <input value={item_novo.unidade} onChange={item_construcao} name="unidade" type="text" />
                    <h2>Quantidade</h2>
                    <input value={item_novo.quantidade} onChange={item_construcao} name="quantidade" type="number" />
                    <button onClick={add_item}>Criar</button>
                    </form>
                             

                    <button id="buttom_cancelar" onClick={setOpen}>Cancelar</button>
                </div>
            </div>
        )
    }

 
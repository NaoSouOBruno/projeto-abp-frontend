import "./registro.css"
import { useEffect, useState } from 'react';
import Select from 'react-select'


export function Registro ({openRegistro,setOpenRegistro,codigoSelect}){

    const DB_ITEM = JSON.parse(localStorage.getItem("DB_ITEM"));
    const [item_edit,setItem_edit] = useState([""]);
    const [selectQuatidade,setSelectQuantidade] = useState(0)
    const [quantidadeEstoque,setQuantidadeEstoque] = useState(0)
    const [selecionado,setSelecionado] = useState([])
    const Dado = DB_ITEM.find(item => item.codigo === codigoSelect) || []; 
    
    useEffect(() => {
            setItem_edit(Dado)
        },[]) 

    const opcoes = DB_ITEM.map((item) => ({
        value: item.codigo,
        label: item.descricao
    }));

    if (!openRegistro) return null;

    function selecionado_estoque(opcao){
        const chave = opcao.value
        const item_selecionado = Dado.find((item) => item.codigo === chave)
        setSelecionado(item_selecionado)
    }


    function item_construcao(e){   
            const valor = e.target.value; 
            setSelecionado((antes) => ({
            ...antes,quantidade: valor}));}

    function salvar_item()  { // modifica o item e manda para o local storage
        const item_atualizado = DB_ITEM.map((item) => item.codigo === Dado.codigo ? {...item, imagem:item_edit.imagem, descricao:item_edit.descricao, unidade: item_edit.unidade} : item); //modifica
        console.log(item_atualizado) // teste para ver se tá chegando
        localStorage.setItem("DB_ITEM",JSON.stringify(item_atualizado)); //manda
        setOpenRegistro(false); //fecha
        window.location.reload(false); //autualiza janela
        }


    return(

            <div id="fundo">
                    <div id="menu">
                        <div>
                            <h1>Regitro de estoque</h1>
                        </div>
                        <div>
                            <Select onChange={(opcoes) => selecionado_estoque(opcoes)} placeholder="Selecione um item" options={opcoes} />
                        </div>
                        <div>
                            <label htmlFor="selectQuatidade"></label>
                            <h3>Quantidade atual: {selecionado?.quantidade ?? 0}</h3>
                            <input onChange={item_construcao}  type="range" id="selectQuatidade" min="-100" max="100" value={selectQuatidade} />
                        </div>
                        
                        <div id="botoes">
                            <button onClick={salvar_item}>Alterar estoque</button>
                            <button onClick={setOpenRegistro}>Cancelar</button>
                        </div>
                        
                    </div>
            </div>





        )













}
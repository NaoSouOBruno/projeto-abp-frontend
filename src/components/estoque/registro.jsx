import "./registro.css"
import { useEffect, useState } from 'react';
import Select from 'react-select'


export function Registro ({openRegistro,setOpenRegistro}){

    const DB_ITEM = JSON.parse(localStorage.getItem("DB_ITEM"));
    const [quantidadeAntiga,setQuantidadeAntiga] = useState(0);
    const [selectQuatidade,setSelectQuantidade] = useState(0);
    const [selecionado,setSelecionado] = useState([]);
    const [aviso,setAviso] = useState(false);
    
    useEffect(() => {

        if(Number(quantidadeAntiga) + Number(selectQuatidade) < 0){
            setAviso(true)
        }else{
            setAviso(false)
        }


    },[quantidadeAntiga,selectQuatidade])    

        
   
    const opcoes = DB_ITEM.map((item) => ({
        value: item.codigo,
        label: item.descricao
    }));

    

    if (!openRegistro) return null;

    function selecionado_estoque(opcao){
        const chave = opcao?.value
        const item_selecionado = DB_ITEM.find((item) => item.codigo === chave)
        setQuantidadeAntiga(item_selecionado.quantidade)
        setSelecionado(item_selecionado);
        setSelectQuantidade(0)
    }


    function item_construcao(e){
        const valor = parseInt(quantidadeAntiga) + parseInt(e.target.value)
        
        setSelectQuantidade(e.target.value);
        setSelecionado((antes) => ({
        ...antes,quantidade: valor}));    
                
    }

    function salvar_item()  { 
            if (Number(quantidadeAntiga) + Number(selectQuatidade) >= 0){
                const item_atualizado = DB_ITEM.map((item) => item.codigo === selecionado.codigo ? {...item,quantidade:selecionado.quantidade} : item);
                console.log(item_atualizado) // teste para ver se tá chegando
                localStorage.setItem("DB_ITEM",JSON.stringify(item_atualizado)); //manda
                setOpenRegistro(false); //fecha
                window.location.reload(false);} //autualiza janela
            else{
                alert("Erro: valor não atualizado")
            }
        }


    

    return(

            <div id="fundo_registro">
                    <div id="menu_registro">
                        {/* <div>
                            <h1>Regitro de estoque</h1>
                        </div> */}
                        <div id="select_item">
                           
                            <Select id="select_options" onChange={(opcoes) => selecionado_estoque(opcoes)} placeholder="Selecione um item" options={opcoes} />
                            <img src={selecionado.imagem === null ? "/logos/logo1.png": selecionado.imagem} alt="imagem" />
                        </div>
                        <div id="dados_item">
                            <h1>Registro De Estoque</h1>
                            <div id="select_quantidade">
                                <label htmlFor="selectQuatidade"></label>
                                <h3>📜Quantidade atual: {quantidadeAntiga}</h3>
                                <h3>📉Quantidade selecionada: {selectQuatidade}</h3>
                                <input value={selectQuatidade} onChange={(e) => item_construcao(e)}  type="range" id="selectQuatidade" min="-100" max="100"/>
                            </div>
                            
                            {aviso && (
                                <div id="aviso_estoque">
                                    <h3>⚠ Quantidade superior ao estoque ⚠</h3>
                                </div>
                            )}

                            <div id="botoes_registro">
                                <button onClick={salvar_item}>Registrar</button>
                                <button onClick={() => {setOpenRegistro(false),setSelectQuantidade(0),setQuantidadeAntiga(0),setAviso(false)}}>Cancelar</button>
                            </div>
                        </div>
                    </div>
            </div>





        )













}
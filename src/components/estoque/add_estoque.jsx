
import "./add_estoque.css"
import { useState,useEffect } from "react"


export function Add({open,setOpen}){
     
    const [codigonumero,setCodigonumero] = useState(0); //variavel usada para o codigo do item
    const [item_novo,setItem_novo] = useState({imagem: '',nome: '',codigo: codigonumero,unidade: '',quantidade: 0}
    );
    const DB_ITEM = JSON.parse(localStorage.getItem("DB_ITEM")) || [];
    
    function gerar_codigo(){ //gera um codigo com basse no ultimo codigo do item adicionado e soma + 1 

        if(DB_ITEM.length === 0){
            setCodigonumero(0)
        }else{
            const numero = DB_ITEM[DB_ITEM.length - 1];
            const novo_numero = parseInt(numero.codigo) + 1;
            setCodigonumero(novo_numero);
        }       
    };

    useEffect(() => { // para poder executar a função gerar codigo e setala modificala no item_novo
        gerar_codigo();
        setItem_novo((antes) => ({
            ...antes,
            codigo:codigonumero
        }));
    },[open])


    if (!open) return null;
       
        
    const item_construcao = (e) => {   //constroi o item quando o input recebe alteração  
        if (e.target.type === "file"){ // possibilita armazenar um imagem no local storage convertendo ela para ser possivel de leitura
            const name = e.target.name
            const imagem = e.target.files[0]; // acho a imagem
            const imagem_leitor = new FileReader(); // crio o leitor
            imagem_leitor.readAsDataURL(imagem); // aqui ta lendo, e vai gera um rrsultado que vai ser usando no imagem_leitor.result;
             imagem_leitor.onloadend = () => {  //espero carregar p imagem_leitor.readAsDataURL(imagem); para fazer isso 
                const valor = imagem_leitor.result; // com o resultado do imagem_leitor.readAsDataURL(imagem) ele pode já ser amarzenado no local storagem, porque se não for assim  ele não funfa
                setItem_novo((antes) => ({
                ...antes,[name]: valor
                }))
             }

        }else{
        const {name,value} = e.target; // caso não for a imagem ele armazena normalmente
        setItem_novo((antes) => ({
        ...antes,[name]: value}));}
            
        }

    

    const add_item = () => { //add o item para o local storage e fecha a o menu de criação atualizando a pagina
        const novos_itens = [...DB_ITEM,item_novo];
        localStorage.setItem("DB_ITEM",JSON.stringify(novos_itens));
        setOpen(false);
        window.location.reload(false);
        }


        
        return (

            <div id="fundo">    
                <div id="menu">
                    <h1>Criação de item</h1>
                    <form action="">
                    <h2>Imagem:</h2>
                    <input onChange={item_construcao} type="file" name="imagem"  />
                    <img src={item_novo.imagem ? item_novo.imagem : "/logos/logo1.png"} alt="" />
                    <h2>Nome:</h2>
                    <input value={item_novo.nome} onChange={item_construcao} name="nome" type="text" />
                    <h2>Código:</h2>
                    <input value={item_novo.codigo} onChange={item_construcao} name="codigo" type="text" disabled />
                    <h2>Unidade:</h2>
                    <input value={item_novo.unidade} onChange={item_construcao} name="unidade" type="text" />
                    <div id="botoes">
                        <button onClick={add_item}>Criar</button> 
                        <button onClick={setOpen}>Cancelar</button>
                    </div>
                    </form> 
                </div>
            </div>
        )
    }

 
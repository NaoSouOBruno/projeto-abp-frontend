
import "./add_estoque.css"
import { useState } from "react"


export function Add({open,setOpen}){
        
    const [item_novo,setItem_novo] = useState({imagem: '',nome: '',codigo: '',unidade: '',quantidade: ''}
    );

    if (!open) return null;
        
    
    const DB_ITEM = JSON.parse(localStorage.getItem("DB_ITEM")) || [];
        
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

        }else{const {name,value} = e.target; // caso não for a imagem ele armazena normalmente
        setItem_novo((antes) => ({
        ...antes,[name]: value}));}
            
        }

    

    const add_item = (e) => { //add o item para o local storage e fecha a o menu de criação atualizando a pagina
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
                    <input onChange={item_construcao} type="file" name="imagem"  />
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

 
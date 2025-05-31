import "./item.css"

// to vendo se faço de funcionarios ou um estoque

export function Item(
    {imagem,nome}) {

    return(
        <div id="item">
            <img src = {imagem}/>
            <div>{nome}</div>
        </div>
    );
}
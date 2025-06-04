import "./item.css"


export function Item(
    {imagem,nome}) {

    return(
        <div id="item">
            <img src = {imagem}/>
            <div>{nome}</div>
        </div>
    );
}
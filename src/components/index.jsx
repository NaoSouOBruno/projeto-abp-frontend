import './index.css'

import { Card } from './card/card.jsx'

const caes = [
    {
        img: '/src/assets/index/cachorro1.jpeg',
        nome: 'Ringo',
        descricao: 'Esse é o Ringo, ele é muito legal e adora brincar!'
    },
    {
        img: '/src/assets/index/cachorro2.jpg',
        nome: 'Rei Henrique VIII',
        descricao: 'Esse é o Rei Henrique VIII, ele é muito carinhoso e adora passear!'
    },
    {
        img: '/src/assets/index/cachorro3.png',
        nome: 'Wilsinho',
        descricao: 'Esse é o Wilsinho, ele é muito esperto e adora aprender novos truques!'
    }
];

export function index() {

    return (
        <div className='index'>
            <p>Cachorrinhos para adoção!</p>
            <div class="divCachorros">
            {caes.map((cao) => (
                <Card
                    img={cao.img}
                    nome={cao.nome}
                    descricao={cao.descricao}
                    buttonLabel="Adotar"
                />
            ))}
            </div>
        </div>
    )

}
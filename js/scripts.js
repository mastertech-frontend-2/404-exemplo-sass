const bolos = [
    {
        nome: 'Bolo de Morango',
        ingredientes: ['paçoca', 'morango', 'açúcar', 'creme'],
        preco: 'R$ 60,00'
    },
    {
        nome: 'Bolo de Capim',
        ingredientes: ['capim', 'couve', 'farinha'],
        preco: 'R$ 120,00'
    },
    {
        nome: 'Bolo Spinner',
        ingredientes: ['spinner', 'farinha', 'purpurina'],
        preco: 'R$ 220,00'
    }
];

const criarDadosBolo = (posicao) => {
    $('#exampleModalLabel').html(bolos[posicao].nome);
    let corpoModal = `<p>Preço: ${bolos[posicao].preco}</p>`;
    corpoModal += '<ul>';

    for(let ingrediente of bolos[posicao].ingredientes){
        corpoModal += `<li>${ingrediente}</li>`;
    }

    corpoModal += '</ul>';

    $('#exampleModal .modal-body').html(corpoModal);
    $('#exampleModal').modal('show');
}

$('#bolo-morango').click(() => criarDadosBolo(0));
$('#bolo-capim').click(() => criarDadosBolo(1));
$('#bolo-spinners').click(() => criarDadosBolo(2));
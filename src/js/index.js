const listaSelecaoPokemons = document.querySelectorAll('.pokemon');
console.log(listaSelecaoPokemons);

const pokemonsCard = document.querySelectorAll('.cartao-pokemon');
console.log(pokemonsCard);

function soma(numero1, numero2) {
    console.log(numero1 + numero2)
}

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => { 
        const cartaoPokemonAberto = document.querySelector('.aberto');
        cartaoPokemonAberto.classList.remove('aberto');
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idCartao = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idCartao)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAberto = document.querySelector('.ativo');
        pokemonAberto.classList.remove('ativo');
        const pokemonParaAbrir = document.getElementById(idPokemonSelecionado);     
        pokemonParaAbrir.classList.add('ativo');
    })
})
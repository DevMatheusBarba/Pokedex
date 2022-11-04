const pokemonName = document.querySelector('.pokemon__name');


const fetchPokemon = (pokemon) =>{
    let data = 
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(APIpokemon => {
        return APIpokemon.json()
    })
    .then(data => {
        console.log(data)
    })
 
}


/* const mostraPokemon = (pokemon) =>{
    pokemonName.innerHTML = data.name 
} */

fetchPokemon(1)
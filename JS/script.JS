const pokemonName = document.querySelector('.nome_pokemon');
const pokemonId = document.querySelector('.numero_pokemon');
const pokemonImagem = document.querySelector('.imagem_pokemon')

const form = document.querySelector('.form')
const pesquisa = document.querySelector('.input_pesquisa')
const botaoVoltar = document.querySelector('.btn-voltar')
const botaoProximo = document.querySelector('.btn-proximo')

let pesquisaPokemon = 1

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponse.status === 200){
        const data = await APIResponse.json();
        return data;
    }
}


const mostraPokemon = async (pokemon) => {
    pokemonName.innerHTML = "Carregando...";
    pokemonId.innerHTML = ""


    const data = await fetchPokemon(pokemon);
    
    if(data){
        pokemonImagem.style.display = "block"
        pokemonName.innerHTML = data.name;
        pokemonId.innerHTML = data.id;
        pokemonImagem.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        pesquisa.value = ""
        pesquisaPokemon = data.id
        
    }else{
        pokemonName.innerHTML = "Não localizado";
        pokemonId.innerHTML = ""
        pokemonImagem.style.display = "none"
        pesquisa.value = ""

    }

}


form.addEventListener("submit", (event) =>{
    event.preventDefault();
    mostraPokemon(pesquisa.value.toLowerCase()) 
})

botaoVoltar.addEventListener('click',  () => {
    if(pesquisaPokemon > 1){
        pesquisaPokemon -= 1
        mostraPokemon(pesquisaPokemon)
    }
})

botaoProximo.addEventListener('click',  () => {
    pesquisaPokemon +=1
    mostraPokemon(pesquisaPokemon)
})

mostraPokemon(pesquisaPokemon)

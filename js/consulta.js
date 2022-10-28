let pokemonContainer = document.querySelector(".pokemon-container");
let spinner = document.querySelector("#spinner");


function consultarPokemon(id, num){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((respuesta) => respuesta.json())
    .then((pokemon) => {
        //console.log(pokemon); 
        //console.log(data.name);
        //console.log(data.sprites.front_default);    
        createPokemon(pokemon)
        spinner.style.display = "none";  
    });
}

function consultarPokemones(){
    spinner.style.display = "block";
    let primerId = Math.round(Math.random()*900);
    let segundoId = Math.round(Math.random()*90);
    let tercerId = Math.round(Math.random()*900);
    let cuartoId = Math.round(Math.random()*900);
    let quintoId = Math.round(Math.random()*900);
    let sextoId = Math.round(Math.random()*900);

    consultarPokemon(primerId, 1);
    consultarPokemon(segundoId, 2);
    consultarPokemon(tercerId, 3);
    consultarPokemon(cuartoId, 4);
    consultarPokemon(quintoId, 5);
    consultarPokemon(sextoId, 6);
}

function createPokemon(pokemon, num) {
    let flipCard = document.createElement("div");
    flipCard.classList.add("flip-card");

    let cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    flipCard.appendChild(cardContainer);

//Tarjeta delantera
    let card = document.createElement("div");
    card.classList.add("pokemon-block");

    let spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");

    let sprite = document.createElement("img");
    //Condicional al no encontrar las sprites, en su lugar se utilizan la oficiales    
    if(pokemon.sprites.front_default != null){
        sprite.src = pokemon.sprites.front_default;
    } else {
        sprite.src = pokemon.sprites.other.official-artwork.front_default;
    }
    //
    sprite.classList.add("imagen");
    spriteContainer.appendChild(sprite);

    let name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(name);
//

//Tarjeta trasera
    let cardBack = document.createElement("div");
    cardBack.classList.add("pokemon-block-back");
 
    let height = document.createElement("p");
    height.classList.add("height");
    height.textContent = "La altura del pokemon es: " + pokemon.height;

    let weight = document.createElement("p");
    weight.classList.add("weight");
    weight.textContent = "El peso del pokemon es: " + pokemon.weight;

    cardBack.appendChild(height);
    cardBack.appendChild(weight);
//
    
    cardContainer.appendChild(card);
    cardContainer.appendChild(cardBack);
    pokemonContainer.appendChild(flipCard);
}

consultarPokemones();

//Codigo para reiniciar la pokedex
let botonReiniciar = document.getElementById("boton-reiniciar");
botonReiniciar.addEventListener("click", reiniciarPokedex);

function reiniciarPokedex(){
    location.reload();
}




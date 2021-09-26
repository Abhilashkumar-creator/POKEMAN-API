const poke_container = document.getElementById('poke_container');
const pokemons_number = 50;

const fetchPokemons = async () => {
    try {
        for (let i = 1; i <= pokemons_number; i++) {
            await getPokemon(i);
        }  
    } catch (error) {
        alert("NO POKEMON")
        document.write("POKEMON'S RAN AWAY");
    }
	
};

const getPokemon = async id => {
   const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
}

const createPokemonCard = (pokemon) => {
  const pok = document.createElement('div');
  pok.classList.add('pokemon');
  const { id, name, sprites, types, weight} = pokemon;
   const type = types[0].type.name;
  const pokeInnerHTML = ` <div class="img-container">
    <img src="${sprites.front_default}" alt="${name}" />
  </div>
  <div class="info">
    <span1 class="number">ID: ${id}</span1><br><br>
    <div class="name"><span>Name: </span> ${name}</div><br>
    <div class="type"><span>Type: </span>${type}</div><br>
    <div class="type"><span>Weight: </span>${weight}</div><br>
    </div>
  <div class="moves"><span>Moves: </span>
    ${pokemon.moves.map((move) => {
        return `${move.move.name}`;
      }).join(", ")}
    </div><br>
    <div class="abilities"> 
    <span>Abilities:</span>${pokemon.abilities.map((ability) => {
    return `${ability.ability.name}`;
  })  .join(", ")}
 </div> 
  `;
  pok.innerHTML = pokeInnerHTML;
	poke_container.appendChild(pok);
}

fetchPokemons();


  


///////----------------------- GEN 1 POKEDEX
fetch('https://pokedex-dtaf.onrender.com/pokedex')
    .then(response => response.json())
    .then((pokemon) => {
        const pokeul = document.getElementById('pokeul');
        console.log(pokemon)
        renderAllPokemon(pokemon)
        const ShowPokedexButton = document.getElementById('ShowPokedexButton')
        ShowPokedexButton.addEventListener('click', ()=> {
            pokeul.innerHTML = " "
            renderAllPokemon(pokemon)
        })
    });
///////----------------------- RANDOM TEAM GENERATOR
fetch('https://pokedex-dtaf.onrender.com/random/pokemon/team')
    .then(response => response.json())
    .then((pokemon) => {
        const pokeul = document.getElementById('pokeul');
        const ShowRandomTeamButton = document.getElementById('ShowRandomTeamButton')
        ShowRandomTeamButton.addEventListener('click', ()=> {
            pokeul.innerHTML = " "
            renderAllPokemon(pokemon)
        })
    });

///////----------------------- BUG TYPES FILTER
fetch('https://pokedex-dtaf.onrender.com/pokedex/type/bug')
    .then(response => response.json())
    .then((pokemon) => {
        const pokeul = document.getElementById('pokeul');
        const bug = document.getElementById('bug')
        bug.addEventListener('click', ()=> {
            pokeul.innerHTML = " "
            renderAllPokemon(pokemon)
        })
    });

///////----------------------- DRAGON TYPES FILTER
fetch('https://pokedex-dtaf.onrender.com/pokedex/type/dragon')
    .then(response => response.json())
    .then((pokemon) => {
        const pokeul = document.getElementById('pokeul');
        const dragon = document.getElementById('dragon')
        dragon.addEventListener('click', ()=> {
            pokeul.innerHTML = " "
            renderAllPokemon(pokemon)
        })
    });

///////----------------------- ELECTRIC TYPES FILTER
fetch('https://pokedex-dtaf.onrender.com/pokedex/type/electric')
    .then(response => response.json())
    .then((pokemon) => {
        const pokeul = document.getElementById('pokeul');
        const electric = document.getElementById('electric')
        electric.addEventListener('click', ()=> {
            pokeul.innerHTML = " "
            renderAllPokemon(pokemon)
        })
    });

///////----------------------- FIGHTING TYPES FILTER
fetch('https://pokedex-dtaf.onrender.com/pokedex/type/fighting')
    .then(response => response.json())
    .then((pokemon) => {
        const pokeul = document.getElementById('pokeul');
        const fighting = document.getElementById('fighting')
        fighting.addEventListener('click', ()=> {
            pokeul.innerHTML = " "
            renderAllPokemon(pokemon)
        })
    });

///////----------------------- FIRE TYPES FILTER
fetch('https://pokedex-dtaf.onrender.com/pokedex/type/fire')
    .then(response => response.json())
    .then((pokemon) => {
        const pokeul = document.getElementById('pokeul');
        const fire = document.getElementById('fire')
        fire.addEventListener('click', ()=> {
            pokeul.innerHTML = " "
            renderAllPokemon(pokemon)
        })
    });

///////----------------------- FLYING TYPES FILTER
fetch('https://pokedex-dtaf.onrender.com/pokedex/type/flying')
    .then(response => response.json())
    .then((pokemon) => {
        const pokeul = document.getElementById('pokeul');
        const flying = document.getElementById('flying')
        flying.addEventListener('click', ()=> {
            pokeul.innerHTML = " "
            renderAllPokemon(pokemon)
        })
    });

///////----------------------- GHOST TYPES FILTER
fetch('https://pokedex-dtaf.onrender.com/pokedex/type/ghost')
    .then(response => response.json())
    .then((pokemon) => {
        const pokeul = document.getElementById('pokeul');
        const ghost = document.getElementById('ghost')
        ghost.addEventListener('click', ()=> {
            pokeul.innerHTML = " "
            renderAllPokemon(pokemon)
        })
    });

///////----------------------- GRASS TYPES FILTER
fetch('https://pokedex-dtaf.onrender.com/pokedex/type/grass')
    .then(response => response.json())
    .then((pokemon) => {
        const pokeul = document.getElementById('pokeul');
        const grass = document.getElementById('grass')
        grass.addEventListener('click', ()=> {
            pokeul.innerHTML = " "
            renderAllPokemon(pokemon)
        })
    });

///////----------------------- GROUND TYPES FILTER
fetch('https://pokedex-dtaf.onrender.com/pokedex/type/ground')
    .then(response => response.json())
    .then((pokemon) => {
        const pokeul = document.getElementById('pokeul');
        const ground = document.getElementById('ground')
        ground.addEventListener('click', ()=> {
            pokeul.innerHTML = " "
            renderAllPokemon(pokemon)
        })
    });


///////----------------------- ICE TYPES FILTER
fetch('https://pokedex-dtaf.onrender.com/pokedex/type/ice')
    .then(response => response.json())
    .then((pokemon) => {
        const pokeul = document.getElementById('pokeul');
        const ice = document.getElementById('ice')
        ice.addEventListener('click', ()=> {
            pokeul.innerHTML = " "
            renderAllPokemon(pokemon)
        })
    });

///////----------------------- NORMAL TYPES FILTER
fetch('https://pokedex-dtaf.onrender.com/pokedex/type/normal')
    .then(response => response.json())
    .then((pokemon) => {
        const pokeul = document.getElementById('pokeul');
        const normal = document.getElementById('normal')
        normal.addEventListener('click', ()=> {
            pokeul.innerHTML = " "
            renderAllPokemon(pokemon)
        })
    });

///////----------------------- POISON TYPES FILTER
fetch('https://pokedex-dtaf.onrender.com/pokedex/type/poison')
    .then(response => response.json())
    .then((pokemon) => {
        const pokeul = document.getElementById('pokeul');
        const poison = document.getElementById('poison')
        poison.addEventListener('click', ()=> {
            pokeul.innerHTML = " "
            renderAllPokemon(pokemon)
        })
    });

///////----------------------- PSYCHIC TYPES FILTER
fetch('https://pokedex-dtaf.onrender.com/pokedex/type/psychic')
    .then(response => response.json())
    .then((pokemon) => {
        const pokeul = document.getElementById('pokeul');
        const psychic = document.getElementById('psychic')
        psychic.addEventListener('click', ()=> {
            pokeul.innerHTML = " "
            renderAllPokemon(pokemon)
        })
    });

///////----------------------- ROCK TYPES FILTER
fetch('https://pokedex-dtaf.onrender.com/pokedex/type/rock')
    .then(response => response.json())
    .then((pokemon) => {
        const pokeul = document.getElementById('pokeul');
        const rock = document.getElementById('rock')
        rock.addEventListener('click', ()=> {
            pokeul.innerHTML = " "
            renderAllPokemon(pokemon)
        })
    });


///////----------------------- WATER TYPES FILTER
fetch('https://pokedex-dtaf.onrender.com/pokedex/type/water')
    .then(response => response.json())
    .then((pokemon) => {
        const pokeul = document.getElementById('pokeul');
        const water = document.getElementById('water')
        water.addEventListener('click', ()=> {
            pokeul.innerHTML = " "
            renderAllPokemon(pokemon)
        })
    });


///////----------------------- RENDER ALL FUNCTION I POKEDEX
function renderAllPokemon(pokemon){
    for (let i = 0; i < pokemon.length; i++) {
        const li = document.createElement("li")
        pokedex = pokemon[i].name

///////----------------------- SMÅ BILLEDER I POKEDEX
        const img = document.createElement("img");
        img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon[i].pokedex_number.toString() +".png"
        img.width = 50
        img.height = 50
        img.border = "1px black";
        document.getElementById("pokeul").appendChild(img)

///////----------------------- POKEDEX LISTE
        li.innerHTML = "#" + pokemon[i].pokedex_number + " " + pokedex

///////----------------------- KODE TIL HEADER OG PIC I VENSTRE SIDE
        li.addEventListener("click", ()=> {
            document.getElementById("pokeheader")
            pokeheader.innerHTML = " "
            pokeheader.innerHTML = pokemon[i].name.toUpperCase()
            document.getElementById("pokepicture").src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon[i].pokedex_number.toString() +".png"


///////----------------------- KODE TIL TYPES
            fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon[i].pokedex_number.toString())
                .then(response => response.json())
                .then((pokeapi) => {
                    //clear previous type
                    let Typer = document.getElementById("types");
                    while (Typer.firstChild) {
                        Typer.firstChild.remove();
                    }
                    //update types
                    let types = pokeapi["types"];
                    for (let i = 0; i < types.length; i++) {
                        let type = document.createElement("span");
                        type.innerText = types[i]["type"]["name"].toUpperCase();
                        type.classList.add("types");
                        type.classList.add(types[i]["type"]["name"]); //adds background color and font color
                        Typer.append(type);
                    }
                })

///////----------------------- POKEMON STATS
            document.getElementById("statsul")
            statsul.innerHTML = " "
            statsul.innerHTML = "<br>" + "HP: " + pokemon[i].hp + "<br>" + "Attack: " + pokemon[i].attack + "<br>" +
                "Special Attack: " + pokemon[i].special_attack + "<br>" + "Defence: " + pokemon[i].defence + "<br>" + "Special Defence: "
                + pokemon[i].special_defence + "<br>" + "Speed: " + pokemon[i].speed + "<br>"
        })
        pokeul.appendChild(li)
    }
}


///////----------------------- POKEMON SEARCHBAR TIL ALLE POKEMONER

document.querySelector("#search").addEventListener("click", allpokemonSearch)

function allpokemonSearch() {
    const name = document.querySelector("#pokename").value;
    const pokename = improvesearch(name)

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
        .then(response => response.json())
        .then((x) => {
            //console.log(x.sprites.versions)
            document.querySelector(".box").innerHTML = `
            <div class="box">
            <h2>${returnCapitalFirst(x.name)}</h2>
            <div>            
             <img src="${x.sprites.other["official-artwork"].front_default}" height="350" width="350""/>
         </div>
         <div class="pokedata">        
         <p>Appears in ${x.game_indices.length} Pokemon games</p>
         <p></p>
         <p></p>
         <p></p>
         </div>    
         </div>
          `
        })
}
///////----------------------- FUNCTION TIL AT FJERNE CAPS SENSITIVITY

function improvesearch(string) {
    return string.toLowerCase()
}

///////----------------------- FUNCTION TIL AT RETURNERE MED STORT FORBOGSTAV

function returnCapitalFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
};

///////----------------------- SCROLLABLE POKEDEX BEGRÆNSET TIL 900 POKEMON

function scrolldex() {
    for (let i = 1; i < 900; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response => response.json())
            .then((data) => {
                pokemonname = data.name.toUpperCase()
                pokemonid = data.id
                pokemontype = data.types.map((type) => type.type.name).join(', ').toUpperCase()
                //console.log(pokemontype)
                const pokeimg = document.createElement("img");
                pokeimg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
                let print = document.createElement("span")
                document.getElementById("allpokedex").appendChild(pokeimg)
                document.getElementById("allpokedex").appendChild(print)
                print.innerHTML = `
                  <p>#${pokemonid} ${pokemonname}</p>
                  <p>${pokemontype}</p>
                   
                `
            });
    };
};
scrolldex()
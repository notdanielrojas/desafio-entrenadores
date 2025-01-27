const entrenadores = [
  {
    nombre: "Entrenador 1",
    equipo: [
      { nombre: "Charizard", nivel: 25, tipo: "Fuego" },
      { nombre: "Blastoise", nivel: 22, tipo: "Agua" },
      { nombre: "Venusaur", nivel: 28, tipo: "Planta" },
      { nombre: "Pikachu", nivel: 30, tipo: "Eléctrico" },
      { nombre: "Machamp", nivel: 27, tipo: "Pelea" },
      { nombre: "Gengar", nivel: 26, tipo: "Fantasma" },
    ],
  },
  {
    nombre: "Entrenador 2",
    equipo: [
      { nombre: "Typhlosion", nivel: 29, tipo: "Fuego" },
      { nombre: "Feraligatr", nivel: 32, tipo: "Agua" },
      { nombre: "Meganium", nivel: 33, tipo: "Planta" },
      { nombre: "Raichu", nivel: 34, tipo: "Eléctrico" },
      { nombre: "Lucario", nivel: 31, tipo: "Pelea" },
      { nombre: "Mimikyu", nivel: 35, tipo: "Fantasma" },
    ],
  },
  {
    nombre: "Entrenador 3",
    equipo: [
      { nombre: "Arcanine", nivel: 36, tipo: "Fuego" },
      { nombre: "Swampert", nivel: 37, tipo: "Agua" },
      { nombre: "Sceptile", nivel: 38, tipo: "Planta" },
      { nombre: "Electivire", nivel: 39, tipo: "Eléctrico" },
      { nombre: "Gallade", nivel: 40, tipo: "Pelea" },
      { nombre: "Banette", nivel: 41, tipo: "Fantasma" },
    ],
  },
  {
    nombre: "Entrenador 4",
    equipo: [
      { nombre: "Infernape", nivel: 42, tipo: "Fuego" },
      { nombre: "Empoleon", nivel: 43, tipo: "Agua" },
      { nombre: "Torterra", nivel: 44, tipo: "Planta" },
      { nombre: "Luxray", nivel: 45, tipo: "Eléctrico" },
      { nombre: "Conkeldurr", nivel: 46, tipo: "Pelea" },
      { nombre: "Cofagrigus", nivel: 47, tipo: "Fantasma" },
    ],
  },
  {
    nombre: "Entrenador 5",
    equipo: [
      { nombre: "Blaziken", nivel: 48, tipo: "Fuego" },
      { nombre: "Samurott", nivel: 49, tipo: "Agua" },
      { nombre: "Serperior", nivel: 50, tipo: "Planta" },
      { nombre: "Zebstrika", nivel: 51, tipo: "Eléctrico" },
      { nombre: "Mienshao", nivel: 52, tipo: "Pelea" },
      { nombre: "Chandelure", nivel: 53, tipo: "Fantasma" },
    ],
  },
];

/* Desafio 1 */
const getPokemonMaxAndLowestLevel = (entrenadores) => {
  let pokemonMaxLevel = entrenadores[0].equipo[0];
  let pokemonLowestLevel = entrenadores[0].equipo[0];

  entrenadores.forEach((entrenador) => {
    entrenador.equipo.forEach((pokemon) => {
      if (pokemon.nivel > pokemonMaxLevel.nivel) {
        pokemonMaxLevel = pokemon;
      }

      if (pokemon.nivel < pokemonLowestLevel.nivel) {
        pokemonLowestLevel = pokemon;
      }
    });
  });

  return { pokemonMaxLevel, pokemonLowestLevel };
};

const resultado = getPokemonMaxAndLowestLevel(entrenadores);
console.log("Pokémon con mayor nivel:", resultado.pokemonMaxLevel);
console.log("Pokémon con menor nivel:", resultado.pokemonLowestLevel);

/* Desafio 2 */
const findPokemonByString = (entrenadores, searchString) => {
  const result = [];
  entrenadores.forEach((entrenador) => {
    entrenador.equipo.forEach((pokemon) => {
      if (pokemon.nombre.toLowerCase().includes(searchString.toLowerCase())) {
        result.push(pokemon);
      }
    });
  });
    return result.length > 0 ? result : `No existe un Pokémon con el nombre "${searchString}".`;
};
};

const pokemonsFound = findPokemonByString(entrenadores, "pika");
console.log("Pokémon encontrados:", pokemonsFound);

/* Desafio 3 */
const getTypesWithHighestLevel = (entrenadores) => {
  const typeLevels = {};

  entrenadores.forEach((entrenador) => {
    entrenador.equipo.forEach((pokemon) => {
      if (!typeLevels[pokemon.tipo]) {
        typeLevels[pokemon.tipo] = { totalLevel: 0, count: 0 };
      }
      typeLevels[pokemon.tipo].totalLevel += pokemon.nivel;
      typeLevels[pokemon.tipo].count += 1;
    });
  });

  let highestAverageType = null;
  let highestAverageLevel = 0;

  for (const tipo in typeLevels) {
    const averageLevel = typeLevels[tipo].totalLevel / typeLevels[tipo].count;
    if (averageLevel > highestAverageLevel) {
      highestAverageLevel = averageLevel;
      highestAverageType = tipo;
    }
  }

  return highestAverageType;
};

const highestLevelType = getTypesWithHighestLevel(entrenadores);
console.log("Tipo con mayor promedio de nivel:", highestLevelType);

/* Desafio 4 */
const trainerWithHighestLevelPokemons = (entrenadores) => {
  let highestLevelTrainer = null;
  let highestTotalLevel = 0;

  entrenadores.forEach((entrenador) => {
    const totalLevel = entrenador.equipo.reduce((sum, pokemon) => sum + pokemon.nivel, 0);
    if (totalLevel > highestTotalLevel) {
      highestTotalLevel = totalLevel;
      highestLevelTrainer = entrenador.nombre;
    }
  });

  return highestLevelTrainer;
};

const highestLevelTrainer = trainerWithHighestLevelPokemons(entrenadores);
console.log("Entrenador con mayor nivel total de Pokémon:", highestLevelTrainer);

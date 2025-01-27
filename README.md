# Prueba Técnica: Manipulación de Objetos y Arreglos en Pokémon

En esta prueba técnica, se nos presenta un conjunto de entrenadores Pokémon con sus respectivos equipos. Cada equipo contiene seis Pokémon, y cada Pokémon tiene las propiedades `nombre`, `nivel` y `tipo`. Nuestro objetivo es resolver los desafíos planteados manipulando estos datos.

## Datos

Los entrenadores y sus equipos están representados en la siguiente estructura:

```javascript
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
```
# Desafío 1: Pokémon con Mayor y Menor Nivel

Crea una función que retorne el pokemon con el mayor nivel y el con el menor nivel entre todos los equipos de los cinco entrenadores.

# Desafío 2: Buscador

Crea una función que devuelva todos los pokemones que contengan un string pasado como argumento. No puede devolver undefined

# Desafío 3: Tipo con Promedio de Nivel Más Alto

Crea una función que retorne el tipo cuyos Pokémon tienen un promedio de nivel mayor.

# Desafío 4: El nombre del entrenador cuyos pokémon tienen el mayor nivel en suma.

const pokemonTypes = () => {
  const types = [
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 1,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 2,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 3,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 4,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 5,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 6,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 7,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 8,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 9,
    },
    {
      types: [{ name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }],
      id: 10,
    },
    {
      types: [{ name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }],
      id: 11,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 12,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 13,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 14,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 15,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 16,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 17,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 18,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 19,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 20,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 21,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 22,
    },
    {
      types: [{ name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }],
      id: 23,
    },
    {
      types: [{ name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }],
      id: 24,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 25,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 26,
    },
    {
      types: [{ name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }],
      id: 27,
    },
    {
      types: [{ name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }],
      id: 28,
    },
    {
      types: [{ name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }],
      id: 29,
    },
    {
      types: [{ name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }],
      id: 30,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 31,
    },
    {
      types: [{ name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }],
      id: 32,
    },
    {
      types: [{ name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }],
      id: 33,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 34,
    },
    {
      types: [{ name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }],
      id: 35,
    },
    {
      types: [{ name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }],
      id: 36,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 37,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 38,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 39,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 40,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 41,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 42,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 43,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 44,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 45,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 46,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 47,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 48,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 49,
    },
    {
      types: [{ name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }],
      id: 50,
    },
    {
      types: [{ name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }],
      id: 51,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 52,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 53,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 54,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 55,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 56,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 57,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 58,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 59,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 60,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 61,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 62,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 63,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 64,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 65,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 66,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 67,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 68,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 69,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 70,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 71,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 72,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 73,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 74,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 75,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 76,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 77,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 78,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 79,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 80,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 81,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 82,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 83,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 84,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 85,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 86,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
      ],
      id: 87,
    },
    {
      types: [{ name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }],
      id: 88,
    },
    {
      types: [{ name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }],
      id: 89,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 90,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
      ],
      id: 91,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 92,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 93,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 94,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 95,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 96,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 97,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 98,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 99,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 100,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 101,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 102,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 103,
    },
    {
      types: [{ name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }],
      id: 104,
    },
    {
      types: [{ name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }],
      id: 105,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 107,
    },
    {
      types: [{ name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }],
      id: 105,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 108,
    },
    {
      types: [{ name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }],
      id: 109,
    },
    {
      types: [{ name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }],
      id: 110,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
      ],
      id: 111,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
      ],
      id: 112,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 113,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 114,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 115,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 116,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 117,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 118,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 119,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 120,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 121,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 122,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 123,
    },
    {
      types: [
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 124,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 125,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 126,
    },
    {
      types: [{ name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }],
      id: 127,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 128,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 129,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 130,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
      ],
      id: 131,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 132,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 133,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 134,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 135,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 136,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 137,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      ],
      id: 138,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      ],
      id: 139,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      ],
      id: 140,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      ],
      id: 141,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 142,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 143,
    },
    {
      types: [
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 144,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 145,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 146,
    },
    {
      types: [{ name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }],
      id: 147,
    },
    {
      types: [{ name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }],
      id: 148,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 149,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 150,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 151,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 152,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 153,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 154,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 155,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 156,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 157,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 158,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 159,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 160,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 161,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 162,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 163,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 164,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 165,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 166,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 167,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 168,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 169,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
      ],
      id: 170,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
      ],
      id: 171,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 172,
    },
    {
      types: [{ name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }],
      id: 173,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 174,
    },
    {
      types: [{ name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }],
      id: 175,
    },
    {
      types: [
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 176,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 177,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 178,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 179,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 180,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 181,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 182,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 183,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 184,
    },
    {
      types: [{ name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }],
      id: 185,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 186,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 187,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 188,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 189,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 190,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 191,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 192,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 193,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 194,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 195,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 196,
    },
    {
      types: [{ name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }],
      id: 197,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 198,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 199,
    },
    {
      types: [{ name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }],
      id: 200,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 201,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 202,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 203,
    },
    {
      types: [{ name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }],
      id: 204,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 205,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 206,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 207,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 208,
    },
    {
      types: [{ name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }],
      id: 209,
    },
    {
      types: [{ name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }],
      id: 210,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 211,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 212,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
      ],
      id: 213,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 214,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
      ],
      id: 215,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 216,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 217,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 218,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
      ],
      id: 219,
    },
    {
      types: [
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 220,
    },
    {
      types: [
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 221,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
      ],
      id: 222,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 223,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 224,
    },
    {
      types: [
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 225,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 226,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 227,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      ],
      id: 228,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      ],
      id: 229,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 230,
    },
    {
      types: [{ name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }],
      id: 231,
    },
    {
      types: [{ name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }],
      id: 232,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 233,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 234,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 235,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 236,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 237,
    },
    {
      types: [
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 238,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 239,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 240,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 241,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 242,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 243,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 244,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 245,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 246,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 247,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 248,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 249,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 250,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 251,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 252,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 253,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 254,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 255,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 256,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 257,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 258,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 259,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 260,
    },
    {
      types: [{ name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }],
      id: 261,
    },
    {
      types: [{ name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }],
      id: 262,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 263,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 264,
    },
    {
      types: [{ name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }],
      id: 265,
    },
    {
      types: [{ name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }],
      id: 266,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 267,
    },
    {
      types: [{ name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }],
      id: 268,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 269,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 270,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 271,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 272,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 273,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 274,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 275,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 276,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 277,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 278,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 279,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 280,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 281,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 282,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      ],
      id: 283,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 284,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 285,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 286,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 287,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 288,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 289,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 290,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 291,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 292,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 293,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 294,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 295,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 296,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 297,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 298,
    },
    {
      types: [{ name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }],
      id: 299,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 300,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 301,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 302,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 303,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
      ],
      id: 304,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
      ],
      id: 305,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
      ],
      id: 306,
    },
    {
      types: [
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 307,
    },
    {
      types: [
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 308,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 309,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 310,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 311,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 312,
    },
    {
      types: [{ name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }],
      id: 313,
    },
    {
      types: [{ name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }],
      id: 314,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 315,
    },
    {
      types: [{ name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }],
      id: 316,
    },
    {
      types: [{ name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }],
      id: 317,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 318,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 319,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 320,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 321,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 322,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 323,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 324,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 325,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 326,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 327,
    },
    {
      types: [{ name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }],
      id: 328,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 329,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 330,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 331,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 332,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 333,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 334,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 335,
    },
    {
      types: [{ name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }],
      id: 336,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 337,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 338,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 339,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 340,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 341,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 342,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 343,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 344,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 345,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 346,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
      ],
      id: 347,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
      ],
      id: 348,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 349,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 350,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 351,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 352,
    },
    {
      types: [{ name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }],
      id: 353,
    },
    {
      types: [{ name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }],
      id: 354,
    },
    {
      types: [{ name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }],
      id: 355,
    },
    {
      types: [{ name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }],
      id: 356,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 357,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 358,
    },
    {
      types: [{ name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }],
      id: 359,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 360,
    },
    {
      types: [{ name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }],
      id: 361,
    },
    {
      types: [{ name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }],
      id: 362,
    },
    {
      types: [
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      ],
      id: 363,
    },
    {
      types: [
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      ],
      id: 364,
    },
    {
      types: [
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      ],
      id: 365,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 366,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 367,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 368,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
      ],
      id: 369,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 370,
    },
    {
      types: [{ name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }],
      id: 371,
    },
    {
      types: [{ name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }],
      id: 372,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 373,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 374,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 375,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 376,
    },
    {
      types: [{ name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }],
      id: 377,
    },
    {
      types: [{ name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }],
      id: 378,
    },
    {
      types: [{ name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }],
      id: 379,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 380,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 381,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 382,
    },
    {
      types: [{ name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }],
      id: 383,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 384,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 385,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 386,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 387,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 388,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 389,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 390,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 391,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 392,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 393,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 394,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 395,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 396,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 397,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 398,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 399,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      ],
      id: 400,
    },
    {
      types: [{ name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }],
      id: 401,
    },
    {
      types: [{ name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }],
      id: 402,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 403,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 404,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 405,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 406,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 407,
    },
    {
      types: [{ name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }],
      id: 408,
    },
    {
      types: [{ name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }],
      id: 409,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 410,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 411,
    },
    {
      types: [{ name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }],
      id: 412,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 413,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 414,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 415,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 416,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 417,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 418,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 419,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 420,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 421,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 422,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 423,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 424,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 425,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 426,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 427,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 428,
    },
    {
      types: [{ name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }],
      id: 429,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 430,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 431,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 432,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 433,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 434,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 435,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 436,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 437,
    },
    {
      types: [{ name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }],
      id: 438,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 439,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 440,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 441,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 442,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 443,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 444,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 445,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 446,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 447,
    },
    {
      types: [
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 448,
    },
    {
      types: [{ name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }],
      id: 449,
    },
    {
      types: [{ name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }],
      id: 450,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
      ],
      id: 451,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 452,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 453,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 454,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 455,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 456,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 457,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 458,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
      ],
      id: 459,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
      ],
      id: 460,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
      ],
      id: 461,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 462,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 463,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
      ],
      id: 464,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 465,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 466,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 467,
    },
    {
      types: [
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 468,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 469,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 470,
    },
    {
      types: [{ name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }],
      id: 471,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 472,
    },
    {
      types: [
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 473,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 474,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 475,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 476,
    },
    {
      types: [{ name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }],
      id: 477,
    },
    {
      types: [
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 478,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 479,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 480,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 481,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 482,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 483,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 484,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 485,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 486,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 487,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 488,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 489,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 490,
    },
    {
      types: [{ name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }],
      id: 491,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 492,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 493,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      ],
      id: 494,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 495,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 496,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 497,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 498,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 499,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 500,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 501,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 502,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 503,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 504,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 505,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 506,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 507,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 508,
    },
    {
      types: [{ name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }],
      id: 509,
    },
    {
      types: [{ name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }],
      id: 510,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 511,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 512,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 513,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 514,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 515,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 516,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 517,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 518,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 519,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 520,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 521,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 522,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 523,
    },
    {
      types: [{ name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }],
      id: 524,
    },
    {
      types: [{ name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }],
      id: 525,
    },
    {
      types: [{ name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }],
      id: 526,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 527,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 528,
    },
    {
      types: [{ name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }],
      id: 529,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 530,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 531,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 532,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 533,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 534,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 535,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 536,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 537,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 538,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 539,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 540,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 541,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 542,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 543,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 544,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 545,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 546,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 547,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 548,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 549,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 550,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 551,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 552,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 553,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 554,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 555,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 556,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
      ],
      id: 557,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
      ],
      id: 558,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 559,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 560,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 561,
    },
    {
      types: [{ name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }],
      id: 562,
    },
    {
      types: [{ name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }],
      id: 563,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
      ],
      id: 564,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
      ],
      id: 565,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 566,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 567,
    },
    {
      types: [{ name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }],
      id: 568,
    },
    {
      types: [{ name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }],
      id: 569,
    },
    {
      types: [{ name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }],
      id: 570,
    },
    {
      types: [{ name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }],
      id: 571,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 572,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 573,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 574,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 575,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 576,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 577,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 578,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 579,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 580,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 581,
    },
    {
      types: [{ name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }],
      id: 582,
    },
    {
      types: [{ name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }],
      id: 583,
    },
    {
      types: [{ name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }],
      id: 584,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 585,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 586,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 587,
    },
    {
      types: [{ name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }],
      id: 588,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 589,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 590,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 591,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 592,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 593,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 594,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
      ],
      id: 595,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
      ],
      id: 596,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 597,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 598,
    },
    {
      types: [{ name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }],
      id: 599,
    },
    {
      types: [{ name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }],
      id: 600,
    },
    {
      types: [{ name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }],
      id: 601,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 602,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 603,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 604,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 605,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 606,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      ],
      id: 607,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      ],
      id: 608,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      ],
      id: 609,
    },
    {
      types: [{ name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }],
      id: 610,
    },
    {
      types: [{ name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }],
      id: 611,
    },
    {
      types: [{ name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }],
      id: 612,
    },
    {
      types: [{ name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }],
      id: 613,
    },
    {
      types: [{ name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }],
      id: 614,
    },
    {
      types: [{ name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }],
      id: 615,
    },
    {
      types: [{ name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }],
      id: 616,
    },
    {
      types: [{ name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }],
      id: 617,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
      ],
      id: 618,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 619,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 620,
    },
    {
      types: [{ name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }],
      id: 621,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 622,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 623,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 624,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 625,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 626,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 627,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 628,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 629,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 630,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 631,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 632,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 633,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 634,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 635,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      ],
      id: 636,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      ],
      id: 637,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 638,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 639,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 640,
    },
    {
      types: [{ name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }],
      id: 641,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 642,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      ],
      id: 643,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
      ],
      id: 644,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 645,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
      ],
      id: 646,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 647,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 648,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 649,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 650,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 651,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 652,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 653,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 654,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 655,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 656,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 657,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 658,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 659,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 660,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 661,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 662,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 663,
    },
    {
      types: [{ name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }],
      id: 664,
    },
    {
      types: [{ name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }],
      id: 665,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 666,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 666,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      ],
      id: 668,
    },
    {
      types: [{ name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }],
      id: 669,
    },
    {
      types: [{ name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }],
      id: 670,
    },
    {
      types: [{ name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }],
      id: 671,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 672,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 673,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 674,
    },
    {
      types: [
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 675,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 676,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 677,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 678,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 679,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 680,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 681,
    },
    {
      types: [{ name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }],
      id: 682,
    },
    {
      types: [{ name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }],
      id: 683,
    },
    {
      types: [{ name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }],
      id: 684,
    },
    {
      types: [{ name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }],
      id: 685,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 686,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 687,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      ],
      id: 688,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      ],
      id: 689,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      ],
      id: 690,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 691,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 692,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 693,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      ],
      id: 694,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      ],
      id: 695,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 696,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 697,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
      ],
      id: 698,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
      ],
      id: 699,
    },
    {
      types: [{ name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }],
      id: 700,
    },
    {
      types: [
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 701,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 702,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 703,
    },
    {
      types: [{ name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }],
      id: 704,
    },
    {
      types: [{ name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }],
      id: 705,
    },
    {
      types: [{ name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }],
      id: 706,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 707,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 708,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 709,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 710,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 711,
    },
    {
      types: [{ name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }],
      id: 712,
    },
    {
      types: [{ name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }],
      id: 713,
    },
    {
      types: [
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 714,
    },
    {
      types: [
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 715,
    },
    {
      types: [{ name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }],
      id: 716,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 717,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 718,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 719,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 720,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      ],
      id: 721,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 722,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 723,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 724,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 725,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 726,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 727,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 728,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 729,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 730,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 731,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 732,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 733,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 734,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 735,
    },
    {
      types: [{ name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }],
      id: 736,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
      ],
      id: 737,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
      ],
      id: 738,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 739,
    },
    {
      types: [
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
      ],
      id: 740,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 741,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 742,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 743,
    },
    {
      types: [{ name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }],
      id: 744,
    },
    {
      types: [{ name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }],
      id: 745,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 746,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      ],
      id: 747,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      ],
      id: 748,
    },
    {
      types: [{ name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }],
      id: 749,
    },
    {
      types: [{ name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }],
      id: 750,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
      ],
      id: 751,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
      ],
      id: 752,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 753,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 754,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 755,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 756,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      ],
      id: 757,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      ],
      id: 758,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 759,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 760,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 761,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 762,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 763,
    },
    {
      types: [{ name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }],
      id: 764,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 765,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 766,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      ],
      id: 767,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      ],
      id: 768,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 769,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 770,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 771,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 772,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 773,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 774,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 775,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 776,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 777,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 778,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 779,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 780,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 781,
    },
    {
      types: [{ name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }],
      id: 782,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 783,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 784,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 785,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 786,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 787,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 788,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 789,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 790,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 791,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 792,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 793,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 794,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 795,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 796,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 797,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 798,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 799,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 800,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 801,
    },
    {
      types: [
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 802,
    },
    {
      types: [{ name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }],
      id: 803,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 804,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 805,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 806,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 807,
    },
    {
      types: [{ name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }],
      id: 808,
    },
    {
      types: [{ name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }],
      id: 809,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 810,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 811,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 812,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 813,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 814,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 815,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 816,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 817,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 818,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 819,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 820,
    },
    {
      types: [{ name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }],
      id: 821,
    },
    {
      types: [{ name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }],
      id: 822,
    },
    {
      types: [
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 823,
    },
    {
      types: [{ name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }],
      id: 824,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 825,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 826,
    },
    {
      types: [{ name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }],
      id: 827,
    },
    {
      types: [{ name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }],
      id: 828,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 829,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 830,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 831,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 832,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 833,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
      ],
      id: 834,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 835,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 836,
    },
    {
      types: [{ name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }],
      id: 837,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      ],
      id: 838,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      ],
      id: 839,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 840,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 841,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 842,
    },
    {
      types: [{ name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }],
      id: 843,
    },
    {
      types: [{ name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }],
      id: 844,
    },
    {
      types: [
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      ],
      id: 845,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 846,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 847,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 848,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 849,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
      ],
      id: 850,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
      ],
      id: 851,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 852,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 853,
    },
    {
      types: [{ name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }],
      id: 854,
    },
    {
      types: [{ name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }],
      id: 855,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 856,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 857,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 858,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 859,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 860,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 861,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      ],
      id: 862,
    },
    {
      types: [{ name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }],
      id: 863,
    },
    {
      types: [{ name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }],
      id: 864,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 865,
    },
    {
      types: [
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 866,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 867,
    },
    {
      types: [{ name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }],
      id: 868,
    },
    {
      types: [{ name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }],
      id: 869,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 870,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 871,
    },
    {
      types: [
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
      ],
      id: 872,
    },
    {
      types: [
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
      ],
      id: 873,
    },
    {
      types: [{ name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }],
      id: 874,
    },
    {
      types: [{ name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }],
      id: 875,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      ],
      id: 876,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 877,
    },
    {
      types: [{ name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }],
      id: 878,
    },
    {
      types: [{ name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }],
      id: 879,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 880,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
      ],
      id: 881,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 882,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
      ],
      id: 883,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 884,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 885,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 886,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 887,
    },
    {
      types: [{ name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }],
      id: 888,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 889,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 890,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 891,
    },
    {
      types: [
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 892,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 893,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 894,
    },
    {
      types: [{ name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }],
      id: 895,
    },
    {
      types: [{ name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }],
      id: 896,
    },
    {
      types: [{ name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }],
      id: 897,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 898,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 10001,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 10002,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 10003,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 10004,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 10005,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10006,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 10007,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      ],
      id: 10008,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      ],
      id: 10009,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
      ],
      id: 10010,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10011,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 10012,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 10013,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 10014,
    },
    {
      types: [{ name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }],
      id: 10015,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 10016,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 10017,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 10018,
    },
    {
      types: [{ name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }],
      id: 10019,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10020,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10021,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
      ],
      id: 10022,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
      ],
      id: 10023,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 10024,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 10025,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 10026,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 10027,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 10028,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 10029,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 10030,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 10031,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      ],
      id: 10032,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 10033,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 10034,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10035,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 10036,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 10037,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 10038,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 10039,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10040,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 10041,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10042,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 10043,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 10044,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 10045,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 10046,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 10047,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      ],
      id: 10048,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 10049,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 10050,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 10051,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 10052,
    },
    {
      types: [{ name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }],
      id: 10053,
    },
    {
      types: [
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 10054,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 10055,
    },
    {
      types: [{ name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }],
      id: 10056,
    },
    {
      types: [{ name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }],
      id: 10057,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 10058,
    },
    {
      types: [
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 10059,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
      ],
      id: 10060,
    },
    {
      types: [{ name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }],
      id: 10061,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 10062,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 10063,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 10064,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 10065,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 10066,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 10067,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 10068,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 10069,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 10070,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 10071,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 10072,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10073,
    },
    {
      types: [{ name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }],
      id: 10074,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 10075,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 10076,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 10077,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      ],
      id: 10078,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10079,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 10080,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 10081,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 10082,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 10083,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 10084,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 10085,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 10086,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 10087,
    },
    {
      types: [
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 10088,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10089,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 10090,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      ],
      id: 10091,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      ],
      id: 10092,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      ],
      id: 10093,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 10094,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 10095,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 10096,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 10097,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 10098,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 10099,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 10100,
    },
    {
      types: [
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 10101,
    },
    {
      types: [
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 10102,
    },
    {
      types: [{ name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }],
      id: 10103,
    },
    {
      types: [
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 10104,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 10105,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 10106,
    },
    {
      types: [{ name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }],
      id: 10107,
    },
    {
      types: [{ name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }],
      id: 10108,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
      ],
      id: 10109,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
      ],
      id: 10110,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
      ],
      id: 10111,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 10112,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 10113,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 10114,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 10115,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 10116,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 10117,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 10118,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 10119,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
      ],
      id: 10120,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 10121,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
      ],
      id: 10122,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10123,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10124,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10125,
    },
    {
      types: [{ name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }],
      id: 10126,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 10127,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 10128,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      ],
      id: 10129,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10130,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10131,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10132,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10133,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10134,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10135,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10136,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10137,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10138,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10139,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10140,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10141,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10142,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 10143,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 10144,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 10145,
    },
    {
      types: [
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
      ],
      id: 10146,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 10147,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 10148,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 10149,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 10150,
    },
    {
      types: [{ name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }],
      id: 10151,
    },
    {
      types: [{ name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }],
      id: 10152,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
      ],
      id: 10153,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 10154,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 10155,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 10156,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 10157,
    },
    {
      types: [{ name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }],
      id: 10158,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 10159,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 10160,
    },
    {
      types: [{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }],
      id: 10161,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 10162,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 10163,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 10164,
    },
    {
      types: [
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 10165,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10166,
    },
    {
      types: [
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10167,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10168,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 10169,
    },
    {
      types: [{ name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }],
      id: 10170,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      ],
      id: 10171,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      ],
      id: 10172,
    },
    {
      types: [{ name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }],
      id: 10173,
    },
    {
      types: [{ name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }],
      id: 10174,
    },
    {
      types: [
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      ],
      id: 10175,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 10176,
    },
    {
      types: [
        { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 10177,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 10178,
    },
    {
      types: [{ name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }],
      id: 10179,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
      ],
      id: 10180,
    },
    {
      types: [
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 10181,
    },
    {
      types: [
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 10182,
    },
    {
      types: [
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      ],
      id: 10183,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
      ],
      id: 10184,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
      ],
      id: 10185,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 10186,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10187,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 10188,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
      ],
      id: 10189,
    },
    {
      types: [{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }],
      id: 10190,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 10191,
    },
    {
      types: [{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }],
      id: 10192,
    },
    {
      types: [
        { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 10193,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 10194,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
      ],
      id: 10195,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 10196,
    },
    {
      types: [{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }],
      id: 10197,
    },
    {
      types: [{ name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }],
      id: 10198,
    },
    {
      types: [{ name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }],
      id: 10199,
    },
    {
      types: [{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }],
      id: 10200,
    },
    {
      types: [{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }],
      id: 10201,
    },
    {
      types: [{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" }],
      id: 10202,
    },
    {
      types: [
        { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
      ],
      id: 10203,
    },
    {
      types: [
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
      ],
      id: 10204,
    },
    {
      types: [
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
      ],
      id: 10205,
    },
    {
      types: [
        { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
      ],
      id: 10206,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 10207,
    },
    {
      types: [
        { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 10208,
    },
    {
      types: [{ name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }],
      id: 10209,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 10210,
    },
    {
      types: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
      ],
      id: 10211,
    },
    {
      types: [
        { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 10212,
    },
    {
      types: [
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
        { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
      ],
      id: 10213,
    },
    {
      types: [{ name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }],
      id: 10214,
    },
    {
      types: [{ name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }],
      id: 10215,
    },
    {
      types: [
        { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 10216,
    },
    {
      types: [
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
      ],
      id: 10217,
    },
    {
      types: [
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
        { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
      ],
      id: 10218,
    },
    {
      types: [
        { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      ],
      id: 10219,
    },
    {
      types: [
        { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
        { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      ],
      id: 10220,
    },
  ];

  return types;
};

module.exports = pokemonTypes;

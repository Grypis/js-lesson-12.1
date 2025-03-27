import axios from 'axios';
//! =================================
/* async function get() {
  await Promise.reject('rejected');
  return 'Ok';
}

get()
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  }); */

//! =================================
/* function getPokemons() {
  const url = 'https://pokeapi.co/api/v2/pokemon';

  fetch(url)
    .then(res => {
      res.json().then(pokemons => {
        const url2 = pokemons.results[0].url;
        fetch(url2).then(res => {
          res.json().then(pokemon => {
            console.log(pokemon);
          });
        });
      });
    })
    .catch();
}

getPokemons(); */

//! ================
/* async function getPokemons() {
  const url = 'https://pokeapi.co/api/v2/pokemon';

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

getPokemons(); */

//! ================
/* async function getPokemons() {
  const url = 'https://pokeapi.co/api/v2/pokemon';

  const response1 = await fetch(url);
  const data1 = await response1.json();

  const url2 = data1.results[0].url;
  const res2 = await fetch(url2);
  const pokemon = await res2.json();

  console.log(pokemon);
}

getPokemons(); */

//! ===============================================
/* async function test() {
  const promise = Promise.resolve('Hello world');

  const result = await promise;

  console.log(result);
}
test(); */

//! ===============================================
/* async function name(params) {}

const arrow = async () => {};

const user = {
  async showInfo() {},
};

class Test {
  async showInfo() {}
}

document.addEventListener('click', async () => {}); */

//! ===============================================
/* async function getPokemon() {
  const url = 'https://pokeapi.co/api/v2/pokemon';

  const res = await fetch(url);
  const data = await res.json();

  console.log(data);
  return data;
}
const pokemons = getPokemon(); */

//! ===============================================
/* async function getArr() {
  return 'Hello world';
}
const res = getArr();
console.log(res); */

//! ===============================================
/* async function getPokemons() {
  const url = 'https://pokeapi.co/api/v2/pokemon';

  try {
    const response1 = await fetch(url);
    const data1 = await response1.json();
    const url2 = data1.results[0].url;
    const res2 = await fetch(url2);
    const pokemon = await res2.json();
    return pokemon;
  } catch (err) {
    console.log(err);
  }
}
getPokemons(); */

//! ===============================================
/* async function test() {
  try {
    const res = await fetch('');
    console.log();
  } catch {
    console.log(err);
  }
} */

//! ===============================================
/* async function getPokemonById(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  return pokemon;
} */

/* async function getPokemons() {
  for (let i = 1; i <= 10; i++) {
    const pokemon = await getPokemonById(i);
    console.log(pokemon);
  }
} */

/* async function getPokemons() {
  const promises = [];
  for (let i = 1; i <= 10; i++) {
    const pokemonPromise = getPokemonById(i);
    promises.push(pokemonPromise);
  }
  const result = await Promise.all(promises);
  console.log(result);
}
getPokemons(); */

//! ===============================================
/* async function getNews() {
  const baseURL = '';
  const endPoint = '';
  const url = baseURL + endPoint;

  const params = {
    param1: '1',
    param2: '2',
    param3: '3',
  };
  const headers = {
    key1: 'value',
  };

  const res = await axios.get();
  return res.data;
} */

//! =========================
async function getNews(query) {
  const baseURL = 'https://newsapi.org/v2';
  const endPoint = '/everything';
  const url = baseURL + endPoint;

  const params = {
    q: query,
    language: 'en',
  };
  const headers = {
    'X-Api-Key': '',
  };

  const res = await axios.get(url, { headers, params });
  return res.data;
}

getNews('Bitcoin');
getNews('USDT');

//! =====================================

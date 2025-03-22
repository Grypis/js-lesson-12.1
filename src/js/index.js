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

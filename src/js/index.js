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
async function getPokemons() {
  const url = 'https://pokeapi.co/api/v2/pokemon';

  const response = await fetch(url);
  console.log(response);
}

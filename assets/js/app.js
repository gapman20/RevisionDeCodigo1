const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
/* Se cambio por get element by id  */
const $n = document.getElementById('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

/* Se cambio la funcion sincrona a una funcion asincrona debido a que esta utilizando un await, se cambio nombre de la funcion */
async function getData(apiLink) {
  try{
    const response = await fetch(apiLink);
    console.log(response);
    const datosApi = await response.json();
    console.log(datosApi);
    return datosApi;
  } catch (error){
    handleError(error);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  //No tenia asiganda correctamente la variable 
  $n.textContent = `Algo salió mal: ${err}`
}

const insertInDom = () => {

}

const createInDom = async (apiLink) =>{
  const data = await getData(apiLink);
  const username = data.results;
  console.log(username);
  
}

/* async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  //No tenia asiganda correctamente la variable 
  $n.textContent = `Algo salió mal: ${err}`
}
 */
createInDom(baseEndpoint);
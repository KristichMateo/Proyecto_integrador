async function prueba(res) {
    const respuesta = await fetch('https://api.rawg.io/api/platforms?key=0a9446fc6a444fb3b34685f826290035',{
        method:["GET"],
      },)
    let data = await respuesta.json();
  
}
let cont_juegos = document.getElementById("cont_juegos");

async function prueba2(res) {
  

  const respuesta2 = await fetch('https://api.rawg.io/api/games?key=0a9446fc6a444fb3b34685f826290035',{
      method:["GET"],
    },)
  let data2 = await respuesta2.json();
  console.log("juegos");  

  console.log(data2.results);  
  for (let i = 0; i < 19; i++) {
    let contenedor = `<div class="card text-white bg-dark mb-3" style="max-width: 20rem;">
  <div class="card-header">${data2.results[i].name}</div>
  <div class="card-body">
  <h4 class="card-title">Dark card title</h4>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>`

cont_juegos.innerHTML=contenedor;
    
  }


}
async function prueba3(res) {
    
  const respuesta1 = await fetch('https://api.rawg.io/api/games?key=0a9446fc6a444fb3b34685f826290035&dates=2019-09-01,2019-09-30&platforms=18,1,7',{
      method:["GET"],
    },)
  let data1 = await respuesta1.json();
}
async function prueba4(res) {
    
  const respuesta1 = await fetch('https://api.rawg.io/api/games/1/screenshots?key=0a9446fc6a444fb3b34685f826290035&dates=2019-09-01,2019-09-30&platforms=18,1,7',{
      method:["GET"],
    },)
  let data1 = await respuesta1.json();
  console.log("screenshots")
}


prueba()
prueba2()
prueba3()
prueba4()
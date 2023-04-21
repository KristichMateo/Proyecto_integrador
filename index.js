async function prueba(res) {
    const respuesta = await fetch('https://api.rawg.io/api/platforms?key=0a9446fc6a444fb3b34685f826290035',{
        method:["GET"],
      },)
    let data = await respuesta.json();
    console.log(data);
  
}

async function prueba2(res) {
  

  const respuesta2 = await fetch('https://api.rawg.io/api/creator-roles?key=0a9446fc6a444fb3b34685f826290035',{
      method:["GET"],
    },)
  let data2 = await respuesta2.json();
  console.log(data2);  
  console.log(respuesta2.status);
  
}
async function prueba3(res) {
    
  const respuesta1 = await fetch('https://api.rawg.io/api/games?key=0a9446fc6a444fb3b34685f826290035&dates=2019-09-01,2019-09-30&platforms=18,1,7',{
      method:["GET"],
    },)
  let data1 = await respuesta1.json();
  console.log(data1.results)
}


prueba()
prueba2()
prueba3()
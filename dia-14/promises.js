//https://www.episodate.com/api


//Obtener un array con las series de las 5 primeras páginas

fetch('https://www.episodate.com/api/most-popular?page=1')
    .then((resoonse)=> Response.json())
    .then(())
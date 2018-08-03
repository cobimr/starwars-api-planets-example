class Planetas{

  async obtenerPlanetas() {
    const url = await fetch('https://swapi.co/api/planets/');
    const res = await url.json();
    const arrayPlanets = res.results;
    
    console.log(arrayPlanets);

    return arrayPlanets;
  }
  
}
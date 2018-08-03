class Interfaz {

  // Metodo para mostrar los planetas
  mostrarPlanetas(planets) {

    let template = ' ';
    let counter = 0;

    planets.forEach(p => {

      if (counter < 10) {
        template += `
          <div class="row" style="padding: 2rem 0">
            <div class="col-md-6">
              <div class="planet mx-auto" id="p${++counter}">
                <div class="wrap">
                  <div class="clouds"></div>
                </div>
              <div class="mask"></div>
            </div>
            </div>
            <div class="col-md-6 ">
              <div class="card-body">
                <h2 class="card-text"><strong>${p.name.toUpperCase()}</strong></h2>
                <p class="card-text">Gravity: ${p.gravity}</p>
                <p class="card-text">Orbital period: ${p.orbital_period}</p>
                <p class="card-text">Population: ${p.population}</p>
                <p class="card-text">Terrain: ${p.terrain}</p>
                <p class="card-text">Climate: ${p.climate}</p>
              </div>
            </div>
          </div>  
        `;
      }

    });

    // Anidar el template al html
    document.getElementById('content-planets').innerHTML = template;

  }
}
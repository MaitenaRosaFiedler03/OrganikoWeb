const cocktailContainer = document.getElementById('cocktail-container');

// Realiza la petición a la API para obtener las bebidas alcohólicas
fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    .then(response => response.json())
    .then(data => {
        const cocktails = data.drinks;

        // Crea una caja por cada cóctel
        cocktails.forEach(cocktail => {
            const cocktailBox = document.createElement('div');
            cocktailBox.classList.add('cocktail-box');


            const cocktailImage = document.createElement('img');
            cocktailImage.src = cocktail.strDrinkThumb;
            cocktailImage.alt = cocktail.strDrink;
            cocktailBox.appendChild(cocktailImage);
            
            const cocktailName = document.createElement('p');
            cocktailName.textContent = cocktail.strDrink;
            cocktailBox.appendChild(cocktailName);

            // Al hacer clic en una caja, muestra más información
            cocktailBox.addEventListener('click', () => {
                window.location.href = `../DetalleEvento/detalle.html?id=${cocktail.idDrink}`;
            });

            cocktailContainer.appendChild(cocktailBox);
        });
    });

    const entr = document.getElementById('search-input');
 

    document.getElementById('search-button').addEventListener('click', function(evnt){
      fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${entr}`)
      .then(response => response.json())
      .then(data => {
        
      });
    });
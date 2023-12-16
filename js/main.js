//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink);

function getDrink() {
    let drinkName = document.querySelector('input').value;
    drinkName = drinkName.toLowerCase().split(' ').join('+');

    let urlToFetch = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`;

    console.log(urlToFetch);

    fetch(urlToFetch)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        let index = 0;
        let drinks = data.drinks;
        const interval = 5000;
        
        let drink = drinks[index];

        document.querySelector('h2').innerText = drink.strDrink;
        document.querySelector('img').src = drink.strDrinkThumb;
        document.querySelector('p').innerText = drink.strInstructions;

        setInterval(() => {
            index++;
            if (index >= drinks.length) {
                index = 0;
            }
        
            drink = drinks[index];

            document.querySelector('h2').innerText = drink.strDrink;
            document.querySelector('img').src = drink.strDrinkThumb;
            document.querySelector('p').innerText = drink.strInstructions;

            
        }, interval);

    })
    .catch(err => {
        console.log(`error ${err}`);
    })
}

function updateDrink(drinks, index) {
    let drink = drinks[index];
    
}
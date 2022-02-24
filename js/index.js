const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

const recipe = document.querySelector(".recipe");

function error(message="Error"){
    return `<div class"error">${message}</div>`;
}

async function getApi() {
    try{
    const response = await fetch(url);
    const results = await response.json();
    const drinks = results.drinks;

    console.log(drinks);
    recipe.innerHTML = "";

    for(let i = 0; i < drinks.length; i++){
        

    recipe.innerHTML += `<a href="details.html?id=${drinks[i].id}">
    <div class"margarita_cards">
    <h2>${drinks[i].strDrink}</h2>
    <p>${drinks[i].strAlcoholic}</p>
    <img src="${drinks[i].strDrinkThumb}"></img></a>
    </div>`;

}
} catch (error) {
    recipe.innerHTML = error("There has been an error, please try again");
    
}

}

getApi();
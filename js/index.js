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
        

    recipe.innerHTML += `<a href="details.html?id=${drinks[i].idDrink}" class="margarita_cards">
    <div><h2>${drinks[i].strDrink}</h2></div>
    <div><p>${drinks[i].strAlcoholic}</p></div>
    <div><img src="${drinks[i].strDrinkThumb}"></img></div>
    </a>`;

}
} catch (error) {
    recipe.innerHTML = error("There has been an error, please try again");
    
}

}

getApi();
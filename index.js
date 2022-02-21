const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
const recipe = document.querySelector(".recipe");

async function getApi() {
    const response = await fetch(url);
    const resultsJson = await response.json();
    const margaritaRecipe = resultsJson.data;

    console.log(margaritaRecipe);

    recipe.innerHTML = "";

    for(let i = 0; i < margaritaRecipe.lenght; i++);{

    }

    recipe.innerHTML += `<div class"recipe">
                            <


}
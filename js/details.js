
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);
console.log(params);

const drinksUrl ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita" + id;
const detailHtml = document.querySelector(".details");
const drinks = document.querySelector(".drinks");

function error(message="Error"){
    return `<div class"error">${message}</div>`;
}

console.log(drinksUrl);

async function fetchApi() {

    try{

        const response = await fetch(drinksUrl);
        const getDetails = await response.json();
       
        console.log(getDetails);

       detailHtml.innerHTML = `<div class=".details_cards"><h2>${getDetails.strDrink}</h2>
        <p>Type of glass: ${getDetails.strGlass}</p>
        <p>Instructioms: ${getDetails.strInstructions}</p>
        <p>Primary Ingredient: ${getDetails.strIngredient1}</p></div>`;


    } catch(error) {
        detailHtml.innerHTML = error("There has been an error, please try again");

    }
        

    
}
       
fetchApi();










const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);
console.log(params);


const cors = "https://noroffcors.herokuapp.com/";
const drinksUrl = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id;

const corsApiUrl = cors + drinksUrl;

const detailHtml = document.querySelector(".details");
const drinks = document.querySelector(".drinks");

function error(message="Error"){
    return `<div class"error">${message}</div>`;
}

console.log(corsApiUrl);

async function fetchApi() {

    try{

        const response = await fetch(corsApiUrl);
        const getDetails = await response.json();
        const drinkDetails = getDetails.drinks[0];
       
        console.log(drinkDetails);
        detailHtml.innerHTML = "";

        detailHtml.innerHTML += `<div class=".details_cards"><h2>${drinkDetails.strDrink}</h2>
        <p>Type of glass: ${drinkDetails.strGlass}</p>
        <p>Instructioms: ${drinkDetails.strInstructions}</p>
        <p>Primary Ingredient: ${drinkDetails.strIngredient1}</p></div>`;



    } catch(error) {
        detailHtml.innerHTML = error("There has been an error, please try again");

    }
        

    
}
       
fetchApi();











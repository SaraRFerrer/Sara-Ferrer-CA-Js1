const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const drinksUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita" + id;
const details = document.querySelector(".details");

const detailHtml = document.querySelector(".details");
const pageTitle = document.querySelector("title");
const drinks = document.querySelector(".drinks");

async function fetchApi (){
    try{
        const response = await fetch(drinksUrl);
        const getDetails = await response.json();

        console.log(getDetails);
        detailHtml(getDetails);

        getDetails.location.forEach(function(drinks){
            drinks.innerHTML += `<div>${getDetails[0].strDrink}</div>`;

        }

       
    }


    detailHtml.innerHTML = `<div class="details_cards"><h1>${getDetails[0].strCategory}</h1>
    <p>Type of glass: ${getDetails[0].strGlass}</p>
    <p>Instructions: ${getDetails[0].strInstructions}</p>
    <p>Primary ingretient: ${getDetails[0].strIngredient1}</p></div>`;

}



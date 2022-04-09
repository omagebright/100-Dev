//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then(res => res.json())
    .then(data => {
        console.log(data)
            // document.querySelector('img').src = data.message;
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
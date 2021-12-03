const searchBar = document.getElementById('searchbar') 
let recipearemp = []
document.getElementById("submit").disabled = 'true'; 
searchBar.addEventListener('keyup', (e) => {  
    const charrech = e.target.value.toLowerCase();
    if (charrech.length > 2) {
        var rech = research(charrech)
        displayResult(rech) 
    }

    else {
        displayResult()
    }
})

function research(charrech) {
    const result = recipes.filter(recette => {
        return recette.name.toLowerCase().includes(charrech)
            || recette.description.toLowerCase().includes(charrech)
            || recette.appliance.toLowerCase().includes(charrech)
            || recette.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(charrech))
            || recette.ustensils.some((ustensil) => ustensil.toLowerCase().includes(charrech));

    });
    return result 
    
    
}


function displayResult(result) {
    let filtres = document.querySelector(".appul");
    filtres.innerHTML = ""
    filtres2.innerHTML = ""
    filtres3.innerHTML = ""
    main.innerHTML = ""
    let data = result ? result : recipes;
    verifrecipes(data);
    showapp(data)
    showusten(data)
    showing(data)
    monapp2()
    moning2()
    monusten2()

}


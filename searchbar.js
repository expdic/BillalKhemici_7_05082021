const searchBar = document.getElementById('searchbar')
let recipearemp = []

document.getElementById("submit").disabled = 'true';

searchBar.addEventListener('keyup', (e) => {
    charrech = e.target.value.toLowerCase();
    if ( charrech.length > 2 ) {
        for (var i = 0; i < recipes.length; i++) {
            for (var k = 0; k < recipes[i].ingredients.length; k++) {
                if (recipes[i].ingredients[k].ingredient.toLowerCase().includes(charrech) == true && recipearemp.includes(recipes[i]) == false) {
                    recipearemp.push(recipes[i]);
                }

                for (var j = 0; j < recipearemp.length; j++) {
                    if (recipearemp[j].name.toLowerCase().includes(charrech) == false && recipearemp[j].description.toLowerCase().includes(charrech) == false && recipearemp[j].ingredients[k].ingredient.toLowerCase().includes(charrech) == false ) {
                        recipearemp.splice(j, 1);
                    }
                }

            }
            
            if (recipes[i].name.toLowerCase().includes(charrech) == true && recipearemp.includes(recipes[i]) == false || recipes[i].description.toLowerCase().includes(charrech) == true && recipearemp.includes(recipes[i]) == false ) {
                recipearemp.push(recipes[i]);
            }

          

        }
        main.innerHTML = "";
        verifrecipes(recipearemp);
    }

    else {
        main.innerHTML = ""
        recipearemp = []
        verifrecipes(recipes)
    }

   
})

console.log(recipes[3].ingredients[3].ingredient.toLowerCase().includes('oeuf  '))
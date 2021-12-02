const searchBar = document.getElementById('searchbar') // récuperer la barre de recherche 
let recipearemp = [] // mon tableau
document.getElementById("submit").disabled = 'true'; //désactiver le submit 

searchBar.addEventListener('keyup', (e) => { // quand l'utilisateur commence à ecrire 
    charrech = e.target.value.toLowerCase(); // récuperer ce qu'il ecrit et le mettre en miniscule 

    if (charrech.length < 2) { // si il écrit plus de 2 caracteres 
        main.innerHTML = "" // vider mon main 
        filtres.innerHTML = "" // vider les filtres 
        recipearemp = [] // vider mon tableau 
        verifrecipes(recipes) // afficher toutes mes recettes 
        showapp(recipes) // afficher tout les appareils
        return;
    }
    for (var i = 0; i < recipes.length; i++) { // pour chaque recette 

        for (var k = 0; k < recipes[i].ingredients.length; k++) { // pour chaque ingrédient de la recette 

            if (recipes[i].ingredients[k].ingredient.toLowerCase().includes(charrech) == true && // si l'ingrédient contient ce que l'utilisateur écrit et que l'ingrédient n'est pas dans mon tableau
                recipearemp.includes(recipes[i]) == false) {
                recipearemp.push(recipes[i]); // ajoute la recette dans mon tableau 
            }

            var recipearemp = Array.from(new Set(recipearemp)); // supprimer les doublons 
        }

        if (recipes[i].name.toLowerCase().includes(charrech) == true && recipearemp.includes(recipes[i]) == false || // si le nom de ma recette contient ce que l'utilisateurr écrit et que ma recette et pas dans mon tableau 
            recipes[i].description.toLowerCase().includes(charrech) == true && recipearemp.includes(recipes[i]) == false) { // ou si la descriptopn de ma recette contient ce que l'utilisateurr écrit et que ma recette et pas dans mon tableau 
            recipearemp.push(recipes[i]); // ajouter ma recette au tableauu 
        }
    }

    main.innerHTML = ""; // vider le main ou les recette vont s'afficher 
    filtres.innerHTML = "" // vider les filtres ou les appreils, ustensils, ingrédient de mes recettes vont s'afficehr 
    verifrecipes(recipearemp); // vérifier si mon tableau n'est pas vide et afficher les recettes 
    showapp(recipearemp) // afficher les appareils 


    
})


    
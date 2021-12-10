function displayselect(choix, pourdiv, pourfleche) {
    if (choix == "afficher") {
        pourdiv.classList.replace("unplayed", "played");
        pourfleche.classList.replace("fa-chevron-down", "fa-chevron-up");
        
    }

    else {
        pourdiv.classList.replace("played", "unplayed");
        pourfleche.classList.replace("fa-chevron-up", "fa-chevron-down");

    }
}

Appfleche.addEventListener("click", () => {
    if (playedapp.classList[1] == "unplayed") {
        displayselect("afficher", playedapp, iapp);
        displayselect("pasafficher", playedusten, iusten);
        displayselect("pasafficher", playeding, iing);
    }

    else if (playedapp.classList[1] == "played") {
        displayselect("pasafficher", playedapp, iapp);
    }
    actualisationChoiceFilters()
})

ustenfleche.addEventListener("click", () => {
    if (playedusten.classList[1] == "unplayed") {
        displayselect("afficher", playedusten, iusten);
        displayselect("pasafficher", playedapp, iapp);
        displayselect("pasafficher", playeding, iing);
    }
    else {
        displayselect("pasafficher", playedusten, iusten);
    }
    actualisationChoiceFilters()
});


Ingfleche.addEventListener("click", () => {
    if (playeding.classList[1] == "unplayed") {
        displayselect("afficher", playeding, iing);
        displayselect("pasafficher", playedusten, iusten);
        displayselect("pasafficher", playedapp, iapp);
    }
    else  {
        displayselect("pasafficher", playeding, iing);
    }
    actualisationChoiceFilters()
})


function displayChoiceFilters(data) {
    var appl = [];
    var usten = [];
    var ing = [];

    for (var i = 0; i < data.length; i++) {

        appl.push(data[i].appliance)
    }

    var appl = Array.from(new Set(appl));

    for (var j = 0; j < appl.length; j++) {

        var myli = document.createElement('li');
        myli.className = "monli"
        myli.id = appl[j];
        myli.textContent = appl[j];
        let filtres = document.querySelector(".appul");
        filtres.appendChild(myli)

    }

    for (var i = 0; i < data.length; i++) {

        for (var m = 0; m < data[i].ustensils.length; m++) {
            
            usten.push(data[i].ustensils[m]);
            var usten = Array.from(new Set(usten));
        }
    }

    for (var j = 0; j < usten.length; j++) {

        var myli2 = document.createElement('li');
        myli2.className = "monli2";
        myli2.id = usten[j];
        myli2.textContent = usten[j];
        filtres2.appendChild(myli2);
    }

    for (var i = 0; i < data.length; i++) {
        for (var m = 0; m < data[i].ingredients.length; m++) {

            ing.push(data[i].ingredients[m].ingredient)
            var ing = Array.from(new Set(ing));
        }
        
    }
    
    for (var j = 0; j < ing.length; j++) {
        var myli3 = document.createElement('li');
        myli3.className = "monli3"
        myli3.id = ing[j];
        myli3.textContent = ing[j];
        filtres3.appendChild(myli3)
    }

}


searchApp.addEventListener('keyup', (e) => {

    charrech = e.target.value.toLowerCase();
    apparemp = []

    
    if (charrech.length > 2) {

        const result = recipes.filter(recette => {
        return recette.appliance.toLowerCase().includes(charrech)
        });
        filtres.innerHTML = ""
        displayChoiceFilters(result)

        actualisationChoiceFilters()
    }

    else {

        filtres.innerHTML = ""
        
        displayChoiceFilters(recipes)
        actualisationChoiceFilters()
            
    }
})

searchUsten.addEventListener('keyup', (e) => {

    charrech = e.target.value.toLowerCase();
    apparemp = [];
    result = [];

    
    if (charrech.length > 2) {

        recipes.filter(recette => {

            recette.ustensils.some((ustensil) => {
                if (ustensil.toLowerCase().includes(charrech)) {
                                     result.push(ustensil);

                }
            })
        });

        var result = Array.from(new Set(result));
        filtres2.innerHTML = "";

        for (var j = 0; j < result.length; j++) {

            var myli2 = document.createElement('li');
            myli2.className = "monli2"
            myli2.id = result[j];
            myli2.textContent = result[j];
            filtres2.appendChild(myli2)
        }

        actualisationChoiceFilters()
    }

    else {

        filtres2.innerHTML = "";
        displayChoiceFilters(recipes);
        actualisationChoiceFilters()
            
    }

})

searchIng.addEventListener('keyup', (e) => {

    charrech = e.target.value.toLowerCase();
    apparemp = [];
    result = [];

    
    if (charrech.length > 2) {

        recipes.filter(recette => {
            recette.ingredients.some((ingrediente) => {
                if (ingrediente.ingredient.toLowerCase().includes(charrech)) {
                                     result.push(ingrediente.ingredient);

                }
            })
        });

        var result = Array.from(new Set(result));
        filtres3.innerHTML = "";

        for (var j = 0; j < result.length; j++) {

            var myli3 = document.createElement('li');
            myli3.className = "monli3"
            myli3.id = result[j];
            myli3.textContent = result[j];
            filtres3.appendChild(myli3)
        }

        actualisationChoiceFilters()
    }

    else {

        filtres3.innerHTML = "";
        displayChoiceFilters(recipes);
        actualisationChoiceFilters
            
    }
})

const monapp2 = () => {

    var text1 = document.querySelectorAll('.monli')

    text1.forEach((appp) => {
        appp.addEventListener('click', () => {
            filtred.push(appp.id)
            displayfilters(filtred)

        })
    })
    
    
}

const monusten2 = () => {

    var text2 = document.querySelectorAll('.monli2');
    text2.forEach((ustenn) => {
        ustenn.addEventListener('click', () => {
            filtred.push(ustenn.id)
            displayfilters(filtred)
        })
    })

}

const moning2 = () => {

    var text3 = document.querySelectorAll('.monli3')

    text3.forEach((ingg) => {
        ingg.addEventListener('click', () => {
            filtred.push(ingg.id)
            displayfilters(filtred)
        })
    })

}

function actualisationChoiceFilters() {
    monapp2()
    monusten2()
    moning2()
}

displayChoiceFilters(recipes)
actualisationChoiceFilters()


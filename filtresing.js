const Ingfleche = document.getElementById('flecheing')
var playeding = document.querySelector(".playing")
var iing = document.querySelector(".iing")
var filtres3 = document.querySelector(".ingul");
const searchIng = document.getElementById('searching')

Ingfleche.addEventListener("click", () => {
    if (playeding.classList[1] == "unplayed") {
        playeding.classList.replace("unplayed", "played");
        iing.classList.replace("fa-chevron-down", "fa-chevron-up");
        playedusten.classList.replace("played", "unplayed");
        iusten.classList.replace("fa-chevron-up", "fa-chevron-down");
        playedapp.classList.replace("played", "unplayed");
        iapp.classList.replace("fa-chevron-up", "fa-chevron-down");
    }

    else  {
        playeding.classList.replace("played", "unplayed");
        iing.classList.replace("fa-chevron-up", "fa-chevron-down");
    }

    monapp2()
    moning2()
    monusten2()
    
})

showing(recipes)

function showing (ingvar) {
    var ing = []
    for (var i = 0; i < ingvar.length; i++) {
        for (var m = 0; m < ingvar[i].ingredients.length; m++) {

            ing.push(ingvar[i].ingredients[m].ingredient)
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

    return ing

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

moning2()

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
        monapp2();
        moning2();
        monusten2();
    }

    else {
        filtres3.innerHTML = "";
        showing(recipes);
        monapp2();
        moning2();
        monusten2();
            
    }
})


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
            var madiv3 = document.createElement('div');
            var monp3 = document.createElement('p');
            var monx3 = document.createElement('i');
            monx3.id = ingg.id;
            monx3.className = "fas fa-times-circle";
            monp3.textContent = ingg.id;
            madiv3.className = ingg.id;
            madiv3.appendChild(monp3);
            madiv3.appendChild(monx3);
            mabarre.appendChild(madiv3);
            filtred.push(ingg.id);

            document.getElementById(ingg.id).addEventListener('click', () => {
                mabarre.remove(madiv3.className = ingg.id);
                monapp2();
                moning2();
                monusten2(); 
            })
        })
    })

}

moning2()


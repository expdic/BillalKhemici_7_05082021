const ustenfleche = document.getElementById('flecheusten');
var playedusten = document.querySelector(".playusten");
var iusten = document.querySelector(".iusten");
var filtres2 = document.querySelector(".ustenul");;
const searchUsten = document.getElementById('searchusten');
const monint2 = [];
var ustenSelectionned = [];
showusten(recipes);
showMonUsten(ustenSelectionned);

ustenfleche.addEventListener("click", () => {
    if (playedusten.classList[1] == "unplayed") {

        playedusten.classList.replace("unplayed", "played");
        iusten.classList.replace("fa-chevron-down", "fa-chevron-up");

        playedapp.classList.replace("played", "unplayed");
        iapp.classList.replace("fa-chevron-up", "fa-chevron-down");

        playeding.classList.replace("played", "unplayed");
        iing.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
    else {
        playedusten.classList.replace("played", "unplayed");
        iusten.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
    monapp2();
    moning2();
    monusten2();
});


function showusten(ustenvar) {
    var usten = [];
    for (var i = 0; i < ustenvar.length; i++) {
        for (var m = 0; m < ustenvar[i].ustensils.length; m++) { 
            usten.push(ustenvar[i].ustensils[m]);
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
}

function showMonUsten(ustenSelectionned) {
    ustenSelectionned.forEach((ustenn) => {
        ustenn.addEventListener('click', () => {
            var madiv2 = document.createElement('div');
            var monp2 = document.createElement('p');
            var monx2 = document.createElement('i');
            monx2.id = ustenn.id;
            monx2.className = "fas fa-times-circle";
            monp2.textContent = ustenn.id;
            madiv2.className = ustenn.id;
            madiv2.appendChild(monp2);
            madiv2.appendChild(monx2);
            mabarre.appendChild(madiv2);
        });
    
    });
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
        monapp2();
        moning2();
        monusten2();
    }

    else {
        filtres2.innerHTML = "";
        showusten(recipes);
        monapp2();
        moning2();
        monusten2();
            
    }
})
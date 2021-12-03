const ustenfleche = document.getElementById('flecheusten');
var playedusten = document.querySelector(".playusten");
var iusten = document.querySelector(".iusten");
var filtres2 = document.querySelector(".ustenul");
const searchUsten = document.getElementById('searchusten');
const monint2 = [];

showusten(recipes);

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
   

    /*var appl = []
    for (var i = 0; i < appvar.length; i++) {
        appl.push(appvar[i].ustensils)
    }

    var appl = Array.from(new Set(appl));
    console.log(appl)
    for (var j = 0; j < appl.length; j++) {
        var myli = document.createElement('li');
        myli.className = "monli2"
        myli.id = appl[j];
        myli.textContent = appl[j];
        let filtres = document.querySelector(".ustenul");
        filtres.appendChild(myli)
    }*/
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
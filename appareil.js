var mabarre = document.querySelector(".mabarre")
const Appfleche = document.getElementById('flecheapp')
var playedapp = document.querySelector(".playapp")
var iapp = document.querySelector(".iapp")
const searchApp = document.getElementById('searchapp')
var filtres = document.querySelector(".appul");

const monint = []

var text1 = document.querySelectorAll('.monli')

var madiv = document.createElement('div');
var monp = document.createElement('p');
var monx = document.createElement('i');

const filtred = []


showapp(recipes); // initialisation des filtres 





Appfleche.addEventListener("click", () => {
    if (playedapp.classList[1] == "unplayed") {
        playedapp.classList.replace("unplayed", "played");
        iapp.classList.replace("fa-chevron-down", "fa-chevron-up");
        
        playedusten.classList.replace("played", "unplayed");
        iusten.classList.replace("fa-chevron-up", "fa-chevron-down");

        playeding.classList.replace("played", "unplayed");
        iing.classList.replace("fa-chevron-up", "fa-chevron-down");
    
    }

    else if (playedapp.classList[1] == "played") {
        playedapp.classList.replace("played", "unplayed");
        iapp.classList.replace("fa-chevron-up", "fa-chevron-down");
    }

    monapp2()
    moning2()
    monusten2()
    
})



function showapp (appvar) {
    var appl = []
    for (var i = 0; i < appvar.length; i++) {
        appl.push(appvar[i].appliance)
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

    

}


const monapp2 = () => {
    var text1 = document.querySelectorAll('.monli')
    text1.forEach((appp) => {
        appp.addEventListener('click', () => {
            filtred.push(appp.id)
            displayfilters(filtred)

        })
    })
    
    
}


function displayfilters(tab) {
    var tab = Array.from(new Set(tab));
    console.log(tab)
    mabarre.innerHTML = ""
    mesrecettes=[]
    for (var i = 0; i < tab.length; i++) {
        var madiv = document.createElement('div');
        var monp = document.createElement('p');
        var monx = document.createElement('i');
        madiv.id = "filteronbar"
        monx.className = "fas fa-times-circle";
        monx.addEventListener("click", (event) => {
            removefilter(event.target.parentNode)
        })
        monp.textContent = tab[i];
        madiv.appendChild(monp);
        madiv.appendChild(monx);
        mabarre.appendChild(madiv);
        
    }


    let result = recipes


    for (var i = 0; i < tab.length; i++){
        result = result.filter(recette => {
        return recette.appliance.toLowerCase().includes(tab[i].toLowerCase())
            || recette.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(tab[i].toLowerCase()))
            || recette.ustensils.some((ustensil) => ustensil.toLowerCase().includes(tab[i].toLowerCase()));
        });
        
    }

    displayResult(result)
    
}
function removefilter(filter) {
    tab =[]
    console.log(mabarre.childNodes[0].textContent)
    filter.parentNode.removeChild(filter);
   
    for (var i = 0; i < mabarre.childNodes.length; i++) {
        tab.push(mabarre.childNodes[i].textContent)


    }
    let filtred = tab
    displayfilters(filtred)


}

searchApp.addEventListener('keyup', (e) => {
    charrech = e.target.value.toLowerCase();
    apparemp = []

    
    if (charrech.length > 2) {
        const result = recipes.filter(recette => {
        return recette.appliance.toLowerCase().includes(charrech)
        });
        filtres.innerHTML = ""
        showapp(result)

        monapp2()
        moning2()
        monusten2()
    }

    else {
        filtres.innerHTML = ""
        
        showapp(recipes)
        monapp2()
        moning2()
        monusten2()
            
    }
})
    







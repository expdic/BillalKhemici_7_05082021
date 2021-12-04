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

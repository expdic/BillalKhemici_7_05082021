function showrecipes(recipvar) {

    for (var i = 0; i < recipvar.length; i++) {
        var myArticle = document.createElement('article');
        var divvide = document.createElement('div');
        divvide.className = 'divvide';
        var sectioninfo = document.createElement('section');
        sectioninfo.className = 'sectioninfo';
        var divheader = document.createElement('div');
        var pname = document.createElement('p');
        pname.className = 'pname';
        var ptime = document.createElement('p');
        var clock = document.createElement('i')
        clock.className = 'far fa-clock'
        ptime.className = 'ptime';
        var aside = document.createElement('aside');
        var pdescription = document.createElement('p');
        pdescription.className = 'pdescription';
        var pul = document.createElement('ul');
        pul.className = 'pul';
        pname.textContent = recipvar[i].name;
        ptime.textContent = recipvar[i].time + "min";
        pdescription.textContent = recipvar[i].description;
  

        var ing = recipvar[i].ingredients;
        for (var j = 0; j < ing.length; j++) {
            var moning = document.createElement('li');
            if (ing[j].quantity == undefined) {
                moning.textContent = ing[j].ingredient;
                pul.appendChild(moning);
            }
            else {
                if (ing[j].unit == undefined) {
                    moning.textContent = ing[j].ingredient + " : " + ing[j].quantity;
                    pul.appendChild(moning);
                }

                else {
                    moning.textContent = ing[j].ingredient + " : " + ing[j].quantity + ing[j].unit; 
                    pul.appendChild(moning);
                }
            }
            
        }

        
        main.appendChild(myArticle);
        myArticle.appendChild(divvide);
        myArticle.appendChild(sectioninfo);
        sectioninfo.appendChild(divheader);
        sectioninfo.appendChild(aside);
        divheader.appendChild(pname);
        ptime.appendChild(clock)
        divheader.appendChild(ptime);
        aside.appendChild(pul);
        aside.appendChild(pdescription);
            
        
    }

} // cette fonction a pour but d'afficher les recettes et les mettres dans des balises html 

<<<<<<< HEAD

=======
>>>>>>> d83e480 (modif)
function verifrecipes(recipa) {

    if (recipa.length == 0) { // si mon tableau est vide 
        var divnoresult = document.createElement('div');
        divnoresult.className = 'divnoresult';
        var pnoresult = document.createElement('p');
        pnoresult.className = 'pnoresult';
        pnoresult.textContent = ' Veuillez renouveler vos recherches car nous n avons rien trouvé '
        divnoresult.appendChild(pnoresult);
        main.appendChild(divnoresult); // AFFICHER qu'il n'y pas de résultats 
    }
    
    else (
        showrecipes(recipa) // SINON, afficher les résultats .
    )
}

<<<<<<< HEAD
verifrecipes(recipes) 
=======
verifrecipes(recipes)
>>>>>>> d83e480 (modif)

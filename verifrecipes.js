
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

verifrecipes(recipes) 
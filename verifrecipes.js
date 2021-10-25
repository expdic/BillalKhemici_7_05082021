
function verifrecipes(data) {
    var recipa = data;
    if (recipa.length == 0) {
        var divnoresult = document.createElement('div');
        divnoresult.className = 'divnoresult';
        var pnoresult = document.createElement('p');
        pnoresult.className = 'pnoresult';
        pnoresult.textContent = ' Veuillez renouveler vos recherches car nous n avons rien trouvé '
        divnoresult.appendChild(pnoresult);
        main.appendChild(divnoresult);
    }
    else (
        showrecipes(recipa)
    )
}

verifrecipes(recipes)
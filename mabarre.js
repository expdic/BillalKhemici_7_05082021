function verifmabarre() {
    console.log(document.querySelectorAll('.monli').lenght == 0)
    if (document.querySelectorAll('.monli').lenght == 0){
        displayResult(recipes)
    }

    else {
        for (var i = 0; i < document.querySelectorAll('.monli'); i++){
            displayResult(research(document.querySelectorAll('.monli')[i]))

        }
    } 
}

monx.id = "closer";
            monx.className = "fas fa-times-circle"
            monp.textContent = appp.id;
            monp.className ="filter"
            madiv.appendChild(monp)
            madiv.appendChild(monx)
            mabarre.appendChild(madiv)
            verifmabarre()


            document.getElementById('closer').addEventListener('click', () => {
                madiv.remove(monp)
                madiv.remove(monx)
                verifmabarre()

                
            })
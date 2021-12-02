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


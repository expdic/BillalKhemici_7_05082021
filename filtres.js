
var mabarre = document.querySelector(".mabarre")
var filtres = document.querySelector(".appul");
const Appfleche = document.getElementById('flecheapp')
var playedapp = document.querySelector(".playapp")
var iapp = document.querySelector(".iapp")
const searchApp = document.getElementById('searchapp')

Appfleche.addEventListener("click", () => {
    if (playedapp.classList[1] == "unplayed") {
        playedapp.classList.replace("unplayed", "played");
        iapp.classList.replace("fa-chevron-down", "fa-chevron-up");
        iusten.classList.replace("fa-chevron-up", "fa-chevron-down");
        playedusten.classList.replace("played", "unplayed");
        playeding.classList.replace("played", "unplayed");
        iing.classList.replace("fa-chevron-up", "fa-chevron-down");
    }

    else if (playedapp.classList[1] == "played") {
        playedapp.classList.replace("played", "unplayed");
        iapp.classList.replace("fa-chevron-up", "fa-chevron-down");
    }

    monapp2()
    
})

showapp(recipes)



function showapp (appvar) {
    var appl = []
    for (var i = 0; i < appvar.length; i++) {
        var appl = Array.from(new Set(appl));
        appl.push(appvar[i].appliance)
    }
    var appl = Array.from(new Set(appl));
    for (var j = 0; j < appl.length; j++) {
        var myli = document.createElement('li');
        myli.className = "monli"
        myli.id = appl[j];
        myli.textContent = appl[j];
        filtres.appendChild(myli)
    }

    

}

const monint = []




    var text1 = document.querySelectorAll('.monli')
    searchApp.addEventListener('keyup', (e) => {
        charrech = e.target.value.toLowerCase();
        apparemp = []
        var monint = []

        for (var m = 0; m < recipes.length; m++) {
            for (var p = 0; p < text1.length; p++) {
                if (recipes[m].appliance.toLowerCase() == text1[p].innerText.toLowerCase()) {
                    monint.push(recipes[m])
                    var monint = Array.from(new Set(monint));
                

                }
            }
        }
        monapp2()

        if (charrech.length > 2) {
            for (var i = 0; i < monint.length; i++) {
                if (monint[i].appliance.toLowerCase().includes(charrech) == true) {
                    filtres.innerHTML = ""
                    apparemp.push(monint[i])
                    var apparemp = Array.from(new Set(apparemp));
                    showapp(apparemp)
                    monapp2()
                }

            }
        }

        else {
            filtres.innerHTML = ""
            showapp(recipes)
            monapp2()
        }
    })
    



var madiv = document.createElement('div');
var monp = document.createElement('p');
var monx = document.createElement('i');


const monapp2 = () => {
    var text1 = document.querySelectorAll('.monli')
    text1.forEach((appp) => {
        appp.addEventListener('click', () => {
        

            monx.id = "closer";
            monx.className = "fas fa-times-circle"
            monp.textContent = appp.id;
            madiv.appendChild(monp)
            madiv.appendChild(monx)
            mabarre.appendChild(madiv)

            

            document.getElementById('closer').addEventListener('click', () => {
                madiv.remove(monp)
                madiv.remove(monx)
                
            })
            
 
        })
    })
    
}



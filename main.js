let arrayNumber = [];
let arrayEliminatedNumber = [];
var turn = -1;
var number = 0;
NumberToShow = document.getElementById("number");
EliminatedNumber = document.getElementById("eliminatedNumber");

init()

function init(){
    //Générer les chiffres de 1 à 90 dans un tableau
    GenerateAllNumber();
}

//GenerateRandomNumber()

numberToShow = document.getElementById('number0');

function GenerateAllNumber(){
    //Si nombre compris entre 0 et 9, rajouter un 0 devant pour que ca fasse 2 chiffres
    for(let i = 1; i<=90; i++){
        if(i <=9){
            arrayNumber.push("0"+i)
        }else{
            arrayNumber.push(i)
        }
        
    }
    //console.log(arrayNumber);

    //Afficher la liste des chiffres restants
    RefreshList();
}

function LoadingAnimation(){
    //Affichage du loading pdt 3sec avant d'afficher le bon chiffre
    document.getElementById("number").innerHTML=`<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status"><span class="sr-only"></span></div>`
    window.setTimeout(GenerateRandomNumber, 3000);
}


function GenerateRandomNumber(){


    //Compter le nombre d'élement dans le tableau
    var countElementArray = 0;
    for(var i = 0; i < arrayNumber.length; ++i){
        countElementArray++;
    }

    if (countElementArray != 0){
        //console.log("Nombre d'élements dans le tableau : " + countElementArray);

        //Générer un chiffre rnd avec entre 0 et le nombre d'élement dans le tableau
        let rnd = Math.floor(Math.random() * countElementArray)
        // console.log("rnd " + rnd);
        // console.log("numero à l'affichage: " + arrayNumber[rnd])
        number = arrayNumber[rnd]

        //suppression dans le tableau de la valeur de rnd
        const index = arrayNumber.indexOf(number);
        if (index > -1) {
            arrayNumber.splice(index, 1);
            //console.log("Suppression de l'élement  " + arrayNumber[index] + " dans le tableau")
        }

        //afficher le numéro selectionné
        NumberToShow.innerText = number

        //Rafraichir la liste
        RefreshList();
       

        }else{
            
            console.log("Jeu fini");
        }

    }

    function RefreshList(){
        //Creation d'une variable contenant la Div "master" et d'une div "esclave"
        var mainDiv = document.getElementById("divEliminatedNumber")
        var div = document.getElementById("divToDeleted")
        

        //Destruction de la div esclave a supprimer, puis on la recrée pour la ré-emplir et donc rafraichir la liste des chiffres restants
        div.remove();
        var createDivDeleted = document.createElement("div");
        createDivDeleted.setAttribute("id", "divToDeleted")
        mainDiv.appendChild(createDivDeleted);

        //console.log("turn : " + turn)
        
        //Boucle pour afficher les numéros restant individuellement en label dans la div esclave crée plus haut
        var countElementArray = 0;
        for(var i = 0; i < arrayNumber.length; ++i){
            countElementArray++;
            var numLabel = document.createElement("Label");
            numLabel.setAttribute("class", "numberCopy")
            numLabel.setAttribute("id", "eliminatedNumber")
            numLabel.innerHTML = arrayNumber[i]
            createDivDeleted.appendChild(numLabel);
        }

        //A chaque passage de cette méthode Div esclave supprimée, ensuite recrée, et rafraichissement des datas

}
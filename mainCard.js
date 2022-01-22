const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const arrayCard = [];
var rnd = 0;
DivCardNumber = document.getElementById("divCard");



init();
function init(){

    Generator();
}



function Generator(){

    //Generation de 2 nombres aléatoires par dizaine
    //Boucle imbriquée ou 1er For généere i commencant a 10 et ayant u increment de 10, 
    //génere grace à la 2eme boucle (j), 2 numéro compris entre la dizaine de la 1ere boucle (i)
    // ! si dans la 1ere dizaine i=0, il sera remplacé par 1
    // ! Suite de la ligne precedente : Si dans 1ere dizaine, 0 est généré 2x alors Array[0] = 1 et Array[1] = 5
    // ! Dans 3eme boucle vérification que dans la meme dizaine il n'y ai pas 2x le meme chiffre
    for(var i =10 ; i<=90; i += 10){
        for (var j=0 ; j<=1; j++){
            //console.log("Limit : " + (i-10) + " - " + i)
            rnd = Math.floor(Math.random() * (i - (i-10))) + i-10;
            //console.log("rnd : " + rnd +"\n")
            if(rnd == 0){
                rnd =1
            }
            if(rnd == 0 && arrayCard[0] == 1){
                rnd = 5
            }
            console.log("array case precedent : " + arrayCard[arrayCard.length-1] + " rnd : " +rnd)
            if(arrayCard[arrayCard.length-1] == rnd){
                for(var k=0; k<=1; k++){
                    //console.log("IDENTIQUE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                    rnd = Math.floor(Math.random() * (i - (i-10))) + i-10;
                    //console.log("nouveau rnd : " + rnd)
                    if(arrayCard[arrayCard.length-1] == rnd){
                        //console.log("NOUVEAU RANDOM K !")
                        k=0;
                    }     
                }
            }

            if(rnd <=9){
                arrayCard.push("0"+rnd)
            }else{
                arrayCard.push(rnd)
            }
            
            //console.log("J: " + j +"\n")
        }
        
    }

    console.log("Array: " + arrayCard)
    Delete3Numbers();
}

function Delete3Numbers(){
    const oldRnd =0;
    //Condition pour la suppression de 3 nombres pour avoir une carte de 15 (actuellement 18 chiffres) :
    // Le if sert a ce que 2 chiffres de la meme dizaine ne soit pas supprimé ensemble, pour garder au moins 1 chiffre de chaque dizaine sur la carte

    console.log("Taille Array: " + arrayCard.length);
    for (var i =0; i<=2; i++){

        rnd = Math.floor(Math.random() * (arrayCard.length))
        if (rnd-1 == oldRnd || rnd+1 ==oldRnd){
            i--
            //console.log("IF, RND = " + rnd + " OLD RND : " + oldRnd)
        }else{
            //console.log("Element supprime: " + rnd + " val dans le tab " + arrayCard[rnd] )
            //console.log("Taille Array: " + arrayCard.length)
            arrayCard.splice(rnd, 1); 
            //console.log("Array: " + arrayCard)
        }
    }

    arrayCard.sort();
    console.log("Taille Array: " + arrayCard.length);
    console.log("Array trié : " + arrayCard)

    CreateDivWithNumber()
}

function CreateDivWithNumber(){

    for (var i =0; i<= arrayCard.length -1; i++){
        //var newDiv = document.createElement("div");

        // var newLabel = document.createElement("button");
        // newLabel.innerText = arrayCard[i];
        // newLabel.setAttribute("class", "btn");
        // newLabel.setAttribute("id", "unchecked");
        // newLabel.setAttribute("tag", arrayCard[i]);

        var newLabel = document.createElement("label");
        newLabel.innerText = arrayCard[i];
        newLabel.setAttribute("id", arrayCard[i]);
        newLabel.setAttribute("onclick", "numberControl(" + arrayCard[i] +")" );

    
        DivCardNumber.appendChild(newLabel);
    }
}

function numberControl(e){
    console.log("chiffre transmis : " + e)
    if (e <= 9){
        e = "0"+e;
    }

    var btn2 = document.getElementById(e);
    console.log(btn2);
    var isCheckClass = btn2.hasAttribute("class");
    console.log(isCheckClass);

    if (isCheckClass == false){
        //console.log("unchecked")
        btn2.setAttribute("class", "checked")
        //console.log("checked now")
    }else{
        //console.log("checked")
        btn2.removeAttribute("class");
        //console.log("unchecked now")
    }

    checkIfWin()
}

function checkIfWin(){

    var count = document.getElementsByClassName("checked").length;
    console.log(count)

    if (count == 15){
        Swal.fire({
            title: 'Vous avez gagné ! ',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }

}




function updateTextInput(val) {
    document.getElementById('textInput').value = val;
}


var loCArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
var upCArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var numCArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
var speCArray = ["!", "?", "#", "@", "~", "&", "_", "-",]
var passRand = []
// var passFin = passRand.join('');

function clearRandoPass() {

    document.getElementById('passInput').value = '';
    document.getElementById('passP').value = '';

}

document.getElementById("btnGen").addEventListener("click", clearRandoPass);


function makePass() {


    

    var char = document.getElementById("customRange").value;

    var check = {

        loC: document.getElementById("inlineCheckbox1").checked,
        upC: document.getElementById("inlineCheckbox2").checked,
        numC: document.getElementById("inlineCheckbox3").checked,
        speC: document.getElementById("inlineCheckbox4").checked

    };

    console.log(`Number of characters is ${char} \nWants Lower Case ${check.loC} \nWants Upper Case ${check.upC} \nWants Numbers ${check.numC} \nWants Special Characters ${check.speC}`);

    // let goodArray = check.filter(val => {
    //     return val === true
    // });

    // console.log(goodArray);


    if ((check.loC === true) && (check.upC === true) && (check.numC === true) && (check.speC === true)) {
        var passArray = loCArray.concat(upCArray, numCArray, speCArray)
        console.log(passArray)
    }
    else if ((check.loC === true) && (check.upC === true) && (check.numC === true) && (check.speC === false)) {
        var passArray = loCArray.concat(upCArray, numCArray)
        console.log(passArray)
    }
    else if ((check.loC === true) && (check.upC === true) && (check.numC === false) && (check.speC === true)) {
        var passArray = loCArray.concat(upCArray, speCArray)
        console.log(passArray)
    }
    else if ((check.loC === true) && (check.upC === false) && (check.numC === true) && (check.speC === true)) {
        var passArray = loCArray.concat(numCArray, speCArray)
        console.log(passArray)
    }
    else if ((check.loC === true) && (check.upC === true) && (check.numC === false) && (check.speC === false)) {
        var passArray = loCArray.concat(upCArray)
        console.log(passArray)
    }
    else if ((check.loC === true) && (check.upC === false) && (check.numC === true) && (check.speC === false)) {
        var passArray = loCArray.concat(numCArray)
        console.log(passArray)
    }
    else if ((check.loC === true) && (check.upC === false) && (check.numC === false) && (check.speC === true)) {
        var passArray = loCArray.concat(speCArray)
        console.log(passArray)
    }
    else if ((check.loC === true) && (check.upC === false) && (check.numC === false) && (check.speC === false)) {
        var passArray = loCArray
        console.log(passArray)
    }
    else if ((check.loC === false) && (check.upC === true) && (check.numC === true) && (check.speC === true)) {
        var passArray = upCArray.concat(numCArray, speCArray)
        console.log(passArray)
    }
    else if ((check.loC === false) && (check.upC === true) && (check.numC === true) && (check.speC === false)) {
        var passArray = upCArray.concat(numCArray)
        console.log(passArray)
    }
    else if ((check.loC === false) && (check.upC === true) && (check.numC === false) && (check.speC === true)) {
        var passArray = upCArray.concat(speCArray)
        console.log(passArray)
    }
    else if ((check.loC === false) && (check.upC === true) && (check.numC === false) && (check.speC === false)) {
        var passArray = upCArray
        console.log(passArray)
    }
    else if ((check.loC === false) && (check.upC === false) && (check.numC === true) && (check.speC === true)) {
        var passArray = numCArray.concat(speCArray)
        console.log(passArray)
    }
    else if ((check.loC === false) && (check.upC === false) && (check.numC === true) && (check.speC === false)) {
        var passArray = numCArray
        console.log(passArray)
    }
    else if ((check.loC === false) && (check.upC === false) && (check.numC === false) && (check.speC === true)) {
        var passArray = speCArray
        console.log(passArray)
    }
    else {
        alert("You need to check at least one of the boxes!")
    }

    // var passRand = [];

    for (var i = 0; i < char; i++) {

        var x = Math.floor(Math.random() * passArray.length);

        passRand.push(passArray[x]);
    }

    var passFin = passRand.join('');

    console.log("The Random Password is: " + passFin)

    function postRandoPass(val) {

        document.getElementById('passInput').innerHTML = val;
        document.getElementById('passP').innerHTML = val;

    }

    postRandoPass(passFin);

    
}

function copyPass() {
    /* Get the text field */
    var copyText = document.querySelector("#passInput");
    // console.log(passFin);
    
    copyText.select();

    // copyText.setSelectionRange(0, 99999)
    
    console.log(copyText);
    document.execCommand("copy");

    alert("Random Password Copied!")

}


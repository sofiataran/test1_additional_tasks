function verify() {

    let a = parseFloat(elementA.innerText);
    let b = parseFloat(elementB.innerText);
    let c = parseFloat(elementC.innerText);
    
    let result;
    
    if (a < b && b < c) {
        result = "Неравенство A < B < C выполняется.";
    }

    else if (a < b && b > c) {
        result = "Неравенство A < B > C выполняется.";
    }
  
    else {
        result = "Ни одно из неравенств не выполняется.";
    }
    
    document.getElementById("result").innerText = result;
}

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");

const elementVerify = document.getElementById("verify");

elementVerify.addEventListener('click', verify);

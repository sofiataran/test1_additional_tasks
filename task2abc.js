function verify() {

    let a = parseFloat(elementA.value);
    let b = parseFloat(elementB.value);
    let c = parseFloat(elementC.value);
    console.log(a, b, c);

    let result;

    if (a < b && b < c) {
        result = "Неравенство A < B < C выполняется";
        check = true;
    } else if (a < b && b > c) {
        result = "Неравенство A < B > C выполняется";
        check = true;
    } else {
        result = "ОШИБКА. Ни одно из неравенств не выполняется. Повторите ввод";
        check = false;
    }

    document.getElementById("result").innerText = "Результаты вычислений: " + result;
    document.getElementsByName('result')[0].value = result;
}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText;
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Ошибка. Повторите ввод");
    }
}

let result;
let check = false;

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");

elementA.addEventListener('input', verify);
elementB.addEventListener('input', verify);
elementC.addEventListener('input', verify);

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send);

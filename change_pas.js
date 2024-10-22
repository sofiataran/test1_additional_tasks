const change = document.getElementById("change");

function change_data() {

    if (document.getElementsByTagName('div')[3].innerHTML.trim() === 'ТАРАН') {
        document.getElementsByTagName('div')[3].innerHTML = 'TARAN';
        document.getElementsByTagName('div')[4].innerHTML = 'SOFIA';
        document.getElementsByTagName('div')[5].innerHTML = 'MIKHAILOVNA';
        document.getElementsByTagName('div')[9].innerHTML = '<img src="кот2.jpg" height="148" width="118"/>';
    } 

    else {
        document.getElementsByTagName('div')[3].innerHTML = 'ТАРАН';
        document.getElementsByTagName('div')[4].innerHTML = 'СОФЬЯ';
        document.getElementsByTagName('div')[5].innerHTML = 'МИХАЙЛОВНА';
        document.getElementsByTagName('div')[9].innerHTML = '<img src="кот1.png" height="148" width="118"/>';
    }
}

change.addEventListener("click", change_data);

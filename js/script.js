var raca = [];

function addRaca(){
    if (localStorage.meuRaca){
        raca = JSON.parse(localStorage.getItem('meuRaca'));
    }

    let novaRaca = document.getElementById("n").value;
    raca.push(novaRaca);
    document.getElementById("n").value = "";
    localStorage.meuRaca = JSON.stringify(raca);
}

function showRaca(){
    let resultDIV = document.getElementById('r');
    resultDIV.innerHTML = "";
    if (localStorage.meuRaca){
        raca = JSON.parse(localStorage.getItem('meuRaca'));
    }

    for(var i in raca){
        let p = document.createElement("p");
        p.innerHTML = raca[i];
        resultDIV.append(p);
    }
}

function clearRaca(){
    raca = []
    localStorage.meuRaca = JSON.stringify(raca);
}

//--------------------------------------------------------------------------------------------------------------

var cao = [];

function addCao(){
    if (localStorage.meuCao){
        cao = JSON.parse(localStorage.getItem('meuCao'));
    }

    let nomeCao = document.getElementById("n").value;
    cao.push(nomeCao);
    document.getElementById("n").value = "";
    localStorage.meuCao = JSON.stringify(cao);

    let sexoCao = document.getElementById("s").value;
    cao.push(sexoCao);
    document.getElementById("s").value = "";
    localStorage.meuCao = JSON.stringify(cao);

    let racaCao = document.getElementById("r").value;
    cao.push(racaCao);
    document.getElementById("r").value = "";
    localStorage.meuCao = JSON.stringify(cao);
}


function showCao(){
    let resultDIV = document.getElementById('d');
    resultDIV.innerHTML = "";
    if (localStorage.meuCao){
        cao = JSON.parse(localStorage.getItem('meuCao'));
    }

    for(var i in cao){
        let p = document.createElement("p");
        p.innerHTML = cao[i];
        resultDIV.append(p);
    }
}

function clearCao(){
    cao = []
    localStorage.meuCao = JSON.stringify(cao);
}
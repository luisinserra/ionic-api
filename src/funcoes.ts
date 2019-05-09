export function getNomes() {
    console.log("Em getNomes...");
    var promiseObj = new Promise(function(resolve, reject) {
        const script = document.createElement("script");
        script.src="http://clevermidia.com.br/ursoClientes2.php";
        script.async = true;
        document.body.appendChild(script);
        let conta=0;
        let inter=window.setInterval(function() {
            //conta=parseInt(conta, 10);
            console.log("conta: "+conta);
            ckTem('contentScript') ? console.log('tem memo') : console.log('sem memo');
            if (conta > 5 || ckTem('contentScript')) {
                console.log("Tem memo");
                let nomes=getMemo('contentScript').registros;
                try {
                    document.body.removeChild(script);
                } catch (e){}
                window.clearInterval(inter);
                resolve(nomes);
            }
            if (conta > 5 && !ckTem('contentScript')) {
                console.log("Extrapolou conta ("+conta+") e não tem");
                try {
                    document.body.removeChild(script);
                } catch (e){}
                reject();
                window.clearInterval(inter);
            }
            window.clearInterval(inter);
            conta++;
        },1000);
    });
    return promiseObj;
}

export function getServico(url) {
    var promiseObj = new Promise(function(resolve, reject) {
        const script = document.createElement("script");
        script.src=url;
        script.async = true;
        document.body.appendChild(script);
        let conta=0;
        let inter=window.setInterval(function() {
            //conta=parseInt(conta, 10);
            ckTem('contentScript') ? console.log('tem memo') : console.log('sem memo');
            if (conta > 5 || ckTem('contentScript')) {
                let resposta=getMemo('contentScript');
                try {
                    document.body.removeChild(script);
                } catch (e){}
                window.clearInterval(inter);
                resolve(resposta);
            }
            if (conta > 5 && !ckTem('contentScript')) {
                try {
                    document.body.removeChild(script);
                } catch (e){}
                reject();
            }
            conta++;
        },1000);
    });
    return promiseObj;
}

var vetor = [];
export function putMemo(chave, valor) {
    vetor[chave] = valor;
}
export function getMemo(chave) {
    return vetor[chave];
}
export function delMemo(chave) {
    delete vetor[chave];
}
export function ckTem(que) {
    var retorno = false;
    var ck = getMemo(que);
    if (ck != undefined)
        retorno = true;
    return retorno;
}

export function putContentMemo(parm){
    putMemo('contentScript',parm);
}

export function testeFuncoes() {
    console.log("Testou");
}
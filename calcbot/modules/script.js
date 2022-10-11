// FUNCTIONS AUTOMATIZADAS //

// CLASS FOR SHOWMORE //


function showmore1() {

    let x = document.getElementById('ht1'); // Text
    let y = document.getElementById('bm1');

        if(x.style.display === 'none'){
            x.style.display = 'block';
            y.innerHTML = 'Hidden!';
        } else {
            x.style.display = 'none';
            y.innerHTML = 'More!';
        }
}

function showmore2() {
    let x = document.getElementById('ht2'); // Text
    let y = document.getElementById('bm2');

        if(x.style.display === 'none'){
            x.style.display = 'block';
            y.innerHTML = 'Hidden!';
        } else {
            x.style.display = 'none';
            y.innerHTML = 'More!';
        }
}

// FUNCTIONS FOR HEADER BUTTONS //

function calculator() {
    const date = new Date();
    
    let num1 = prompt('(BOT) Vamos começar o cálculo.\nMe informe um número para ser adicionado a conta.\n');

    while(num1 == ''){
        alert('(BOT) Não consegui identificar o número que você colocou! Por favor, me informe novamente.\n');
        num1 = prompt('(BOT) Me informe um número válido!\n');
        if(num1 == undefined || num1 == null){
            alert('(BOT) Ok, cálculo fechado.\n');
            return true;
        }
    }

    while(isNaN(num1) == true) {
        console.log(`O usuário informou um valor inválido.\nLocal: First Prompt.\nHora: ${date.getHours()}:${date.getMinutes()}`);
        alert('(BOT) Você só pode informar-me números!\n');
        num1 = prompt('(BOT) Me informe um número válido!\n');
        if(num1 == undefined || num1 == null){
            alert('(BOT) Ok, cálculo fechado.\n');
            return true;
        }
    }

    if(num1 == undefined || num1 == null){
        alert('(BOT) Ok, cálculo fechado.\n');
        return true;
    }

    //

    let operador = prompt(`(BOT) Ok, o 1° número informado é: [${num1}]\nAgora me informe o operador.\nOperadores válidos: +, -, /, *`);
    
    while(operador != '+' && operador != '-' && operador != '/' && operador != '*'){
        alert('(BOT) Não consegui identificar o operador, por favor insira um operador válido!\n');
        operador = prompt(`(BOT) Por favor insira um operador válido!\nOperadores disponíveis: +, -, /, *`);
        if(operador == undefined || operador == null){
            alert('(BOT) Ok, cálculo fechado.\n');
            return true;
        }
    }

    //

    let num2 = prompt('(BOT) Agora me informe um segundo número para a conta.\n');

    while(num2 == ''){
        alert('(BOT) Não consegui identificar o número que você colocou!\n');
        num2 = prompt('(BOT) Me informe um número válido!\n');
        if(num2 == undefined || num2 == null){
            alert('(BOT) Ok, cálculo fechado.\n');
            return true;
        }
    }

    while(isNaN(num2) == true) {
        console.log(`O usuário informou um valor inválido.\nLocal: Second Prompt.\nHora: ${date.getHours()}:${date.getMinutes()}`);
        alert('(BOT) Você só pode informar-me números!\n');
        num2 = prompt('(BOT) Me informe um número válido!\n');
        if(num2 == undefined || num2 == null){
            alert('(BOT) Ok, cálculo fechado.\n');
            return true;
        }
    }

    if(num2 == undefined || num2 == null){
        alert('(BOT) Ok, cálculo fechado.\n');
        return true;
    }

    //

    let result;
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if(operador === '+'){
        result = num1 + num2;
    } else if(operador === '-'){
        result = num1 - num2;
    } else if(operador === '/'){
        result = num1 / num2;
    } else if(operador === '*'){
        result = num1 * num2;
    }

    let showres = document.getElementById('presult');
    showres.innerHTML = `O resultado da conta [${num1} ${operador} ${num2}], retornou como resultado: <b id="result">${result}</b>.<br>Horário do cálculo: <b>${date.getHours()}:${date.getMinutes()}hs</b>.`;
}
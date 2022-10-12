function send() {
    let x = document.querySelector('.apisend');
    let api = x.value;
    let info = new Date();


    function data() {
        let els = document.getElementById('pinformations');
        els.innerHTML = `Ao tentar conexão com a API fornecida, recebi as informações:<br><b style="color: red;">${this.responseText}</b>`;
        els.style.display = 'block';
    }

    let conf = confirm(`(SERVER) Você quer realmente abrir a solicitação para o Servidor, com a URL API: [${api}] ?`);
        if(conf == true){
            let els;
            let request = new XMLHttpRequest();
            request.onload = data;
            request.open('GET', `https://${api}`, true);
            request.send();
        } else {
            alert(`(SERVER) Solicitação negada.`);
            console.log(`O usuário negou a solicitação com API Send.\nHora: ${info.getHours()}:${info.getMinutes()}`);
        }
}
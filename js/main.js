function relogio(){
    function pegarSegundos(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'GMT'
        })
    }
    
    let segundos = 0;
    let timer;
    const relogio = document.querySelector("#relogio");
    const iniciar = document.querySelector("#iniciar");
    const pausar = document.querySelector("#pausar");
    const zerar = document.querySelector("#zerar");
    
    function iniciarRelogio(){
        timer = setInterval(function(){
        segundos ++;
        relogio.innerHTML = pegarSegundos(segundos)
        }, 1000)
    }
    
    document.addEventListener('click', function(e){
        el = e.target;
        if(el.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciarRelogio()
        }
        if(el.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
        if(el.classList.contains('zerar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    })
    
}
relogio();
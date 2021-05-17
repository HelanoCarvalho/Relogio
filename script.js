function mostra(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    if (hora < 10){
        hora = "0" + hora
    }
    if (min < 10){
        min = "0" + min
    }
    msg.innerHTML = `Agora são ${hora}:${min} horas`

    if (hora >= 0 && hora <= 5){
        img.src = 'madrugada.png'
        document.body.style.background = '#34332a'
    } else if (hora <= 11 ){
        img.src = 'manha.png'
        document.body.style.background = '#db935f'
    } else if (hora <= 17){
        img.src = 'tarde.png'
        document.body.style.background = '#de7b5a'
    } else{
        img.src = 'noite.png'
        document.body.style.background = '#6f4d60'
    }

    
    setInterval(function intervalo(){ 
        mostra()
    }, 1000);
}
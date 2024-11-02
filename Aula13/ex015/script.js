function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var resimg = document.querySelector('div#resimg')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src','criança_homen.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','jovem_homem..jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','adulto_homen.jpg')
            }else{
                //idoso
                img.setAttribute('src','idoso-homen.jpg')
            }
        }else if(fsex[1].checked){
                        gênero = 'Mulher'

            if(idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src','criança_mulher.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','jovem_mulher.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','adulto_mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src','idosa-mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos  ${gênero} com  ${idade}  anos. ` 
        res.appendChild(img)
    }
}
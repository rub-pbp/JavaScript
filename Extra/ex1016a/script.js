function conta() 
{
    var ini  = document.getElementById('txti')
    var fini = document.getElementById('txtf')
    var pas  = document.getElementById('txtp')
    var res = document.getElementById('res')  
          
    let i =Number(ini.value)
    let f =Number(fini.value)
    let p =Number(pas.value)
    
   if((ini.value.length==0) || (fini.value.length==0) || (pas.value.length==0))
    {

        alert('Todos os campos sao obrigatórios -  Preencha-os!')
        res.innerHTML='dados deram chabú'

    } else
    {   
        res.innerHTML = ` `
        if(f > i)
        {   res.innerHTML=`f > i   `           
            for( let j = i ; j <= f ; j += p)
            {
                    res.innerHTML += `${j}   \u{1F6A9}  `
            }
        } else{
            res.innerHTML=`i > f   ` 
            for( let j = i ; j >= f ; j -= p)
            {
                    res.innerHTML += `${j}   \u{1F6A9}  `
            }
        }
        res.innerHTML += `    \u{1F648}`
        res.innerHTML += `\u{1F649}`
        res.innerHTML += `\u{1F64A}`
      
    }    
    

}
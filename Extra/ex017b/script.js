function recita(){
   var mul = window.document.getElementById('txtm')
   var res= window.document.getElementById('res')
   var m = Number(mul.value)
   alert(`o multiplicador é: ${m}`)
   res.innerHTML=""
   for( let j=1; j<10;j++){
    res.innerHTML+=`${m} x ${j} = ${m*j} <br>` 
   }
}  
/*function soma(n1=0,n2=0)
{
    return n1+n2
}
console.log(soma())


function fatorial(n)
{
    let fat=1
    for(let c = n; c >1 ;c--)
    {
      fat*=c
    }
    return fat
}

console.log(fatorial(5))

*/

function fator(n)
{
    if(n==1){
        return 1
    }else{
        return (n*fator(n-1))
    }
}

console.log( fator(5) ) 
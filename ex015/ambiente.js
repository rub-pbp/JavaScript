var num=[5,8,4]
num[3]=6

num.sort()
num.push(2)
console.log(`Nosso vetor é o ${num}`)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o valor de num[0] é ${num[0]}`)
for(let i=0;i<num.length;i++){
    console.log(`num[${i}] = ${num[i]}`)
    }

for( let pos in num ){   
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)

}  

console.log(`o valor 6 está na posição ${ num.indexOf(6)}`)
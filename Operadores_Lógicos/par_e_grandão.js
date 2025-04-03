num = 18
if (num % 2 == 0 && num > 10) {
    console.log(`${num} é par e maior que 10`)
} else if (num % 2 == 0){
    console.log(`${num} é par`)
}else if (num > 10) {
    console.log(`${num} é maior que 10`)
} else {
    console.log(`${num} não atende a nenhum dos requisitos`)
}
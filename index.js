function filtrarPares(arr){
    nova_arr = []
    for(let i=0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            nova_arr.push(arr[i])
        }
    }

    return nova_arr
}
arr = [1,2,3,4,5,6]
resultado = filtrarPares(arr)
console.log(resultado)

/*function filtrarPares(numero){
    if(numero % 2 === 0){
    return("é par")}
    else(numero % 2 === 1)
        return("é impar")
    
}
console.log(filtrarPares(4)) */
function num2(arr){
    var max = arr[0]
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }
    }
    console.log(max)
}
num2([10, 20, 60, 30, 40])
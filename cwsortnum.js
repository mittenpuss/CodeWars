function superSize(num){

    var num2=String(num).split("").sort().reverse().join("")

    return Number(num2)
    }

    console.log(superSize(124536))
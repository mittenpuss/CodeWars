//Sum Mixed Array
//Given an array of integers as strings and numbers, 
//return the sum of the array values as if all were numbers.
//Return your answer as a number.

function sumMix(x){
    var y = x.map(Number)
    var sum=0
    for(i=0;i<y.length;i++){
        sum+=y[i]
    }
    return sum

    }
    
    console.log(sumMix([3,5,"6",3,"2"]))

const sumMix=(x)=>{
    var y=x.map(Number)
    const z= y.reduce((a,b)=>{
        return a+b
    })
    //cara penulisan lain
    // var z= y.reduce(a,b){
    // return a+b
    // }
    return z
}

console.log(sumMix([3,5,"6",3,"2"]))

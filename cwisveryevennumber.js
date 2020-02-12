function isVeryEvenNumber(input){

    var coba=true

    while(coba){ 
    if(input>=10){
        var input2=String(input).split("").map(Number)
        var input=input2.reduce((a,b)=>{
            return a+b
        })
    }else{
        coba=false
    }}

    if(input%2==0){
        return true
    }else{
        return false
    }

}

console.log(isVeryEvenNumber(0))
console.log(isVeryEvenNumber(4))
console.log(isVeryEvenNumber(12))
console.log(isVeryEvenNumber(222))
console.log(isVeryEvenNumber(5))
console.log(isVeryEvenNumber(45))
console.log(isVeryEvenNumber(4554))
console.log(isVeryEvenNumber(1234))
console.log(isVeryEvenNumber(88))
console.log(isVeryEvenNumber(24))
console.log(isVeryEvenNumber(400000220))

const inputs =    [0,    4,    12,    222,  5,     45,    4554,  1234,  88,    24,   400000220];
const expecteds = [true, true, false, true, false, false, false, false, false, true, true     ];
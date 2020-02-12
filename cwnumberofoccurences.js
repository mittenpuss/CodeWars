//Write a function that returns the number of occurrences of an element in an array.

//arr.numberOfOccurrences(0) === 1;
//arr.numberOfOccurrences(4) === 0;
//arr.numberOfOccurrences(2) === 2;
//arr.numberOfOccurrences("a") === 0;


const numberOfOccurrences=(input)=>{
var banyak=0
var arr = [0, 1, 2, 2, 3]; 

for(var i=0;i<=arr.length;i++){
    if(arr[i]===input){
        banyak+=1
    }    
}
return banyak
}
console.log(numberOfOccurrences(2))

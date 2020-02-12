function oddOrEven(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++){
        result+=array[i]
    }
    

    if (result%2 == 0){
        return "even"
    }else{
        return "odd"
    }
  }

console.log(oddOrEven([2,2,4,1]))


//memakai reduce
function oddOrEvenReduce(array){
    
    if(array.length==0)
    var x = array.reduce((a,b)=>{
        return a+b
    })

    if(x%2===0){
        return "even"
    }else{
        return "odd"
    }
}

console.log(oddOrEvenReduce([2,2,4,1,1,1]))

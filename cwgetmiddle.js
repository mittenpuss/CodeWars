

function getMiddle(input){

    var tengah = Math.ceil(input.length/2)

    if(input.length%2===1){
        return input.charAt(tengah-1)
    }else{
        return input.charAt(tengah-1) + input.charAt(tengah)
    }

}

console.log(getMiddle("bonita"))
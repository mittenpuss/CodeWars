function isDivisible(n, x, y) {
   
    if (n%x===0&&n%y===0){
      return true
    }else{
      return false
    }

    }

    console.log(isDivisible(100,2,4))
    console.log(isDivisible(100,3,4))
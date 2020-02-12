function countLettersAndDigits(input) {
    var total=0
    let lettersanddigits="abcdefghijklmnopqrstuvwxyz1234567890".split("")
    var semuainput=input.toLowerCase().split("")

    //kalau membandingkan 2 array, input diatas

    for(i=0;i<semuainput.length;i++){
        for(j=0;j<lettersanddigits.length;j++){
            if(lettersanddigits[j]===semuainput[i]){
                total+=1
            }else{
                total+=0
            }
    
        }
    }
    
    return total

}
  
  console.log(countLettersAndDigits("3r9320fd.sa.31!"))
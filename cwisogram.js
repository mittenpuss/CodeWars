

function isIsogram(str){
    for(i=0;i<str.length;i++){
    if (str.substring(i).includes(str.charAt(i))){
        return false
    }
    return true
  }
}

isIsogram("angga")

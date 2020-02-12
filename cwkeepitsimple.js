function isKiss( words ){
  
    var kata = 0
    var wordCount=5
    var henwo= words.split(" ")
    
    for(i=0;i<henwo.length;i++){
        var henwoski=[]
        for (j=0;j<henwo.length;j++){
            henwoski=henwo[j].split("")
            
            kata++

            if (kata>=wordCount){
                return "Keep it Simple Stupid"
            }
        }
    }

    return "Good Work Joe!"
  }

console.log(isKiss("words is what"))
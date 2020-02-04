function removeChar(str){
    var pisah = str.split("")
    pisah.pop("")
    pisah.shift("")
    var gabung = pisah.join("")
    return gabung
   }   


   console.log(removeChar("amiongk"))
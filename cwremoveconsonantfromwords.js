//remove vocals from words

const removeVocals=(input)=>{
var vokal="aiueo".split("")
var inputx=input.split("")
var isian=""
for(i=0;i<input.length;i++){
    for(j=0;j<vokal.length;j++){
        if(inputx[i]==vokal[j]){
            isian+=inputx[i]
        }
    }
}
return isian
}




console.log(removeVocals("hal!!!lohaloohaa"))

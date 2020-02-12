//remove vocals from words

const removeVocals=(input)=>{
    var vokal="aiueo".split("")
    var konsonanxvocal=input.split("")
    var konsonan=""
    var isivokal=""
    for(i=0;i<konsonanxvocal.length;i++){
        for(j=0;j<vokal.length;j++){
           if(input[i]===vokal[j]){
            isivokal+=konsonanxvocal[i]
           } 
           konsonan+=konsonanxvocal[i]  
        }
        
    }
    return konsonan
    }
    
    
    
    
    console.log(removeVocals("hallohaloohaa"))
    
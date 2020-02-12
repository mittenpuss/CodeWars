// return an array containing all of the strings in the input array 
//except those that match strings in geese
 

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    var jadinya=[]
    console.log(birds)
    for(i=0;i<birds.length;i++){
      if(!geese.includes(birds[i])){
        jadinya.push(birds[i])
      }
    }
    return jadinya
  }

  console.log(gooseFilter(["Mallard","Hook Bill","African","Crested","Pilgrim","Toulouse","Blue Swedish"]))


// var a=[2,4,2,47,5,3]
// var b=[7]
// var c=[]

// for(i=0;i<b.length;i++){
//     if(a.includes(b[i])){
//         console.log("ada")
//     }else{
//         console.log("tidak ada")
//     }
    
// }    
 
  console.log(gooseFilter(["Mallard","Hook Bill","African","Crested","Pilgrim","Toulouse","Blue Swedish"]))



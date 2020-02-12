function differenceInAges(ages){
    var output=[]
    for(i=0;i<ages.length;i++){
        
        if(ages[i+1]<ages[i]){
            var terkecil=ages[i]
        }

        if(ages[i+1]>ages[i]){
           var terbesar=ages[i]
        }

        if(terkecil<terbesar){
            var total=terbesar-terkecil
        }

        if(terkecil>terbesar){
            total=terkecil-terbesar
        }

      }

      var mantap=[terkecil,terbesar,total]
      return mantap    

    }
    

    console.log(differenceInAges([10,15,12,5,14,20]))


// At the annual family gathering, the family likes to find the oldest living family member’s age 
// and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. 
// The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0.
// Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

// Test.assertSimilar(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
// Test.assertSimilar(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);
// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// There will be preloaded a $dict with all this values in your kata in form of a hash $dict["E"] => 1.


const scrabbleScore=(str)=>{

    var a="aeioulnrst"
    var b="dg"
    var c="bcmp"
    var d="fhvwy"
    var e="k"
    var f="jx"
    var g="qz"

    var output=0
    for(i=0;i<str.length;i++){
        if(a.indexOf(str[i])!= -1){
            output+=1
        }

        if(b.indexOf(str[i])!= -1){
            output+=2
        }

        if(c.indexOf(str[i])!= -1){
            output+=3
        }

        if(d.indexOf(str[i])!= -1){
            output+=4
        }

        if(e.indexOf(str[i])!= -1){
            output+=5
        }
        
        if(f.indexOf(str[i])!= -1){
            output+=8
        }
        
        if(g.indexOf(str[i])!= -1){
            output+=10
        }

    }

    return output
}

console.log(scrabbleScore("cabbage"))
console.log(scrabbleScore("angga"))

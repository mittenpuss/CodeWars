// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
// Example:
// Input:
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
// Output:
// // 'alpha beta gamma delta'

function removeDuplicateWords (s) {
var a = s.split(" ")
var b=[]
for (i=0;i<a.length;i++){
    if(b.indexOf(a[i])=== -1){
        b.push(a[i])
    }
    }

    var c = b.join(" ")
    return c
}

console.log(removeDuplicateWords("alpha beta gamma alpha beta romeo alpha delta"))



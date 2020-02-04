function digitize(n) {
   

    var arr=n.toString()
    var pisah=arr.split("").reverse("").map(Number)
    return pisah
}
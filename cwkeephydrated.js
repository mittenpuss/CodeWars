function litres(time) {
  
    var kali=parseFloat((time*0.5))
    var kali=Math.floor(kali)
    
    return kali;
  }

console.log(litres(10.3))
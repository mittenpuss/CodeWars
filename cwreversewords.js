

  function solution(s){
    //variabel baru yang kosong buat nampung kata yang mau kita balik
    var output = '';

    //bikin perulangan for, jadi for akan berulang sepanjang i = s.length - 1
    //kenapa s.length-1 ? karena perulangan dimulai dari index terakhir ke index pertama,
    //soalnya kita mau balik urutan kata inputnya. dari world jadi dlrow
    //world length nya 5. maka total indexnya 4.
    for (var i = s.length - 1; i >= 0; i--)
      //variabel kosong ini bakalan nyimpen satu persatu huruf dari index terakhir ke index awal
      //s[4]=d , s[3]=l , s[2]=r , s[1]=o , s[0]=w
      //jadi nilai output yang kita punya itu dlrow
      output += s[i];
    
      //return nilai dari output yang diatas
      return output;
  }

  function solution(s){
      //jadi s itu dikasi function split (dipisah perkata). contoh: world, jadinya w o r l d
      //terus s di reverse (dibalik). contoh: w o r l d, jadi d l r o w
      //terus s di join (disambung). contoh d l r o w, jadi dlrow
      return s.split("").reverse().join("")
  }
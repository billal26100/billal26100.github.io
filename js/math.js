 console.log("in math.js");
 function Additionner()
  {
    const n1=Number(document.getElementById('n1').value);
    const n2=Number(document.getElementById('n2').value);
    const n3= n1 + n2;
    console.log(n3);
    document.getElementById("resultat").textContent= "resultat : " + n3
  }

function hasil_berat(){
    // var hasil = document.getElementById("hasil").innerHTML;
    //  hasil  =  Number(weight)/Math.pow(Number(height,2));
    var weight = parseInt(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    // var c = document.getElementById("hasil").innerHTML = weight*height;
    var c = document.getElementById("hasil").innerHTML =Math.round(weight/Math.pow(height,2));
//  var c = document.getElementById("hasil").innerHTML =weight/(height*height);

}


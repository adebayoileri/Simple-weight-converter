 document.getElementById("wrapper").style.visibility = "hidden";
 document.getElementById("value").addEventListener("input", function(e){
    document.getElementById("wrapper").style.visibility = "";
     let kgInput = e.target.value;
     document.getElementById("gramResult").innerHTML = kgInput*1000;
     document.getElementById("poundsResult").innerHTML = kgInput*2.205;
     document.getElementById("Ounceresult").innerHTML = kgInput*35.2874;
 });
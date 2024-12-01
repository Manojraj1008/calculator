let os = document.getElementById("os");

function display(num){
   os.value += num;
}
function calculate(){
   try{
      os.value = eval(os.value);
   }
   catch(err)
   {
      alert("Invalid")
   }
}
function Clear(){
   os.value = "";
}
function del(){
   os.value = os.value.slice(0,-1);
}


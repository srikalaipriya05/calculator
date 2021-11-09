let output=document.getElementById("output")
console.log(output);
function clr(){
    output.value="";
}
function display(num){
    output.value+= num;
}
function calc(){
    try{
        output.value=eval( output.value)
    }
    catch{
        alert("Invalid")
    }
}
function del(){
    output.value= output.value.slice(0,-1);
}
let Input = document.getElementById("Screen")

Input.addEventListener("change", function (){
    console.log(Input.value)
})

var sqrtFlag = false;
var perflag = false;

function bracketopen(){
    Input.value+='('
}
function bracketclose(){
    Input.value+=')'
}
function clr(){
    Input.value=""
}
function del(){
    Input.value = Input.value.substr(0,Input.value.length-1);
}
function set7(){
    Input.value+= "7"
}
function set8(){
    Input.value+= "8"
}
function set9(){
    Input.value+="9"
}
function Divide(){
    Input.value+="/"
}
function sqrt(){
    Input.value+="√"
    sqrtFlag=true;
    // var result= Math.sqrt(Input.value)
    // Input.value= result
}
function set4(){
    Input.value+= "4"
}
function set5(){
    Input.value+= "5"
}
function set6(){
    Input.value+= "6"
}
function multiply(){
    Input.value+= "*"
}
function percentage(){
    Input.value+= "%"
    perflag=true;
}
function set1(){
    Input.value+= "1"
}
function set2(){
    Input.value+= "2"
}
function set3(){
    Input.value+= "3"
}
function add(){
    Input.value+= "+"
}
function subtract(){
    Input.value+= "-"
}
function zero(){
    Input.value+= "0"
}
function doublezero(){
    Input.value+= "00"
}
function point(){
    Input.value+= "."
}
function equal(){
    if(sqrtFlag){
        // console.log(Input.value.substring(1,Input.value.length))
        Input.value = Math.sqrt(Input.value.substring(1,Input.value.length))
    }
    else if(perflag){
        let per=Input.value.split("%");
        // console.log(per)
        Input.value = parseFloat((per[0]*per[1])/100);
    }
    else{
        Input.value=eval(Input.value)
    }
    
}
let on = 'false'
function onoff() {

    if (on){
        Input.value = "CASIO.."
        setTimeout(() => {
            Input.value= ""
        }, 1000);
    }
    else{
        Input.value = "Good bye"
        setTimeout(() => {
            Input.value= ""
        }, 1000);
    }
    on = !on
    Input.disabled = on
}
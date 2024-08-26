const text = document.getElementById("text");
const tf = document.getElementById("o1");
const tc = document.getElementById("o2");
const res = document.getElementById("res");
let temp;

function convert(){
    if(tf.checked){
        temp = Number(text.value);
        temp = temp * 9 / 5 + 32;
        res.textContent = temp.toFixed(1) + "F";
    }
    else if(tc.checked){
        temp = Number(text.value);
        temp = (temp - 32) * (5/9);
        res.textContent = temp.toFixed(1) + "C";
    }
    else{
        res.textContent = "Select a unit";
    }
}
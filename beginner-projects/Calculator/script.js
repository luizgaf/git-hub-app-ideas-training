function calculate(){
    let fnum = parseInt(document.getElementById("firstNum").value);
    let snum = parseInt(document.getElementById("secondNum").value);
    let option = document.getElementById("operation-type").value;
    let result = document.getElementById("result");
    if(option == "sum"){
        result.value = fnum + snum;
    }
    if(option == "sub"){
        result.value = fnum - snum;
    }
    if(option == "mult"){
        result.value = fnum*snum;
    }
    if(option == "div"){
        result.value = fnum/snum;
    }
    if(fnum == "" || snum == ""){
        result.value = "please put all inputs values"
    }
}

document.getElementById("firstNum").addEventListener("keydown", function(event) {
    let allowed = "1234567890";
    let specialKeys = ["Backspace", "Tab", "Enter", "ArrowLeft", "ArrowRight", "Delete"];
    if(!allowed.includes(event.key) && !specialKeys.includes(event.key)){
        event.preventDefault();
    }
});

document.getElementById("secondNum").addEventListener("keydown", function(event) {
    let allowed = "1234567890";
    let specialKeys = ["Backspace", "Tab", "Enter", "ArrowLeft", "ArrowRight", "Delete"];
    if(!allowed.includes(event.key) && !specialKeys.includes(event.key)){
        event.preventDefault();
    }
});


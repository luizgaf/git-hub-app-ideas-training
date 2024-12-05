function binaryToDecimal(){
    let binaryBox = document.getElementById("binarybox");
    let decimalBox = document.getElementById("decimalbox");
    if(binaryBox.value === ""){
        decimalBox.value = "Insert Binary Num";
    }
    else{
        decimalBox.value = parseInt(binaryBox.value, 2);    
    }
}

document.getElementById("binarybox").addEventListener("keydown", function (event) {
    let allowedChars = "01";
    let specialKeys = ["Backspace", "Tab", "Enter", "ArrowLeft", "ArrowRight", "Delete"];
    if(!allowedChars.includes(event.key) && !specialKeys.includes(event.key)) {
        event.preventDefault();
    }
});
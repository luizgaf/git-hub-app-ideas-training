function changeBorderRadius(){
    let input = document.getElementById("radius-input");
    let element = document.getElementById("css-element");

    if(input.value != ""){
        element.style.borderRadius = `${input.value}px`;
    }
}

document.getElementById("radius-input").addEventListener("keydown", function(event){
    let allowed = "1234567890";
    let specialKeys = ["Backspace", "Tab", "Enter", "ArrowLeft", "ArrowRight", "Delete"];
    if(!allowed.includes(event.key) && !specialKeys.includes(event.key)){
        event.preventDefault();
    }
});

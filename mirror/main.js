output1 = document.getElementById("box1");
output2 = document.getElementById("box2");

inputEl = document.getElementById("message");

inputEl.addEventListener("keyup", function(event){
    output1.textContent = event.target.value;
    output2.textContent = event.target.value;
});








// donation




let btnClear = document.querySelector(".submit");
let inputs = document.querySelectorAll(".inPut");
btnClear.addEventListener("click", () => {
    inputs.forEach(input => input.value = "");
});


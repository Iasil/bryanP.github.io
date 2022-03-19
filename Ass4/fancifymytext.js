function hello() {
    alert("This should work");
}

function bigger() {
    let txtWords = document.querySelector("#userTxt");
    txtWords.style.fontSize = "24pt";
}

function fancify() {
    //get var from doc
    let txtWords = document.querySelector("#userTxt");
    let radioBtns = document.querySelectorAll("input[name='styleSelector']");
    let selectedBtn;

    //loop through all radio buttons to find which one selected
    for (const radioBtn of radioBtns) {
        if (radioBtn.checked) {
            selectedBtn = radioBtn.value;
            break;
        }
    }
    //if selected switch style
    if (selectedBtn === "fancy") {
        txtWords.style.fontWeight = "bold";
        txtWords.style.color = "blue";
        txtWords.style.textDecoration = "underline";
    }
    else {
        txtWords.style.fontWeight = "normal";
        txtWords.style.color = "black";
        txtWords.style.textDecoration = "none";
    }

}

function moo() {
    let txtWords = document.querySelector("#userTxt");
    txtWords.value = txtWords.value.toUpperCase();
    let parts = txtWords.value.split(".");
    txtWords.value = parts.join(".-Moo");
}
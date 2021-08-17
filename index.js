const tom1 = () => {
    let tom1 = new Audio("./sounds/tom-1.mp3")
    tom1.play();
}

const tom2 = () => {
    let tom2 = new Audio("./sounds/tom-2.mp3")
    tom2.play();
}

const tom3 = () => {
    let tom3 = new Audio("./sounds/tom-3.mp3")
    tom3.play();
}

const tom4 = () => {
    let tom4 = new Audio("./sounds/tom-4.mp3")
    tom4.play();
}

const snare = () => {
    let snare = new Audio("./sounds/snare.mp3")
    snare.play();
}

const crash = () => {
    let crash = new Audio("./sounds/crash.mp3")
    crash.play();
}

const kick = () => {
    let kick = new Audio("./sounds/kick-bass.mp3")
    kick.play();
}

document.addEventListener("keydown", function(event) {
    let keyValue = event.key
    keyValue === "w" ? tom1()
    : keyValue === "a" ? tom2()
    : keyValue === "s" ? tom3()
    : keyValue === "d" ? tom4()
    : keyValue === "j" ? snare()
    : keyValue === "k" ? crash()
    : keyValue === "l" ? kick()
    : console.log(`Key pressed wrong`);
})

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        
        switch (buttonInnerHTML) {
            case "w":
                tom1();
                break;

            case "a":
                tom2();
                break;

            case "s":
                tom3()
                break;
            
            case "d":
                tom4()
                break;

            case "j":
                snare();
                break;

            case "k":
                crash();
                break;

            case "l":
                kick();
                break;

            default: console.log(`${buttonInnerHTML} The default case is trigerred`)
        }
        // this.style.color = "#DBEDF3"
    })
}


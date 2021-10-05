function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// DIY material design input field
let inputField = document.getElementById("numberInput")

    inputField.addEventListener("focus", function(e) {
        document.getElementById("inputLabel").style.transform = "translateY(-1.35em)"
    })

    inputField.addEventListener("blur", function(e) {
        if(e.target.value == "") {
            document.getElementById("inputLabel").style.transform = "translateY(0)"
        }
    })


async function checkResult() {

    let sleepTime;

    if(true) {
        sleepTime = 3000;
    } else {
        sleepTime = 5000;
    }

    const popup = document.getElementById("popup")

        popup.style.display = "flex";
        await sleep(500);
        popup.style.transform = "translateY(0%)";

        await sleep(sleepTime);

        popup.style.transform = "translateY(-200%)"
        await sleep(500);
        popup.style.display = "none";
}

function switchType() {
    const arrow = document.getElementById("arrow");

        if(arrow.style.transform == "rotate(180deg)") {
            arrow.style.transform = "rotate(0)"
        } else {
            arrow.style.transform = "rotate(180deg)"
        }
        
}
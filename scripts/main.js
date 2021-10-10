var _MODE = "decimal";

let _RESULT = 0;

// make
class DigitalNumber {
    constructor(value) {
        this.value = value;
    }

    get type() {
        console.log("returning type");
        return this.type;
    }


    set setValue(value) {
        console.log("setting value")
        this.value = value;
    }

    get getValue() {
        console.log("Returning value")
        return this.value;
    }

    get binary() {
        return this.calcBinary();
    }

    get decimal() {
        return this.calcDecimal();
    }


    calcBinary() {
        console.log("Base is", 2);

        let bitArrary = [];
        recurse(this.value);

        function recurse(val) {
            if(Math.floor(val / 2) == 0) {
                bitArrary.push(val % 2)
                return;
            } else {
                console.log("Not 0:", val, "next:", Math.floor(val / 2));
                bitArrary.push(val % 2)
                recurse(Math.floor(val / 2))
            }
        }
        const result = parseInt(bitArrary.reverse().join(""))
        this.value = result;
        return result;
    }


    calcDecimal() {
        let bitArray = Array.from(String(this.value));
        bitArray.reverse();
        let decimal = 0;

        console.log("Bitarray", bitArray);
        console.log("======= STARTING ROCKET =========")
        for (let i = bitArray.length-1; i >= 0; i--) {

            console.log("power:", i, "number:", bitArray[i]);
            let res = bitArray[i] * Math.pow(2, i)

            decimal = decimal + res;

            console.log("Result:", res)
        }


        const result = parseInt(decimal);
        this.value = result;
        return result;
    }


}

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
    let correct = false;
    
    let userNumber = document.getElementById("numberInput").value

    console.log(`user number: ${userNumber} =? result: ${_RESULT.value}`);
    // check result
    if(_RESULT.value == userNumber ){
        correct = true;
        console.log(_RESULT.value, "==", userNumber);
    } else {
        console.log(_RESULT.value, "!=", userNumber);
    }

    // banner
    let sleepTime;

    if(correct) {
        sleepTime = 3000;
    } else {
        sleepTime = 5000;
    }

    const popup = document.getElementById("popup")


        // manipulate if wrong
        if(!correct) {
            document.getElementById("popupMessage").textContent = "Wrong!"
            let corretAnswer = document.createElement("span");
                corretAnswer.textContent = `Correct answer would be: ${_RESULT.value}`;
            popup.appendChild(corretAnswer);

            popup.style.color = "var(--red)";
            popup.style.backgroundColor = "var(--light-red)";

        }

        popup.style.display = "flex";
        await sleep(500);
        popup.style.transform = "translateY(0%)";

        await sleep(sleepTime);

        popup.style.transform = "translateY(-200%)"
        await sleep(500);
        popup.style.display = "none";
}

function switchType() {
    // default target is decimal

    const arrow = document.getElementById("arrow");

        if(arrow.style.transform == "rotate(180deg)") {
            arrow.style.transform = "rotate(0)"
        } else {
            arrow.style.transform = "rotate(180deg)"
        }
        
}

(function setup() {

    // make a random number
    const number = makeRandomBinary()
    document.querySelector("#task h3").textContent = number;

    // get result
    _RESULT = new DigitalNumber(number)
        _RESULT.decimal;
    
})();


function makeRandomBinary() {

    const bitLength = 4;

    let bitArray = []

    for(let i = 0; i <= bitLength; i++) {
        bitArray.push(Math.round(Math.random()));
    }
    return parseInt(bitArray.join(""));
}
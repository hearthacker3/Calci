var disp = document.querySelector(".display")


let display = (num) => {

    console.log("before function disp")
    disp.innerHTML += num
    // disp.value=""
    console.log("Function working disp")
}



let solve = () => {

    if (disp.innerHTML === "") {
        disp.innerHTML = "No input found"
    }

    else {
        let x = disp.innerHTML;
        let y = eval(x)

        disp.innerHTML += "=" + y
    }
}

function clr() {
    console.log("before function")
    disp.innerHTML = ""
    console.log("Function working")
}






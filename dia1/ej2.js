//1

function makeFullRectangle() {
    for (let i = 0; i < 5; i++) {
        console.log("*****")
    } 
}


// 2

function makeEmptyRectangle() {
    for (let i = 0; i < 5; i++) {
        if (i === 0 || i === 4) {
            console.log("*****");
        }
        else {
            console.log("*   *");
        }
    }   
}

// 3
function leftTriangle() {
    for (let i = 1; i <= 5; i++) {
        console.log("*".repeat(i));
    }
}


//4
function rightTriangle() {
    for (let i = 1; i <= 5; i++) {
        console.log("*".repeat(i).padStart(5));
    }
}



makeFullRectangle();
makeEmptyRectangle();
leftTriangle();
rightTriangle();
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");
var resetBtn = document.getElementById("restart");
var numOfBoxes = 6;
var colorBoxes = document.querySelectorAll(".color-box");
var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");
var box5 = document.querySelector("#box5");
var box6 = document.querySelector("#box6");
var blocksList = [];
var randBox = null;


function generate() {
    var r = Math.floor(Math.random() * 255) +1; 
    var g = Math.floor(Math.random() * 255) +1; 
    var b = Math.floor(Math.random() * 255) +1; 
    return {r, g, b};
}


function fillBoxes() {
    i = 0; 
    for (; i<numOfBoxes; i++) {
    var colorCoords = generate(); 
    colorBoxes[i].classList.remove("hidden-box");
    colorBoxes[i].style.backgroundColor= 'rgb('+ colorCoords["r"]+', '+colorCoords["g"] +', '+colorCoords["b"]+')';
    var tempName = "box"+i;
    var tempItem = {
        name: tempName,
        r: colorCoords["r"],
        g: colorCoords["g"],
        b: colorCoords["b"]

    };
    blocksList.push(tempItem);
}

    while (i < colorBoxes.length) {
        colorBoxes[i].style.backgroundColor= "black";
        // colorBoxes[i].classList.add("hidden-box");
        i++;
    }
    pickWhichBox();
}

easyBtn.addEventListener("click", function() {
    if (numOfBoxes != 3) {
        numOfBoxes = 3;
        fillBoxes();
    }
});


hardBtn.addEventListener("click", function() {
    if (numOfBoxes != 6) {
        numOfBoxes = 6;
        fillBoxes();
    }
});

resetBtn.addEventListener("click", function() {
    fillBoxes(numOfBoxes);
    document.getElementById("guessResult").textContent = "";
    console.log(numOfBoxes);
});


function pickWhichBox() {
    var randBoxIndex = Math.floor(Math.random() * numOfBoxes) ; 
    randBox = blocksList[randBoxIndex]; 
    console.log(randBox);
    document.getElementById("redID").textContent = randBox["r"];
    document.getElementById("greenID").textContent = randBox["g"];
    document.getElementById("blueID").textContent = randBox["b"];
};

function checkMatch(boxListIndex, box) {

    if(randBox["name"] === "box"+boxListIndex ) {
        document.getElementById("guessResult").textContent = "Winner!";
    }
    else {
        document.getElementById("guessResult").textContent = "Try Again!";
        // box.classList.add("hidden-box");
        box.style.backgroundColor= "black";
    }
}

box1.addEventListener("click", function() {
    checkMatch(0, box1); 
});
box2.addEventListener("click", function() {
    checkMatch(1, box2);
});
box3.addEventListener("click", function() {
    checkMatch(2, box3);
});
box4.addEventListener("click", function() {
    checkMatch(3, box4);
});
box5.addEventListener("click", function() {
    checkMatch(4, box5);
});
box6.addEventListener("click", function() {
    checkMatch(5, box6);
});

fillBoxes(6);
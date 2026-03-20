// find elements to use
const introDialog = document.getElementById("intro-dialog");
const dialogCloseButton = document.getElementById("dialog-close-button");
const playButton = document.getElementById("play-button");

// intro dialog setup
introDialog.showModal();

dialogCloseButton.addEventListener("click", closeDialog);

function closeDialog() {
    introDialog.close();
    Tone.start();
}

// Tone synth init
const synth = new Tone.Synth().toDestination();

// play sound with tone
function paleyNote(){
    synth.triggerAttackRelease("C4","8n")
}

//playButton.addEventListener("click", paleyNote);

function startNote(){
    synth.triggerAttack("C4");

    document.body.style.backgroundColor = "blue";
}

function endNote(){
    synth.triggerRelease();
    document.body.style.backgroundColor = "white";
}


playButton.addEventListener("mousedown", startNote);
playButton.addEventListener("mouseup", endNote);
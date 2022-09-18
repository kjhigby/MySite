const answerEl = document.querySelector(".answer")
const options = ["You bet your sweet bippy! 🥳", 
"Are you kidding?? 😉", "Of course! 💥", 
"No freaking way! 🙄", 
"I cannot believe you have to ask! 🥰", 
"That's ridiculous. Try again. 🦁", "For sure! 🐒", 
"Mostly yes! 👍", "Never! 👀", "Always! 🎉", 
"That's a little too personal. 🤫" , 
"Maybe, next year! 😌" , "Seriously?? 🤢"]
const genieEl = document.getElementById("genie");

answerEl.addEventListener("click", ()=>{
    answerQuestion();  
})

function answerQuestion() {
    
    const newOption = options[Math.floor(Math.random() * options.length)];
    console.log(newOption);
    document.getElementById("genie").innerHTML= newOption;
    setTimeout(reset, 3200) 
}

function reset () {
    document.getElementById("genie").innerHTML = "Ask 🧞 another question."
}

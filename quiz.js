const questions = [
    {
        question: "Which one is arrow function?",
        a: "function myaname()",
        b: "name()",
        c: "(myname)=>{....... }",
        d: "(){....}",
        correct: "c"
    },
    {
        question: "Can we call arrrow function without storing in a variable?example ()=>{...}",
        a: "YEs",
        b: "No",
        c: "Syntax erorr",
        d: "Okay",
        correct: "b"
    },
    {
        question: "how we add event in a button in JS?",
        a: "btn.click",
        b: "btn.addEventListener()",
        c: "button.addEventListener()",
        d: "addeventListner",
        correct: "c"
    }
];

let index = 0;
const questionTitle = document.querySelector("h2");
const options = document.querySelectorAll(".answere1");
const result = document.querySelector(".result");
const btn = document.querySelector(".button");

// Function to Load Question
function loadQuestion() {

    if (index >= questions.length) {
        result.innerHTML = "Quiz Completed!";
        btn.style.display = "none"; 
        return;
    }

    const obj = questions[index];

    questionTitle.innerHTML = `${index + 1}) ${obj.question}`;
    options[0].nextElementSibling.innerHTML= obj.a;
    options[1].nextElementSibling.innerHTML=obj.b;
    options[2].nextElementSibling.innerHTML=obj.c;
    options[3].nextElementSibling.innerHTML=obj.d;

    result.innerHTML = ""; 
    options.forEach(option => option.checked = false); 
}

// Function to Check Answer
function checkAnswer() {
    let selectedOption = null;

    options.forEach((option)=>{
        if(option.checked){
            selectedOption=option.value;
        }
    });

    if (!selectedOption) {
        result.innerHTML = "Please select an answer!";
        return;
    }

    const correctAnswer = questions[index].correct;
    if (selectedOption === correctAnswer) {
        result.innerHTML = "Correct ✅";
    } else {
        result.innerHTML = `Wrong ❌ Correct Answern is: ${questions[index][correctAnswer]}`;
    }

    setTimeout(() => {
        index++;
        loadQuestion();
    }, 1000); 
}


btn.addEventListener("click", checkAnswer);


loadQuestion();

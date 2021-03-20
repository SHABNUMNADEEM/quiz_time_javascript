const quizData=[
 {
        question:"Fathometer is used to measure?",
        a: "Earthquakes",
        b: "Rainfall",
        c: "Ocean depth",
        d: "Sound intensity",
        correct: "c", 
 },
 {
        question:"One People, One State, One leader” was the policy of?",
        a: "Stalin",
        b: "Hitler",
        c: "Lenin",
        d: "Mussolin",
        correct: "b",
 },
 {
        question:"An astronaut in outer space will observe sky as?",
        a: "White",
        b: "Black",
        c: "Blue",
        d: "Red",
        correct: "b",

 },

 {
        question:"Who is known as 'the father of Indian missile technology",
        a: "Dr. U.R. Rao",
        b: "Dr. A.P.J. Abdul Kalam",
        c: "Dr. Chidambaram",
        d: "Dr. Homi Bhabha",
        correct: "b",
 },

{
	    question:"Which is considered as the biggest port of India?",
        a: "Kolkata",
        b: "Cochin",
        c: "Chennai",
        d: "Mumbai",
        correct: "d",
},


];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}


function getSelected()
{
	let answer=undefined;
    answerEls.forEach((answerEl) =>{
    	if(answerEl.checked){
    		answer=answerEl.id;
    	}
    });
    return answer;
} 
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener("click",() =>{
	 const answer=getSelected();
     if(answer)
     {
     	if(answer===quizData[currentQuiz].correct)
	   {
	 	score++;
	   }
	   currentQuiz++;

      if (currentQuiz < quizData.length) 
	    {
            loadQuiz();
        }
      else
        {
        	quiz.innerHTML = `
        	<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
              <button onclick="location.reload()">Reload</button>
        	`;
        	
        }

     }
	 
	  
	  

});

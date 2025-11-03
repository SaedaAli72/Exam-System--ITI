let questionObject =[];
let studentAnswers =[];
let index = 0;
let totalTime = 600;
let timeLeft = totalTime;
let timerInterval;



function getQuestions(){
    let myQuestion = new XMLHttpRequest();
    myQuestion.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
           // console.log(this.responseText);
            questionObject = JSON.parse(this.responseText);
            showQuestion();
            startProgressBar();
        }
        
    };
    
    myQuestion.open("GET","questions.json",true);
    myQuestion.send();
}



function showQuestion(){
    var ques = questionObject[index]
    let radios = document.getElementsByName("questions");
    for (let r of radios){
        r.checked = false;

    }
    document.getElementById("questionTitle").textContent = ques.title;
    for(var i = 1; i <= 4; i++){
        document.querySelector(`label[for='answer_${i}']`).textContent = ques[`answer_${i}`]
    }


    const savedAnswer = studentAnswers[index];
    if (savedAnswer) {
        document.getElementById(savedAnswer).checked = true;
    }
    
    let prevBtn = document.getElementById("previousBtn");
    let subBtn = document.getElementById("submitBtn");
    let nexBtn = document.getElementById("nextBtn");


    if (index == 0) {
        prevBtn.style.display = "none";
        } 
    else {
        prevBtn.style.display = "inline-block";
        }

    if (index == questionObject.length - 1) {
        subBtn.style.display = "inline-block";
        nexBtn.style.display = "none";
        prevBtn.style.left = "45%";
        } 
    else {
        subBtn.style.display = "none";
        nexBtn.style.display = "inline-block";
        prevBtn.style.left = "35%";
        }

}




function saveStudentAnswer() {

    const selected = document.querySelector("input[name='questions']:checked");
    if (selected) {
    studentAnswers[index] = selected.id;
    } else {
    studentAnswers[index] = null;
    }
}


    

    



function nextQuestion(){

   saveStudentAnswer();
    if(index < questionObject.length-1){
       index++;
       showQuestion()       
    }
    
}

function previousQuestion() {

    saveStudentAnswer();
    if (index > 0) {
        index--;
        showQuestion();
    }
}

function flagedQuestions() {
  let sidebar = document.getElementById("sidebar");
  let existFlag = document.querySelector(`#sidebar span[data='${index}']`);
  if (existFlag) {
    sidebar.removeChild(existFlag);
  } else {
    let flaggedSpan = document.createElement("span");
    flaggedSpan.textContent = `Question Number${index + 1}`;
    flaggedSpan.classList.add("marked");
    flaggedSpan.setAttribute("data", index);
    
    flaggedSpan.addEventListener("click", function() {
      index = parseInt(this.getAttribute("data")); 
      showQuestion();
      });
    
    sidebar.appendChild(flaggedSpan);
  }
}



function calculateScore(event) {

  if (event) event.preventDefault();
  var score = 0;
  for (var i = 0; i < questionObject.length; i++) {
    if (studentAnswers[i] === questionObject[i].correct_answer) {
      score++;
    }
  }
//   console.log("Final Score:", score);
//   document.getElementById("result").textContent = "Your score is " + score + " / " + questionObject.length;
   localStorage.setItem("studentScore", score);
    localStorage.setItem("totalQuestions", questionObject.length);
    window.location.href = "gradePage.html";

}

   
function startProgressBar() {
  const progressBar = document.getElementById("progressBar");

  timerInterval = setInterval(() => {
    timeLeft--;

    let progress = ((totalTime - timeLeft) / totalTime) * 100;
    progressBar.style.width = progress + "%";

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time out! Exam submitted automatically.");
      calculateScore();
     // window.location.href = "result.html";
    }
  }, 1000);
}
getQuestions();


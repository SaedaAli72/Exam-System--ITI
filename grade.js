 var score = localStorage.getItem("studentScore");
  var total = localStorage.getItem("totalQuestions");
  var FirstName = localStorage.getItem("First Name");
  var LastName = localStorage.getItem("Last Name");
  var timeOut = localStorage.getItem("timeOut")
  
  score = parseInt(score);
  total = parseInt(total);

  

  var gradeText = document.getElementById("grade_text");
  var lastText = document.getElementById("grade_Last_text");
var student_name = document.getElementById("student-name") ;
student_name.textContent = FirstName +(" ")+ LastName;

  var percent = (score / total) * 100;
document.getElementById("student_grade").textContent = `${percent}%`;

var grade = document.getElementById("student_grade");
var gradeLastText=document.getElementById("grade_Last_text");

console.log(grade.textContent);

if(timeOut==="false"){
  if (percent>=50) {
      gradeText.innerHTML="<i class='fa-solid fa-graduation-cap' style='margin-right:8px;'></i>Congratulations!"
      gradeLastText.textContent="Keep up the great work!";
  }else{
      gradeText.innerHTML='<i class="fa-solid fa-face-frown"></i> Keep Trying!'
      gradeText.style="color:#d32f2f"
      gradeLastText.textContent="Don’t give up - you’re getting closer!";
  }
}else{
      gradeText.innerHTML='<i class="fa-solid fa-hourglass-end"></i> Time’s Up!'
      gradeText.style="color:#f57c00"; 
      gradeLastText.textContent="You ran out of time! Try again and manage your time better next round.";
}
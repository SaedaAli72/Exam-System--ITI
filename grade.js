var grade = document.getElementById("student_grade");
var gradeText = document.getElementById("grade_text");
var gradeLastText=document.getElementById("grade_Last_text");

console.log(grade.textContent);

if (grade.textContent>=50) {
    gradeText.innerHTML="<i class='fa-solid fa-graduation-cap' style='margin-right:8px;'></i>Congratulations!"
    gradeLastText.textContent="Keep up the great work!";
}else{
    gradeText.innerHTML='<i class="fa-solid fa-face-frown"></i> Keep Trying!'
    gradeText.style="color:#d32f2f"
    gradeLastText.textContent="Don’t give up - you’re getting closer!";


}
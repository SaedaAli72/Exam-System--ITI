let questionObject =[];
let index = 0;
function getQuestions(){
    let myQuestion = new XMLHttpRequest();
    myQuestion.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
           // console.log(this.responseText);
            questionObject = JSON.parse(this.responseText);
            showQuestion();
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
    if (index === 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "inline-block";
    }


    
}



function nextQuestion(){
    if(index < questionObject.length-1){
       index++;
       showQuestion()       
    }
    
}

function previousQuestion() {
    if (index > 0) {
        index--;
        showQuestion();
    }
}

function flagedQuestions(){
    
}


getQuestions();



function hideAll(){
    const ansarr = document.querySelectorAll('#answer-one,#answer-two,#answer-three,#answer-four');
    const picarr = document.querySelectorAll('#pic1,#pic2,#pic3,#pic4');
    ansarr.forEach(answer => {
        if (!answer.classList.contains('hidden')){
            answer.classList.add('hidden')
        }
    });
    picarr.forEach(image => image.src = "images//icon-plus.svg")
}

function answer(answerNumber,image){
    question = document.getElementById(answerNumber);
    image = document.getElementById(image);
    if (question.classList.contains('hidden')){
        hideAll()
        question.classList.remove('hidden')
        image.src = "images//icon-minus.svg";
    } else {
        hideAll()
    }
    
}
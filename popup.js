
const like = document.getElementById("like");
const comment = document.getElementById("comment");
const submit = document.getElementById("submit");

like.addEventListener('input',checkLike)
comment.addEventListener('input',checkComment)

var islikeFilled = false;
var isCommentFilled = false;

function checkLike(){
    if(like.value.trim() === ''){
        islikeFilled = false;
        submit.disabled=true;
        return;
    }
    islikeFilled = true;
    if(isCommentFilled) {
        submit.disabled = false
    }
    
}

function checkComment(){
    if(comment.value.trim() === ''){
        isCommentFilled = false;
        submit.disabled=true;
        return;
    }
    isCommentFilled = true;
    if(islikeFilled) {
        submit.disabled=false;
    }
    
}

submit.addEventListener('click',handleClick)

function handleClick(){

    var values ={
        likeCount : like.value,
        comment : comment.value
    }
    chrome.runtime.sendMessage({data:values})
}



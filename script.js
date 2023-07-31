// search bar code
function search_city() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('city');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}


// city form code
var submit = $('.submit-btn');
var cardContainer = $('.card-container');
var name = $('.name');
var city = $('.city');

submit.on("click", appendList);

function appendList (event){
  event.preventDefault();
  var suggestionCity = $('.city').val();
  var suggestor = $('.name').val();

  $('.name').val("");
  $('.city').val("");

  cardContainer.append(`<div> 
  <p> ${suggestor} suggested to include ${suggestionCity} </p>
  </div>`)
}



//language quiz code
var submitQuiz = $('.submit-quiz');
var answerOne = $('.answer-one');
var answerTwo = $('.asnwer-two');
var answerThree = $('.answer-three');
var answerFour = $('.answer-four');
var quizContainer = $('.quiz-container');


submitQuiz.on("click", showResult);

function showResult (event){
  event.preventDefault();
  var answerOne = $('.answer-one').val();
  var answerTwo = $('.answer-two').val();
  var answerThree = $('.answer-three').val();
  var answerFour = $('.answer-four').val();

  $('.answer-one').val("");
  $('.answer-two').val("");
  $('.answer-three').val("");
  $('.answer-four').val("");

  quizContainer.append(`<br> Results:`);

  if (answerOne === "école" || answerOne === "École"){
    quizContainer.append(`<div> 
    <p class = "right-answer"> Question 1: Correct! </p>
    </div>`);
  }
  else{
    quizContainer.append(`<div> 
    <p class = "wrong-answer"> Question 1: Wrong! The correct answer should be "école" </p> 
    </div>`);
  }

  if (answerTwo === "aller" || answerTwo === "Aller"){
    quizContainer.append(`<div> 
    <p class = "right-answer"> Question 2: Correct! </p>
    </div>`);
  }
  else{
    quizContainer.append(`<div> 
    <p class = "wrong-answer"> Question 2: Wrong! The correct answer should be "aller" </p> 
    </div>`);
  }

  if (answerThree === "aide-moi" || answerThree === "Aide-moi" || answerThree === "aidez-moi" || answerThree === "Aidez-moi"){
    quizContainer.append(`<div> 
    <p class = "right-answer"> Question 3: Correct! </p>
    </div>`);
  }
  else{
    quizContainer.append(`<div> 
    <p class = "wrong-answer"> Question 3: Wrong! The correct answer should be "aide-moi" </p> 
    </div>`);
  }

  if (answerFour === "après" || answerFour === "Après"){
    quizContainer.append(`<div> 
    <p class = "right-answer"> Question 4: Correct! </p>
    </div>`);
  }
  else{
    quizContainer.append(`<div> 
    <p class = "wrong-answer"> Question 4: Wrong! The correct answer should be "après" </p> 
    </div>`);
  }
}

//forum code//

var opportunity = $('.opportunity');
var submitOpportunity = $('.submit-opportunity');
var cancelButton = $('.cancel-btn');
var forumContainer = $('.forum-container');


submitOpportunity.on("click", appendForum);
cancelButton.on("click", cancel);

function appendForum (event){
  event.preventDefault();
  var suggestion = $('.opportunity').val();

  $('.opportunity').val("");

  forumContainer.append(`<div> 
  <p> ${suggestion} </p>
  </div>`)
}

function cancel (event){
  $('.opportunity').val("");
}






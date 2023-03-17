console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);




let catPic = document.querySelector('#catpic')

const cat = () => {
	alert('You are great')
}

catPic.addEventListener('mouseover', cat)
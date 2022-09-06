const form = document.getElementById('form');
const Name = document.getElementById('Name');
const Email = document.getElementById('Email');
const Sub= document.getElementById('Sub');
const Msg= document.getElementById('Msg');





form.addEventListener('Submit', e => {
	e.preventDefault();
	checkInputs();

});

function checkInputs() {
	// trim to remove the whitespaces
	const NameVal = Name.value.trim();
	const EmailVal = Email.value.trim();
	const SubVal = Sub.value.trim();
	const MsgVal = Msg.value.trim();
	
	if(NameVal === '') {
		setErrorFor(Name, 'Username cannot be blank');
	} else {
		setSuccessFor(Name);
		

        
	}
	
	if(EmailVal === '') {
		setErrorFor(Email, 'Email cannot be blank');
	} else if (!isEmail(EmailVal)) {
		setErrorFor(Email, 'Not a valid email');
	} else {
		setSuccessFor(Email);
		
	}
	
	if(SubVal === '') {
		setErrorFor(Sub, 'subjet cannot be blank');
	} else {
		setSuccessFor(Sub);
		
	}
	
	if(MsgVal === '') {
		setErrorFor(Msg, 'Message cannot be blank');
	} else{
		setSuccessFor(Msg);
		
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-ctrl error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-ctrl success';
}
	
function isEmail(Email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(Email);
}





// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});



$("#submit-form").Submit((e)=>{
	e.preventDefault()
	$.ajax({
		url:"https://script.google.com/macros/s/AKfycbywu8Sr8h6skk7mE2pp6EH8bvW_bOZi0CtO0wCwhO0-lBYa5LbXeU6BE2BXv7ngOB0l/exec",
		data:$("#submit-form").serialize(),
		method:"post",
		success:function (response){
			alert("Form submitted successfully")
			window.location.reload()
			//window.location.href="https://google.com"
		},
		error:function (err){
			alert("Something Error")

		}
	})
})

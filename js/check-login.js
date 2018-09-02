$(document).ready(function() {


	$('#formLogin').on('submit', function(event){
		event.preventDefault();

		var email = $('#email').val(),
			password = $('#password').val(),
			pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,
			formEmail = false,
			formPassword = false,
			testEmail = 'mail@gmail.com',
			testPassword = 12345;
			
		// Проверка на email
		if ( email == '' ){
			$('#errorEmail').slideDown();
		} else {
			if ( pattern.test(email) ) {
				formEmail = true;		
			} else {
				$('#errorFormEmail').slideDown();
			}
		}

		// При вводе с клавиатуры ошибка исчезает
		$('#email').on('focus', function(){
			$('#errorEmail').slideUp();
			$('#errorFormEmail').slideUp();
		});

		// Проверка на password
		if ( password == '' ){
			$('#errorPassword').slideDown();
		} else {
			formPassword = true;
		}
		// При вводе с клавиатуры ошибка исчезает
		$('#password').on('focus', function(){
			$('#errorPassword').slideUp();
		});

		// Проверка на правильность ввода email и password. 
		if (formPassword == true && formEmail == true){
			if ( email == testEmail && password == testPassword) {
				$('#formLogin').unbind('submit');
				$('#formLogin').submit();
			} else {	
				$('#errorFormPass .notify').show();
				$('#errorFormPass').slideDown();
			}
		}
	});

});
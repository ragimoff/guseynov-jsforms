$(document).ready(function() {

	(function(){

		var formValidation = {

			isValid: true,

			init: function(){
				//Вызов внутренних функций
				this._setUpListeners();
			},

			_setUpListeners: function(){
				$('#form-login').on('submit', formValidation._validateForm);
			},

			_validateForm: function(event){
				event.preventDefault();
				console.log(' privete _validateForm');
				var formLogin = $(this),
					input = formLogin.find('input'),
					valid = true;

				$.each( input, function(index, val){
					var input = $(val),
						value = input.val().trim(),
						formGroup = input.find('#form-login');

						if ( value.length === 0) {
							formGroup.addClass('notify');
						}
						console.log('fdfd');

				

					
				}); 
			}


		};

		formValidation.init();

	}());


});
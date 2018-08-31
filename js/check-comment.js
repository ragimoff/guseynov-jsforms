$(document).ready(function() {

	var commentCheck = (function(){

			//Переменная модуля
			var _form = $('#comment-add-form');
			var _commentTextArea = $('#commentText');
			var _commentErrorEmpty = $('#commentErrorEmpty');

			// Метод инициализации (запуска) модуля
			var init = function(){
				_setUpListeners(); // Запускаем прослушку событий
			}

			// Метод прослушки событий
			// В нем прослушиваем события на страницу, например клики по кнопкам и при срабатывании события запускаем нужный метод нашего модуля
			var _setUpListeners = function(){
				_form.on('submit', function(event){
					_formValidate(event);
				});
			}
			// Приватные методы	
			var _formValidate = function( event ){
				event.preventDefault();
				if ( _commentTextArea.val() == '' ){
					_commentErrorEmpty.fadeIn(500);
				} else {
					$('form').unbind('submit').submit();
				}
				//console.log(_commentTextArea.val());
				_commentTextArea.on('keydown', function(){
					_form.find(_commentErrorEmpty).remove();
				});

			}

			//Возвращаем публичные методы, которые будут доступны снаружи
			return {
				init
			}
	}());
	// Запускаем модуль
	commentCheck.init();
});
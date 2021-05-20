
// открытие модального окна по кнопке
$(document).ready(function($) {
    $('#open').click(function() {
		$('.popup-fade').fadeIn("slow");
		return false;
	});        

// по кнопке "закрыть"
$('.popup-close').click(function() {
	$(this).parents('.popup-fade').fadeOut();
	return false;
});        
	
// закрыть по подложке
$('.popup-fade').click(function(e) { 
	if ($(e.target).closest('.popup').length == 0) {
		$(this).fadeOut();					
		}
	});	
});




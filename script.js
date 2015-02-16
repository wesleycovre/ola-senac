$(document).ready(function(){
	$('.menu_gatilho').on('click touchstart', function(e){
		$('body').toggleClass('menu_ativo');
		e.preventDefault();
	});
	
	$('section').on('click touchstart', function(){
		$('body').removeClass('menu_ativo');
	});
})
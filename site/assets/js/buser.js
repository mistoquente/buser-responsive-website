(function() {
	
	let $ = document.querySelector.bind(document);			
	var btnMenu = $(".menu-drop");
	var menu = $("#menu");
	
	btnMenu.addEventListener('click', function(e){

		event.preventDefault();

		var menu = document.getElementById('menu');
		var style = window.getComputedStyle(menu);
		var display = style.getPropertyValue('display');

		if ( display == 'none') {
			menu.style.display = 'block';
			
		} else {
			menu.style.display = 'none';
		}
		
	});
	



})();
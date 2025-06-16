const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')
$(document).ready(function(){
		$('.navbar-fostrap').click(function(){
			$('.nav-fostrap').toggleClass('visible');
			$('body').toggleClass('cover-bg');
		});
	});
  
if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
 
 if (close) {
   close.addEventListener('click', () => {
     nav.classList.remove('active')
   })
 }
}
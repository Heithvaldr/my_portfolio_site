$('h1').typeTo("EVERYTHING CHANGES");
$('h2').typeTo("AND I'VE CHANGED");

var buttons = document.getElementsByClassName('button'),
    changes = document.getElementsByClassName('changes')[0],
    change = document.getElementsByClassName('change');

(function() {
    buttons[0].addEventListener('click', function(){
	changes.classList.toggle('active');
    }, false);
})();

(function() {
    buttons[1].addEventListener('click', function(){
	change[0].classList.toggle('active');
    }, false);

    buttons[2].addEventListener('click', function(){
	change[1].classList.toggle('active');
    }, false);
})();

$('h3').typeTo("YOUR COMPANY IS CHANGING RIGHT NOW...");
$('h4').typeTo("I WANT TO BE A PART OF THESE CHANGES");

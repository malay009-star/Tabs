// heading
var heading = document.getElementById('heading');

// Tabs starting
var btn_one = document.getElementById('btn_one');
var btn_two = document.getElementById('btn_two');
var btn_three = document.getElementById('btn_three');
// For content
var content_one = document.getElementById('content_one');
var content_two = document.getElementById('content_two');
var content_three = document.getElementById('content_three');


btn_one.addEventListener('click', () => {
    content_one.style.display = 'block';
    content_two.style.display = 'none';
    content_three.style.display = 'none';
    heading.textContent = 'The best credit cards offer tantalizing.'
})
btn_two.addEventListener('click', () => {
    content_two.style.display = 'block';
    content_one.style.display = 'none';
    content_three.style.display = 'none';
    heading.textContent = 'We take proactive steps make inform.';
})
btn_three.addEventListener('click', () => {
    content_three.style.display = 'block';
    content_one.style.display = 'none';
    content_two.style.display = 'none';
    heading.textContent = 'We take proactive steps make sure ';
})
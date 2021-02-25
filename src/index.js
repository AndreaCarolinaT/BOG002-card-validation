import validator from './validator.js';

const sDButton = document.getElementById('seeDetailsButton');
sDButton.addEventListener('click', function() {
    location.href = 'detailsCourse.html';
});

console.log(validator);

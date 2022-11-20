// header projects
let headerBurger = document.querySelector('.header_projects_button');
let headerProjects = document.querySelector('.header_project_row');
let headerBurgerActive = document.querySelector('.header_projects_button-active');

headerBurger.addEventListener('click', () => {
    if (headerBurger.classList.contains('active') || headerBurgerActive.classList.contains('active')) {
        headerProjects.classList.remove('active');
        headerBurgerActive.classList.remove('active');
    } else {
        headerProjects.classList.add('active');
        headerBurgerActive.classList.add('active');
    }
})

headerBurgerActive.addEventListener('click', () => {
    if (headerProjects.classList.contains('active')) {
        headerProjects.classList.remove('active');
    }
})

// header projects

// stories video play
let storieVideoPlay = document.querySelectorAll('.stories_video_play');

storieVideoPlay.forEach(trigger => {
    let storieVideo = document.getElementById(trigger.previousElementSibling.id);

    trigger.addEventListener('mouseenter', () => {
        storieVideo.play();
        storieVideo.parentNode.classList.add('active');
    })

    storieVideo.addEventListener('mouseleave', () => {
        storieVideo.pause();
        storieVideo.parentNode.classList.remove('active');
    })
})
// stories video play

var toggle = document.getElementById('container');
var toggleContainer = document.getElementById('toggle-container');
var toggleNumber;

toggle.addEventListener('click', function() {
	toggleNumber = !toggleNumber;
	if (toggleNumber) {
		toggleContainer.style.clipPath = 'inset(0 0 0 50%)';
		toggleContainer.style.backgroundColor = '#E7C99F';
        toggleContainer.style.border = '0px';
	} else {
		toggleContainer.style.clipPath = 'inset(0 50% 0 0)';
		toggleContainer.style.backgroundColor = '#E7C99F';
        toggleContainer.style.border = '0px';
	}
	console.log(toggleNumber)
});

var toggleTriple = document.getElementById('containerTriple');
var toggleContainerTriple = document.getElementById('toggle-container-triple');
var toggleNumberTriple;

document.getElementById('triple_toggle-1').addEventListener('click', () => {
    toggleContainerTriple.style.clipPath = 'inset(0px 66% 0px 0px)';
    toggleContainerTriple.style.backgroundColor = '#E7C99F';
    toggleContainerTriple.style.border = '0px';
})

document.getElementById('triple_toggle-2').addEventListener('click', () => {
    toggleContainerTriple.style.clipPath = 'inset(0px 33% 0px 33%)';
    toggleContainerTriple.style.backgroundColor = '#E7C99F';
    toggleContainerTriple.style.border = '0px';
})

document.getElementById('triple_toggle-3').addEventListener('click', () => {
    toggleContainerTriple.style.clipPath = 'inset(0px 0px 0px 66%)';
    toggleContainerTriple.style.backgroundColor = '#E7C99F';
    toggleContainerTriple.style.border = '0px';
})

// ask question modal
let askModalTrigger = document.querySelectorAll('.ask_question_trigger');
let askModal = document.querySelector('.ask_question');

askModalTrigger.forEach(trigger => {
    trigger.addEventListener('click', event => {
        if (askModal.classList.contains('active')) {
            askModal.classList.remove('active');
        } else {
            askModal.classList.add('active');
            document.body.classList.add('overflow_hidden');
        }
    })
})

let askModalClose = document.querySelectorAll('.ask_modal_close');

askModalClose.forEach(trigger => {
    trigger.addEventListener('click', close => {
        askModal.classList.remove('active');
        document.body.classList.remove('overflow_hidden');
    })
})
// ask question modal

// calendar
function calendar(elem, year, month) {
    
}


function createCalendar(elem, year, month) {

let mon = month - 1; // months in JS are 0..11, not 1..12
let d = new Date(year, mon);

let table = '<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>';

// spaces for the first row
// from Monday till the first day of the month
// * * * 1  2  3  4
for (let i = 0; i < getDay(d); i++) {
    table += '<td></td>';
}

// <td> with actual dates
while (d.getMonth() == mon) {
    table += '<td>' + d.getDate() + '</td>';

    if (getDay(d) % 7 == 6) { // sunday, last day of week - newline
    table += '</tr><tr>';
    }

    d.setDate(d.getDate() + 1);
}

// add spaces after last days of month for the last row
// 29 30 31 * * * *
if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
    table += '<td></td>';
    }
}

// close the table
table += '</tr></table>';

elem.innerHTML = table;
}

function getDay(date) { // get day number from 0 (monday) to 6 (sunday)
let day = date.getDay();
if (day == 0) day = 7; // make Sunday (0) the last day
return day - 1;
}

createCalendar(calendar, 2012, 9);
// calendar
// mobile burger
let burgerButton = document.querySelector('.burger');

if (burgerButton) {
    burgerButton.addEventListener('click', () => {
        let burgerDropdown = document.querySelector('.mobile_dropdown');
        if (burgerDropdown.classList.contains('active')) {
            burgerDropdown.classList.remove('active');
            burgerButton.classList.remove('active');
            document.body.classList.remove('overflow_hidden');
        } else {
            burgerDropdown.classList.add('active');
            burgerButton.classList.add('active');
            document.body.classList.add('overflow_hidden');
        }
    })
}
// mobile burger

// menu
let menuButton = document.querySelector('.prayer_section_header .button_1');

if (menuButton) {
    let menuDropdown = document.querySelector('.prayer_section .container > .prayer_row .prayer_col.w_33');

    menuButton.addEventListener('click', () => {
        console.log(menuDropdown);
        if (menuDropdown.classList.contains('active')) {
            menuDropdown.classList.remove('active');
            menuButton.classList.remove('active');
            document.body.classList.remove('overflow_hidden');
        } else {
            menuDropdown.classList.add('active');
            menuButton.classList.add('active');
            document.body.classList.add('overflow_hidden');
        }
    })

    let menuClose = document.querySelector('.menu_close');
    menuClose.addEventListener('click', close => {
        if (menuDropdown.classList.contains('active')) {
            menuDropdown.classList.remove('active');
            menuButton.classList.remove('active');
            document.body.classList.remove('overflow_hidden');
        } else {
            menuDropdown.classList.add('active');
            menuButton.classList.add('active');
            document.body.classList.add('overflow_hidden');
        }
    })
}
// menu

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

// header
window.onscroll = function() {headerMini()};

var header = document.getElementById("header");

function headerMini() {
    if(header) {
        var sticky = header.offsetTop;

        if (window.pageYOffset >= 1) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
}
// header

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
let askModalForm = document.forms["ask_question_form"];
let askModalNext = document.querySelector('.ask_question_next .button_1');

let disableAskButton = () => {
    if(askModalNext) {
        askModalNext.classList.add('disable-next');
        askModalNext.setAttribute('disabled', '');
    }
}

if(askModalForm) {
    askModalForm.addEventListener('change', () => {
        console.log(askModalForm["ask_question-message"].value);
    
        if (askModalForm['ask_question-message'].value == '' && askModalForm['ask_question-message'].value == '') {
            disableAskButton();
        } else {
            askModalNext.classList.remove('disable-next');
            delete trigger.dataset.disabled;
        }
    })
}

let askModalTrigger = document.querySelectorAll('.ask_question_trigger');
let askModal = document.querySelector('.ask_question');

askModalTrigger.forEach(trigger => {
    trigger.addEventListener('click', event => {
        if (askModal.classList.contains('active')) {
            askModal.classList.remove('active');
        } else {
            askModal.classList.add('active');
            document.body.classList.add('overflow_hidden');
            disableAskButton();
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

// decor
let decor = document.querySelector('.decor');
if(decor) {
    let decorItem = document.querySelector('.decor img');
    let decorItemHeight = decorItem.height + 15;
    let decorHeight = decor.scrollHeight;
    let sumDecor = Math.floor(decorHeight / decorItemHeight - 1);
    let decorLeft = document.querySelector('.decor_left');
    for (let i = decorLeft.children.length; i <= sumDecor; i++) {
        decorLeft.innerHTML += '<img src="assets/images/bg/decor.png" alt="decor">';
    }
    
    let decorRight = document.querySelector('.decor_right');
    
    for (let i = decorRight.children.length; i <= sumDecor; i++) {
        decorRight.innerHTML += '<img src="assets/images/bg/decor.png" alt="decor">';
    }
}
// decor

// tabs
let tabsTrigger = document.querySelectorAll('.tab_button');

tabsTrigger.forEach(tab => {
    let tabHref = tab.dataset.href;
    let tabPane = document.querySelectorAll('.tab_pane');
    tabPane.forEach(pane => {
        tab.addEventListener('click', trigger => {
            if (pane.classList.contains('active')) {
                tab.classList.remove('active');
                pane.classList.remove('active');
            } else if (tabHref == pane.dataset.id) {
                tab.classList.add('active');
                pane.classList.add('active');
            } else {
                tab.classList.remove('active');
                pane.classList.remove('active');
            }
        })
    })
})
// tabs

// button_1
var ableToClick = true;

let button_1 = document.querySelectorAll('.button_1, .click_anim');

button_1.forEach(trigger => {
    trigger.addEventListener('click', () => {
        if(!ableToClick) return;
        ableToClick=false;

        trigger.classList.add('click');
        
        setTimeout(function(){
            trigger.classList.add('opacity_0');
        }, 400);
        
        setTimeout(function(){
            trigger.classList.add('trans_duration_0');
        }, 1000);
        
        setTimeout(function(){
            trigger.classList.add('dis');
            trigger.classList.remove('click');
            trigger.classList.remove('opacity_0');
        }, 1100);
        
        setTimeout(function(){
            ableToClick = true;
            trigger.classList.remove('trans_duration_0');
            trigger.classList.remove('dis');
        }, 1200);
    }) 
})
// button_1


// copy button
let copyButton = document.querySelectorAll('.copy-button');

copyButton.forEach(text => {
    text.addEventListener('click', () => {
        let copyValue = text.dataset.link;
        navigator.clipboard.writeText(copyValue)
            .then(() => {
                text.innerHTML = '<span>Скопировано</span>';
            })
            .catch(error => {
                text.innerHTML = 'Что-то пошло не так';
            })
    })
})
// copy button

// save calendar
let saveButtonWrap = document.querySelector('.add_in_phone button');

if(saveButtonWrap) {
    saveButtonWrap.addEventListener('click', button => {
        setTimeout(() => {
            saveButtonWrap.classList.add('remove');
        }, 300);
    })
}
// save calendar

// before after
// I hope this over-commenting helps. Let's do this!
// Let's use the 'active' variable to let us know when we're using it
let active = false;

// First we'll have to set up our event listeners
// We want to watch for clicks on our scroller
if (document.querySelector('.scroller')) {
    document.querySelector('.scroller').addEventListener('mousedown',function(){
        active = true;
        // Add our scrolling class so the scroller has full opacity while active
        document.querySelector('.scroller').classList.add('scrolling');
    });
        // We also want to watch the body for changes to the state,
        // like moving around and releasing the click
        // so let's set up our event listeners
        document.body.addEventListener('mouseup',function(){
        active = false;
        document.querySelector('.scroller').classList.remove('scrolling');
    });
    document.body.addEventListener('mouseleave',function(){
        active = false;
        document.querySelector('.scroller').classList.remove('scrolling');
    });

    // Let's figure out where their mouse is at
    document.body.addEventListener('mousemove',function(e){
    if (!active) return;
    // Their mouse is here...
    let x = e.pageX;
    // but we want it relative to our wrapper
    x -= document.querySelector('.before_after_wrapper').getBoundingClientRect().left;
    // Okay let's change our state
    scrollIt(x);
  });
  
  // Let's use this function
  function scrollIt(x){
      let transform = Math.max(0,(Math.min(x,document.querySelector('.before_after_wrapper').offsetWidth)));
      document.querySelector('.after').style.width = transform+"px";
      document.querySelector('.scroller').style.left = transform-25+"px";
  }
  
  // Let's set our opening state based off the width, 
  // we want to show a bit of both images so the user can see what's going on
  scrollIt(150);
}

// And finally let's repeat the process for touch events
// first our middle scroller...
if(document.querySelector('.scroller')) {
    document.querySelector('.scroller').addEventListener('touchstart',function(){
        active = true;
        document.querySelector('.scroller').classList.add('scrolling');
    });
    document.body.addEventListener('touchend',function(){
        active = false;
        document.querySelector('.scroller').classList.remove('scrolling');
    });
    document.body.addEventListener('touchcancel',function(){
        active = false;
        document.querySelector('.scroller').classList.remove('scrolling');
    });
}
// before after 

// button top
// window.onscroll = function() {scrollFunction()};

// var topButton = document.getElementById("top_button");

// function scrollFunction() {
//     if (topButton) {
//         if (window.pageYOffset >= 20) {
//             topButton.style.display = "block";
//         } else {
//             topButton.style.display = "none";
//         }
//     }
// }

// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }
// button top
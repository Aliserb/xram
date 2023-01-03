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

// save calendar
let dnlButton = document.querySelectorAll('.types_read_book_preview');

if(dnlButton) {
    dnlButton.forEach(button => {
        button.addEventListener('click', click => {
            setTimeout(() => {
                button.classList.add('remove');
            }, 150);
        })
    })
}
// save calendar

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
        document.body.classList.remove('overflow_hidden');
        headerProjects.classList.remove('active');
        headerBurgerActive.classList.remove('active');
    } else {
        document.body.classList.add('overflow_hidden');
        headerProjects.classList.add('active');
        headerBurgerActive.classList.add('active');
        setTimeout(function(){
            headerProjects.classList.add('border_radius_0');
        }, 100);
    }
})

headerBurgerActive.addEventListener('click', () => {
    if (headerProjects.classList.contains('active')) {
        headerProjects.classList.remove('active');
        document.body.classList.remove('overflow_hidden');
    }
})

// header projects

// header
window.onscroll = function() {headerMini(), scrollFunction()};
//window.onscroll = function() {headerMini()};

var header = document.getElementById("header");

function headerMini() {
    if(header) {
        var sticky = header.offsetTop;

        if (window.pageYOffset >= 62) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
}
// header

// button top
var topButton = document.getElementById("top_button");

if (topButton) {
    // window.onscroll = function() {};

    function scrollFunction() {
        if (topButton) {
            if (window.pageYOffset >= 20) {
                topButton.style.display = "block";
            } else {
                topButton.style.display = "none";
            }
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
// button top

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

var toggleTwo = document.getElementById('container-2');
var toggleContainerTwo = document.getElementById('toggle-container-2');
var toggleNumberTwo;

if(toggleTwo) {
    toggleTwo.addEventListener('click', function() {
        toggleNumberTwo = !toggleNumberTwo;
        if (toggleNumberTwo) {
            toggleContainerTwo.style.clipPath = 'inset(0 0 0 50%)';
            toggleContainerTwo.style.backgroundColor = '#E7C99F';
            toggleContainerTwo.style.border = '0px';
        } else {
            toggleContainerTwo.style.clipPath = 'inset(0 50% 0 0)';
            toggleContainerTwo.style.backgroundColor = '#E7C99F';
            toggleContainerTwo.style.border = '0px';
        }
    });
}

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
            }
        })
    })
})
// tabs

// new tabs
let tabWraps = document.querySelectorAll('.tab_wrap');

tabWraps.forEach(wrap => {
    let tabButton = wrap.querySelectorAll('.new_tab_button');
    tabButton.forEach(tab => {
        let buttonHref = tab.dataset.hrefTab;

        let tabPane = wrap.querySelectorAll('.new_tab_pane');
        tab.addEventListener('click', () => {
            $(tab).siblings().removeClass('active');
            tabPane.forEach(pane => {
                let paneId = pane.dataset.idTab;

                if (buttonHref == paneId) {
                    tab.classList.add('active');
                    pane.classList.add('active');
                    $(pane).siblings().removeClass('active');
                }
            })
        })
    })
})
// new tabs

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

// xram modal
let xramModalButton = document.querySelectorAll('.xram_modal_button');

xramModalButton.forEach(button => {
    let xramModal = document.querySelectorAll('.xram_modal');

    xramModal.forEach(modal => {
        button.addEventListener('click', trigger => {
            if (button.dataset.xramModalHref == modal.dataset.xramModalId && modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.classList.remove('overflow_hidden');
            } else {
                modal.classList.add('active');
                document.body.classList.add('overflow_hidden');
            }
        })
    
        let xramModalClose = modal.querySelectorAll('.xram_modal_close');

        xramModalClose.forEach(close => {
            close.addEventListener('click', closeClick => {
                if (modal.classList.contains('active')) {
                    modal.classList.remove('active');
                    document.body.classList.remove('overflow_hidden');
                }
            })
        })
    })
})
// xram modal

// mask input phone
document.addEventListener("DOMContentLoaded", function () {
    var eventCalllback = function (e) {
        var el = e.target,
            clearVal = el.dataset.phoneClear,
            pattern = el.dataset.phonePattern,
            matrix_def = "+375 (___) ___ __ __",
            matrix = pattern ? pattern : matrix_def,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = e.target.value.replace(/\D/g, "");
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = '';
                return;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCalllback);
        }
    }
});
// mask input phone

// scale button
let scaleButton = document.querySelectorAll('.scale_animation_button');

scaleButton.forEach(button => {
    button.addEventListener('click', click => {
        button.style.transform = 'scale(.8)';

        setTimeout(function(){
            button.style.transform = 'scale(1)';
        }, 100);
    })
})
// scale button

const donatSelect = () => {
    const element = document.querySelector('.count_donat_select');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
    });
}

donatSelect();

// donat form next
let donatItemNext = document.querySelector('.donat_form_item_next');

donatItemNext.addEventListener('click', click => {
    document.querySelector('.donat_form_item-1').classList.add('inactive');
    document.querySelector('.donat_form_item-2').classList.add('active');
    setTimeout(function(){
        document.querySelector('.donat_form_item-1').style.display = 'none';
    }, 200);

    setTimeout(function(){
        document.querySelector('.donat_form_item-2').style.transform = 'scale(1)';
    }, 400);
})

// donat form input radio text
let donatTypeText = document.getElementById('donat_type-other');
let donatTypeRadio = document.querySelectorAll('.donat_type_item_input');

donatTypeText.addEventListener('click', clickTextInput => {
    donatTypeRadio.forEach(item => {
        item.checked = false;
    })
})

donatTypeRadio.forEach(donatTypeItem => {
    donatTypeItem.addEventListener('click', item => {
        donatTypeText.value = '';
    })
})
// donat form input radio text
// donat form next
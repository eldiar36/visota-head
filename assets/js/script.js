$(document).ready(function() {
    $(".callback-popup").click(function() {
        $(".callback-container").fadeToggle('fast');
        $(".callback-form").fadeToggle('fast');
        $('body').css('overflow', 'hidden');
    });
    $(".callback-container").bind("click",function(e){
        if($(e.target).attr("class") != "callback-form")
            $(".callback-container").fadeOut('fast');
        $(".callback-form").fadeOut('fast');
        $(".callback-ok").fadeOut('fast');
        $('body').css('overflow', 'visible');
    })
    $(".call-btn").bind("click",function(e){
        if($(e.target).attr("class") != "callback-form")

        $(".callback-form").fadeOut('fast');
        $(".callback-ok").fadeToggle('fast');
        $('body').css('overflow', 'visible');
    })
});
$(".bn_button").click(function() {
    $(".bn_input").toggleClass('active')
});
$(document).ready(function() {
    $(".drop__links-item").hover(functionToHandleWhenMouseEnters,
        functionToHandleWhenMouseLeaves);
});

function functionToHandleWhenMouseEnters() {
    $(this).toggleClass("active")
    $(this).removeClass('first');
}

function functionToHandleWhenMouseLeaves() {
    $(this).removeClass('active');
}
$(document).ready(function() {
    $(".drop__links").hover(functionToHandleWhenMouseEntersTwo,
        functionToHandleWhenMouseLeavesTwo);
});

function functionToHandleWhenMouseEntersTwo() {
    $(this).toggleClass("hover-cl")
}

function functionToHandleWhenMouseLeavesTwo() {
    $(this).removeClass('hover-cl');
}
let hamburger = document.querySelector('.burger-menu_button');
let menu = document.querySelector('.burger-menu');
const toggleMenu = () => {
    menu.classList.toggle('burger-menu_active');
}
hamburger.addEventListener('click', e => {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target === menu || menu.contains(target);
    let its_hamburger = target === hamburger;
    let menu_is_active = menu.classList.contains('burger-menu_active');

    if (!its_menu && !its_hamburger && menu_is_active) {
        toggleMenu();
    }
})
let mobileDrop = document.querySelector('.mobile-drop-links');
const toggleMenuTwo = () => {
    mobileDrop.classList.toggle('mobile-drop_active');
}
mobileDrop.addEventListener('click', e => {
    e.stopPropagation();
    toggleMenuTwo();
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target === menu || menu.contains(target);
    let its_hamburger = target === hamburger;
    let menu_is_active = menu.classList.contains('mobile-drop_active');

    if (!its_menu && !its_hamburger && menu_is_active) {
        toggleMenuTwo();
    }
})
var uiField = document.getElementsByClassName('ui-field')[0];
var uiPrompt = document.getElementsByClassName('input-prompt')[0];
var inputWrap = document.getElementsByClassName('input-box')[0];
uiField.addEventListener('keyup', function () {

    if (uiField.value.length >= 1) {
        uiField.classList.add('active');
        uiPrompt.classList.add('active');
        inputWrap.classList.add('active');
    }else{
        uiField.classList.remove('active');
        uiPrompt.classList.remove('active');
        inputWrap.classList.remove('active');
    }
})

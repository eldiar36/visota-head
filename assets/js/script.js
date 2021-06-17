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
let mobileDrop = document.querySelectorAll('.mobile-drop-links');
let BackLink = document.querySelectorAll('.back-link');
for (let i = 0;i < mobileDrop.length;i++){
    const toggleMenuTwo = () => {
        mobileDrop[i].classList.toggle('mobile-drop_active');
    }
    mobileDrop[i].addEventListener('click', e => {
        e.stopPropagation();
        toggleMenuTwo();
    });
    for (let i= 0;i > BackLink;i++){
        BackLink.addEventListener('click', function (){
            mobileDrop[i].classList.remove('mobile-drop_active');
        })
    }
    document.addEventListener('click', e => {
        let target = e.target;
        let its_menu = target === menu || menu.contains(target);
        let its_hamburger = target === hamburger;
        let menu_is_active = menu.classList.contains('mobile-drop_active');

        if (!its_menu && !its_hamburger && menu_is_active) {
            toggleMenuTwo();
        }
    })

}

console.log(mobileDrop)
$('.ui-field').focus(function(){

    $('.ui-field').parent().addClass('active');


});


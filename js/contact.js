const nav_trigger = document.querySelector('.navTrigger');
const upper = document.querySelector('i:nth-child(1)');
const middle = document.querySelector('i:nth-child(2)');
const lower = document.querySelector('i:nth-child(3)');

const burger_menu = window.anime.timeline({
  autoplay: false,
  loop: false,
});

const burger_upper_combine = ({
  targets: upper,
  translateY: 8,
  backgroundColor: '#FFEE00',
  duration: 50,
  easing: 'linear',
});

const burger_lower_combine = ({
  targets: lower,
  translateY: -8,
  backgroundColor: '#FFEE00',
  duration: 50,
  easing: 'linear',
});

const fill_circle = ({
  targets: nav_trigger,
  backgroundColor: '#39a863',
  duration: 50,
})

const to_X_1 =({
  targets:[upper, middle],
  rotate: 45,
  backgroundColor: '#FFEE00',
  duration: 50,
  easing: 'linear',
});

const to_X_2 =({
  targets: lower,
  rotate: -45,
  duration: 50,
  easing: 'linear',
});

list_items = document.querySelectorAll('#navbar nav ul li');
const text_opacity=({
  targets: list_items,
  opacity: 1,
  duration: 10,
  easing: 'linear',
})

const nav_reveal =({
  targets: '#navbar',
  width: '80%',
  translateX: -325,
  duration: 50,
  easing: 'linear',
});

burger_menu
  .add(burger_upper_combine)
  .add(burger_lower_combine,'-=50')
  .add(fill_circle)
  .add(to_X_1)
  .add(to_X_2, '-=50')
  .add(text_opacity)
  .add(nav_reveal, '-=50')

var mq = window.matchMedia( "(max-width: 600px)" );
if (mq.matches) { // window width is at less than 600px
  nav_trigger.addEventListener('click', ()=>{
    if (!nav_trigger.classList.contains('active')){
      nav_trigger.classList.add('active');
      burger_menu.play();
      burger_menu.reverse();
    }else if(nav_trigger.classList.contains('active')){
      nav_trigger.classList.remove('active');
      burger_menu.play();
      burger_menu.reverse();
    }
    
  })
}
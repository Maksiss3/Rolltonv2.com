
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
  .add(nav_reveal)
}

else { // window width is greater than 600px
  const banner = document.getElementById('banner');
  const logo = document.getElementById('logo');
  const navbar = document.getElementById('navbar');
  
  let new_scroll_position = 0;
  let last_scroll_position;

  window.addEventListener('scroll', () => {
    last_scroll_position = window.scrollY;

    // Scrolling down
    if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
      navbar.classList.add("nav_hidden");

    // Scrolling up
    } else if (new_scroll_position > last_scroll_position) {
      navbar.classList.remove("nav_hidden");
    }

    new_scroll_position = last_scroll_position;
  });

  window.addEventListener('scroll', ()=> {
    if (window.pageYOffset >= 80) {
      logo.style.transform = "translateY(-140px)";
      banner.style.transform = "translateY(-140px)";
    } else {
      banner.style.transform = "translateY(0)";
      logo.style.transform = "translateY(0)";
    }
  });
}
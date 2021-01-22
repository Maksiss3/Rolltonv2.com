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


// Price animation
previous_total = 0;
function generatePrice(button){
  removeClicked();
  button.classList.add('clicked');
  total = button.dataset.value * 0.24;
  numberAnimation(previous_total, total);
  previous_total = total;
}

function numberAnimation(previous_total, total){
  anime({
    targets: document.getElementById('sum'),
    innerHTML: [previous_total, total],
    easing: "easeOutExpo",
    round: true,
    duration: 2000,
  });
}

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
      }})






buttons = document.querySelectorAll('.pieces_buttons > button');
function removeClicked(){
  buttons.forEach(button => {
    if(button.classList.contains('clicked')){
      button.classList.remove('clicked')
    }
  });
}


//////////Truck////////////
function startAnimation(order){
  order.classList.add('clicked');
  order.innerHTML = 'Ordered'
  let button_clicked = document.querySelector('.clicked');
  image_count = button_clicked.dataset.images;
  image_section = document.querySelector('.order_flex_main');

  existing_images = document.querySelectorAll('.rollton').forEach(img => img.remove());

  for(i = 0; i<image_count; i++){
    img = document.createElement("img");
    img.setAttribute("src","/img/Rolton.png");
    img.classList.add('rollton');
    random_offset = Math.floor(Math.random() * (350 - 270)) + 270;   //Math.ceil(Math.random() * (pos + neg)) - neg;
    random_offset_str = ("bottom: "+ random_offset + "px;");
    img.setAttribute("style", random_offset_str );
    image_section.appendChild(img);
  }

  var mq = window.matchMedia( "(max-width: 600px)" );
  if (mq.matches) { // window width is at less than 600px
    truckAnimationMobile();

  }else { // window width is greater than 600px
    truckAnimation();
  }
}


function truckAnimationMobile(){
  const wheel_selector = document.querySelectorAll(['.wheel_left','.wheel_right']);
  const truckAnim = window.anime.timeline({
    loop: false,
  });

  const wheelRotate = {
    targets: wheel_selector,
    rotate: 360,
    loop: true,
    direction: 'alternate',
    scaleX: [
      {value: 1.1, duration: 1000, easing: 'easeInOutSine'},
      {value: 1, duration: 1000, easing: 'easeInOutSine'},
    ],
    scaleY: [
      {value: 1, duration: 1000, easing: 'easeInOutSine'},
      {value: 1.1, duration: 1000, easing: 'easeInOutSine'},
    ],
    easing: 'easeOutElastic(1, .8)',
  }

  const truckBefore = {
    targets: '#truck',
    translateX: 460,
    duration: 2000,
    easing: 'easeOutExpo',
  }

  const rolltonDrop = ({
    targets: '.rollton',
    translateY: 630,
    scale: function(el, i){
      return anime.random(0.4, 1.1)
    },
    rotate: 360,
    duration: 1000,
    delay: anime.stagger(100),
    loop: false,
    easing: 'linear',
  })

  const rolltonStick = ({
    targets:'.rollton',
    translateX: 700,
    duration: 3000,
    easing: 'linear',
  })

  const truckAfter = ({
    targets: '#truck',
    translateX: 700,
    duration: 1000,
    easing: 'linear',
  })


  truckAnim
    .add(truckBefore)
    .add(wheelRotate, '-=10000')
    .add(rolltonDrop)
    .add(truckAfter)
    .add(rolltonStick, '-=1000')

}

function truckAnimation(){
  const wheel_selector = document.querySelectorAll(['.wheel_left','.wheel_right']);
  const path = anime.path("#motion_path path");
  const truckAnim = window.anime.timeline({
    loop: false,
  });

  const wheelRotate = {
    targets: wheel_selector,
    rotate: 360,
    loop: true,
    direction: 'alternate',
    scaleX: [
      {value: 1.1, duration: 1000, easing: 'easeInOutSine'},
      {value: 1, duration: 1000, easing: 'easeInOutSine'},
    ],
    scaleY: [
      {value: 1, duration: 1000, easing: 'easeInOutSine'},
      {value: 1.1, duration: 1000, easing: 'easeInOutSine'},
    ],
    easing: 'easeOutElastic(1, .8)',
  }

    const truckBefore = {
      targets: '#truck',
      translateX: 460,
      duration: 2000,
      easing: 'easeOutExpo',
    }
  
    const rolltonDrop = ({
      targets: '.rollton',
      translateX: path('x'),
      translateY: path('y'),
      scale: function(el, i){
        return anime.random(0.4, 1.1)
      },
      rotate: function(el, i){
        return anime.random(200, 900)
      },
      duration: 1000,
      delay: anime.stagger(100),
      loop: false,
      easing: 'linear',
    })
  
    const rolltonStick = ({
      targets:'.rollton',
      translateX: 3000,
      duration: 8700,
      easing: 'linear',
    })
  
    const truckAfter = ({
      targets: '#truck',
      translateX: 3000,
      duration: 8000,
      easing: 'linear',
    })
  
  
    truckAnim
      .add(truckBefore)
      .add(wheelRotate, '-=10000')
      .add(rolltonDrop)
      .add(truckAfter)
      .add(rolltonStick, '-=8000')
  }


  }
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


 

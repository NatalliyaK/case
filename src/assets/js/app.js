//accordion
const titles = document.querySelectorAll('.accordion__title');
const contents = document.querySelectorAll('.accordion-content');

titles.forEach(item => item.addEventListener('click', () => {
  const activeContent = document.querySelector('#' + item.dataset.tab);

  if (activeContent.classList.contains('active')) {
    activeContent.classList.remove('active');
    item.classList.remove('active');
    activeContent.style.maxHeight = 0;
  } else {
    contents.forEach(element => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
    });

    titles.forEach(element => element.classList.remove('active'));

    item.classList.add('active');
    activeContent.classList.add('active');
    activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
  }
}))

// animation
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
      observer.unobserve(change.target);
    } else { change.target.classList.remove('element-show'); }
  });
}
let options = {
  threshold: [0.2]
};


let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
let elementsAnimationRight = document.querySelectorAll('.element-animation-right');
let elementsAnimationLeft = document.querySelectorAll('.element-animation-left');

function animationElement(elements) {
  for (let elm of elements) {
    observer.observe(elm);
  }
};

if (elements) {
  animationElement(elements);
}

if (elementsAnimationRight) {
  animationElement(elementsAnimationRight);
}

if(elementsAnimationLeft){
  animationElement(elementsAnimationLeft);
}

const wrapperFormSend = document.querySelector('.formSend__wrapper');

//po-pop
function showSuccessModal () {
  const popUp = document.querySelector('.pop-up');
  const close = document.querySelector('.pop-up__close');
  const popUpButton = document.querySelector('.pop-up__button');
  function openModal() {
    popUp.style.display = 'block';
  }

  function closeModal() {
    popUp.style.display = 'none';
  }

  close.addEventListener('click', function () {
    closeModal();
  })

  popUpButton.addEventListener('submit',function () {
    closeModal();
  })

  openModal();

}

//form

function handleForm(formInf) {
  formInf.addEventListener('submit', function (event) {

    let controls = this.querySelectorAll('.form-control');
    let isValid = true;
    controls.forEach(control => {
      if (control.classList.contains('required') && !control.value) {
        isValid = false;
      }
    });
    event.preventDefault();
    const formData = new FormData(formInf); // создаём объект FormData, передаём в него элемент формы
    // теперь можно извлечь данные
    if (isValid) {
      showSuccessModal();
      controls.forEach(control => {
        control.value = '';
      });
      visibleForm.classList.remove('active');
      enableScroll();
    }

    doAPIcall('POST', formData, 'form.php', function (data) {
      console.log(data)
    })
  })
}

function doAPIcall(type, data = '', url, callback) {
  fetch(url, {
    method: type,
    body: data
  })
      .then(response => response.text())
      .then(data => {
        if (callback) callback(data);
      })
      .catch(error => console.error(error));
}

const formSend = document.querySelectorAll('#sendForm');
const formIncident = document.querySelector('#formIncident');
const modalForm = document.querySelector('#modalForm');

  if(formSend) {
    formSend.forEach(item => {
      handleForm(item);
    })
  }

  if(formIncident) {
    handleForm(formIncident)
  }

  if(modalForm) {
    handleForm(modalForm)
  }

//прокрутка

let backTop = document.getElementById("back-top");
// добавляем обработчик события click
backTop.addEventListener("click", function (event) {
// отменяем действие по умолчанию
  event.preventDefault();
// прокручиваем страницу к элементу с id="top" плавно
  window.scrollTo({
    top: 0,
    behavior: "smooth",
    duration: 5000, // добавляем свойство duration с нужным значением
  });
});

const number = document.querySelector('#number');

//number animate
function animateValue(obj, start, end, duration) {
  // убедитесь, что значения являются числами
  if (isNaN(start) || isNaN(end)) {
    return;
  }

  let range = end - start;
  let minTimer = 50;
  let stepTime = Math.abs(Math.floor(duration / range));
  stepTime = Math.max(stepTime, minTimer);
  let startTime = new Date().getTime();
  let endTime = startTime + duration;
  let timer;

  function run() {
    let now = new Date().getTime();
    let remaining = Math.max((endTime - now) / duration, 0);
    let value = Math.round(end - (remaining * range));
    obj.innerHTML = value;
    if (value === end) {
      clearInterval(timer);
    }
  }

  timer = setInterval(run, stepTime);
  run();
}

// Создаем новый экземпляр Intersection Observer
let observerNumber = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Если элемент видимый
    if(entry.isIntersecting) {
      animateValue(number, 0, 97, 3000);
      // Отключаем observer после анимации
      observer.disconnect();
    }
  });
}, { rootMargin: '50%' });

// Начинаем наблюдение
observerNumber.observe(number);

// sendForm

const sendForm = document.querySelectorAll('.openForm');
const visibleForm = document.querySelector('.formSend__wrapper');
const close = document.querySelectorAll('.close');

sendForm.forEach(el => {
  el.addEventListener('click', () => {
    visibleForm.classList.toggle('active')
    if(visibleForm.classList.contains('active')) {
      disableScroll()
    } else {
      enableScroll()
    }
  })
})
close.forEach(item => {
  item.addEventListener('click', () => {
    visibleForm.classList.toggle('active')
    if(visibleForm.classList.contains('active')) {
      disableScroll()
    } else {
      enableScroll()
    }
  })
})

// Получаем все пункты и слайдер
const listItems = document.querySelectorAll('.practise__information-list li a');

// Добавляем обработчик событий на каждый пункт
listItems.forEach((item, index) => {
  item.addEventListener('click', (event) => {

    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    // Переключаем слайдер на соответствующий слайд
    slider2.slideTo(index);
    console.log(slider2)
  });
});

//video
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

//policise
const showPolicese = document.querySelectorAll('.show-policese');
const policyModal = document.querySelector('.policyModal');
const closePolicise = document.querySelector('.close-policise');

showPolicese.forEach(el => {
  el.addEventListener('click', ()=> {
  policyModal.classList.toggle('show');
  if(policyModal.classList.contains('show')) {
    disableScroll()
  } else {
    enableScroll()
  }
  } )
})

closePolicise.addEventListener('click', ()=> {
  policyModal.classList.toggle('show');
  if(policyModal.classList.contains('show')) {
    disableScroll()
  } else {
    enableScroll()
  }
})

//tabs

const numberContent = document.querySelectorAll('.number__content');
const numberList = document.querySelectorAll('.number__tab');

if(numberContent && numberList) {
  numberList.forEach((el, index) => {
    el.addEventListener('click', () => {
      numberContent.forEach(el => {
        el.style.display = "none"
      })
      numberContent[index].style.display = 'block'
    })
  })
}

//scroll
function disableScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  // document.documentElement.style.setProperty('scroll-behavior', 'hidden');

  document.documentElement.classList.add('overflow');

  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}
function enableScroll() {
  // document.documentElement.style.setProperty('scroll-behavior', null);

  document.documentElement.classList.remove('overflow');
  window.onscroll = function () { };
}

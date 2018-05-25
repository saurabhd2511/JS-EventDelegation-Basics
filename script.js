/*
Original code from tutorial : https://javascript.info/introduction-browser-events
*/

//Task 1: Hide on Click
document.getElementById('hider').onclick = function() {
  document.getElementById('text').hidden = true;
}

field.onclick = function(event) {

  // window-relative field coordinates
  let fieldCoords = this.getBoundingClientRect();

  // the ball has position:absolute, the field: position:relative
  // so ball coordinates are relative to the field inner left-upper corner
  let ballCoords = {
    top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
    left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
  };

  // prevent crossing the top field boundary
  if (ballCoords.top < 0) ballCoords.top = 0;

  // prevent crossing the left field boundary
  if (ballCoords.left < 0) ballCoords.left = 0;


  // // prevent crossing the right field boundary
  if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
  }

  // prevent crossing the bottom field boundary
  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + 'px';
  ball.style.top = ballCoords.top + 'px';
}

let menuElem = document.getElementById('sweeties');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() {
  menuElem.classList.toggle('open');
};


let panes = document.querySelectorAll('.pane');

for(let pane of panes) {
  pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
  // button becomes the first child of pane
  pane.firstChild.onclick = () => pane.remove();
}


//Script for carousal task

/* label the images, just for convenience, to visually track them */
let i = 1;
for(let li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

/* configuration */
let width = 130; // image width
let count = 3; // visible images count

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; // ribbon scroll position

carousel.querySelector('.prev').onclick = function() {
  // shift left
  position += width * count;
  // can't move to the left too much, end of images
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
  // shift right
  position -= width * count;
  // can only shift the ribbbon for (total ribbon length - visible count) images
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};
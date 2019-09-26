// DOM Elements
const time = document.getElementById("time"),
      greeting = document.getElementById("greeting"),
      name = document.getElementById("name"),      
      focus = document.getElementById("focus");

// Options
const showAmPm = true;

// Show time
function showTime(){
  let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();
  
  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";
  
  // 12hr Format
  hour = hour % 12 || 12;
  
  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;
  
  setTimeout(showTime, 1000);
  
}

// Add Zeros
function addZero(n){
  return(parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and greeting

function setBgGreet (){
  let today = new Date(),
      hour = today.getHours();
  
  if(hour < 12){
     // Morning
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')";
    greeting.textContent = "Good Morning";
     } else if(hour < 18) {
       // Afternoon
     document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1456066775592-f14f4ea694a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80')";
     greeting.textContent = "Good Afternoon";
     } else {
       // Evening
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')";
    greeting.textContent = "Good Evening";
    document.body.style.color = 'white';
     }
}

// Get Name
function getName(){
  if(localStorage.getItem('name') === null) {
     name.textContent = '[Enter Name]';
     } else {
       name.textContent = localStorage.getItem('name');
     }
}

// Set Name
function setName(e){
  if(e.type === 'keypress'){
    // Make sure enter is pressed
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('name', e.target.innerText);
      name.blur();
       }
     
     } else {
       localStorage.setItem('name', e.target.innerText);
     }
}

// Get Focus
function getFocus(){
  if(localStorage.getItem('focus') === null) {
     focus.textContent = '[Enter Focus]';
     } else {
       focus.textContent = localStorage.getItem('focus');
     }
}

// Set Focus
function setFocus(e){
  if(e.type === 'keypress'){
    // Make sure enter is pressed
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
       }
     
     } else {
       localStorage.setItem('focus', e.target.innerText);
     }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


// Run
showTime();
setBgGreet();
getName();
getFocus();
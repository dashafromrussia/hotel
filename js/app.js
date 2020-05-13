
    
$(window).on('load', function(){
    initMobileMenu();
});
       

function initMobileMenu() {
    $('#menuButton').on('click', function() {
        $('#menuButton').toggleClass('active');
        $('#menuContainer').toggleClass('active');
    });
}

/* modal window*/

$('#subscribePopupButton').click(function() {
    $('#overlay').addClass('visible');
    $('#popupWindow').addClass('visible');
});

$('#closeButton').click(function() {
    $('#overlay').removeClass('visible');
    $('#popupWindow').removeClass('visible');
});


$('#popupWindow').click(function(event){
    if (event.target.id == 'popupWindow') {
        $('#overlay').removeClass('visible');
        $('#popupWindow').removeClass('visible');
    }
});

/* modal window video*/

$('#showVideoButton').click(function() {
    $('#overlay').addClass('visible');
    $('#popupWindowVideo').addClass('visible');
});

$('#popupWindowVideo').click(function(event){
    console.log(event.target);
    if (event.target.id == 'popupWindowVideo') {
        $('#overlay').removeClass('visible');
        $('#popupWindowVideo').removeClass('visible');
    }
});

$('#closeButtonVideo').click(function() {
    $('#overlay').removeClass('visible');
    $('#popupWindowVideo').removeClass('visible');
});


/* mobile menu*/

$('#elementOne').click(function() {console.log('clik'); 
 $('#menuContainer').removeClass('active');
});

$('#elementTwo').click(function() {console.log('clik'); 
 $('#menuContainer').removeClass('active');
});

$('#elementThree').click(function() {console.log('clik'); 
 $('#menuContainer').removeClass('active');
});

$('#elementFour').click(function() {console.log('clik'); 
 $('#menuContainer').removeClass('active');
});

$('#elementFive').click(function() {console.log('clik'); 
 $('#menuContainer').removeClass('active');
});

/* slide_show*/

$('#overlay').click(function() {
    $('#overlay').css('visibility', 'hidden');
    $('#popupWindow').css('visibility', 'hidden');
});


$('#slideButton').click(function(){
    $('#slideButton').addClass('hidden');
    $('#promoWrapper').addClass('aquapark');
    $('#slideButtonOne').addClass('active');
});

$('#slideButtonOne').click(function(){
   $('#promoWrapper').addClass('club');
   $('#slideButtonOne').removeClass('active');
   $('#slideButtonTwo').addClass('active');
});

$('#slideButtonTwo').click(function(){
    $('#promoWrapper').removeClass('club');
    $('#promoWrapper').removeClass('aquapark');
    $('#slideButtonTwo').removeClass('active');
    $('#slideButton').removeClass('hidden');
});
////табы////

var selecto = document.querySelectorAll('.selecto');
  var num = document.querySelectorAll('.num');  
function init(){ 
for( let i = 1; i < selecto.length; i++){   
 selecto[i].style.display = "none";
 }
} 
init();
for(var i =0; i < num.length; i++){ 
    num[i].onclick = showEl;
}
function showEl(){  
   num.forEach(function(el){
       el.classList.remove('active');
    });
   this.classList.add('active');
       for( let j = 0; j < selecto.length; j++){ 
       selecto[j].style.display = "none";
            for( let i = 0; i< num.length; i++){     
           if(num[i] == this){
            selecto[i].style.display = "block";
        } 
     }   
  }  
}






/* scrollTop*/
 
$(window).on('scroll', function() {
    toggleScrollUpButton();
});

function toggleScrollUpButton() {
    var TOP_OFFSET = 0;
    if ($('html').scrollTop() > $(window).height() - TOP_OFFSET) {
        $('#scrollUpArrow').addClass('visible');
    }
    else {
        $('#scrollUpArrow').removeClass('visible');
    }
}


$('#scrollUpArrow').click(function() { console.log('clik'); 
$('html').animate({ 
scrollTop:0 
}, 1000)})


$('#showAll').click(function(){
    $('#showAll').addClass('hidden');
    $('#feedBack').addClass('active');
    $('#directionBack').addClass('active');
});


$('#directionBack').click(function(){
    $('#showAll').removeClass('hidden');
    $('#feedBack').removeClass('active');
    $('#directionBack').removeClass('active');
});


/* gallery*/
let overlay = document.getElementById('overlay');
let popupW = document.getElementById('popupWindowG');
let close = document.getElementById('closeButtonG');
close.onclick = closeF;
popupW.onclick = closeP;


function closeF(){
    overlay.classList.remove('visible');
    popupW.classList.remove('visible'); 
}

function closeP(){
    if(event.target==popupW){
       closeF();  
    }
}

let current;
let big = document.querySelectorAll('.galery1 img'); //big
let small = document.querySelectorAll('.galery2 img');//small
let next = document.getElementById('next');//кнопки листать вперед назад
let pre = document.getElementById('pre');
for(let i=0; i<small.length;i++){
    small[i].onclick = fun;
    function fun(){
        overlay.classList.add('visible');
        popupW.classList.add('visible');
        for(let j=0; j<big.length;j++){
            big[j].style.display = "none";
            if(big[j].name == this.name){
                big[j].style.display ="block";
                current = j;
                next.onclick = slider;
                pre.onclick = slider1;
                function slide(){
                    for(let k=0; k<big.length; k++){
                        big[k].style.display="none";
                    }
                   big[current].style.display="block";
                }
                slide();
                function slider(){ //чтобы листать вперед
                    if(current == big.length-1){
                        current = 0;
                    }
                    else{
                        current++;
                    }
                slide();
                console.log(current);
                }
                
                function slider1(){ //чтобы листать назад
                
                    if(current == 0){
                        current = big.length-1;
                    }
                    else{
                        current--;
                    }
                    slide();
                    console.log(current);
                }  
            }
        }
    }

}

/* отправка формы 2*/

document.querySelector('.button_two').onclick = function(event){
    event.preventDefault();
    let name = document.querySelector('.name_two').value;
    let email = document.querySelector('.email_two').value;
   


let data ={
    "name" : name,
    "email" : email   
}

ajax('core/signup.php','POST', sendata, data);
 
    function sendata(result){
     console.log(result);
   if(result == 2){
       chips('Введите данные',4000,'red');
   }
 else if(result == 1){
     chips('Новости у Вас на почте!',4000,'#16a085');
 }
 else{
     chips('Ошибка!Повторите попытку позже!',4000,'red');
 }
}

}
/*отправка формы 1*/

document.querySelector('.buttonsub').onclick = function(event){
    event.preventDefault();
    let view = document.querySelectorAll('.view');
    for(let i = 0; i< view.length;i++){
        if(view[i].checked){
            view = view[i].value;
           
        }
    }
let room = document.querySelectorAll('.room');
    for(let i = 0; i<room.length;i++){
        if(room[i].selected){
            room = room[i].value;
            
        }
    }

let name = document.querySelector('.name').value;
let email = document.querySelector('.email').value;


let first = document.getElementById('first').value;
let last = document.getElementById('last').value;
first = Date.parse(first); 
last = Date.parse(last); 
let days= '';
for(let i = first; i < last; i = i + 24*60*60*1000){ 
  days=`${new Date(first).toISOString().substr(0,10)} - ${new Date(last-1).toISOString().substr(0,10)}`;
}
 
let data ={
    "name" : name,
    "email" : email,
    "room": room,
    "view": view,
    "days": days
}

ajax('core/findroom.php','POST', findroom, data);
    
    function findroom(result){
     console.log(result);
   if(result == 2){
        chips('Введите данные!',4000,'red');
   }
 else if(result == 1){
      chips('Мы свяжемся с Вами в ближайшее время!',4000,'#16a085');
      document.getElementById('popupWindow').style.display = 'none';
      document.getElementById('overlay').style.display = 'none';
     
 }
 else{
      chips('Ошибка!Повторите попытку позже!',4000,'#16a085');
     
 }
}


}

/*всплывающие сообщения*/


function chips(message,timeremove = 3000,color='rgba(0,0,0,.4)'){ 
    let chips = document.createElement('div'); 
   chips.classList.add('chips');          
    chips.innerHTML = message;
    addChips(chips);
    let colorChips = document.querySelectorAll('.chips').forEach(function(el){
        el.style.backgroundColor = color;
    });
    
    setTimeout(function(){deleteChips(chips)},timeremove); 

}

function deleteChips(chips){ 
    chips.remove();
let allChips = document.querySelectorAll('.chips-field .chips'); 
 if(allChips.length == 0){
   document.querySelector('.chips-field').remove();  
 }
}

function addChips(chips){ 
    let chipsField = document.querySelector('.chips-field');
    if(chipsField){ 
        chipsField.appendChild(chips);
    }
    else 
    {
    let chipsField = document.createElement('div'); 
    chipsField.classList.add('chips-field');
    document.querySelector('body').appendChild(chipsField);
     chipsField.appendChild(chips);    
    }
}




    

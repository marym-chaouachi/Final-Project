

//heart function
function changeColor(col) {
  if (col.target.style.color !== 'red'){
    col.target.style.background = '#FFD1D1'
    col.target.style.color = 'red'
  }
  else{
    col.target.style.background = '#fff'
    col.target.style.color = '#ff9494'
  }
}



for (let i=0; i<12; i++){

  //plus function
  let quantity = Array.from(document.getElementsByClassName('quantity'));
  let plus = Array.from(document.getElementsByClassName('plus'));
  plus[i].addEventListener('click', function() {
      quantity[i].innerHTML++;
  })



  //minus function
  let minus = Array.from(document.getElementsByClassName('minus'))
  minus[i].addEventListener('click', function(){
    if(quantity[i].innerHTML>0){
        quantity[i].innerHTML--;
    }
  })



  // total price function
  let price = Array.from(document.getElementsByClassName("price"))
  let totalle = document.getElementById("totalle")
  let addbttn = Array.from(document.getElementsByClassName('addbttn'))

  addbttn[i].addEventListener('click', function(){
    let somme = 0;
    for (let i=0; i<12; i++){
      somme += Number(price[i].innerHTML) * Number(quantity[i].innerHTML);
      totalle.innerHTML = somme;
    }
  })



  //heart button
  let heartbttn = Array.from(document.getElementsByClassName('heartbttn'));
  heartbttn[i].addEventListener('click', changeColor);
}



//Confirmation to buy
let buy = document.getElementsByClassName('buy')
buy.addEventListener('click', function(){
  confirm("Are you sure to buy?")
})



//contact form

//name
let cname = document.getElementsId('cname')
cname.addEventListener('change', function(){
  if (cname.value.length > 5){
    alert('The name should contain more than 5 charecters');
    cname.setAttribute('class', 'form-control is invalid');
    cname.focus()
  }
})

//email
let cemail = document.getElementsById('cemail')
cemail.addEventListener('change', function(){
  if (!cemail.value.includes('@')){
    alert('The email should contain @');
    cemail.setAttribute('class', 'form-control is invalid');
    cemail.focus()
  }
})

//subject
let csubject = document.getElementsById('csubject')
csubject.addEventListener('change', function(){
  if (!csubject.value.length > 5){
    alert('The subject should contain more than 5 charecters');
    csubject.setAttribute('class', 'form-control is invalid');
    csubject.focus()
  }
})

//submit button
let csubmit = document.getElementsById('csubmit')
csubmit.addEventListener('click', function (){
  alert('your message has been sent!')
})



//sign up form

//username
username.addEventListener('change', function(){
  if (username.value.length > 5){
    alert('The username should contain more than 5 charecters');
    username.setAttribute('class', 'form-control is invalid');
    username.focus()
  }
})

//email
email.addEventListener('change', function(){
  if (!email.value.includes('@')){
    alert('The email should contain @');
    email.setAttribute('class', 'form-control is invalid');
    email.focus()
  }
})

//passwords
let password = document.getElementById('password')
password.addEventListener('change', function(){
  if (password.value.length > 8){
    alert('The password should contain more than 8 charecters');
    password.setAttribute('class', 'form-control is invalid');
    password.focus()
  }
})


let password2 = document.getElementById('password2')
password2.addEventListener('change', function(){
  if (password2.value === password){
    alert('The passwords shouls be the same');
    password2.setAttribute('class', 'form-control is invalid');
    password2.focus()
  }
})
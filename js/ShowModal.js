//modal[0]= Форма feedback
//modal[1]= Карта
//modal[2]= Реєстраія
//modal[3]= Вхід
var modal = document.getElementsByClassName("modal");
var map = document.getElementById("map");
var buttonClose = document.getElementsByClassName("modal-close");
var buttonModal = document.getElementById("OpenModal");
var buttonCredit = document.getElementById("OpenCredit");
var ModalSignUp=document.getElementsByClassName("modal-sign-up");
var ModalLogIn = document.getElementsByClassName("modal-sign-in");
var SignUp = document.getElementsByClassName("sign-up");
var LogIn = document.getElementsByClassName("sign-in");


buttonModal.onclick =
    function () {
        modal[0].style.display = "block";
        modal[1].style.display = "none";
        modal[2].style.display = "none";
        modal[3].style.display = "none";
    }
buttonCredit.onclick = function () {
    modal[0].style.display = "block";
    modal[1].style.display = "none";
    modal[2].style.display = "none";
    modal[3].style.display = "none";
    }

map.onclick = function ShowMap() {  
    modal[0].style.display = "none";
    modal[1].style.display = "block";
    modal[2].style.display = "none";
    modal[3].style.display = "none";
}
SignUp[0].onclick = function () {    
    modal[0].style.display = "none";
    modal[1].style.display = "none";   
    modal[2].style.display = "block";
    modal[3].style.display = "none";
}

LogIn[0].onclick = function () {
    modal[0].style.display = "none";
    modal[1].style.display = "none";
    modal[2].style.display = "none";
    modal[3].style.display = "block";
}

buttonClose[0].onclick = function () {
    modal[0].style.display = "none";
}
buttonClose[1].onclick = function () {
    modal[1].style.display = "none";
}
buttonClose[2].onclick = function () {
    modal[2].style.display = "none";
}
buttonClose[3].onclick = function () {
    modal[3].style.display = "none";
}



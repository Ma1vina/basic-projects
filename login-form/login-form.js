function showPassword(target){
    var input = document.getElementById("Pwd");
    if (input.getAttribute("type") == "password") {
        target.classList.add("view"); 
        input.setAttribute("type", "text");
}else{
    target.classList.remove("view");
		input.setAttribute("type", "password");
}
return false;
}


function getEntrance() {
    var login = document.getElementById("username").value;
    var password = document.getElementById("Pwd").value;
    if(login == "Марина" && password == "123123"){
        alert("Welcome!")
    }else if(login == "Дмитрий" && password == "321321"){
        alert("Welcome!")
} else {
    alert("Inccorect login or password!");
}
}
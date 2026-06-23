document.addEventListener(
"DOMContentLoaded",
()=>{

const loginForm =
document.getElementById(
"loginForm"
);

if(loginForm){

loginForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const email =
document.getElementById(
"email"
).value;

const password =
document.getElementById(
"password"
).value;

if(
email === "admin@kampus.com"
&&
password === "admin123"
){

window.location.href =
"dashboard-admin.html";

}
else{

window.location.href =
"dashboard-pelapor.html";

}

});

}

});
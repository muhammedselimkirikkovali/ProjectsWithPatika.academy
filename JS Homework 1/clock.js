let fullName = prompt("Adınız Nedir?")

document.querySelector("#myName").innerHTML = fullName 

function dateHours() {
    let date = new Date().toLocaleString('tr-TR') 
document.querySelector('#myClock').innerHTML = date;
}
setInterval(dateHours, 1000)

let day = new Date();
let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

document.querySelector('#days').innerHTML = (days[day.getDay()])
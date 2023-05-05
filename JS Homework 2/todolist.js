
let taskDOM = document.querySelector("#task");  
let listDOM = document.querySelector("#list");  
let allLiDOM = document.querySelectorAll("li"); 


let closeButton = `<button 
onclick="removeElement(parentNode)" 
style="padding: 16px;" type="button" 
class="btn-close xclose border-0 ms-auto" 
data-dismiss="toast"
aria-label="Close">
</button>`


function markElement(){
    this.classList.toggle("checked");
}


function removeElement(erase) { 
    erase.remove();
    eraseStrorage(erase);
}




allLiDOM.forEach(e => {
    e.addEventListener("click", markElement);
    e.innerHTML += `${closeButton}`;
})




function newElement() {

    if (!taskDOM.value || !taskDOM.value.trim()) {
        $(".error").toast('show')
    }

    else {
        let liDOM = document.createElement("li");

        listDOM.append(liDOM); 
        
        console.log(`Listeye eklendi. Girilen değer: ${taskDOM.value}`)
        
        $(".success").toast('show') 

        liDOM.innerHTML = `${taskDOM.value} ${closeButton}`;

        liDOM.addEventListener("click", markElement);

        setStrorage()
    }  

    taskDOM.value = "";
}


// Liste elemanı içeriğini localStorage'ye eklediğimiz fonksiyon:
function setStrorage(){
    let toDoList = JSON.parse(localStorage.getItem("toDoList"));
    toDoList.push(`${taskDOM.value}`);
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
}


// Liste elemanının içeriğini localStorage'den sildiğimiz fonksiyon:
function eraseStrorage(erase){
    let toDoList = JSON.parse(localStorage.getItem("toDoList"));
    if (toDoList.includes(erase.firstChild.textContent) == true) {
        let indexbul = toDoList.findIndex(e =>
            e == erase.firstChild.textContent
            );
        toDoList.splice(indexbul, 1);
        localStorage.setItem("toDoList", JSON.stringify(toDoList));
    } 
}

// Eğer daha önce oluşturulmuş bir localStorage dosyası yok ise oluşturan fonksiyon:
function localSelf() {
    let toDoList = JSON.parse(localStorage.getItem("toDoList"));
    if (!toDoList) {toDoList = []};
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
}

// Sayfayı her açtığımızda localStorage'de bulunan her elemanı listeye ekleyen fonksiyon:
function localDOM(){
    let toDoList = JSON.parse(localStorage.getItem("toDoList"));
    toDoList.forEach((e, index) => {
        let liDOM = document.createElement("li");
        listDOM.append(liDOM);
        liDOM.innerHTML = toDoList[index]
        liDOM.innerHTML += `${closeButton}`
        liDOM.addEventListener("click", markElement);
    })
}

localSelf()

localDOM()







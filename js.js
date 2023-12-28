const inputBtnEl = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const ulEl = document.getElementById("ul-el");


inputBtnEl.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    
})

for (i = 0; i <myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}
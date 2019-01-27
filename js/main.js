
var body = document.querySelector("body");
var slots = body.querySelectorAll("div.slots");
var revArr = [];

for (var i = 0; i < slots.length; i++) {
    revArr[i] = slots[i]; 
}

revArr.reverse();

for (var i = 0; i < revArr.length; i++) {
    revArr[i].style.order = i;
}
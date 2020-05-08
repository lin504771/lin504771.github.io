let box = document.querySelector("div");

let link = document.createElement("a");
link.innerHTML = "Click for card!";
link.href = "./birthday.html";
link.style.textAlign = 'center';

box.onwheel = function() {
    document.body.appendChild(link);
}

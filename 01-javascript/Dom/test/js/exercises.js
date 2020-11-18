console.log("It is a wonderful day");

let nodePage = document.body;
nodePage.style.fontFamily = 'Arial,sans-serif';

let names = document.getElementById('nickname');
names.innerHTML = 'Greener';

let favor = document.getElementById('favorites');
favor.innerHTML = 'cooking';

let hometown = document.getElementById('hometown');
hometown.innerHTML = "Xi'an";

let lists = document.getElementsByTagName('li');
for (var i = 0; i < lists.length; i++) {
    lists[i].className = 'listitem';
}

let color = document.getElementsByClassName('listitem');
    for (var i = 0; i < color.length; i++) {
        color[i].style = 'color ：red';
    }

let body = document.body;
let pic = document.createElement('img');
pic.src= 'http://via.placeholder.com/250';
body.appendChild(pic);

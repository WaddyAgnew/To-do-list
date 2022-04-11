
// removing a selected list
var openlist= document.getElementsByTagName("LI");
var i;
for(i =0; i < openlist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className ="close";
    span.appendChild(txt);
    openlist[i].appendChild(span);
}

// cross ouf the list

const cross = document.querySelector('UL');
cross.addEventListener('click',function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('crossed');
    }
}, false);

// adding to the list

function list_Update()
{
var list = document.createElement('li');
var input = document.getElementById("Box-entry").value;

list.appendChild(document.createTextNode(input));

document.querySelector('ul').appendChild(list);
}
document.getElementById('Btn').onclick = list_Update;
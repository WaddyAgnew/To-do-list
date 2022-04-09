
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
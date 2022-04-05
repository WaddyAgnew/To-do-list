function list_Update()
{
var list = document.createElement('li');
var input = document.getElementById("Btn").value;

list.appendChild(document.createTextNode(input));

document.querySelector('ul').appendChild(list);
}
document.getElementById('Btn').onclick = list_Update;
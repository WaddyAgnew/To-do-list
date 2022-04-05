function list_Update()
{
var list = document.createElement('li');
var input = document.getElementById("Input Button").value;

list.appendChild(document.createTextNode(input));

document.querySelector('ul').appendChild(list);
}
document.getElementById('Btn').onclick = list_Update;
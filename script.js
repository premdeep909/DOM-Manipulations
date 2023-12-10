 var headerTitle = document.getElementById('main-header');
 headerTitle.style.borderBottom = 'solid 3px #000';
var addItems = document.getElementsByClassName('title');
addItems[0].style.fontWeight = "bold";
addItems[0].style.color = "green";

var item = document.getElementsByClassName('list-group-item');
item[2].style.backgroundColor ='green';

var items = document.getElementsByTagName('li');
for(var i = 0;i<items.length;i++){
   items[i].style.fontWeight ='bold';
}
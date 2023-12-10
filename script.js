 //var headerTitle = document.getElementById('main-header');
 //headerTitle.style.borderBottom = 'solid 3px #000';
//var addItems = document.getElementsByClassName('title');
//addItems[0].style.fontWeight = "bold";
//addItems[0].style.color = "green";

//var item = document.getElementsByClassName('list-group-item');
//item[2].style.backgroundColor ='green';
//for(var i = 0;i<item.length;i++){
   // item[i].style.backgroundColor = 'red';
//}
//var items = document.getElementsByTagName('li');
//for(var i = 0;i<items.length;i++){
 //  items[i].style.fontWeight ='bold';
//}
 var secondItems = document.querySelector('.list-group-item:nth-child(2)');
 secondItems.style.backgroundColor = 'green';

 var thirdItems = document.querySelector('.list-group-item:nth-child(3)');
 thirdItems.style.display = 'none';

 var item = document.querySelectorAll('li');
 item[1].style.color = 'green';
 
var odd = document.querySelectorAll('li:nth-child(odd');

for(var i = 0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'green';
}
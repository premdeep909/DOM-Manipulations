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
 //var secondItems = document.querySelector('.list-group-item:nth-child(2)');
 //secondItems.style.backgroundColor = 'green';

 //var thirdItems = document.querySelector('.list-group-item:nth-child(3)');
 //thirdItems.style.display = 'none';

 //var item = document.querySelectorAll('li');
 //item[1].style.color = 'green';
 
//var odd = document.querySelectorAll('li:nth-child(odd');

//for(var i = 0;i<odd.length;i++){
  //  odd[i].style.backgroundColor = 'green';
//}

// traversing the dom
var itemList = document.querySelector('#items');
//parent node 
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);

//parent element
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentElement.parentElement.parentElement);

//CHILD NODE
//console.log(itemList.childNodes);// in this we have a text due to white space after every item

//children 
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'yellow';

//FirstChild it is also useless as well as child node because it also give us whitespace 
//console.log(itemList.firstChild);

//FirstElementChild it will be change first item of element 
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'Hello 1';

//last
//console.log(itemList.lastChild);

// lastElementChild it will give us last element 
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling it will give us text only
//console.log(itemList.nextSibling);

// nextelementsibling ,in this it will give us null because we have not the sibling og 
//console.log(itemList.nextElementSibling);

//previousSibling,it will also give us text 
//console.log(itemList.previousSibling);

//previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'green';

 //createElement 


 // create a div
 //var newDiv = document.createElement('div');
 
 //Add class 
// newDiv.className = 'hello';

 //add id
 //newDiv.id = 'hello1';

 //add atribute
 //newDiv.setAttribute('title','hello div');

 //create text node 
 //var newDivText = document.createTextNode('HEllo word');

 //add text to div
 //newDiv.appendChild(newDivText);

 //var container = document.querySelector('header .container');
 //var h1 = document.querySelector('header h1');

 //console.log(newDiv);

 //container.insertBefore(newDiv,h1);


 //var newDiv = document.createElement('div');
 //newDiv.className = 'list-group-item';
 //newDiv.id = 'Hello1';
 //newDiv.setAttribute('title','Hello div');
 //newDivText = document.createTextNode('HEllo word');
 //newDiv.appendChild(newDivText);
 //var items = document.querySelector('ul');
 //var li = document.querySelector('ul li');

 //console.log(newDiv);
 //items.insertBefore(newDiv,li);


 var addform = document.getElementById('addForm');
  var itemList = document.getElementById('items');

  //form submit event
  addform.addEventListener('submit',addItem);
   //delete event 
   itemList.addEventListener('click',removeItem);
  //add item
  function addItem(e){
   e.preventDefault();
  // console.log(1);  
   //get input value
   var newItem = document.getElementById('item').value;  
    console.log(newItem);
   //create new li element
   var li = document.createElement('li');
   // add class
    li.className = 'list-group-item';   
    //add text node with input value
   li.appendChild(document.createTextNode(newItem));
   //create delete button element  
   var deletebtn = document.createElement('button');
    
   //add class the delete button 
   deletebtn.className = 'btn btn-danger btn-sm float-right delete';

   //append textnode 
   deletebtn.appendChild(document.createTextNode('X'));
   //appened button to li 
   li.appendChild(deletebtn);
   //append li to list
   itemList.appendChild(li);

   // making the input box empty after the newly entered value gets added to the items list
  document.querySelector("#item").value = "";
  // creating edit button
  const btn = document.createElement("button");
  btn.innerText = "Edit";
  btn.className = "btn btn-primary btn-sm float-right mr-2";
  // adding button to lists
  li.appendChild(btn);
  }
  function removeItem(e){
   if(e.target.classList.contains('delete')){
    if(confirm('Are you Sure')){
      var li  = e.target.parentElement;
      itemList.removeChild(li);

    }
   }
  }
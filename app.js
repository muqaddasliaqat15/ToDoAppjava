var list = document.getElementById('list')

function todoItem(){

    //create li with Text node
    var items = document.getElementById('items');
    var userText = document.createTextNode(items.value);
    var li = document.createElement('li');
    var ul = document.getElementById("list")
    var liText= document.createTextNode(items.value);
    li.appendChild(liText);
    list.appendChild(li);
    var p = document.createElement("p");
    var btn = document.createElement("button");
    var btnText = document.createTextNode("Edit");
    var doneBtn = document.createElement("button");
    var doneText = document.createTextNode("Done");
    doneBtn.appendChild(doneText);
    btn.appendChild(btnText);
    btn.setAttribute("onclick","edit(this.parentElement.id)");
    doneBtn.setAttribute('onClick','compelet(this.parentElement.id)');
    p.appendChild(userText);
    li.appendChild(p);
    li.appendChild(btn);
    li.appendChild(doneBtn);
    ul.appendChild(li);
    li.setAttribute('id',items.value);
    //create delete button
    var delBtn = document.createElement('button');
    var btnText = document.createTextNode("Delete");
    delBtn.appendChild(btnText);
delBtn.setAttribute('class','btnItems');
delBtn.setAttribute('onclick','btnItem(this)');




    li.appendChild(delBtn);


    items.value = " ";
    // console.log(li);
}
function compelet(id){
    var li = document.getElementById(id)
    li.className = 'compeleted'
    li.childNodes[1].remove()
    li.childNodes[1].setAttribute('onClick','delet(this.parentElement.id)')
}

function edit(id){
    var li = document.getElementById(id)
    var p = li.firstChild
    var pText = p.textContent
    console.log()  
    var input = document.createElement('input')
    input.value = pText
    li.replaceChild(input,p)
    li.childNodes[1].setAttribute('onClick','update(this.parentElement.id)') 
    li.childNodes[2].innerHTML = 'Cancel'
    li.childNodes[1].innerHTML = 'Done'
}
function update(id) {
    var li = document.getElementById(id)
    var input = li.firstChild
    var p = document.createElement('p')
    var text = document.createTextNode(input.value)
    p.appendChild(text)
    li.replaceChild(p,input)
    li.childNodes[2].innerHTML = 'Done'
    li.childNodes[1].setAttribute('onClick','edit(this.parentElement.id)')
    li.childNodes[1].innerHTML = 'Edit' 
}


function btnItem(e){
    e.parentNode.remove();
}

function deleteAll(){
    // list.style.display ="none";
    list.innerHTML = " ";
}

var list = document.getElementById("list")
function addTodo(){
    var todo_item = document.getElementById("todo-item")
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)
    li.setAttribute('class' , 'text')
    var delBtn = document.createElement('button')

var delText = document.createElement('i')
delBtn.setAttribute('class', 'fa fa-trash')
delBtn.setAttribute('id', 'icon3')
delBtn.setAttribute('onclick', 'deleteItem(this)')
delBtn.appendChild(delText)

var editBtn = document.createElement('button')
var editText= document.createElement('i')
editBtn.setAttribute('class', 'fa fa-pencil-square-o')
editBtn.setAttribute('id', 'icon4')
editBtn.appendChild(editText)
editBtn.setAttribute('onclick', 'editItem(this)')

li.appendChild(delBtn)
li.appendChild(editBtn)

    list.appendChild(li)
    todo_item.value = ''
    // console.log(li)
}
function deleteItem(e){
    e.parentNode.remove()
}
function deleteAll(){
    list.innerHTML=""
}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue
    editVal = prompt("enter edit value" , val)
    e.parentNode.firstChild.nodeValue = editVal
}
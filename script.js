const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  let currentCount = Number(itemCountSpan.innerHTML)
  let li = document.createElement('li');
  let p = document.createElement('span');
  let chkBox = document.createElement('input');
  chkBox.type = "checkbox";
  chkBox.onclick = () => { this.todoCompleted() }
  li.className = classNames.TODO_ITEM;
  p.className = classNames.TODO_TEXT;
  p.innerHTML = "A new ToDo Item";
  p.appendChild(chkBox)
  li.appendChild(p)
  list.appendChild(li)
  currentCount++;
  itemCountSpan.innerHTML = currentCount;
}

function todoCompleted() {

}

const el = {
  input: document.getElementById('new-todo'),
  addBtn: document.getElementById('add-btn'),
  list: document.getElementById('list'),
  chips: [...document.querySelectorAll('.chip')],
  stats: document.getElementById('stats'),
  editBar: document.getElementById('edit-bar'),
  editInput: document.getElementById('edit-input'),
  cancelEdit: document.getElementById('cancel-edit'),
  saveEdit: document.getElementById('save-edit'),
  checkAll: document.getElementById('check-all'),
  removeCompleted: document.getElementById('remove-completed')
};

let todos = [
  { id: crypto.randomUUID(), title: 'Create your first component', completed: false },
  { id: crypto.randomUUID(), title: 'Create a Svelte starter app', completed: true },
  { id: crypto.randomUUID(), title: 'Complete the rest of the tutorial', completed: false }
];

let filter = 'all'; // all | active | completed
let editingId = null;

function render(){
  // chips
  el.chips.forEach(ch => ch.classList.toggle('active', ch.dataset.filter === filter));

  // list
  el.list.innerHTML = '';
  const show = todos.filter(t => filter === 'all' || (filter==='active' ? !t.completed : t.completed));
  show.forEach(t => el.list.appendChild(renderItem(t)));

  // stats
  const total = todos.length;
  const done = todos.filter(t=>t.completed).length;
  el.stats.textContent = `${done} out of ${total} items completed`;

  // edit bar state
  if(editingId){
    const t = todos.find(x=>x.id===editingId);
    el.editBar.classList.remove('hidden');
    el.editInput.value = t ? t.title : '';
    setTimeout(()=> el.editInput.focus(), 0);
  } else {
    el.editBar.classList.add('hidden');
  }
}

function renderItem(t){
  const li = document.createElement('li');
  li.className = 'item' + (t.completed ? ' completed' : '');

  const cb = document.createElement('input');
  cb.type = 'checkbox';
  cb.checked = t.completed;
  cb.addEventListener('change', ()=>{
    t.completed = cb.checked;
    render();
  });

  const label = document.createElement('div');
  label.className = 'label';
  label.textContent = t.title;

  const editBtn = document.createElement('button');
  editBtn.className = 'btn btn-light edit-btn';
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', ()=> startEdit(t.id));

  const delBtn = document.createElement('button');
  delBtn.className = 'btn btn-danger delete-btn';
  delBtn.textContent = 'Delete';
  delBtn.addEventListener('click', ()=> deleteTodo(t.id));

  li.append(cb, label, editBtn, delBtn);
  return li;
}

function addTodo(){
  const val = el.input.value.trim();
  if(!val) return;
  todos.push({ id: crypto.randomUUID(), title: val, completed: false });
  el.input.value = '';
  render();
}

function startEdit(id){
  editingId = id;
  render();
}
function cancelEdit(){
  editingId = null;
  render();
}
function saveEdit(){
  const t = todos.find(x=>x.id===editingId);
  if(t){ t.title = el.editInput.value.trim() || 'Untitled'; }
  editingId = null;
  render();
}

function deleteTodo(id){
  todos = todos.filter(t=>t.id!==id);
  if(editingId === id) editingId = null;
  render();
}

// toolbar
el.addBtn.addEventListener('click', addTodo);
el.input.addEventListener('keydown', e=>{ if(e.key==='Enter') addTodo(); });

// filters
el.chips.forEach(ch => ch.addEventListener('click', ()=>{ filter = ch.dataset.filter; render(); }));

// edit bar buttons
el.cancelEdit.addEventListener('click', cancelEdit);
el.saveEdit.addEventListener('click', saveEdit);

el.editInput.addEventListener('keydown', e=>{
  if(e.key==='Enter') saveEdit();
  if(e.key==='Escape') cancelEdit();
});

// footer actions
el.checkAll.addEventListener('click', ()=>{
  const allDone = todos.every(t=>t.completed);
  todos.forEach(t=> t.completed = !allDone);
  render();
});

el.removeCompleted.addEventListener('click', ()=>{
  todos = todos.filter(t=>!t.completed);
  if(editingId && !todos.find(t=>t.id===editingId)) editingId = null;
  render();
});

render();

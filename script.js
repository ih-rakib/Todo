let ulTasks = $('#ulTasks');
let btnAdd = $('#btnAdd');
let btnReset = $('#btnReset');
let btnClear = $('#btnClear');
let btnSort = $('#btnSort');
let inpNewTask = $('#inpNewTask');

function toggleInputBtn() {
    btnReset.prop('disabled', inpNewTask.val() ==' ');
    btnAdd.prop('disabled', inpNewTask.val() ==' ');
    btnSort.prop('disabled', ulTasks.children().length == 0 );
    btnClear.prop('disabled', ulTasks.children().length == 0);
}

function addItem() {
  let listItem = $('<li>', {
    'class': 'list-group-item',
    text: inpNewTask.val()
  });
  listItem.click(()=> {
    listItem.toggleClass('done');
  });
  ulTasks.append(listItem);
  inpNewTask.val(' ');
  toggleInputBtn();
}

function clearItem() {
  $("#ulTasks .done").remove();
  toggleInputBtn();
}

function sortItem() {
  $("#ulTasks .done").appendTo(ulTasks);
  toggleInputBtn();
}

inpNewTask.keypress((e)=>{
  if (e.which == 13) addItem();
});

inpNewTask.on('input',toggleInputBtn);

btnAdd.click(addItem);
btnClear.click(clearItem);
btnSort.click(sortItem);

btnReset.click(()=>{
inpNewTask.val(' ');
toggleInputBtn();
});
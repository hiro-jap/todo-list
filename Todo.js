const addTaskTrigger = document.getElementsByClassName('js-addTask-trigger')[0];
const addTaskTarget = document.getElementsByClassName('js-addTask-target')[0];
const addTaskValue = document.getElementsByClassName('js-addTask-value')[0];

//Task追加時の挙動
const addTask = task =>{
    const completeButton = document.createElement('input');
    completeButton.setAttribute('type','checkbox');
    completeButton.setAttribute('id','check')
    // const completeButton = document.createTextNode('<input> type="checkbox" id="check"')
    const listItem = document.createElement('li');
    listItem.setAttribute('class','li');
    const labelItem =document.createElement('label'); 
    labelItem.setAttribute('for','check');
    const removeButton = document.createElement('a');

    removeButton.innerHTML = "<img class='trush' src='ごみ箱.png'>";
    removeButton.addEventListener('click',() => removeTask(removeButton));
    // completeButton.innerHTML = '完了';
    completeButton.addEventListener('click',() =>completeTask(completeButton));

    labelItem.innerHTML =task;
    addTaskTarget.appendChild(listItem);//ulの中にli
    listItem.appendChild(completeButton);//liの中にinput
    listItem.appendChild(labelItem);//liの中にlabel = inputの中にlabel
    listItem.appendChild(removeButton);//liの中にa
   
};

//ボタン押したときの挙動
addTaskTrigger.addEventListener('click',()=>{
    const task = addTaskValue.value;
    addTask(task);
    addTaskValue.value = '';
});

// Task削除時の挙動
const removeTask = removeButton =>{
    const targetTask =removeButton.closest('li');
    targetTask.classList.add('remove');
    addTaskTarget.removeChild(targetTask);
};
//完了時の挙動
const completeTask = completeButton =>{
    const Done =completeButton.closest('li');
    Done.classList.toggle('isComplete')};

// const completeTask = completeButton =>{
//     const liList  = document.querySelectorAll('#ul li');
//     for(i =0;i<liList.length;i++){
//         liList[i].addEventListener('click',()=>{
//             liList.classList.toggle('isComplete');
//         })
//     };
// };

// const li = document.getElementsByClassName('li');
// for(i = li.length-1 ; i>=0 ; i--){
//     li[i].addEventListener('click',(completeButton)=>{
//         const targetTask =completeButton.closest('li[i]');
//         targetTask.classList.add('isComplete');
//     })
//}



let storage =  [];



function addTask(){
    let InputElement = document.querySelector('.input-name');
    let DateElement = document.querySelector('.input-date');

    let TaskName = InputElement.value;
    let Date =  DateElement.value;



    storage.push({
        name:TaskName,
        date:Date

    })
renderTask()


}


function renderTask(){

    let Tasklist = "";


    for(let i = 0; i< storage.length;i++){
        let Todo = storage[i]
        let Name =Todo.name;
        let Date = Todo.date;

        let html = `<p>${Name} ${Date}
        <button onclick = "Delete(${i})">Delete</button>
        </p>`;

        Tasklist += html;




    }

    document.querySelector('.output').innerHTML = Tasklist;


}


function Delete(i){
    storage.splice(i ,1);
    renderTask();

}

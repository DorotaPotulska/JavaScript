let tabTask=[];

function addTask(){

    let task = document.getElementById('task').value;
    document.getElementById('list').value='';
    console.log(task);

    if(!task)
    return;

    if(tabTask.includes(task)){
    document.getElementById('task').value ='';
    return;
    }

    tabTask.push(task);
    console.log(tabTask.join(" - "));
    wyswietlTodos(tabTask);

    document.getElementById('task').value ='';
    // const text = '<li>' + task + '</li>';
    // document.getElementById('list').insertAdjacentHTML("beforeend",text);
    // document.getElementById('task').value ='';

      // console.log(task);
    // document.getElementById('todos').innerText = task;
    // document.getElementById('todos').innerHTML = "<ol><li>"+task+"</li></ol>";
    
    // let taskV = '<li>' + task + '</li>';
    // document.getElementById('list').insertAdjacentHTML("beforeend",taskV);

}

// let element =  document.getElementById("myDiv");
// element.classList.add("new-class");
// element.classList.remove("new-class");
// element.classList.toggle("new-class");

document.getElementById('add').addEventListener('click',addTask);
document.getElementById('list').addEventListener('click',function(event){
    const element = event.target;
    element.classList.toggle("done");
    
    // console.log(event);
    // console.log(event.target);
});
// let p = document.getElementById('p1');
// console.log(p.innerText);
// console.log(p.innerHTML);

// let d = document.getElementById('d1');
// console.log(d.innerText);
// console.log(d.innerHTML);
// console.log(d.className);

// let pp = document.getElementsByTagName("p");
// console.log(pp);

// for(let e of pp){e.style.color="green"}

function wyswietlTodos(taskTab){

  
    const text = '<li>' + taskTab[taskTab.length-1] + '</li>';
    document.getElementById('list').insertAdjacentHTML("beforeend",text);
    console.log(text);
    console.log('---------')
 
//     const fragment = document.createDocumentFragment();

//     for(let i=0; i<taskTab.length; i++){
//     const p = document.createElement("p");
//     p.appendChild(document.createTextNode('<li>' + taskTab[i] + '</li>'));
//     fragment.appendChild(p);
// }

// //document.body.appendChild(fragment); 
// document.getElementById('list').insertAdjacentHTML("beforeend",fragment);

  // for(let i=0; i<taskTab.length; i++){
  //   const text = '<li>' + taskTab[i] + '</li>';
  //   document.getElementById('list').insertAdjacentHTML("beforeend",text);
  //   console.log(text);
  //   console.log('---------')
  // }

}
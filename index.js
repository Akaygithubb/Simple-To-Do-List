const title=document.getElementById("title");
const desc=document.getElementById("description");
const form=document.querySelector("form");
const container=document.querySelector(".container");


const task=localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[];
//* it is an example of ternary operator where we first check if certain thing exist or not then we apply code based on conditon true or false

showtask();

function showtask(){
    task.forEach((value,index)=>{

    const div=document.createElement("div");
    div.setAttribute("class","task");

    const innerdiv=document.createElement("div");
    div.append(innerdiv);
    
    const p=document.createElement("p");
    p.innerText=value.title;
    innerdiv.append(p);
    
    const span=document.createElement("span");
    span.innerText=value.description;
    innerdiv.append(span);

    const button=document.createElement("button");
    button.setAttribute("class","dltbutton")
    button.innerText="-";

    button.addEventListener("click",()=>{
        removetask();
        task.splice(index,1);
        localStorage.setItem("task",JSON.stringify(task));
        showtask();
    });
    //todo here we basically add an event listener to dltbutton
    //todo that will basically  first remove previous task
    //todo then remove one element from array
    //todo then again call samefucntion

    div.append(button);

    container.append(div);
    });
   
}

function removetask(){
    task.forEach(()=>{
        const div=document.querySelector(".task");
        //* also here div will not clash because of its scope
        div.remove();
    });
}

//! The removetask function in your code is used to clear all the existing tasks displayed on the webpage before rendering the updated list of tasks. This ensures that the task list is not duplicated every time a new task is added.


form.addEventListener("submit",(e)=>{
  e.preventDefault();
  removetask();
  //todo here we are calling it earlier so inorder to remove all earlier task in array
  task.push({
    title:title.value,
    description:desc.value,
  });
  localStorage.setItem("task",JSON.stringify(task));
  //* here we are putting the value in the form of object inside task array
  showtask();
});
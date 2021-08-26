// html for adding new task 

let html1=`<h2 class="tl wfull t2 cw">`;
let html2=`</h2>
<div class="flex fr jc ai"> 
    <button class="bpink cw" onclick="completed(this)">Done</button>
    <button class="bmblue cw" onclick="removetask(this)">Delete</button>
</div>
`;


let list=[];

// checking if task is not empty

function validatetask() 
{
    var x = document.forms["form"]["task"].value;
    if (x == "") {
      alert("Task can't be empty");
      return false;
    }
    else 
     addnewtask();
}

  
function uniqueid()
{
    return (Date.now());
}


function loadtasks()
{
  
    list=JSON.parse(localStorage.getItem("todolist")) || [];
    for(let i=0;i<list.length;i++)
    addtask(list[i]);
       
    
}

window.onload=loadtasks();


function addnewtask()
{
    const taskstring=document.getElementById("newtask").value;

    const taskobj=
     {
        text: taskstring,
        id:uniqueid(),
        comp:false
    };
    list.push(taskobj);
   
    localStorage.setItem("todolist",JSON.stringify(list));
   
    addtask(taskobj);

}

function addtask(taskobj)
{   
    const ntask=document.createElement("div");

    ntask.id=taskobj.id;
    ntask.className="task flex fr ai js wfull";
    ntask.innerHTML=html1+taskobj.text+"</h2>"+html2;
    document.getElementById("tasklist").appendChild(ntask);
    
    if(taskobj.comp)
    {
        const element=document.getElementById(taskobj.id);
        element.classList.add("linet");
    }
    

    {
    var element = document.getElementById("form");
    element.classList.add("dn");
    element.classList.remove("flex");

    var element = document.getElementById("addb");
    element.classList.remove("dn");
    element.classList.add("flex");
    }  
  


}
function removetask(button)
{
    const divid=button.parentNode.parentNode.id;

    for(let i=0;i<list.length;i++)
     if(divid==list[i].id)
     {
         list.splice(i,1);
         break;
     }
    localStorage.setItem("todolist",JSON.stringify(list));

    {
    const taskdiv=document.getElementById(divid);
    document.getElementById("tasklist").removeChild(taskdiv);
    }


}

function completed(button)
{
    const divid=button.parentNode.parentNode.id;
    const element=document.getElementById(divid);
    element.classList.add("linet");

    for(let i=0;i<list.length;i++)
     if(divid==list[i].id)
     {
         list[i].comp=true;
         break;
     }

    localStorage.setItem("todolist",JSON.stringify(list));

}


function showform()
{
    var element = document.getElementById("form");
    element.classList.remove("dn");
    element.classList.add("flex");

    var element = document.getElementById("addb");
    element.classList.remove("flex");
    element.classList.add("dn");
}


// html for adding new task 

let html1=`<h2 class="tl wfull t2 cw">`;
let html2=`</h2>
<div class="flex fr jc ai"> 
    <button class="bpink cw" onclick="completed(this)">Done</button>
    <button class="bmblue cw" onclick="removetask(this)">Delete</button>
</div>
`;


// checking if task is not empty

function validatetask() {
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
    return (Math.floor(Math.random() * 100));
}
function loadtasks()
{
   
      let keys=Object.keys(localStorage);
      let len=keys.length;
 
   while(len--)
   {
     let curtask=localStorage.getItem(keys[len]);
     addtask(curtask,keys[len]);
     console.log(curtask);

   }

       
    
}

window.onload=loadtasks();


function addnewtask()
{
    const taskstring=document.getElementById("newtask").value;
    addtask(taskstring,0);

}

function addtask(taskstring, taskid)
{   
    

    const ntask=document.createElement("div");

    if(taskid==0)
    ntask.id=uniqueid();
    
    else 
    ntask.id=taskid;
    
    ntask.className="task flex fr ai js wfull";
    ntask.innerHTML=html1+taskstring+"</h2>"+html2;
    document.getElementById("tasklist").appendChild(ntask);
    localStorage.setItem(ntask.id,taskstring);


    var element = document.getElementById("form");
    
    element.classList.add("dn");
  
    element.classList.remove("flex");


    var element = document.getElementById("addb");
    element.classList.remove("dn");
    element.classList.add("flex");
  


}
function removetask(button)
{
    const divid=button.parentNode.parentNode.id;
    localStorage.removeItem(divid);

    const taskdiv=document.getElementById(divid);
    document.getElementById("tasklist").removeChild(taskdiv);


}

function completed(button)
{
    
    const element=document.getElementById(button.parentNode.parentNode.id);
    element.classList.add("linet");


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
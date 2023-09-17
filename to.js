function addMore(){
let todotitle=document.getElementById('todotitle').value;
let tododescription=document.getElementById('tododescription').value;

console.log("todotitle",todotitle)
console.log("tododescription",tododescription)

let box=document.getElementById("box");
let li=document.createElement("li")
li.className = "task-list"

let h=document.createElement('h4')
let p=document.createElement('p')

h.textContent=todotitle;
p.textContent = tododescription


let a=document.createElement("a");
a.textContent="x"
a.href="javascript:void(0)";
a.className="remove";
li.appendChild(a);
li.appendChild(h);
        li.appendChild(p)
        box.appendChild(li) 
// let pos=box.firstElementChild;
//     if(pos===null){
//         li.appendChild(h)
//         li.appendChild(p)
//         box.appendChild(li)  
//     }else{
// box.insertBefore(li,pos);
// box.insertBefore(a,pos);
// }
// box.insertBefore(li,pos);



let btn=document.querySelector("ol");
btn.addEventListener('click',function(f){
    let box=document.getElementById('box');
    let li=f.target.parentNode;
    box.removeChild(li);}
)
document.getElementById('todotitle').value="";
document.getElementById('tododescription').value="";


}




// if(todotitle===""){
//     console.log("description",description)
// document.getElementById('error').innerHTML="Please enter value";
// }else{
//     let box=document.getElementById('box');
//     let li=document.createElement("li");
//     li.textContent=description;

// let a=document.createElement("a");
// a.textContent="x"
// a.href="javascript:void(0)";
// a.id="remove";
// li.appendChild(a);
//     let pos=box.firstElementChild;
//     if(pos===null){
//         box.appendChild(li);

//     }else{

// box.insertBefore(li,pos);
// }

//     }
//     document.getElementById('description').value="";

// function addMe(){
//     document.getElementById('Error').innerHTML="";
//     let TaskName=document.getElementById('TaskName').value;
//     if(TaskName===""){
//         document.getElementById('Errorr').innerHTML="Please enter a value";
//     }else{
//         let Cont=document.getElementById('Cont');
//         let li=document.createElement('li');
//         li.textContent=des;
// let a=document.createElement("a");
// a.textContent="x"
// a.href="javascript:void(0)";
// a.id="Remove";
// li.appendChild(a);

// let position=Box.firstElementChild;
// if(position===null)
// {
    
//     Box.appendChild(li);
// }
// else{
//     Box.insertBefore(li,position);
// }

//     }

//     }

// let Btn=document.querySelector("ol");
// Btn.addEventListener('click',function(g){
//     console.log("Ok i")
//     let Box=document.getElementById('Box');
//     let li=g.target.parentNode;
//     Box.removeChild(li);})

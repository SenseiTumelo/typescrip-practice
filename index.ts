// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

type Clients = "User" | "Admin";

interface Profile{
  name: string,
  isAdmin: boolean
}

let getProfile = (prof: Profile)=>{
  if(prof.isAdmin){
    return console.log("hello "+ prof.name+ " your are now an admin");
  }else if(!prof.isAdmin){
    return console.log("hello "+ prof.name+ " you do not have the admin priviledges")
  }
}

function clicked(){
  let isClicked: boolean = false;
  isClicked = !isClicked;
  return isClicked;
}
getProfile({name: 'tumelo', isAdmin: clicked()});

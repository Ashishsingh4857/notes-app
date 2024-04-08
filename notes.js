const NotesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

const updateStorage = ()=>{
    localStorage.setItem("notes",NotesContainer.innerHTML)
}



createBtn.addEventListener("click",()=>{
    inputBox = document.createElement("p");
    inputBox.className="input-box"
    inputBox.setAttribute("contenteditable","true");
    img = document.createElement("img");
    img.src="images/delete.png"
    NotesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
})

NotesContainer.addEventListener("click", (e)=>{
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updateStorage();
  }
})

const showNotes = ()=>{
   NotesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();
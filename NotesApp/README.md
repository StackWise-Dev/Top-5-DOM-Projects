<h1> Notes App </h1>
<br>
<br>
<br>
<h3>HTML Code </h3>
``` rb
<div class="create-section">
        <input type="text" name="title" id="title" placeholder="Write Note Title">
        <input type="text" name="note" id="content" title="note" placeholder="Write Note Here...">
        <button type="button" class="btn"> <i class="fa-solid fa-plus"></i> Add Note</button>
    </div>
    <div class="notes-section">
        <div class="note-card">
            <h3 class="title">Note's Title</h3>
            <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure esse nesciunt mollitia eligendi suscipit, quo voluptates, amet architecto debitis velit neque autem ullam corrupti ad?</p>
            <div class="footer">
                <span class="date">12/25</span>
                <span class="del-icon">
                    <i class="fa-solid fa-trash"></i>
                    <i class="fa-solid fa-pencil"></i>
                </span>
            </div>
        </div>
    </div>
```

<h3>JavaScript Code </h3>
``` rb
let title = document.querySelector("#title");
let content = document.querySelector("#content");
let btnAdd = document.querySelector(".btn");
let section = document.querySelector(".notes-section");
let date = new Date().toLocaleDateString();
let notesArray = [];
btnAdd.addEventListener("click", function() {
    if(!content.value || !title.value) return alert("Please Write Something first..");
    // CREATING NEW NOTE
    let createNote = {
        title: title.value,
        content: content.value,
        date: date,
    };
    notesArray.push(createNote);
    // READ NOTES FROM ARRAY
    readNotes();
    title.value = "";
    content.value = "";
    title.focus();
});
function readNotes() {
    section.innerHTML = "";
    // READING NOTES FROM ARRAY
    notesArray.map((note, index) => {
        let card = document.createElement("div");
        card.classList.add("note-card");
        card.setAttribute("data-id", index);
        // HTML CONTENT TO DISPLAY NOTES 
        card.innerHTML = `<h3 class="title"> ${note.title} </h3>
                          <p class="content"> ${note.content} </p>
                          <div class="footer">
                            <span class="date"> ${note.date} </span>
                            <span class="del-icon">
                                <i class="fa-solid fa-trash"></i>
                            </span>
                            <span class="edit-icon">
                                <i class="fa-solid fa-pencil"></i>
                            </span>
                          </div>`;
        section.insertBefore(card, section.firstChild);
    });
    let btnDel = document.querySelectorAll(".del-icon");
    let btnEdit = document.querySelectorAll(".edit-icon");
    deleteNote(btnDel);
    editNote(btnEdit);
};
// DELETING THE NOTES
function deleteNote(buttons) {
    buttons.forEach((button, index) => {
        button.addEventListener("click", function() {
            let id = button.closest(".note-card").dataset.id;
            notesArray.splice(parseInt(id), 1);
            readNotes(); 
        });
    });
}
// EDITING THE NOTES
function editNote(buttons) {
    buttons.forEach((button) => {
        button.addEventListener("click", function() {
            let parent = button.closest(".note-card");
            let title = parent.querySelector(".title");
            let data = parent.querySelector(".content");
            let newTitle = prompt("Change Title", title.innerHTML);
            let newData = prompt("Change Content", data.innerHTML);
            let newNote = {
                title: newTitle,
                content: newData,
                date: date,
            };
            notesArray.splice(parent.dataset.id, 1, newNote);
            readNotes();
        });
    });
};
// COLORS ARE TAKEN FROM THIS PALETTE
// https://colorhunt.co/palette/004225f5f5dcffb000ffcf9d
```

//Initialize a variable so that an id is assigned to each new row
let id = 0;

//Waiting on document loading before code is run
document.addEventListener('DOMContentLoaded', () => {

//Function - adds event listener (click) to the "Input" button (with id='input')
document.getElementById('input').addEventListener('click', () => {
    //Table variable - new rows will be added to table
    let table = document.getElementById('schedule');
    //Creates new row at end of the table
    let row = table.insertRow(-1);
     //New row given a unique id ("item-0", "item-1", etc.)
    row.setAttribute('id', `item-${id}`);

    //Table cells added to the row; cells filled with values of user input
    row.insertCell(0).innerHTML = document.getElementById('input-date').value;
    row.insertCell(1).innerHTML = document.getElementById('input-time').value;
    row.insertCell(2).innerHTML = document.getElementById('input-home').value;
    row.insertCell(3).innerHTML = document.getElementById('input-away').value;
    row.insertCell(4).innerHTML = document.getElementById('input-networks').value;
    row.insertCell(5).innerHTML = document.getElementById('input-score').value;

    //Actions variable to make new cell for "Delete" button
    let actions = row.insertCell(6);

   //Appending a Delete button with current id, button created by createDeleteButton function 
    actions.appendChild(createDeleteButton(id++));

    //input fields cleared after new row is added to table
    document.getElementById('input-date').value = '';
    document.getElementById('input-time').value = '';
    document.getElementById('input-home').value = '';
    document.getElementById('input-away').value = '';
    document.getElementById('input-networks').value = '';
    document.getElementById('input-score').value = '';
    })
})

//function to create "Delete" button for each table row
    function createDeleteButton(id) {
      //Making a new button element
        let btn = document.createElement('button');
        btn.className = 'btn btn-danger btn-sm'; // Bootstrap styling
        btn.id = id; //Unique id assigned to button
        btn.innerHTML = 'Delete'; //Button label text
      //Define what happens when button is clicked
        btn.onclick = () => {
            console.log(`Deleting row with id: item-${id}`); //for debugging
            //Locates a row element with matching id
              let elementToDelete = document.getElementById(`item-${id}`);
            //Deleting that row from table
              elementToDelete.parentNode.removeChild(elementToDelete);
        };
      //Return the button to add it to table
        return btn;
    }
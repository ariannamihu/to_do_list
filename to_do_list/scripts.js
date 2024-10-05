document.addEventListener('DOMContentLoaded', function() {
    //an array to store all of the todo items
    const todoItems = [];

    //This will run when the Add button is clicked
    window.newElement = function() {
        let input = document.getElementById('myInput');
        let inputValue = input.value.trim(); 
        
        //an error if the user doesn't input anything
        if (inputValue === '') {
            alert("You must write something!"); // Alert if the input is empty
            return;
        }

        const todoItem = {
            text: inputValue,
            completed: false
        };

        //adds item to the todoItems list
        todoItems.push(todoItem);
        input.value = '';

        displayItems();
    };

    //This takes each item from the todoItems list and gives it 
    //a delete and complete button then adds it to the list
    function displayItems() {
        const ul = document.getElementById('myUL');
        ul.innerHTML = ''; 
        
        todoItems.forEach((item, index) => {
            // Create a new list item
            const li = document.createElement('li');
            li.textContent = item.text;

            // Create the delete button
            const deleteBtn = document.createElement('span');
            deleteBtn.textContent = 'X';
            deleteBtn.className = 'deleteButton'; 
            //will remove the item from the array when clicked
            deleteBtn.onclick = function() {
                todoItems.splice(index, 1); 
                displayItems(); 
            };

            // Create the complete button
            //lets the user know when and what has been completed.
            const completeBtn = document.createElement('span');
            completeBtn.textContent = 'Complete';
            completeBtn.className = 'completeButton'; 
            completeBtn.onclick = function() {
                const now = new Date(); 
                const formattedDate = now.toLocaleString(); 
                li.textContent = `${item.text} was completed at ${formattedDate}`; 
                li.appendChild(deleteBtn); 
                completeBtn.style.display = 'none'; 
            };

            li.appendChild(deleteBtn);
            li.appendChild(completeBtn);
            // Add the new list item
            ul.appendChild(li);
        });
    }

    //This allows the user to personalize their to-do list
    window.updateName = function(){
        nameInput = document.getElementById('nameInput').value;

        //an error if the user doesn't input anything
        if (nameInput === '') {
            alert("Write your name to personalize this!"); // Alert if the input is empty
            return;
        }
        
        //replaces the title with personalized title
        const title = document.getElementById('title');
        title.innerHTML = `<h2>${nameInput}'s To Do List</h2>`; 
    }
});

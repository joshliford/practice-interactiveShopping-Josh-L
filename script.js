window.addEventListener("load", () => {

const addButton = document.getElementById("add-button");
const addItem = document.getElementById("input-item");

const shoppingList = document.getElementById("shopping-list");

let editInput; // Used for the Edit Button Event Listener

addButton.addEventListener("click", () => {
    console.log("Add button clicked!"); // Debugging

    if (addItem.value === "") { // Ensure's an empty list item is not added to the cart
        console.log("Please enter an item to add to your shopping list.");
    } else {

    let newListItem = document.createElement("li");
    let itemContainer = document.createElement("span"); // Container to hold the value of the new list item
    itemContainer.textContent = addItem.value; // Container text becomes the new list item
  
    newListItem.append(itemContainer);

    let editItemButton = document.createElement("button");
    editItemButton.textContent = "Edit Item";
    newListItem.append(" ", editItemButton);

    let removeItemButton = document.createElement("button");
    removeItemButton.textContent = "Remove Item";
    newListItem.append(" ", removeItemButton);

    addItem.value = ""; // Resets the input to be empty (prevents the user from needing to delete their previous input)

    shoppingList.append(newListItem); // Appends the new item to the shopping list

        removeItemButton.addEventListener("click", () => {
            console.log("Remove button clicked!"); // Debugging

            newListItem.remove(); // Removes the specified item from the shopping list
        });

        editItemButton.addEventListener("click", () => {
            console.log("Edit button clicked!"); // Debugging

            if (editItemButton.textContent === "Edit Item") {

                editInput = document.createElement("input");
                editInput.type = "text";
                editInput.value = itemContainer.textContent; // Sets the input box text to be whatever the original list item was
                console.log(editInput); // Debugging

                itemContainer.replaceWith(editInput); // Replace original list item with new list item
                editItemButton.textContent = "Save Item";

            } else {

                let changedItem = editInput.value;
                let saveContainer = document.createElement("span"); // New container for changed (edited) list item

                saveContainer.textContent = changedItem;
                editInput.replaceWith(saveContainer); // Replace list item with container (list item) text
                editItemButton.textContent = "Edit Item";

                itemContainer = saveContainer; // Keeps list itme references up-to-date
            }
        });
        }
    });
});

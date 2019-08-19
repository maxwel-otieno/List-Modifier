var form = document.getElementById('form');
var itemList = document.querySelector('.items');
var filter = document.querySelector('input[name="filter"]');

// Add item
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
//edit event
itemList.addEventListener('click', editItem);
// Search list
filter.addEventListener('keyup', searchItems)

// get form input
var input = document.getElementById('input');
//inputLower = input.value.toLowerCase();

function addItem(e) {
	e.preventDefault();
	// console.log(input.value);

	if(input.value != ""){

		// create new list element ans assign a class
		var li = document.createElement('li');
		li.className = 'list-group-item';
		//console.log(li);

		var span = document.createElement('span');
		span.id = 'b2n';

		// create and append textnode with input as the value and append to the list item
		var newData = document.createTextNode(input.value);
		span.appendChild(newData);
		li.appendChild(span);

		//create the edit button
		var button = document.createElement('button');
		button.classList = 'btn btn-danger float-right delete';
		button.appendChild(document.createTextNode('remove'));
		li.appendChild(button);

		// create the delete button and append it to the list
		var editBtn = document.createElement('button');
		editBtn.classList = 'btn btn-info float-right edit';
		editBtn.appendChild(document.createTextNode('edit'));
		li.appendChild(editBtn);

		//add the new list item into the ul
		itemList.appendChild(li);		
	}else{
		alert('Type in an item before you submit');
		return false;
	}
	form.reset();
}

function removeItem(e) {
	if (e.target.classList.contains('delete')) {
		//console.log(1);
		if (confirm('Remove this item from the list')) {
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}

function searchItems(e) {
	e.preventDefault();
	//console.log(e.target.value.toLowerCase());
	var toSearch = e.target.value.toLowerCase();

	var items = itemList.getElementsByTagName('li');

	// convert the HTML collection into an array
	Array.from(items).forEach(function(item) {
		var itemName = item.firstChild.textContent;
		//console.log(itemName);
		// compare if the value in the search box compares to any in the items list
		if (itemName.toLowerCase().indexOf(toSearch) != -1) {
			item.style.display = 'block';
		}else{
			item.style.display = 'none';
		}
	})
	/*if (toSearch == 45) {

		alert('correct');
	}
	else{
		alert('wrong');
	}*/
}

function editItem(e) {
	e.preventDefault();
	if (e.target.classList.contains('edit')) {
		if (confirm('Edit this item')) {
			var li = e.target.parentElement;
			itemList.removeChild(li);
			input.value= li.firstChild.textContent;
		}
	}
}
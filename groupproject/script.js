// Mohamed's portion. Worked on the JavaScript to make user input functional. JavaScript was a little more complex than the CSS and HTML so we agreed on splitting it this way.

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-button');
    const titleInput = document.querySelector('.input-title');
    const descriptionInput = document.querySelector('.input-description');
    const tableBody = document.querySelector('tbody');

    const addRowToTable = (title, description) => {
        const newRow = document.createElement('tr');
        
        const titleCell = document.createElement('td');
        titleCell.textContent = title;
        newRow.appendChild(titleCell);
        
        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = description;
        newRow.appendChild(descriptionCell);
        
        tableBody.appendChild(newRow);
    };

    submitButton.addEventListener('click', () => {
        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();

        if (title && description) {
            addRowToTable(title, description);

            titleInput.value = '';
            descriptionInput.value = '';
        } else {
            alert('Please fill out both the title and description fields.');
        }
    });
});

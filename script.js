const getSum = () => {
    // Select all price cells
    const priceCells = document.querySelectorAll('.prices');

    // Calculate total
    let total = 0;
    priceCells.forEach(cell => {
        total += parseFloat(cell.textContent); // Convert text to number
    });

    // Check if total row already exists and remove it to avoid duplicates
    const existingTotalRow = document.querySelector('.total-row');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for total
    const totalRow = document.createElement('tr');
    totalRow.classList.add('total-row');

    // Create a single cell spanning 2 columns
    const totalCell = document.createElement('td');
    totalCell.setAttribute('colspan', 2);
    totalCell.style.textAlign = 'center';
    totalCell.textContent = `Total Price: ${total}`;

    // Append cell to row and row to table
    totalRow.appendChild(totalCell);

    const table = document.querySelector('table'); // Select the first table
    table.appendChild(totalRow);
};


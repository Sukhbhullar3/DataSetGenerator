// Show the Home Page
function showHomePage() {
    document.getElementById('home-page').style.display = 'flex';
    document.getElementById('process-config-page').style.display = 'none';
    document.getElementById('process-area-page').style.display = 'none';
}

// Show the Process Configuration Page
function showProcessConfig() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('process-config-page').style.display = 'flex';
    document.getElementById('process-area-page').style.display = 'none';
}

// Show the Process Area Descriptions Page
function showProcessAreaDescriptions() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('process-config-page').style.display = 'none';
    document.getElementById('process-area-page').style.display = 'flex';
}

// Add Row to Table
function addRow() {
    const name = document.getElementById('name').value;
    const deadtime = document.getElementById('deadtime').value;
    const lag1 = document.getElementById('lag1').value;
    const lag2 = document.getElementById('lag2').value;

    const tableBody = document.getElementById('tableBody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${deadtime}</td>
        <td>${lag1}</td>
        <td>${lag2}</td>
    `;

    tableBody.appendChild(newRow);
    clearInputs();
}

// Delete Last Row
function deleteRow() {
    const tableBody = document.getElementById('tableBody');
    if (tableBody.rows.length > 0) {
        tableBody.deleteRow(-1);
    }
}

// Submit Table
function submitTable() {
    alert('Table submitted!');
}

// Clear Table
function clearTable() {
    document.getElementById('tableBody').innerHTML = '';
}

// Clear input fields
function clearInputs() {
    document.getElementById('name').value = '';
    document.getElementById('deadtime').value = '';
    document.getElementById('lag1').value = '';
    document.getElementById('lag2').value = '';
}

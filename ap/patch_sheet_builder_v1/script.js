let batchNum;

function getFormData() {
    const quantity = document.getElementById('quantity')
    const location = document.getElementById('location')
    const device = document.getElementById('device')
    const mode = document.getElementById('mode')
    const footprint = document.getElementById('footprint')
    const fix_id = document.getElementById('fix_id')
    const uni = document.getElementById('uni')
    const address = document.getElementById('address')

    const tableRows = document.querySelectorAll('tr')

    const obj = {
        batch_num: tableRows.length,
        quantity: quantity.value,
        location: location.value,
        device: device.value,
        mode: mode.value,
        footprint: footprint.value,
        fix_id: fix_id.value,
        uni: uni.value,
        address: address.value
    }
    clearFormData()
    return obj
}

function clearFormData() {
    document.querySelectorAll('.input-clear').forEach(input => {
        input.value = ''
    })
}

const resetBtn = document.getElementById('reset-button')
resetBtn.addEventListener('click', resetEverything)

function resetEverything() {
    localStorage.removeItem('patch_sheet')
    clearFormData()
    updateData()
}

function updateData() {
    const dataEl = document.getElementById('data')
    const tableData = JSON.parse(localStorage.getItem('patch_sheet'))
    if (!tableData) {
        dataEl.innerHTML = `            <tr>
        <th>Batch # </th>
        <th>Qty</th>
        <th>Location</th>
        <th>Device</th>
        <th>Mode</th>
        <th>Footprint</th>
        <th>Start Fixture Id</th>
        <th>Start Universe</th>
        <th>Start Address</th>
    </tr>`;
    } else {
        dataEl.innerHTML = tableData
    }
    // const tr = document.createElement('tr')
    // // const frag = document.createDocumentFragment()
    // // frag.appendChild(JSON.parse(localStorage.getItem('patch_sheet')))
    // // tr.innerHTML = tr2.innerHTML
    // dataEl.appendChild(tr)
}
updateData()


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const device = getFormData()
    const deviceEl = document.createElement('tr')
    deviceEl.innerHTML = `

    <td>${device.batch_num}</td>
    <td>${device.quantity}</td>
    <td>${device.location}</td>
    <td>${device.device}</td>
    <td>${device.mode}</td>
    <td>${device.footprint}</td>
    <td>${device.fix_id}</td>
    <td>${device.uni}</td>
    <td>${device.address}</td>
    `
    document.getElementById('data').appendChild(deviceEl)
    localStorage.setItem('patch_sheet', JSON.stringify(document.getElementById('data').innerHTML))

})

// --- make csv script

function download_csv(csv, filename) {

    const csvFile = new Blob([csv], { type: "text/csv" });
    const downloadLink = document.createElement('a');

    downloadLink.download = filename;

    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.innerText = 'Download'

    // downloadLink.style.display = "none";

    document.body.appendChild(downloadLink);

}

function export_table_to_csv(html, filename) {
    const csv = [];
    const rows = document.querySelectorAll('table tr');

    for (let i = 0; i < rows.length; i++) {
        let row = [];
        let cols = rows[i].querySelectorAll('td,th');
        for (let j = 0; j < cols.length; j++) {
            row.push(cols[j].innerText);
        }
        csv.push(row.join(","))
    }
    download_csv(csv.join("\n"), filename)
}

document.querySelector('.download-btn').addEventListener('click', () => {
    const html = document.querySelector('table').outerHTML;
    export_table_to_csv(html, "table.csv")
})
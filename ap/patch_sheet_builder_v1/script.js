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

    // clear form



})
// global data

// get from LS
let fixtureIdsArr = [];
let addressArr = [];


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

}
updateData()


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const deviceBatch = getFormData()
    // const deviceEl = document.createElement('tr')
    // deviceEl.innerHTML = `

    // <td>${device.batch_num}</td>
    // <td>${device.quantity}</td>
    // <td>${device.location}</td>
    // <td>${device.device}</td>
    // <td>${device.mode}</td>
    // <td>${device.footprint}</td>
    // <td>${device.fix_id}</td>
    // <td>${device.uni}</td>
    // <td>${device.address}</td>
    // `
    // document.getElementById('data').appendChild(deviceEl)
    // localStorage.setItem('patch_sheet', JSON.stringify(document.getElementById('data').innerHTML))

    const batchArr = [];
    let rowArr = [];


    // limit lights to be less than or equal to 512 addresses?
    for (let i = 0; i < +deviceBatch.quantity; i++) {
        rowArr = [];
        rowArr.push(+deviceBatch.fix_id + i);
        rowArr.push(+deviceBatch.uni);
        rowArr.push(+deviceBatch.address + (i * +deviceBatch.footprint));
        if (rowArr[2] > 512) {
            // changes universe
            rowArr[1] = Math.floor(rowArr[2] / 512) + +deviceBatch.uni
            rowArr[2] -= 512
        }
        rowArr.push(deviceBatch.device)
        rowArr.push(deviceBatch.mode)
        rowArr.push(deviceBatch.location)

        batchArr.push(rowArr)



    }

    let batchEls = [];


    for (let i = 0; i < batchArr.length; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < batchArr[i].length; j++) {
            let td = document.createElement('td')
            td.innerText = batchArr[i][j];
            tr.appendChild(td);
        }
        batchEls.push(tr)
    }

    for (let i = 0; i < batchEls.length; i++) {
        document.getElementById('patch-sheet-preview').appendChild(batchEls[i])
    }

})


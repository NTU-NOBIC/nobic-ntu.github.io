// Container element with id "tableContainer" has been declared in NOBIC_CameraDatabase.html
// Assuming tableContainer is cleared before this script is loaded
const tableContainer = document.querySelector('#tableContainer');

// Create a new table and its elements
const table = document.createElement('table');
table.id = 'cameraTable';
table.style.width = '1500px';
table.style.borderCollapse = 'collapse';
const tableHead = document.createElement('thead');
const tableBody = document.createElement('tbody');
table.appendChild(tableHead);
table.appendChild(tableBody);

// Create and append the header row
const headerRow = document.createElement('tr');
const headers = [
    "#", "Camera Manufacturer", "Model No", "Pixel Format Used for Test", "Thermal Noise<br>(Normalised)",
    "Thermal Noise Pixel Image<br>(count<sup>2</sup>/s)"
];
headers.forEach(headerText => {
    const header = document.createElement('th');
    header.innerHTML = headerText;
    header.style.border = '1px solid #ddd';
    header.style.padding = '10px';
    header.style.textAlign = 'center';
    header.style.backgroundColor = '#f2f2f2';
    headerRow.appendChild(header);
});

tableHead.appendChild(headerRow);

// Fetch the data and populate the table
fetch('NOBIC_CamDatabase.json')
    .then(response => response.json())
    .then(data => {
        data.forEach((camera, index) => {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td style="width: 5%;">${index + 1}</td>
                <td style="width: 8%;">${camera.cam_manufacturer}</td>
                <td class="clickable-model" style="width: 12%;">${camera.model}</td>
                <td style="width: 7%; text-align: center;">${camera.pixelFormat_DC_Test}</td>
                <td style="width: 15%; text-align: center;">
                    ${
                        camera.TN_normalised !== ""
                            ? `<div style="width: 100%; height: 20px; background-color: #f0f0f0; border: 1px solid #ddd; border-radius: 3px; overflow: hidden;">
                                <div style="height: 100%; width: ${camera.TN_normalised / 255 * 100}%; 
                                    background: linear-gradient(to right, #6ecf83, #6ecf83); transition: width 0.5s;">
                                </div>
                            </div>`
                            : `<span style="color: gray; font-weight: bold;">TBA</span>`
                    }
                </td>
                <td style="width: 20%; text-align: center;">
                    <img src="./${camera.image_folder}/TN_sq_per_sec.gif" alt="Thermal Noise of ${camera.model}" style="width: 200px;; cursor: zoom-in;">
                </td>
 
            `;
            // Add click event listener to the model cell
            const modelCell = row.querySelector('.clickable-model');
            modelCell.style.cursor = 'pointer';
            modelCell.style.color = 'blue';
            modelCell.style.textDecoration = 'underline';
            modelCell.addEventListener('click', () => {
                loadScript('cam_details.js', () => displayCameraDetails(camera.model));
            });

            // Add click event listener to the image
            const img1Element = row.cells[5].querySelector('img');
            img1Element.addEventListener('click', () => zoomImage(camera.image_folder + '/TN_sq_per_sec.gif' ));
        });
        // Append the created table to the tableContainer
        tableContainer.appendChild(table);
    })
    .catch(error => console.error('Error loading the camera data:', error));

    
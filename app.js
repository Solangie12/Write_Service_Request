document.getElementById('serviceRequestForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    // Construir el objeto con los datos de la solicitud de servicio
    const serviceRequestData = {
        name: name,
        description: description
    };

    // Enviar los datos usando Fetch API
    fetch('https://hl7-fhir-ehr-solangie-9665.onrender.com/service-request/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patient)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Service Request creado exitosamente!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Hubo un error en la solicitud.');
    });
});

document.getElementById('serviceRequestForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
  
    // Construir el objeto con los datos de la solicitud de servicio
    const serviceRequestData = { name, description };
  
    // Enviar la solicitud al backend
    fetch('https://hl7-fhir-ehr-solangie-9665.onrender.com/service-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(serviceRequestData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      document.getElementById('result').textContent = 'Service Request creado exitosamente! ID: ' + data._id;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('result').textContent = 'Hubo un error en la solicitud: ' + error.message;
    });
  });
  


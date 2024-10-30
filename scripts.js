document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const patientName = document.getElementById('patientName').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;

    const appointmentItem = document.createElement('li');
    appointmentItem.textContent = `${patientName} - ${appointmentDate} às ${appointmentTime}`;

    document.getElementById('appointments').appendChild(appointmentItem);

    document.getElementById('appointmentForm').reset();
});

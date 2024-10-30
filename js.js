// Função para adicionar uma nova linha de tratamento
function addTreatment() {
    const table = document.getElementById('treatment-rows');
    const row = document.createElement('tr');

    const treatmentCell = document.createElement('td');
    const treatmentInput = document.createElement('input');
    treatmentInput.type = 'text';
    treatmentInput.placeholder = 'Descrição do tratamento';
    treatmentCell.appendChild(treatmentInput);

    const valueCell = document.createElement('td');
    const valueInput = document.createElement('input');
    valueInput.type = 'number';
    valueInput.placeholder = 'R$';
    valueCell.appendChild(valueInput);

    row.appendChild(treatmentCell);
    row.appendChild(valueCell);
    table.appendChild(row);
}

// Função para adicionar uma nova linha de tratamento realizado
function addCompletedTreatment() {
    const table = document.getElementById('completed-treatment-rows');
    const row = document.createElement('tr');

    const dateCell = document.createElement('td');
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateCell.appendChild(dateInput);

    const treatmentCell = document.createElement('td');
    const treatmentInput = document.createElement('input');
    treatmentInput.type = 'text';
    treatmentInput.placeholder = 'Descrição do tratamento';
    treatmentCell.appendChild(treatmentInput);

    row.appendChild(dateCell);
    row.appendChild(treatmentCell);
    table.appendChild(row);
}

// Função para adicionar uma nova linha de pagamento e atualizar o total
function addPayment() {
    const table = document.getElementById('payment-rows');
    const row = document.createElement('tr');

    const dateCell = document.createElement('td');
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateCell.appendChild(dateInput);

    const paymentMethodCell = document.createElement('td');
    const paymentMethod = document.getElementById('paymentMethod').value;
    paymentMethodCell.innerText = paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1);

    const paymentValueCell = document.createElement('td');
    const paymentInput = document.createElement('input');
    paymentInput.type = 'number';
    paymentInput.placeholder = 'R$';
    paymentInput.addEventListener('input', calculateTotal);  // Recalcula o total ao alterar o valor
    paymentValueCell.appendChild(paymentInput);

    row.appendChild(dateCell);
    row.appendChild(paymentMethodCell);
    row.appendChild(paymentValueCell);
    table.appendChild(row);
}

// Função para calcular o total dos pagamentos
function calculateTotal() {
    const paymentInputs = document.querySelectorAll('#payment-rows input[type="number"]');
    let total = 0;

    paymentInputs.forEach(input => {
        const value = parseFloat(input.value) || 0;
        total += value;
    });

    // Atualiza o campo "Total" formatado em reais
    document.getElementById('totalAmount').value = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

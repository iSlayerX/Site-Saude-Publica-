document.addEventListener('DOMContentLoaded', () => {
    // Gráfico de Estatísticas
    const ctx = document.getElementById('estatisticasChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Diabetes', 'Hipertensão', 'Infecções', 'Saúde Mental'],
            datasets: [{
                label: 'Número de Casos (milhões)',
                data: [50, 60, 30, 20],
                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'],
                borderColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Validação e Envio do Formulário de Contato
    const form = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        formResponse.textContent = 'Mensagem enviada com sucesso!';
        formResponse.classList.remove('hidden');
        form.reset();
    });
});

document.getElementById('simuladorForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Simulação confirmada!');
});

document.getElementById('descartar').addEventListener('click', function () {
    document.getElementById('simuladorForm').reset();
    alert('Simulação descartada!');
});
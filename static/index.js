document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('tr[data-target]');
    rows.forEach(function(row) {
        row.addEventListener('click', function() {
            const target = row.getAttribute('data-target');
            window.location.href = target;
        });
    });
});

document.getElementById('downarrow').addEventListener('click', function() {
  var zaslaniajacyDiv = document.getElementById('menu');
  zaslaniajacyDiv.style.display = 'block';
});

// Aby schować zasłaniający div po kliknięciu gdziekolwiek poza nim
document.getElementById('menu').addEventListener('click', function() {
  this.style.display = 'none';
});

const themeToggleButton = document.getElementById('themeToggleButton');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
    } else {
        body.classList.add('dark-theme');
    }
});



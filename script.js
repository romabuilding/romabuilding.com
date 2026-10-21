document.getElementById('networkForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const ip = document.getElementById('ipAddress').value;
    const type = document.getElementById('packetType').value;
    const consoleLog = document.getElementById('logConsole');

    // Messaggio di avvio simulazione
    consoleLog.innerHTML += `<p class="system-msg">[Sistema] Avvio monitoraggio su ${ip} per pacchetti ${type}...</p>`;

    // Simulazione di ricezione pacchetti di rete (Genera 3 righe di log fittizie)
    let count = 0;
    const interval = setInterval(() => {
        if (count >= 3) {
            clearInterval(interval);
            consoleLog.innerHTML += `<p class="system-msg">[Sistema] Scansione completata con successo.</p>`;
            consoleLog.scrollTop = consoleLog.scrollHeight; // Auto-scroll
            return;
        }

        const randomSize = Math.floor(Math.random() * 1500) + 40;
        const timestamp = new Date().toLocaleTimeString();
        
        consoleLog.innerHTML += `<p class="log-msg">[${timestamp}] RICEVUTO: ${type} | Origine: ${ip} | Dimensione: ${randomSize} bytes</p>`;
        consoleLog.scrollTop = consoleLog.scrollHeight; // Auto-scroll
        count++;
    }, 1000);
});

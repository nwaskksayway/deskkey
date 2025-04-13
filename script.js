document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const correctPassword = "nwvip155"; // A senha específica

    if (password === correctPassword) {
        // Redirecionar para outra página (pode ser alterado conforme sua necessidade)
        window.location.href = "https://deskpaymoment.github.io/TOOLS.nw/";
    } else {
        document.getElementById("error-message").textContent = "Senha incorreta. Tente novamente.";
    }
});
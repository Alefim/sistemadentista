document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário para controle manual do login

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const userType = document.getElementById("userType").value;

    // Simulação de autenticação (substitua com autenticação real se necessário)
    if (validateUser(username, password, userType)) {
        redirectToDashboard(userType);
    } else {
        document.getElementById("loginMessage").textContent = "Usuário ou senha incorretos!";
    }
});

function validateUser(username, password, userType) {
    // Dados de login fictícios - substitua com banco de dados ou autenticação real
    const users = {
        admin: { username: "admin", password: "admin123" },
        recepcionista: { username: "recepcionista", password: "recep123" },
        dentista: { username: "dentista", password: "dental123" }
    };

    return users[userType] && users[userType].username === username && users[userType].password === password;
}

function redirectToDashboard(userType) {
    switch(userType) {
        case "admin":
            window.location.href = "admin-dashboard.html";
            break;
        case "recepcionista":
            window.location.href = "recepcionista-dashboard.html";
            break;
        case "dentista":
            window.location.href = "dentista-dashboard.html";
            break;
        default:
            window.location.href = "index.html";
    }
}

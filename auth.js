function login() {

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if(email === "lhermanos301@gmail.com" && senha === "loshermanos11@") {

        localStorage.setItem("auth", "admin");

        window.location.href = "./painel.html";

    } else {

        alert("Login inválido");

    }
}

function protegerPagina() {

    const auth = localStorage.getItem("auth");

    if(auth !== "admin") {

        window.location.href = "./index.html";

    }
}

function logout() {

    localStorage.removeItem("auth");

    window.location.href = "./index.html";
}
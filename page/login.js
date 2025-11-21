const credentials = {
    "delta": "reflux",
    "pinata": "dachterasse",
    "tschippo": "quidditch",
    "fuerte": "jacuzzi",
    "calimera": "adhs",
    "sushi": "brille",
    "tamtam": "keigoal",
    "limbo": "schwertkampf",
    "jovin": "blutgrätsche",
    "dominic": "suntigHeiGah",
    "tabasco": "bowling",
};

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const user = document.getElementById("username").value.toLowerCase();
    const pass = document.getElementById("password").value;

    if (credentials[user] && credentials[user] === pass) {
        localStorage.setItem("username", user);
        window.location.href = "persona.html";
    } else {
        document.getElementById("errorMessage").textContent = "Access denied.";
    }
});

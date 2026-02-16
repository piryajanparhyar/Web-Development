// Input component
function InputComponent({ placeholder, type = 'text' }) {
    const input = document.createElement('input');
    input.type = type;
    input.placeholder = placeholder;
    return input;
}

// Pages
function HomePage() {
    const div = document.createElement('div');
    div.className = 'page';
    div.innerHTML = `<h1>Home Page</h1>`;

    div.appendChild(InputComponent({ placeholder: "Your Name" }));
    div.appendChild(InputComponent({ placeholder: "Email", type: "email" }));
    div.appendChild(InputComponent({ placeholder: "Password", type: "password" }));

    return div;
}

function AboutPage() {
    const div = document.createElement('div');
    div.className = 'page';
    div.innerHTML = `<h1>About Page</h1>`;

    div.appendChild(InputComponent({ placeholder: "Your Hobby" }));
    div.appendChild(InputComponent({ placeholder: "Favorite Color" }));

    return div;
}

function ContactPage() {
    const div = document.createElement('div');
    div.className = 'page';
    div.innerHTML = `<h1>Contact Page</h1>`;

    div.appendChild(InputComponent({ placeholder: "Phone" }));
    div.appendChild(InputComponent({ placeholder: "Message" }));

    return div;
}

function SignupPage() {
    const div = document.createElement('div');
    div.className = 'page';
    div.innerHTML = `<h1>Signup Page</h1>`;

    div.appendChild(InputComponent({ placeholder: "Username" }));
    div.appendChild(InputComponent({ placeholder: "Email", type: "email" }));
    div.appendChild(InputComponent({ placeholder: "Password", type: "password" }));

    const btn = document.createElement('button');
    btn.innerText = "Sign Up";
    btn.className = "signup-btn";
    div.appendChild(btn);

    return div;
}


function showPage(page) {
    const app = document.getElementById('app');
    app.innerHTML = '';
    let pageDiv;
    switch (page) {
        case 'home': pageDiv = HomePage(); break;
        case 'about': pageDiv = AboutPage(); break;
        case 'contact': pageDiv = ContactPage(); break;
        case 'signup': pageDiv = SignupPage(); break;
        default: pageDiv = HomePage();
    }
    app.appendChild(pageDiv);
}

// Default page
showPage('home');

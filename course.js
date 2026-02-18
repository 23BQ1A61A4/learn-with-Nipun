function openLang(lang) {
    document.querySelectorAll('.lang-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));

    document.getElementById(lang).classList.add('active');
    event.target.classList.add('active');
}

/* HTML */
function runHTML() {
    let code = document.getElementById("htmlCode").value;
    document.getElementById("htmlOutput").srcdoc = code;
}

/* CSS */
function runCSS() {
    let css = document.getElementById("cssCode").value;
    document.getElementById("cssOutput").srcdoc =
        `<style>${css}</style><h1>Hello CSS</h1>`;
}

/* JS */
function runJS() {
    let js = document.getElementById("jsCode").value;
    eval(js);
}

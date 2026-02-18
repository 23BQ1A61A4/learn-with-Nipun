const codeArea = document.getElementById("code");
const languageSelect = document.getElementById("language");
const output = document.getElementById("output");
const loading = document.getElementById("loading");

function getLanguageFromURL() {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");
  if (lang) {
    languageSelect.value = lang;
    setDefaultCode(lang);
  }
}

function setDefaultCode(lang) {
  if (lang === "c") {
    codeArea.value = `#include <stdio.h>

int main() {
    printf("Hello from C");
    return 0;
}`;
  }

  if (lang === "python") {
    codeArea.value = `print("Hello from Python")`;
  }

  if (lang === "java") {
    codeArea.value = `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello from Java");
  }
}`;
  }
}

async function runCode() {

  output.textContent = "";
  loading.style.display = "block";

  let language = languageSelect.value;
  let version = "*";

  const response = await fetch("https://emkc.org/api/v2/piston/execute", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      language: language,
      version: version,
      files: [
        {
          content: codeArea.value
        }
      ]
    })
  });

  const data = await response.json();

  loading.style.display = "none";

  if (data.run) {
    output.textContent =
      data.run.stdout +
      data.run.stderr;
  } else {
    output.textContent = "Error running code.";
  }
}

getLanguageFromURL();

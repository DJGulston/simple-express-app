async function setTitle() {
    const response = await fetch('/home');

    const jsonTitle = await response.json();

    document.getElementById('page-title').innerText = jsonTitle.message;
}

async function setParagraph() {
    const response = await fetch('/api');

    const jsonParagraph = await response.json();

    document.getElementById('page-paragraph').innerText = jsonParagraph.message;
}

setTitle();
setParagraph();
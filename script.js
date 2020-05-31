// Folder elements on page
let bio = document.getElementById("bio")
let likes = document.getElementById("likes")
let dislikes = document.getElementById("dislikes")
let projects = document.getElementById("projects")
let index = document.getElementById("index")

// Terminal elements
let prompt = document.querySelector(".prompt-on")
let terminal = document.querySelector(".terminal")
let popupContainer = document.querySelector('.popup')

// Create unique id for each directory
let id = 0

// Set directory to empty on page load
let directory = ''

// Events for each folder
bio.onclick = () => addTerminalPrompt(bio.id)
likes.onclick = () => addTerminalPrompt(likes.id)
dislikes.onclick = () => addTerminalPrompt(dislikes.id)
projects.onclick = () => addTerminalPrompt(projects.id)
index.onclick = () => addTerminalPrompt(index.id)

// Events for secret text popup
popupContainer.onmouseover = () => showPopUp()
popupContainer.onmouseout = () => showPopUp()

window.onkeydown = loadpage

// Each button press will go to that folder in the terminal
function addTerminalPrompt(name) {
    if (prompt.classList.contains('prompt-on')) {
        prompt.classList.remove("prompt-on")
        prompt.classList.add("prompt-off")
    }

    // If in current directory, clicking folder wont do anything
    if (document.getElementById(`${name}`).classList.contains('colored')) {
        return
    }

    // Disallow clicking on the same folder more than once
    if (directory == name) {
        return
    }

    // Add new directory to the terminal screen
    let p1 = document.createElement('p')
    p1.classList.add('prompt-on')
    p1.innerHTML = `C:\\<span id="directory${++id}">home</span>\\<span>${name}</span>\\`
    terminal.appendChild(p1)

    // Set current directory
    directory = name
}

// Event listener for ENTER or CTRL keys
function loadpage(e) {

    // ENTER key
    if (e.keyCode == 13) {

        // Don't load a directory if a button hasn't been clicked
        if (directory == '') {
            return
        }

        // Add new directory to the terminal screen
        let p2 = document.createElement('p')
        p2.textContent = `loading ${directory}...`
        setTimeout(() => {
            terminal.appendChild(p2)
        }, 250)
        setTimeout(() => {
            window.location.href = `${directory}.html`
        }, 1500)
    }

    // Secret CTRL key
    if (e.keyCode == 17) {

        // Add new directory to the terminal screen
        let p2 = document.createElement('p')
        directory = 'contact'
        p2.textContent = `loading ${directory}...`
        setTimeout(() => {
            terminal.appendChild(p2)
        }, 250)
        setTimeout(() => {
            window.location.href = `${directory}.html`
        }, 1500)
    }
}

// Toggle popup text between show and hide
function showPopUp() {
    let popup = document.getElementById("myPopup")
    popup.classList.toggle("show")
}
let progress = document.querySelector(".progress")
let percentage = document.querySelector(".percentage")
let celebration = document.querySelector("body")
let advance = 0

let time = setInterval (() => {
    advance += 1
    progress.style.width = `${advance}%`
    if (advance === 100) {
        clearInterval(time)
        celebration.classList.add("celebration")
    }
    percentage.textContent = `${advance}%`
}, 75)
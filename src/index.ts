import {data} from "./state/store"

const $app = document.querySelector("#app")

let html = ``

data.forEach(block => {
    if (block.type === "header") {
        html += `<header id="header" class="grid-item header">${block.payload.title}</header>`
    } else if (block.type === "sidebar") {
        html += `
            <aside id="sidebar" class="grid-item sidebar">
                <ul>
                    ${block.payload.sidebar.map(el => `<li><a href="#">${el}</a></li>`).join("")}
                </ul>
            </aside>
        `
    } else if (block.type === "content") {
        html += `
        <main class="grid-item content">
            <h1>${block.payload.title}</h1>
            ${block.payload.items.map(i => `<div>${i}</div>`).join('')}
        </main>
        `
    } else if (block.type === "footer") {
        html += `<footer class="grid-item footer">${block.payload.title}</footer>`
    }
})

$app.insertAdjacentHTML("afterbegin", html)

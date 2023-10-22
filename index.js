import {menuArray} from "./data.js"

const menu = document.getElementById("menu")

function renderMenu() {
  const menuHtml = menuArray.map(menuItem => {
    return `
      <div class="menu-item">
        <div class="menu-icon">${menuItem.emoji}</div>
        <div class="menu-details">
          <p>${menuItem.name}</p>
          <p>${menuItem.ingredients.join(',')}
          <p>${menuItem.price}</p>
        </div>
        <button>+</button>
      </div>
    `
  })

  menu.innerHTML = menuHtml.join('')
}

renderMenu()

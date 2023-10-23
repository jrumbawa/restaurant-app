import {menuArray} from "./data.js"

const menu = document.getElementById("menu")

function renderMenu() {
  const menuHtml = menuArray.map(menuItem => {
    return `
      <div class="menu-item">
        <div class="menu-item-icon">${menuItem.emoji}</div>
        <div class="menu-details">
          <p class="menu-item-name">${menuItem.name}</p>
          <p class="menu-item-ingredients">${menuItem.ingredients.join(',')}
          <p class="menu-item-price">${menuItem.price}</p>
        </div>
        <button class="menu-item-button">+</button>
      </div>
    `
  })

  menu.innerHTML = menuHtml.join('')
}

renderMenu()

//||-----------------||//
//|| Menu Hamburguer ||//
//||-----------------||//

const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const backMenu = document.querySelector('.backBtn');
const overlay = document.getElementById('overlay');

function setSidebarOpen(isOpen) {
  hamMenu.classList.toggle('active', isOpen);
  offScreenMenu.classList.toggle('active', isOpen);
  overlay.classList.toggle('hidden', !isOpen);
  window.parent.postMessage({ type: 'header-menu', open: isOpen }, '*');
}

function closeSidebar() {
  setSidebarOpen(false);
}

hamMenu.addEventListener('click', () => {
  setSidebarOpen(!offScreenMenu.classList.contains('active'));
})

backMenu.addEventListener('click', () =>{
  closeSidebar();
})

overlay.addEventListener('click', () =>{
  closeSidebar();
})
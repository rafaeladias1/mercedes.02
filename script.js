function toggleMenu() {
    const menu = document.querySelector(".menu");
    const menuItems = menu.querySelectorAll("a");
  
    menu.classList.toggle("active");
    for (const menuItem of menuItems) {
      menuItem.classList.toggle("active");
    }
  }
  
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });
  
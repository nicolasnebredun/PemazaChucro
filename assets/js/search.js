function searchLoja() {
    const debounce = (func, delay) => {
      let timeoutId;
      return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
      };
    };
  
    const input = document.getElementById("filter").value.toLowerCase();
    const cardContainer = document.getElementById("lojas-container");
    const cards = Array.from(cardContainer.getElementsByClassName("card"));
  
    const needle = input.slice(0, 5).toLowerCase();
    let found = false;
    for (const card of cards) {
      const title = card.querySelector(".text-title").innerText.toLowerCase();
      card.style.transition = "opacity 0.1s ease-in-out";
      if (title.includes(needle)) {
        found = true;
        card.style.opacity = "1";
        card.style.display = "";
      } else {
        card.style.opacity = "0";
        card.style.display = "none";
      }
    }
  
    searchLoja = debounce(searchLoja, 200);
  }
  
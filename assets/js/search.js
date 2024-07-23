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

  BrMap.Draw({
    wrapper: '#br_mine', 
    selectStates: ['ro','ac'], 
    
    callbacks: {
      click: (element, uf) => {
        if (element.id == 'state_ro') {
          const input = document.getElementById("filter").value.toLowerCase();
          const cardContainer = document.getElementById("lojas-container");
          const cards = Array.from(cardContainer.getElementsByClassName("card"));

          const needle = input.slice(0, 5).toLowerCase();
          for (const card of cards) {
            const id = card.id.toLowerCase();
            if (id.includes("lojaro")) {
              card.style.opacity = "1";
              card.style.display = "";
            } else {
              card.style.opacity = "0";
              card.style.display = "none";
            }
          }
        }
        else if (element.id == 'state_ac') {
            const input = document.getElementById("filter").value.toLowerCase();
            const cardContainer = document.getElementById("lojas-container");
            const cards = Array.from(cardContainer.getElementsByClassName("card"));
  
            const needle = input.slice(0, 5).toLowerCase();
            for (const card of cards) {
              const id = card.id.toLowerCase();
              if (id.includes("lojaac")) {
                card.style.opacity = "1";
                card.style.display = "";
              } else {
                card.style.opacity = "0";
                card.style.display = "none";
              }
            }
        } else {
          alert('Não temos nenhuma loja nesse Estado!');
        }
      },
      mouseover: (element, uf) => { 
      },
    }
  });
  
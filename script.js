const homeBtns = document.querySelectorAll(".home");
const destinationBtns = document.querySelectorAll(".destination");
const crewBtns = document.querySelectorAll(".crew");
const technologyBtns = document.querySelectorAll(".technology");

homeBtns.forEach(homeBtn => {
  homeBtn.addEventListener("click", () => {
    console.log('eggs stink');
    // window.open("index.html", "_blank");
    window.location.href = "index.html";
  });
});

destinationBtns.forEach(destinationBtn => {
  destinationBtn.addEventListener("click", () => {
    console.log('eggs stink');
    // window.open("destination.html", "_blank");
    window.location.href = "destination.html";
  });
});

crewBtns.forEach(crewBtn => {
  crewBtn.addEventListener("click", () => {
    console.log('eggs stink');
    // window.open("crew.html", "_blank");
    window.location.href = "crew.html";
  });
});

technologyBtns.forEach(technologyBtn => {
  technologyBtn.addEventListener("click", () => {
    console.log('eggs stink');
    // window.open("technology.html", "_blank");
    window.location.href = "technology.html";
  });
});







function provideData(planetName) {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const destinations = data.destinations;
      destinations.forEach(destination => {
        if (planetName === destination.name) {
          document.querySelector(".content-image img").src = destination.images.png;
          document.querySelector(".content-image img").alt = destination.name;
          document.querySelector(".planet-name").textContent = destination.name;
          document.querySelector(".planet-info").textContent = destination.description;
          document.querySelector(".distance").textContent = destination.distance;
          document.querySelector(".days").textContent = destination.travel;
        }
      });
    })
    .catch(error => console.log('Error fetching data:', error));
}


document.querySelector(".content").addEventListener("click", function(event) {
  if (event.target && event.target.classList.contains("planet-option")) {
    const planetName = event.target.textContent;  
    provideData(planetName);
    document.querySelectorAll(".planet-option")
      .forEach(option => {
        option.classList.remove("option-checked");
      });
    event.target.classList.add("option-checked");
  }
});



function updateCrew(num) {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const crew = data.crew;
      crew.forEach((crewmate, index) => {
        if (index.toString() === num) {
          console.log(index);
          document.querySelector(".role").textContent = crewmate.role;
          document.querySelector(".name").textContent = crewmate.name;
          document.querySelector(".bio").textContent = crewmate.bio;
          document.querySelector(".image-container img").src = crewmate.images.png
          document.querySelector(".image-container img").alt = crewmate.name;
        }
      })
    })
    .catch(error => console.log('Error fetching data:', error));
};


document.querySelector(".content").addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("dot")) {
    updateCrew(event.target.id);
    document.querySelectorAll(".dot").forEach(dot => {
      dot.classList.remove("dot-active");
    })
    event.target.classList.add("dot-active");
  }
});


function updateTech(digit) {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const technology = data.technology;
      technology.forEach((tech, index) => {
        if ((index + 1).toString() === digit) {
          document.querySelector(".portrait").src = tech.images.portrait;
          document.querySelector(".portrait").alt = tech.name;
          document.querySelector(".term").textContent = tech.name;
          document.querySelector(".definition").textContent = tech.description;
        }
      })
    })
}


document.querySelectorAll(".digit").forEach(digit => {
  digit.addEventListener("click", () => {
    updateTech(digit.textContent);
    document.querySelectorAll(".digit").forEach(digit => {
      if (digit.classList.contains("digit-checked")) {
        digit.classList.remove("digit-checked");
      };
    })
    digit.classList.add("digit-checked");
  })
})


const hamburgerMenuBtn = document.querySelector(".hamburger-icon");
const hamburgerPanel = document.querySelector(".hamburger-panel");
const closeBtn = document.querySelector(".close-btn");

hamburgerMenuBtn.addEventListener("click", () => {
  hamburgerPanel.style.display = 'block';
});

closeBtn.addEventListener("click", () => {
  hamburgerPanel.style.display = 'none';
})

document.querySelector(".body").addEventListener("click", () => {
  hamburgerPanel.style.display = 'none';
});



function carousel(num) {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const crew = data.crew;
      crew.forEach((crewmate, index) => {
        if (index === num) {
          console.log(index);
          document.querySelector(".role").textContent = crewmate.role;
          document.querySelector(".name").textContent = crewmate.name;
          document.querySelector(".bio").textContent = crewmate.bio;
          document.querySelector(".image-container img").src = crewmate.images.png
          document.querySelector(".image-container img").alt = crewmate.name;

          document.querySelectorAll(".dot").forEach((dot, index) => {
            dot.classList.remove("dot-active");
            if (index === num) {
              dot.classList.add("dot-active");
            }
          })
        }
      })
    })
    .catch(error => console.log('Error fetching data:', error));
};

let currentValue = 0;

function rotateValues() {
  console.log(currentValue); 
  currentValue = (currentValue + 1) % 4; 
  carousel(currentValue);


  setTimeout(rotateValues, 5000); 
}

rotateValues();
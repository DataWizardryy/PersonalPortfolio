// Modal Functions
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  if (modal) {
      modal.style.display = "block";
  }
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  if (modal) {
      modal.style.display = "none";
  }
}

window.onclick = function(event) {
  var modals = document.querySelectorAll('.modal');
  modals.forEach(function(modal) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  });
}

// Recommendations Handling
const recommendations = [
    {
        name: "Saheed Ibrahim",
        position: "Manager",
        company: "Rasbak Nig Ltd",
        recommendation: "Tunde is an exceptional data scientist. His analytical skills and ability to derive actionable insights from complex datasets are unmatched."
    },
    {
        name: "Ibrahim Alao",
        position: "Data Analyst",
        company: "Datwise Nigeria Ltd",
        recommendation: "Working with Tunde on various projects has been a great experience. His technical proficiency, especially in web development and data visualization, is top-tier."
    }
];

function displayRecommendations() {
    const recommendationList = document.getElementById("recommendation-list");
    recommendationList.innerHTML = ''; // Clear previous recommendations
    recommendations.forEach((rec) => {
        const recommendationItem = `
            <div class="recommendation">
                <h3>${rec.name}</h3>
                <p><strong>Position:</strong> ${rec.position}, ${rec.company}</p>
                <p>${rec.recommendation}</p>
            </div>
        `;
        recommendationList.innerHTML += recommendationItem;
    });
}

function addRecommendation(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const position = document.getElementById("position").value;
    const company = document.getElementById("company").value;
    const recommendationText = document.getElementById("recommendation").value;
    
    const newRecommendation = {
        name: name,
        position: position,
        company: company,
        recommendation: recommendationText
    };
    
    recommendations.push(newRecommendation);
    displayRecommendations();
    
    document.getElementById("recommendation-form").reset();
}

window.onload = function() {
    displayRecommendations();
    document.getElementById("recommendation-form").addEventListener("submit", addRecommendation);
};

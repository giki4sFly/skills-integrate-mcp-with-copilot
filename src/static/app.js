document.addEventListener("DOMContentLoaded", () => {
  const activitiesList = document.getElementById("activities-list");
  const activitySelect = document.getElementById("activity");
  const signupForm = document.getElementById("signup-form");
  const messageDiv = document.getElementById("message");
  
  // Filter elements
  const searchInput = document.getElementById("search");
  const categoryFilter = document.getElementById("category-filter");
  const sortBySelect = document.getElementById("sort-by");
  
  let allActivities = {}; // Store all activities for filtering

  // Function to apply filters and sorting
  function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const sortBy = sortBySelect.value;
    
    // Filter activities
    let filtered = Object.entries(allActivities).filter(([name, details]) => {
      // Text search
      const matchesSearch = name.toLowerCase().includes(searchTerm) || 
                           details.description.toLowerCase().includes(searchTerm);
      
      // Category filter
      const matchesCategory = !selectedCategory || details.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    // Sort activities (skip sort for "default" to preserve original order)
    if (sortBy !== "default") {
      filtered.sort(([nameA, detailsA], [nameB, detailsB]) => {
        switch (sortBy) {
          case "name-asc":
            return nameA.localeCompare(nameB);
          case "name-desc":
            return nameB.localeCompare(nameA);
          case "time-asc":
            return (detailsA.sortTime ?? 0) - (detailsB.sortTime ?? 0);
          case "time-desc":
            return (detailsB.sortTime ?? 0) - (detailsA.sortTime ?? 0);
          default:
            return 0;
        }
      });
    }
    
    // Render filtered activities
    renderActivities(Object.fromEntries(filtered));
  }
  
  // Function to render activities
  function renderActivities(activities) {
    activitiesList.innerHTML = "";
    
    if (Object.keys(activities).length === 0) {
      activitiesList.innerHTML = "<p>No activities match your search criteria.</p>";
      return;
    }
    
    Object.entries(activities).forEach(([name, details]) => {
      const activityCard = document.createElement("div");
      activityCard.className = "activity-card";

      const spotsLeft =
        details.max_participants - details.participants.length;

      const escapeHtml = (value) =>
        String(value).replace(/[&<>"']/g, (ch) =>
          ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
          })[ch]
        );

      const safeName = escapeHtml(name);
      const safeCategory = escapeHtml(details.category);
      const safeDescription = escapeHtml(details.description);
      const safeSchedule = escapeHtml(details.schedule);

      const participantsHTML =
        details.participants.length > 0
          ? `<div class="participants-section">
            <h5>Participants:</h5>
            <ul class="participants-list">
              ${details.participants
                .map((email) => {
                  const safeEmail = escapeHtml(email);
                  return `<li><span class="participant-email">${safeEmail}</span><button class="delete-btn" data-activity="${safeName}" data-email="${safeEmail}">❌</button></li>`;
                })
                .join("")}
            </ul>
          </div>`
          : `<p><em>No participants yet</em></p>`;

      activityCard.innerHTML = `
        <h4>${safeName}</h4>
        <p><strong>Category:</strong> ${safeCategory}</p>
        <p>${safeDescription}</p>
        <p><strong>Schedule:</strong> ${safeSchedule}</p>
        <p><strong>Availability:</strong> ${spotsLeft} spots left</p>
        <div class="participants-container">
          ${participantsHTML}
        </div>
      `;

      activitiesList.appendChild(activityCard);

      // Add event listeners to delete buttons
      activityCard.querySelectorAll(".delete-btn").forEach((button) => {
        button.addEventListener("click", handleUnregister);
      });
    });
  }

  // Function to fetch activities from API
  async function fetchActivities() {
    try {
      const response = await fetch("/activities");
      const activities = await response.json();
      
      allActivities = activities;
      
      // Populate category filter
      const categories = [...new Set(Object.values(activities).map(a => a.category))];
      categories.forEach(cat => {
        const option = document.createElement("option");
        option.value = cat;
        option.textContent = cat;
        categoryFilter.appendChild(option);
      });

      // Populate activity select dropdown
      Object.keys(activities).forEach(name => {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        activitySelect.appendChild(option);
      });

      // Initial render
      applyFilters();
    } catch (error) {
      activitiesList.innerHTML =
        "<p>Failed to load activities. Please try again later.</p>";
      console.error("Error fetching activities:", error);
    }
  }

  // Handle unregister functionality
  async function handleUnregister(event) {
    const button = event.target;
    const activity = button.getAttribute("data-activity");
    const email = button.getAttribute("data-email");

    try {
      const response = await fetch(
        `/activities/${encodeURIComponent(
          activity
        )}/unregister?email=${encodeURIComponent(email)}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();

      if (response.ok) {
        messageDiv.textContent = result.message;
        messageDiv.className = "success";

        // Refresh activities list
        await fetchActivities();
      } else {
        messageDiv.textContent = result.detail || "An error occurred";
        messageDiv.className = "error";
      }

      messageDiv.classList.remove("hidden");

      setTimeout(() => {
        messageDiv.classList.add("hidden");
      }, 5000);
    } catch (error) {
      messageDiv.textContent = "Failed to unregister. Please try again.";
      messageDiv.className = "error";
      messageDiv.classList.remove("hidden");
      console.error("Error unregistering:", error);
    }
  }

  // Handle form submission
  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const activity = document.getElementById("activity").value;

    try {
      const response = await fetch(
        `/activities/${encodeURIComponent(
          activity
        )}/signup?email=${encodeURIComponent(email)}`,
        {
          method: "POST",
        }
      );

      const result = await response.json();

      if (response.ok) {
        messageDiv.textContent = result.message;
        messageDiv.className = "success";
        signupForm.reset();

        // Refresh activities list
        await fetchActivities();
      } else {
        messageDiv.textContent = result.detail || "An error occurred";
        messageDiv.className = "error";
      }

      messageDiv.classList.remove("hidden");

      setTimeout(() => {
        messageDiv.classList.add("hidden");
      }, 5000);
    } catch (error) {
      messageDiv.textContent = "Failed to sign up. Please try again.";
      messageDiv.className = "error";
      messageDiv.classList.remove("hidden");
      console.error("Error signing up:", error);
    }
  });

  // Add event listeners for filters
  searchInput.addEventListener("input", applyFilters);
  categoryFilter.addEventListener("change", applyFilters);
  sortBySelect.addEventListener("change", applyFilters);

  // Initialize app
  fetchActivities();
});

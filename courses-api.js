const container = document.getElementById("courses-container");

function showCourse(title, platform, link) {
  const div = document.createElement("div");
  div.className = "course-card";

  const id = title.replace(/\s+/g, "_").toLowerCase();

  div.innerHTML = `
    <div class="course-header">
      <h3 class="course-title">${title}</h3>
      <button class="subscribe-btn"
        onclick="subscribeCourse('${id}', '${title}')">
        Subscribe
      </button>
    </div>
    <p>${platform}</p>
    <a href="${link}" target="_blank">View Course</a>
  `;

  container.appendChild(div);
}

/* ✅ REAL API (100% WORKING IN VS CODE + LIVE SERVER) */
fetch("https://api.npoint.io/93bed93a99df4c91044e")
  .then(response => response.json())
  .then(data => {
    data.forEach(course => {
      showCourse(course.title, course.platform, course.link);
    });
  })
  .catch(error => {
    console.error("API Error:", error);
  });

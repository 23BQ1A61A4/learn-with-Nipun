const container = document.getElementById("courses-container");

function showCourse(course) {
  const div = document.createElement("div");
  div.className = "course-card";

  div.innerHTML = `
    <div class="course-header">
      <h3 class="course-title">${course.title}</h3>
      <button class="subscribe-btn"
        onclick="subscribeCourse('${course.id}', '${course.title}')">
        Subscribe
      </button>
    </div>
    <p>${course.platform} • ${course.category}</p>
    <a href="${course.link}" target="_blank">View Course</a>
  `;

  container.appendChild(div);
}

// 🔥 FETCH FROM YOUR AGGREGATOR API
fetch("https://api.npoint.io/dd728a5e8d0f1d2fed6e")
  .then(res => res.json())
  .then(data => {
    data.forEach(course => showCourse(course));
  })
  .catch(err => console.error("API Error:", err));

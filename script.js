const container = document.getElementById("posts-container");

// Load posts dynamically
function loadPosts() {
  posts.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
    container.appendChild(postDiv);
  });
}

// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

loadPosts();

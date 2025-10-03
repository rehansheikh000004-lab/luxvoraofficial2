const projects = [
  { name:"Clock App", desc:"Simple analog/digital clock", link:"#", github:"#"},
  { name:"Weather App", desc:"Check weather dynamically", link:"#", github:"#"},
  { name:"Quotes App", desc:"Daily motivational quotes", link:"#", github:"#"},
  { name:"To-do App", desc:"Manage your tasks", link:"#", github:"#"},
  { name:"Photo Gallery", desc:"Aesthetic image gallery", link:"#", github:"#"},
  { name:"E-commerce Store", desc:"Product showcase frontend", link:"#", github:"#"}
];

const projectsContainer = document.getElementById("projects-container");

projects.forEach(p => {
  const div = document.createElement("div");
  div.classList.add("project");
  div.innerHTML = `
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
    <a href="${p.link}" target="_blank">Live Demo</a> | 
    <a href="${p.github}" target="_blank">GitHub</a>
  `;
  projectsContainer.appendChild(div);
});

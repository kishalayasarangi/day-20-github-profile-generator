function val(id) {
  return document.getElementById(id).value.trim();
}

function getSkills() {
  return [...document.querySelectorAll('#skillsGrid input:checked')]
    .map(cb => cb.value);
}

function generate() {
  const name = val('name') || 'Your Name';
  const title = val('title') || 'Your Title';
  const about = val('about') || 'Passionate about technology and building cool things.';
  const github = val('github') || 'yourusername';
  const email = val('email') || 'your@email.com';
  const linkedin = val('linkedin');
  const workingOn = val('workingOn') || 'something awesome';
  const learning = val('learning') || 'new technologies';
  const lookingFor = val('lookingFor') || 'collaboration opportunities';
  const funFact = val('funFact') || 'I love coding!';
  const skills = getSkills();

  const skillBadges = skills.map(s =>
    `![${s}](https://img.shields.io/badge/${encodeURIComponent(s)}-informational?style=flat&logo=${s.toLowerCase().replace(/\s/g, '').replace(/\+/g, 'cplusplus').replace(/\./g, '')})`
  ).join(' ');

  const linkedinLine = linkedin
    ? `[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin)](https://${linkedin})`
    : '';

  const readme = `<h1 align="center">Hi there, I'm ${name} 👋</h1>

<h3 align="center">${title}</h3>

<p align="center">
  <a href="mailto:${email}">
    <img src="https://img.shields.io/badge/Email-D14836?style=flat&logo=gmail&logoColor=white"/>
  </a>
  <a href="https://github.com/${github}">
    <img src="https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white"/>
  </a>
  ${linkedinLine}
</p>

---

## 👨‍💻 About Me

${about}

- 🔭 Currently working on **${workingOn}**
- 🌱 Currently learning **${learning}**
- 👯 Looking for **${lookingFor}**
- ⚡ Fun fact: **${funFact}**

---

## 🛠️ Skills & Technologies

${skillBadges || '*(Add your skills using the checkboxes)*'}

---

## 📊 GitHub Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=${github}&show_icons=true&theme=tokyonight" width="48%"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${github}&layout=compact&theme=tokyonight" width="40%"/>
</p>

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${github}&theme=tokyonight"/>
</p>

---

## 🏆 120 Days of Code

I'm on a mission to push a new project to GitHub every single day for 120 days.
Check out my repositories to see my progress!

---

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=${github}&color=7c3aed&style=flat" alt="Profile views"/>
</p>

<p align="center">⭐ Star my repos if you find them useful!</p>`;

  document.getElementById('markdownOutput').textContent = readme;
}

function copyMarkdown() {
  const text = document.getElementById('markdownOutput').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.textContent = '✅ Copied!';
    setTimeout(() => btn.textContent = '📋 Copy Markdown', 1500);
  });
}

window.onload = () => generate();
export default function Skills({technical, nontechnical}) {
    return `
    <div id="skills-location"></div>
    <section id="skills">
        <h1 class="skills-header">Technical Skills</h1>
        <div class="skills-container">
          ${technical.map(skill => Skill(skill)).join('')}
        </div>
        <h1 class="skills-header">Non-Technical Skills</h1>
        <div class="skills-container">
          ${nontechnical.map(skill => Skill(skill)).join('')}
        </div>
    </section>
    `;
}

function Skill({title, icons, animationClass, description}) {
    return `
    <div class="skill">
        <span class="skill-icon ${animationClass}">${Icons(icons)}</span>
        <h4 class="skill-title">${title}</h4>
        <p class="skill-description">${description}</p>
    </div>
    `;
}

function Icons(icons) {
  return icons.reduce((acc, icon) =>
    `${acc}<i class="fas fa-plus skill-icon-concatenator"></i>${icon}`
  );
}
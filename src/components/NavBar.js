
export default function NavBar(projectName, name, navTitles) {
    return `
    <nav class="row">
        <div class="name flex-container col-7 vertical-center">
            <h1><a>${name}</a></h1>
        </div>
        <div class="nav-items flex-container col-5 perfect-center">
            ${NavLinks(projectName, navTitles)}
        </div>
    </nav>
    `;
}

function NavLinks(projectName, navTitles) {
    const [ about, skills, news, projects ] = navTitles;
    if (projectName === 'main') {
        return `
        <a class="nav-item about" href="#">${about}</a>
        <a class="nav-item skills" href="#skills-location">${skills}</a>
        <a class="nav-item projects" href="#projects-location">${projects}</a>
        <a class="nav-item news" href="#news-location">${news}</a>
        `;
    } else {
        return `
        <a class="nav-item back-to-home" href="/">
            <i class="far fa-arrow-alt-circle-left"></i> back to home
        </a>            
        `;
    }
}
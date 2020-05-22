
export default function NavBar(projectName, name, navTitles) {
    return `
    <nav class="row">
        <div class="name flex-container col-6 vertical-center">
            <h1><a href="index.html">${name}</a></h1>
        </div>
        <div class="nav-items flex-container col-6 perfect-center">
            ${NavLinks(projectName, navTitles)}
        </div>
    </nav>
    `;
}

function NavLinks(projectName, navTitles) {
    const [ about, news, projects ] = navTitles;
    if (projectName === 'main') {
        return `
        <a class="nav-item about animated pulse" href="index.html">${about}</a>
        <a class="nav-item news animated pulse delay-1s" href="#news-location">${news}</a>
        <a class="nav-item projects animated pulse delay-2s" href="#projects-location">${projects}</a>
        `;
    } else {
        return `
        <a class="nav-item" href="index.html">
            <i class="far fa-arrow-alt-circle-left"></i> back to home
        </a>            
        `;
    }
}
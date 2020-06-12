import NavBar from './NavBar.js';
import About from './About.js';
import Skills from './Skills.js';
import News, { handleNewsFilter, handleToggleNewsItems } from './News.js';
import Projects, { handleProjectsFilter } from './Projects.js';
import Footer from './Footer.js';

export default function MainPage(data) {
    document.querySelector('.container').innerHTML = `
        ${NavBar('main', data.about.name, Object.keys(data))}
        ${About(data.about)}
        ${Skills(data.skills)}
        ${News(data.news)}
        ${Projects(data.projects)}
        ${Footer(data.about, true)}
    `;
    handleToggleNewsItems(data.news);
    handleNewsFilter(data.news);
    handleProjectsFilter(data.projects);
}

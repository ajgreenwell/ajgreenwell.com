import NavBar from './NavBar.js';
import About from './About.js';
import News, { handleNewsFilter } from './News.js';
import Projects, { handleProjectsFilter } from './Projects.js';
import Footer from './Footer.js';

export default function MainPage(data) {
    document.querySelector('.container').innerHTML = `
        ${NavBar('main', data.about.name, Object.keys(data))}
        ${About(data.about)}
        ${News(data.news)}
        ${Projects(data.projects)}
        ${Footer(data.about)}
    `;
    handleNewsFilter(data.news);
    handleProjectsFilter(data.projects);
}
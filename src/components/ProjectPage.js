import NavBar from './NavBar.js';
import { ProjectDetails } from './Projects.js';
import Footer from './Footer.js';

export default function ProjectPage(projectName, data) {
    document.querySelector('.container').innerHTML = `
        ${NavBar(projectName, data.about.name, Object.keys(data))}
        ${ProjectDetails(getProject(projectName, data.projects))}
        ${Footer(data.about)}
    `;
}

export const getProject = (projectName, projects) => {
    return projects.find(project => project.id == projectName);
}
import MainPage from './components/MainPage.js';
import ProjectPage, { getProject } from './components/ProjectPage.js';
import ProjectNameError from './components/ProjectNameError.js';

export let isMainPage = false;

fetch('assets/data.json')
    .then(response => response.json())
    .then(data => {
        const queryParams = new URLSearchParams(window.location.search);
        const projectName = queryParams.get('project');
        if (projectName) {
            projectNameIsValid(projectName, data.projects)
                ? ProjectPage(projectName, data)
                : ProjectNameError(projectName, data.projects);
        } else {
            isMainPage = true;
            MainPage(data);
        }
});

const projectNameIsValid = (projectName, projects) => {
    return !!getProject(projectName, projects)
}
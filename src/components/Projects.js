import { isMainPage } from '../index.js';

const allProjectsTag = 'All';

export default function Projects(projects) {
    return `
    <div id="projects-location"></div>
    <section id="projects">
        <h1>Projects</h1>
        <span id="projects-filter" class="row">
            ${ProjectsFilter(projects)}
        </span>
        <div id="projects-list">
            ${ProjectsList(projects)}
        </div>
    </section>
    `;
}

function removeDuplicates(array) {
    return Array.from(new Set(array));
}

function ProjectsFilter(projects) {
    let projectTags = projects.reduce((acc, project) => acc.concat(project.tags), []);
    projectTags = removeDuplicates(projectTags.map(tag => tag.text));
    projectTags.unshift(allProjectsTag);
    projectTags.sort();
    return projectTags.map(tag => {
        return `
        <label>
            <input type="radio" name="filter" value="${tag.toLowerCase()}">
            <a>${tag}</a>
        </label>
        `;
    }).join('');
}

export function ProjectsList(projects) {
    return projects.map(project => ProjectDetails(project)).join('');
}

export function ProjectDetails(project) {
    const {
        id, title, date, languages, description,
        detailedDescription, tags, github, image
    } = project;

    return `
    <div ${isMainPage ?  'class="project row"' : 'id="project-details" class="row"'}>
        <div class="col-6 project-info">
            <div>
                ${isMainPage ? `<a href="/?project=${id}"><strong>${title}</strong></a>` : `<h1>${title}</h1>`}
            </div>
            <div>
                <p>
                    <strong>Date:</strong> ${date}<br>
                    <strong>${isSingular(languages) ? 'Language' : 'Languages'}:</strong> ${languages}
                </p>
                <p>${isMainPage ? description : detailedDescription}</p>              
                <p>Checkout the code on GitHub <a href="${github}" target="_blank">here</a>.</p>
                ${ProjectTags(tags)}
            </div>
        </div>
        <div class="col-6 project-img">
            <img src="${image}" width="100%">
        </div>
    </div>
    `;
}

const isSingular = str => str.split(', ').length <= 1;

function ProjectTags(tags) {
    return tags.map(tag => 
        `<span class="tag" style="background-color: ${tag.color}">${tag.text}</span>`
    ).join('');
    
}

export function handleProjectsFilter(projects) {
    document.querySelectorAll('#projects-filter input[name="filter"]').forEach(radioButton => {
        radioButton.addEventListener('change', event => {
            let filterTag = event.target.value;
            let filteredProjects = projects.slice();
            if (filterTag != allProjectsTag.toLowerCase()) {
                filteredProjects = projects.filter(project => {
                    let lowercaseTags = project.tags.map(tag => tag.text.toLowerCase());
                    return lowercaseTags.includes(filterTag.toLowerCase())
                });
            }
            document.querySelector('#projects-list').innerHTML = ProjectsList(filteredProjects);
        });
    });
}
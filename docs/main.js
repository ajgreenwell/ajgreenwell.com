/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderAbout; });
function renderAbout(about) {
    const { 
        _, image, title, address, email, resume,
        linkedin, github, description, languages
    } = about;

    return `
    <section id="about" class="row">
        <div class="col-2 left-pane">
            <img src="${image}">
        </div>
        <div class="col-7 about-info">
            <p>
                <strong>${title}</strong><br>
                ${address}<br>
                <a href="mailto:${email}">${email}</a> |
                <a href="${resume}" target="_blank"><i class="far fa-file-alt"></i> Resume</a> |
                <a href="${linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a> |
                <a href="${github}" target="_blank"><i class="fab fa-github"></i></a>
            </p>
            <p>${description}</p>
        </div>
    </section>
    `;
}

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });

function Footer(about, isMainPage) {
    return `
    <footer ${!isMainPage && 'class="bordered-footer"'}>
        <span class="copyright">Copyright © ${about.name}</span>
        <span class="footer-icons">
            <a href="${about.linkedin}" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
            <a href="${about.github}" target="_blank"><i class="fab fa-github fa-2x"></i></a>
        </span>
    </footer>
    `;
}

/***/ }),

/***/ "./src/components/MainPage.js":
/*!************************************!*\
  !*** ./src/components/MainPage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainPage; });
/* harmony import */ var _NavBar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.js */ "./src/components/NavBar.js");
/* harmony import */ var _About_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.js */ "./src/components/About.js");
/* harmony import */ var _Skills_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Skills.js */ "./src/components/Skills.js");
/* harmony import */ var _News_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./News.js */ "./src/components/News.js");
/* harmony import */ var _Projects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Projects.js */ "./src/components/Projects.js");
/* harmony import */ var _Footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer.js */ "./src/components/Footer.js");







function MainPage(data) {
    document.querySelector('.container').innerHTML = `
        ${Object(_NavBar_js__WEBPACK_IMPORTED_MODULE_0__["default"])('main', data.about.name, Object.keys(data))}
        ${Object(_About_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data.about)}
        ${Object(_Skills_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data.skills)}
        ${Object(_News_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data.news)}
        ${Object(_Projects_js__WEBPACK_IMPORTED_MODULE_4__["default"])(data.projects)}
        ${Object(_Footer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(data.about, true)}
    `;
    Object(_News_js__WEBPACK_IMPORTED_MODULE_3__["handleToggleNewsItems"])(data.news);
    Object(_News_js__WEBPACK_IMPORTED_MODULE_3__["handleNewsFilter"])(data.news);
    Object(_Projects_js__WEBPACK_IMPORTED_MODULE_4__["handleProjectsFilter"])(data.projects);
}


/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });

function NavBar(projectName, name, navTitles) {
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
        <a class="nav-item news" href="#news-location">${news}</a>
        <a class="nav-item projects" href="#projects-location">${projects}</a>
        `;
    } else {
        return `
        <a class="nav-item" href="/">
            <i class="far fa-arrow-alt-circle-left"></i> back to home
        </a>            
        `;
    }
}

/***/ }),

/***/ "./src/components/News.js":
/*!********************************!*\
  !*** ./src/components/News.js ***!
  \********************************/
/*! exports provided: default, NewsItems, handleToggleNewsItems, handleNewsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return News; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItems", function() { return NewsItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleToggleNewsItems", function() { return handleToggleNewsItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleNewsFilter", function() { return handleNewsFilter; });
const numNewsItemsToRender = 5;
let shouldShowAllNewsItems = false;

function News(news) {
    return `
    <div id="news-location"></div>
    <section id="news">
        <h1>News</h1>
        <div id="news-search-container">
            <input id="news-search" type="text" placeholder="Search News...">
            <i id="news-search-icon" class="fas fa-search"></i>
        </div>
        <div id="news-list">
            ${shouldShowAllNewsItems ?
                NewsItems(news) :
                NewsItems(news, numNewsItemsToRender)
            }
        </div>
        <button id="news-item-toggle">
            ${shouldShowAllNewsItems ? 'See Less' : 'See All'}
        </button>
    </section>
    `;
}

function NewsItems(news, numNewsItems = null) {
    let n = numNewsItems ? numNewsItems : Object.keys(news).length;
    return news.slice(0, n).map(newsItem => NewsItem(newsItem)).join('');
}

function NewsItem(newsItem) {
    const { description, date } = newsItem;

    return `
    <div class="row news-item">
        <div class="col-10">
            ${description}
        </div>
        <div class= "col-2 news-date text-align">
            <em>${date}</em>
        </div>
    </div>
    `;
}

function renderNewsItems(news, showAll) {
    const newsItems = showAll ?
            NewsItems(news, numNewsItemsToRender) :
            NewsItems(news);
    document.querySelector('#news-list').innerHTML = newsItems;
}

function handleToggleNewsItems(news) {
    const newsItemToggle = document.querySelector('#news-item-toggle');
    newsItemToggle.addEventListener('click', event => {
        renderNewsItems(news, shouldShowAllNewsItems);
        event.target.innerHTML = shouldShowAllNewsItems ? 'See All' : 'See Less';
        shouldShowAllNewsItems = !shouldShowAllNewsItems;
    });
}

function handleNewsFilter(news) {
    document.querySelector('#news-search').addEventListener('input', event => {
        let searchText = event.target.value.toLowerCase();
        let filteredNews = news.filter(newsItem => {
            return newsItem.description.toLowerCase().includes(searchText) ||
                   newsItem.date.toLowerCase().includes(searchText);
        });
        renderNewsItems(filteredNews, !shouldShowAllNewsItems);
        const newsItemToggle = document.querySelector('#news-item-toggle');
        newsItemToggle.style.display = searchText ? 'none' : 'inline-block';
    });
}

/***/ }),

/***/ "./src/components/ProjectNameError.js":
/*!********************************************!*\
  !*** ./src/components/ProjectNameError.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectNameError; });

function ProjectNameError(projectName, data) {
    document.querySelector('.container').innerHTML = `
        <h1>400 Bad Request</h1>
        <p>The value provided for the 'project' query parameter is invalid.</p>
        <p>
            <strong>Value Provided:</strong> ${projectName}<br>
            <strong>Valid Values:</strong> ${Object.keys(data.projects).join(', ')}
        </p>
    `;
}

/***/ }),

/***/ "./src/components/ProjectPage.js":
/*!***************************************!*\
  !*** ./src/components/ProjectPage.js ***!
  \***************************************/
/*! exports provided: default, getProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProject", function() { return getProject; });
/* harmony import */ var _NavBar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.js */ "./src/components/NavBar.js");
/* harmony import */ var _Projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.js */ "./src/components/Projects.js");
/* harmony import */ var _Footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.js */ "./src/components/Footer.js");




function ProjectPage(projectName, data) {
    document.querySelector('.container').innerHTML = `
        ${Object(_NavBar_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectName, data.about.name, Object.keys(data))}
        <section id="project-page">
            ${Object(_Projects_js__WEBPACK_IMPORTED_MODULE_1__["ProjectDetails"])(getProject(projectName, data.projects))}
        </section>
        ${Object(_Footer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data.about, false)}
    `;
}

const getProject = (projectName, projects) => {
    return projects.find(project => project.id == projectName);
}

/***/ }),

/***/ "./src/components/Projects.js":
/*!************************************!*\
  !*** ./src/components/Projects.js ***!
  \************************************/
/*! exports provided: default, ProjectsList, ProjectDetails, handleProjectsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsList", function() { return ProjectsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetails", function() { return ProjectDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleProjectsFilter", function() { return handleProjectsFilter; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");


const allProjectsTag = 'All';

function Projects(projects) {
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

function ProjectsList(projects) {
    return projects.map(project => ProjectDetails(project)).join('');
}

function ProjectDetails(project) {
    const {
        id, title, date, languages, description,
        detailedDescription, tags, github, image
    } = project;

    return `
    <div ${_index_js__WEBPACK_IMPORTED_MODULE_0__["isMainPage"] ?  'class="project row"' : 'id="project-details" class="row"'}>
        <div class="col-6 project-info">
            <div>
                ${_index_js__WEBPACK_IMPORTED_MODULE_0__["isMainPage"] ? `<a href="/?project=${id}"><strong>${title}</strong></a>` : `<h1>${title}</h1>`}
            </div>
            <div>
                <p>
                    <strong>Date:</strong> ${date}<br>
                    <strong>${isSingular(languages) ? 'Language' : 'Languages'}:</strong> ${languages}
                </p>
                <p>${_index_js__WEBPACK_IMPORTED_MODULE_0__["isMainPage"] ? description : detailedDescription}</p>              
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

function handleProjectsFilter(projects) {
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

/***/ }),

/***/ "./src/components/Skills.js":
/*!**********************************!*\
  !*** ./src/components/Skills.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skills; });
function Skills({technical, nontechnical}) {
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

function Skill({title, logo, description}) {
    return `
    <div class="skill">
        <span class="skill-logo">${logo}</span>
        <h4 class="skill-title">${title}</h4>
        <p class="skill-description">${description}</p>
    </div>
    `;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: isMainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMainPage", function() { return isMainPage; });
/* harmony import */ var _components_MainPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MainPage.js */ "./src/components/MainPage.js");
/* harmony import */ var _components_ProjectPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProjectPage.js */ "./src/components/ProjectPage.js");
/* harmony import */ var _components_ProjectNameError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ProjectNameError.js */ "./src/components/ProjectNameError.js");




let isMainPage = false;

fetch('assets/data.json')
    .then(response => response.json())
    .then(data => {
        const queryParams = new URLSearchParams(window.location.search);
        const projectName = queryParams.get('project');
        if (projectName) {
            projectNameIsValid(projectName, data.projects)
                ? Object(_components_ProjectPage_js__WEBPACK_IMPORTED_MODULE_1__["default"])(projectName, data)
                : Object(_components_ProjectNameError_js__WEBPACK_IMPORTED_MODULE_2__["default"])(projectName, data.projects);
        } else {
            isMainPage = true;
            Object(_components_MainPage_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
        }
});

const projectNameIsValid = (projectName, projects) => {
    return !!Object(_components_ProjectPage_js__WEBPACK_IMPORTED_MODULE_1__["getProject"])(projectName, projects)
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5QYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXdzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2plY3ROYW1lRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2tpbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNo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QiwrRUFBZ0I7QUFDbEMsU0FBUztBQUNUO0FBQ0EsWUFBWSx1RUFBUTtBQUNwQjtBQUNBLENBQUM7O0FBRUQ7QUFDQSxhQUFhLDZFQUFVO0FBQ3ZCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyQWJvdXQoYWJvdXQpIHtcbiAgICBjb25zdCB7IFxuICAgICAgICBfLCBpbWFnZSwgdGl0bGUsIGFkZHJlc3MsIGVtYWlsLCByZXN1bWUsXG4gICAgICAgIGxpbmtlZGluLCBnaXRodWIsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZXNcbiAgICB9ID0gYWJvdXQ7XG5cbiAgICByZXR1cm4gYFxuICAgIDxzZWN0aW9uIGlkPVwiYWJvdXRcIiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTIgbGVmdC1wYW5lXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2V9XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTcgYWJvdXQtaW5mb1wiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz4ke3RpdGxlfTwvc3Ryb25nPjxicj5cbiAgICAgICAgICAgICAgICAke2FkZHJlc3N9PGJyPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86JHtlbWFpbH1cIj4ke2VtYWlsfTwvYT4gfFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3Jlc3VtZX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cImZhciBmYS1maWxlLWFsdFwiPjwvaT4gUmVzdW1lPC9hPiB8XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7bGlua2VkaW59XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYWIgZmEtbGlua2VkaW5cIj48L2k+PC9hPiB8XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7Z2l0aHVifVwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiZmFiIGZhLWdpdGh1YlwiPjwvaT48L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD4ke2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIGA7XG59IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoYWJvdXQsIGlzTWFpblBhZ2UpIHtcbiAgICByZXR1cm4gYFxuICAgIDxmb290ZXIgJHshaXNNYWluUGFnZSAmJiAnY2xhc3M9XCJib3JkZXJlZC1mb290ZXJcIid9PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNvcHlyaWdodFwiPkNvcHlyaWdodCDCqSAke2Fib3V0Lm5hbWV9PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImZvb3Rlci1pY29uc1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiR7YWJvdXQubGlua2VkaW59XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYWIgZmEtbGlua2VkaW4gZmEtMnhcIj48L2k+PC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiR7YWJvdXQuZ2l0aHVifVwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiZmFiIGZhLWdpdGh1YiBmYS0yeFwiPjwvaT48L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Zvb3Rlcj5cbiAgICBgO1xufSIsImltcG9ydCBOYXZCYXIgZnJvbSAnLi9OYXZCYXIuanMnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQuanMnO1xuaW1wb3J0IFNraWxscyBmcm9tICcuL1NraWxscy5qcyc7XG5pbXBvcnQgTmV3cywgeyBoYW5kbGVOZXdzRmlsdGVyLCBoYW5kbGVUb2dnbGVOZXdzSXRlbXMgfSBmcm9tICcuL05ld3MuanMnO1xuaW1wb3J0IFByb2plY3RzLCB7IGhhbmRsZVByb2plY3RzRmlsdGVyIH0gZnJvbSAnLi9Qcm9qZWN0cy5qcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpblBhZ2UoZGF0YSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5pbm5lckhUTUwgPSBgXG4gICAgICAgICR7TmF2QmFyKCdtYWluJywgZGF0YS5hYm91dC5uYW1lLCBPYmplY3Qua2V5cyhkYXRhKSl9XG4gICAgICAgICR7QWJvdXQoZGF0YS5hYm91dCl9XG4gICAgICAgICR7U2tpbGxzKGRhdGEuc2tpbGxzKX1cbiAgICAgICAgJHtOZXdzKGRhdGEubmV3cyl9XG4gICAgICAgICR7UHJvamVjdHMoZGF0YS5wcm9qZWN0cyl9XG4gICAgICAgICR7Rm9vdGVyKGRhdGEuYWJvdXQsIHRydWUpfVxuICAgIGA7XG4gICAgaGFuZGxlVG9nZ2xlTmV3c0l0ZW1zKGRhdGEubmV3cyk7XG4gICAgaGFuZGxlTmV3c0ZpbHRlcihkYXRhLm5ld3MpO1xuICAgIGhhbmRsZVByb2plY3RzRmlsdGVyKGRhdGEucHJvamVjdHMpO1xufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIocHJvamVjdE5hbWUsIG5hbWUsIG5hdlRpdGxlcykge1xuICAgIHJldHVybiBgXG4gICAgPG5hdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZSBmbGV4LWNvbnRhaW5lciBjb2wtNyB2ZXJ0aWNhbC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMT48YT4ke25hbWV9PC9hPjwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWl0ZW1zIGZsZXgtY29udGFpbmVyIGNvbC01IHBlcmZlY3QtY2VudGVyXCI+XG4gICAgICAgICAgICAke05hdkxpbmtzKHByb2plY3ROYW1lLCBuYXZUaXRsZXMpfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgICBgO1xufVxuXG5mdW5jdGlvbiBOYXZMaW5rcyhwcm9qZWN0TmFtZSwgbmF2VGl0bGVzKSB7XG4gICAgY29uc3QgWyBhYm91dCwgc2tpbGxzLCBuZXdzLCBwcm9qZWN0cyBdID0gbmF2VGl0bGVzO1xuICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gJ21haW4nKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWl0ZW0gYWJvdXRcIiBocmVmPVwiI1wiPiR7YWJvdXR9PC9hPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1pdGVtIHNraWxsc1wiIGhyZWY9XCIjc2tpbGxzLWxvY2F0aW9uXCI+JHtza2lsbHN9PC9hPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1pdGVtIG5ld3NcIiBocmVmPVwiI25ld3MtbG9jYXRpb25cIj4ke25ld3N9PC9hPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1pdGVtIHByb2plY3RzXCIgaHJlZj1cIiNwcm9qZWN0cy1sb2NhdGlvblwiPiR7cHJvamVjdHN9PC9hPlxuICAgICAgICBgO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWl0ZW1cIiBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtYXJyb3ctYWx0LWNpcmNsZS1sZWZ0XCI+PC9pPiBiYWNrIHRvIGhvbWVcbiAgICAgICAgPC9hPiAgICAgICAgICAgIFxuICAgICAgICBgO1xuICAgIH1cbn0iLCJjb25zdCBudW1OZXdzSXRlbXNUb1JlbmRlciA9IDU7XG5sZXQgc2hvdWxkU2hvd0FsbE5ld3NJdGVtcyA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzKG5ld3MpIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgaWQ9XCJuZXdzLWxvY2F0aW9uXCI+PC9kaXY+XG4gICAgPHNlY3Rpb24gaWQ9XCJuZXdzXCI+XG4gICAgICAgIDxoMT5OZXdzPC9oMT5cbiAgICAgICAgPGRpdiBpZD1cIm5ld3Mtc2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3cy1zZWFyY2hcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIE5ld3MuLi5cIj5cbiAgICAgICAgICAgIDxpIGlkPVwibmV3cy1zZWFyY2gtaWNvblwiIGNsYXNzPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJuZXdzLWxpc3RcIj5cbiAgICAgICAgICAgICR7c2hvdWxkU2hvd0FsbE5ld3NJdGVtcyA/XG4gICAgICAgICAgICAgICAgTmV3c0l0ZW1zKG5ld3MpIDpcbiAgICAgICAgICAgICAgICBOZXdzSXRlbXMobmV3cywgbnVtTmV3c0l0ZW1zVG9SZW5kZXIpXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGlkPVwibmV3cy1pdGVtLXRvZ2dsZVwiPlxuICAgICAgICAgICAgJHtzaG91bGRTaG93QWxsTmV3c0l0ZW1zID8gJ1NlZSBMZXNzJyA6ICdTZWUgQWxsJ31cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9zZWN0aW9uPlxuICAgIGA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOZXdzSXRlbXMobmV3cywgbnVtTmV3c0l0ZW1zID0gbnVsbCkge1xuICAgIGxldCBuID0gbnVtTmV3c0l0ZW1zID8gbnVtTmV3c0l0ZW1zIDogT2JqZWN0LmtleXMobmV3cykubGVuZ3RoO1xuICAgIHJldHVybiBuZXdzLnNsaWNlKDAsIG4pLm1hcChuZXdzSXRlbSA9PiBOZXdzSXRlbShuZXdzSXRlbSkpLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBOZXdzSXRlbShuZXdzSXRlbSkge1xuICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIGRhdGUgfSA9IG5ld3NJdGVtO1xuXG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwicm93IG5ld3MtaXRlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwXCI+XG4gICAgICAgICAgICAke2Rlc2NyaXB0aW9ufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0gXCJjb2wtMiBuZXdzLWRhdGUgdGV4dC1hbGlnblwiPlxuICAgICAgICAgICAgPGVtPiR7ZGF0ZX08L2VtPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xufVxuXG5mdW5jdGlvbiByZW5kZXJOZXdzSXRlbXMobmV3cywgc2hvd0FsbCkge1xuICAgIGNvbnN0IG5ld3NJdGVtcyA9IHNob3dBbGwgP1xuICAgICAgICAgICAgTmV3c0l0ZW1zKG5ld3MsIG51bU5ld3NJdGVtc1RvUmVuZGVyKSA6XG4gICAgICAgICAgICBOZXdzSXRlbXMobmV3cyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3MtbGlzdCcpLmlubmVySFRNTCA9IG5ld3NJdGVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVRvZ2dsZU5ld3NJdGVtcyhuZXdzKSB7XG4gICAgY29uc3QgbmV3c0l0ZW1Ub2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3cy1pdGVtLXRvZ2dsZScpO1xuICAgIG5ld3NJdGVtVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICByZW5kZXJOZXdzSXRlbXMobmV3cywgc2hvdWxkU2hvd0FsbE5ld3NJdGVtcyk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5pbm5lckhUTUwgPSBzaG91bGRTaG93QWxsTmV3c0l0ZW1zID8gJ1NlZSBBbGwnIDogJ1NlZSBMZXNzJztcbiAgICAgICAgc2hvdWxkU2hvd0FsbE5ld3NJdGVtcyA9ICFzaG91bGRTaG93QWxsTmV3c0l0ZW1zO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTmV3c0ZpbHRlcihuZXdzKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3Mtc2VhcmNoJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBldmVudCA9PiB7XG4gICAgICAgIGxldCBzZWFyY2hUZXh0ID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCBmaWx0ZXJlZE5ld3MgPSBuZXdzLmZpbHRlcihuZXdzSXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3c0l0ZW0uZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXh0KSB8fFxuICAgICAgICAgICAgICAgICAgIG5ld3NJdGVtLmRhdGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbmRlck5ld3NJdGVtcyhmaWx0ZXJlZE5ld3MsICFzaG91bGRTaG93QWxsTmV3c0l0ZW1zKTtcbiAgICAgICAgY29uc3QgbmV3c0l0ZW1Ub2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3cy1pdGVtLXRvZ2dsZScpO1xuICAgICAgICBuZXdzSXRlbVRvZ2dsZS5zdHlsZS5kaXNwbGF5ID0gc2VhcmNoVGV4dCA/ICdub25lJyA6ICdpbmxpbmUtYmxvY2snO1xuICAgIH0pO1xufSIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdE5hbWVFcnJvcihwcm9qZWN0TmFtZSwgZGF0YSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMT40MDAgQmFkIFJlcXVlc3Q8L2gxPlxuICAgICAgICA8cD5UaGUgdmFsdWUgcHJvdmlkZWQgZm9yIHRoZSAncHJvamVjdCcgcXVlcnkgcGFyYW1ldGVyIGlzIGludmFsaWQuPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzdHJvbmc+VmFsdWUgUHJvdmlkZWQ6PC9zdHJvbmc+ICR7cHJvamVjdE5hbWV9PGJyPlxuICAgICAgICAgICAgPHN0cm9uZz5WYWxpZCBWYWx1ZXM6PC9zdHJvbmc+ICR7T2JqZWN0LmtleXMoZGF0YS5wcm9qZWN0cykuam9pbignLCAnKX1cbiAgICAgICAgPC9wPlxuICAgIGA7XG59IiwiaW1wb3J0IE5hdkJhciBmcm9tICcuL05hdkJhci5qcyc7XG5pbXBvcnQgeyBQcm9qZWN0RGV0YWlscyB9IGZyb20gJy4vUHJvamVjdHMuanMnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RQYWdlKHByb2plY3ROYW1lLCBkYXRhKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmlubmVySFRNTCA9IGBcbiAgICAgICAgJHtOYXZCYXIocHJvamVjdE5hbWUsIGRhdGEuYWJvdXQubmFtZSwgT2JqZWN0LmtleXMoZGF0YSkpfVxuICAgICAgICA8c2VjdGlvbiBpZD1cInByb2plY3QtcGFnZVwiPlxuICAgICAgICAgICAgJHtQcm9qZWN0RGV0YWlscyhnZXRQcm9qZWN0KHByb2plY3ROYW1lLCBkYXRhLnByb2plY3RzKSl9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgJHtGb290ZXIoZGF0YS5hYm91dCwgZmFsc2UpfVxuICAgIGA7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3ROYW1lLCBwcm9qZWN0cykgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5pZCA9PSBwcm9qZWN0TmFtZSk7XG59IiwiaW1wb3J0IHsgaXNNYWluUGFnZSB9IGZyb20gJy4uL2luZGV4LmpzJztcblxuY29uc3QgYWxsUHJvamVjdHNUYWcgPSAnQWxsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMocHJvamVjdHMpIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgaWQ9XCJwcm9qZWN0cy1sb2NhdGlvblwiPjwvZGl2PlxuICAgIDxzZWN0aW9uIGlkPVwicHJvamVjdHNcIj5cbiAgICAgICAgPGgxPlByb2plY3RzPC9oMT5cbiAgICAgICAgPHNwYW4gaWQ9XCJwcm9qZWN0cy1maWx0ZXJcIiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgJHtQcm9qZWN0c0ZpbHRlcihwcm9qZWN0cyl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBpZD1cInByb2plY3RzLWxpc3RcIj5cbiAgICAgICAgICAgICR7UHJvamVjdHNMaXN0KHByb2plY3RzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIGA7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZXMoYXJyYXkpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFycmF5KSk7XG59XG5cbmZ1bmN0aW9uIFByb2plY3RzRmlsdGVyKHByb2plY3RzKSB7XG4gICAgbGV0IHByb2plY3RUYWdzID0gcHJvamVjdHMucmVkdWNlKChhY2MsIHByb2plY3QpID0+IGFjYy5jb25jYXQocHJvamVjdC50YWdzKSwgW10pO1xuICAgIHByb2plY3RUYWdzID0gcmVtb3ZlRHVwbGljYXRlcyhwcm9qZWN0VGFncy5tYXAodGFnID0+IHRhZy50ZXh0KSk7XG4gICAgcHJvamVjdFRhZ3MudW5zaGlmdChhbGxQcm9qZWN0c1RhZyk7XG4gICAgcHJvamVjdFRhZ3Muc29ydCgpO1xuICAgIHJldHVybiBwcm9qZWN0VGFncy5tYXAodGFnID0+IHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmaWx0ZXJcIiB2YWx1ZT1cIiR7dGFnLnRvTG93ZXJDYXNlKCl9XCI+XG4gICAgICAgICAgICA8YT4ke3RhZ308L2E+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIGA7XG4gICAgfSkuam9pbignJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0c0xpc3QocHJvamVjdHMpIHtcbiAgICByZXR1cm4gcHJvamVjdHMubWFwKHByb2plY3QgPT4gUHJvamVjdERldGFpbHMocHJvamVjdCkpLmpvaW4oJycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUHJvamVjdERldGFpbHMocHJvamVjdCkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgaWQsIHRpdGxlLCBkYXRlLCBsYW5ndWFnZXMsIGRlc2NyaXB0aW9uLFxuICAgICAgICBkZXRhaWxlZERlc2NyaXB0aW9uLCB0YWdzLCBnaXRodWIsIGltYWdlXG4gICAgfSA9IHByb2plY3Q7XG5cbiAgICByZXR1cm4gYFxuICAgIDxkaXYgJHtpc01haW5QYWdlID8gICdjbGFzcz1cInByb2plY3Qgcm93XCInIDogJ2lkPVwicHJvamVjdC1kZXRhaWxzXCIgY2xhc3M9XCJyb3dcIid9PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgcHJvamVjdC1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICR7aXNNYWluUGFnZSA/IGA8YSBocmVmPVwiLz9wcm9qZWN0PSR7aWR9XCI+PHN0cm9uZz4ke3RpdGxlfTwvc3Ryb25nPjwvYT5gIDogYDxoMT4ke3RpdGxlfTwvaDE+YH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5EYXRlOjwvc3Ryb25nPiAke2RhdGV9PGJyPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPiR7aXNTaW5ndWxhcihsYW5ndWFnZXMpID8gJ0xhbmd1YWdlJyA6ICdMYW5ndWFnZXMnfTo8L3N0cm9uZz4gJHtsYW5ndWFnZXN9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPiR7aXNNYWluUGFnZSA/IGRlc2NyaXB0aW9uIDogZGV0YWlsZWREZXNjcmlwdGlvbn08L3A+ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8cD5DaGVja291dCB0aGUgY29kZSBvbiBHaXRIdWIgPGEgaHJlZj1cIiR7Z2l0aHVifVwiIHRhcmdldD1cIl9ibGFua1wiPmhlcmU8L2E+LjwvcD5cbiAgICAgICAgICAgICAgICAke1Byb2plY3RUYWdzKHRhZ3MpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgcHJvamVjdC1pbWdcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZX1cIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbn1cblxuY29uc3QgaXNTaW5ndWxhciA9IHN0ciA9PiBzdHIuc3BsaXQoJywgJykubGVuZ3RoIDw9IDE7XG5cbmZ1bmN0aW9uIFByb2plY3RUYWdzKHRhZ3MpIHtcbiAgICByZXR1cm4gdGFncy5tYXAodGFnID0+IFxuICAgICAgICBgPHNwYW4gY2xhc3M9XCJ0YWdcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICR7dGFnLmNvbG9yfVwiPiR7dGFnLnRleHR9PC9zcGFuPmBcbiAgICApLmpvaW4oJycpO1xuICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUHJvamVjdHNGaWx0ZXIocHJvamVjdHMpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcHJvamVjdHMtZmlsdGVyIGlucHV0W25hbWU9XCJmaWx0ZXJcIl0nKS5mb3JFYWNoKHJhZGlvQnV0dG9uID0+IHtcbiAgICAgICAgcmFkaW9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgbGV0IGZpbHRlclRhZyA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFByb2plY3RzID0gcHJvamVjdHMuc2xpY2UoKTtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJUYWcgIT0gYWxsUHJvamVjdHNUYWcudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkUHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsb3dlcmNhc2VUYWdzID0gcHJvamVjdC50YWdzLm1hcCh0YWcgPT4gdGFnLnRleHQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb3dlcmNhc2VUYWdzLmluY2x1ZGVzKGZpbHRlclRhZy50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzLWxpc3QnKS5pbm5lckhUTUwgPSBQcm9qZWN0c0xpc3QoZmlsdGVyZWRQcm9qZWN0cyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNraWxscyh7dGVjaG5pY2FsLCBub250ZWNobmljYWx9KSB7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGlkPVwic2tpbGxzLWxvY2F0aW9uXCI+PC9kaXY+XG4gICAgPHNlY3Rpb24gaWQ9XCJza2lsbHNcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwic2tpbGxzLWhlYWRlclwiPlRlY2huaWNhbCBTa2lsbHM8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICR7dGVjaG5pY2FsLm1hcChza2lsbCA9PiBTa2lsbChza2lsbCkpLmpvaW4oJycpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxIGNsYXNzPVwic2tpbGxzLWhlYWRlclwiPk5vbi1UZWNobmljYWwgU2tpbGxzPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNraWxscy1jb250YWluZXJcIj5cbiAgICAgICAgICAke25vbnRlY2huaWNhbC5tYXAoc2tpbGwgPT4gU2tpbGwoc2tpbGwpKS5qb2luKCcnKX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIGA7XG59XG5cbmZ1bmN0aW9uIFNraWxsKHt0aXRsZSwgbG9nbywgZGVzY3JpcHRpb259KSB7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwic2tpbGxcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJza2lsbC1sb2dvXCI+JHtsb2dvfTwvc3Bhbj5cbiAgICAgICAgPGg0IGNsYXNzPVwic2tpbGwtdGl0bGVcIj4ke3RpdGxlfTwvaDQ+XG4gICAgICAgIDxwIGNsYXNzPVwic2tpbGwtZGVzY3JpcHRpb25cIj4ke2Rlc2NyaXB0aW9ufTwvcD5cbiAgICA8L2Rpdj5cbiAgICBgO1xufSIsImltcG9ydCBNYWluUGFnZSBmcm9tICcuL2NvbXBvbmVudHMvTWFpblBhZ2UuanMnO1xuaW1wb3J0IFByb2plY3RQYWdlLCB7IGdldFByb2plY3QgfSBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdFBhZ2UuanMnO1xuaW1wb3J0IFByb2plY3ROYW1lRXJyb3IgZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3ROYW1lRXJyb3IuanMnO1xuXG5leHBvcnQgbGV0IGlzTWFpblBhZ2UgPSBmYWxzZTtcblxuZmV0Y2goJ2Fzc2V0cy9kYXRhLmpzb24nKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHF1ZXJ5UGFyYW1zLmdldCgncHJvamVjdCcpO1xuICAgICAgICBpZiAocHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIHByb2plY3ROYW1lSXNWYWxpZChwcm9qZWN0TmFtZSwgZGF0YS5wcm9qZWN0cylcbiAgICAgICAgICAgICAgICA/IFByb2plY3RQYWdlKHByb2plY3ROYW1lLCBkYXRhKVxuICAgICAgICAgICAgICAgIDogUHJvamVjdE5hbWVFcnJvcihwcm9qZWN0TmFtZSwgZGF0YS5wcm9qZWN0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc01haW5QYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgIE1haW5QYWdlKGRhdGEpO1xuICAgICAgICB9XG59KTtcblxuY29uc3QgcHJvamVjdE5hbWVJc1ZhbGlkID0gKHByb2plY3ROYW1lLCBwcm9qZWN0cykgPT4ge1xuICAgIHJldHVybiAhIWdldFByb2plY3QocHJvamVjdE5hbWUsIHByb2plY3RzKVxufSJdLCJzb3VyY2VSb290IjoiIn0=
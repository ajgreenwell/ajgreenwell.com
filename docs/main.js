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

function Footer(about) {
    return `
    <footer>
        <span class="copyright">Copyright © ${about.name}</span>
        <span class="row flex-justify-right">
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
        ${Object(_Footer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(data.about)}
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
        <div class="name flex-container col-6 vertical-center">
            <h1><a>${name}</a></h1>
        </div>
        <div class="nav-items flex-container col-6 perfect-center">
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
        ${Object(_Footer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data.about)}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5QYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXdzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2plY3ROYW1lRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2tpbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNo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QyxTQUFTO0FBQ1Q7QUFDQSxZQUFZLHVFQUFRO0FBQ3BCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGFBQWEsNkVBQVU7QUFDdkIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJBYm91dChhYm91dCkge1xuICAgIGNvbnN0IHsgXG4gICAgICAgIF8sIGltYWdlLCB0aXRsZSwgYWRkcmVzcywgZW1haWwsIHJlc3VtZSxcbiAgICAgICAgbGlua2VkaW4sIGdpdGh1YiwgZGVzY3JpcHRpb24sIGxhbmd1YWdlc1xuICAgIH0gPSBhYm91dDtcblxuICAgIHJldHVybiBgXG4gICAgPHNlY3Rpb24gaWQ9XCJhYm91dFwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMiBsZWZ0LXBhbmVcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZX1cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNyBhYm91dC1pbmZvXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPiR7dGl0bGV9PC9zdHJvbmc+PGJyPlxuICAgICAgICAgICAgICAgICR7YWRkcmVzc308YnI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzoke2VtYWlsfVwiPiR7ZW1haWx9PC9hPiB8XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7cmVzdW1lfVwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiZmFyIGZhLWZpbGUtYWx0XCI+PC9pPiBSZXN1bWU8L2E+IHxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtsaW5rZWRpbn1cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cImZhYiBmYS1saW5rZWRpblwiPjwvaT48L2E+IHxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtnaXRodWJ9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYWIgZmEtZ2l0aHViXCI+PC9pPjwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPiR7ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgYDtcbn0iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcihhYm91dCkge1xuICAgIHJldHVybiBgXG4gICAgPGZvb3Rlcj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3B5cmlnaHRcIj5Db3B5cmlnaHQgwqkgJHthYm91dC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJyb3cgZmxleC1qdXN0aWZ5LXJpZ2h0XCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiJHthYm91dC5saW5rZWRpbn1cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cImZhYiBmYS1saW5rZWRpbiBmYS0yeFwiPjwvaT48L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiJHthYm91dC5naXRodWJ9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYWIgZmEtZ2l0aHViIGZhLTJ4XCI+PC9pPjwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvZm9vdGVyPlxuICAgIGA7XG59IiwiaW1wb3J0IE5hdkJhciBmcm9tICcuL05hdkJhci5qcyc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9BYm91dC5qcyc7XG5pbXBvcnQgU2tpbGxzIGZyb20gJy4vU2tpbGxzLmpzJztcbmltcG9ydCBOZXdzLCB7IGhhbmRsZU5ld3NGaWx0ZXIsIGhhbmRsZVRvZ2dsZU5ld3NJdGVtcyB9IGZyb20gJy4vTmV3cy5qcyc7XG5pbXBvcnQgUHJvamVjdHMsIHsgaGFuZGxlUHJvamVjdHNGaWx0ZXIgfSBmcm9tICcuL1Byb2plY3RzLmpzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluUGFnZShkYXRhKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmlubmVySFRNTCA9IGBcbiAgICAgICAgJHtOYXZCYXIoJ21haW4nLCBkYXRhLmFib3V0Lm5hbWUsIE9iamVjdC5rZXlzKGRhdGEpKX1cbiAgICAgICAgJHtBYm91dChkYXRhLmFib3V0KX1cbiAgICAgICAgJHtTa2lsbHMoZGF0YS5za2lsbHMpfVxuICAgICAgICAke05ld3MoZGF0YS5uZXdzKX1cbiAgICAgICAgJHtQcm9qZWN0cyhkYXRhLnByb2plY3RzKX1cbiAgICAgICAgJHtGb290ZXIoZGF0YS5hYm91dCl9XG4gICAgYDtcbiAgICBoYW5kbGVUb2dnbGVOZXdzSXRlbXMoZGF0YS5uZXdzKTtcbiAgICBoYW5kbGVOZXdzRmlsdGVyKGRhdGEubmV3cyk7XG4gICAgaGFuZGxlUHJvamVjdHNGaWx0ZXIoZGF0YS5wcm9qZWN0cyk7XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkJhcihwcm9qZWN0TmFtZSwgbmFtZSwgbmF2VGl0bGVzKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8bmF2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lIGZsZXgtY29udGFpbmVyIGNvbC02IHZlcnRpY2FsLWNlbnRlclwiPlxuICAgICAgICAgICAgPGgxPjxhPiR7bmFtZX08L2E+PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtaXRlbXMgZmxleC1jb250YWluZXIgY29sLTYgcGVyZmVjdC1jZW50ZXJcIj5cbiAgICAgICAgICAgICR7TmF2TGlua3MocHJvamVjdE5hbWUsIG5hdlRpdGxlcyl9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICAgIGA7XG59XG5cbmZ1bmN0aW9uIE5hdkxpbmtzKHByb2plY3ROYW1lLCBuYXZUaXRsZXMpIHtcbiAgICBjb25zdCBbIGFib3V0LCBza2lsbHMsIG5ld3MsIHByb2plY3RzIF0gPSBuYXZUaXRsZXM7XG4gICAgaWYgKHByb2plY3ROYW1lID09PSAnbWFpbicpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtaXRlbSBhYm91dFwiIGhyZWY9XCIjXCI+JHthYm91dH08L2E+XG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWl0ZW0gc2tpbGxzXCIgaHJlZj1cIiNza2lsbHMtbG9jYXRpb25cIj4ke3NraWxsc308L2E+XG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWl0ZW0gbmV3c1wiIGhyZWY9XCIjbmV3cy1sb2NhdGlvblwiPiR7bmV3c308L2E+XG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWl0ZW0gcHJvamVjdHNcIiBocmVmPVwiI3Byb2plY3RzLWxvY2F0aW9uXCI+JHtwcm9qZWN0c308L2E+XG4gICAgICAgIGA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtaXRlbVwiIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1hcnJvdy1hbHQtY2lyY2xlLWxlZnRcIj48L2k+IGJhY2sgdG8gaG9tZVxuICAgICAgICA8L2E+ICAgICAgICAgICAgXG4gICAgICAgIGA7XG4gICAgfVxufSIsImNvbnN0IG51bU5ld3NJdGVtc1RvUmVuZGVyID0gNTtcbmxldCBzaG91bGRTaG93QWxsTmV3c0l0ZW1zID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3MobmV3cykge1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBpZD1cIm5ld3MtbG9jYXRpb25cIj48L2Rpdj5cbiAgICA8c2VjdGlvbiBpZD1cIm5ld3NcIj5cbiAgICAgICAgPGgxPk5ld3M8L2gxPlxuICAgICAgICA8ZGl2IGlkPVwibmV3cy1zZWFyY2gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJuZXdzLXNlYXJjaFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggTmV3cy4uLlwiPlxuICAgICAgICAgICAgPGkgaWQ9XCJuZXdzLXNlYXJjaC1pY29uXCIgY2xhc3M9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cIm5ld3MtbGlzdFwiPlxuICAgICAgICAgICAgJHtzaG91bGRTaG93QWxsTmV3c0l0ZW1zID9cbiAgICAgICAgICAgICAgICBOZXdzSXRlbXMobmV3cykgOlxuICAgICAgICAgICAgICAgIE5ld3NJdGVtcyhuZXdzLCBudW1OZXdzSXRlbXNUb1JlbmRlcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gaWQ9XCJuZXdzLWl0ZW0tdG9nZ2xlXCI+XG4gICAgICAgICAgICAke3Nob3VsZFNob3dBbGxOZXdzSXRlbXMgPyAnU2VlIExlc3MnIDogJ1NlZSBBbGwnfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L3NlY3Rpb24+XG4gICAgYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5ld3NJdGVtcyhuZXdzLCBudW1OZXdzSXRlbXMgPSBudWxsKSB7XG4gICAgbGV0IG4gPSBudW1OZXdzSXRlbXMgPyBudW1OZXdzSXRlbXMgOiBPYmplY3Qua2V5cyhuZXdzKS5sZW5ndGg7XG4gICAgcmV0dXJuIG5ld3Muc2xpY2UoMCwgbikubWFwKG5ld3NJdGVtID0+IE5ld3NJdGVtKG5ld3NJdGVtKSkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIE5ld3NJdGVtKG5ld3NJdGVtKSB7XG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiwgZGF0ZSB9ID0gbmV3c0l0ZW07XG5cbiAgICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3M9XCJyb3cgbmV3cy1pdGVtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTBcIj5cbiAgICAgICAgICAgICR7ZGVzY3JpcHRpb259XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSBcImNvbC0yIG5ld3MtZGF0ZSB0ZXh0LWFsaWduXCI+XG4gICAgICAgICAgICA8ZW0+JHtkYXRlfTwvZW0+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck5ld3NJdGVtcyhuZXdzLCBzaG93QWxsKSB7XG4gICAgY29uc3QgbmV3c0l0ZW1zID0gc2hvd0FsbCA/XG4gICAgICAgICAgICBOZXdzSXRlbXMobmV3cywgbnVtTmV3c0l0ZW1zVG9SZW5kZXIpIDpcbiAgICAgICAgICAgIE5ld3NJdGVtcyhuZXdzKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3cy1saXN0JykuaW5uZXJIVE1MID0gbmV3c0l0ZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVG9nZ2xlTmV3c0l0ZW1zKG5ld3MpIHtcbiAgICBjb25zdCBuZXdzSXRlbVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdzLWl0ZW0tdG9nZ2xlJyk7XG4gICAgbmV3c0l0ZW1Ub2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIHJlbmRlck5ld3NJdGVtcyhuZXdzLCBzaG91bGRTaG93QWxsTmV3c0l0ZW1zKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9IHNob3VsZFNob3dBbGxOZXdzSXRlbXMgPyAnU2VlIEFsbCcgOiAnU2VlIExlc3MnO1xuICAgICAgICBzaG91bGRTaG93QWxsTmV3c0l0ZW1zID0gIXNob3VsZFNob3dBbGxOZXdzSXRlbXM7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVOZXdzRmlsdGVyKG5ld3MpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3cy1zZWFyY2gnKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IHNlYXJjaFRleHQgPSBldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IGZpbHRlcmVkTmV3cyA9IG5ld3MuZmlsdGVyKG5ld3NJdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXdzSXRlbS5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgbmV3c0l0ZW0uZGF0ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRleHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVuZGVyTmV3c0l0ZW1zKGZpbHRlcmVkTmV3cywgIXNob3VsZFNob3dBbGxOZXdzSXRlbXMpO1xuICAgICAgICBjb25zdCBuZXdzSXRlbVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdzLWl0ZW0tdG9nZ2xlJyk7XG4gICAgICAgIG5ld3NJdGVtVG9nZ2xlLnN0eWxlLmRpc3BsYXkgPSBzZWFyY2hUZXh0ID8gJ25vbmUnIDogJ2lubGluZS1ibG9jayc7XG4gICAgfSk7XG59IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0TmFtZUVycm9yKHByb2plY3ROYW1lLCBkYXRhKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGgxPjQwMCBCYWQgUmVxdWVzdDwvaDE+XG4gICAgICAgIDxwPlRoZSB2YWx1ZSBwcm92aWRlZCBmb3IgdGhlICdwcm9qZWN0JyBxdWVyeSBwYXJhbWV0ZXIgaXMgaW52YWxpZC48L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPHN0cm9uZz5WYWx1ZSBQcm92aWRlZDo8L3N0cm9uZz4gJHtwcm9qZWN0TmFtZX08YnI+XG4gICAgICAgICAgICA8c3Ryb25nPlZhbGlkIFZhbHVlczo8L3N0cm9uZz4gJHtPYmplY3Qua2V5cyhkYXRhLnByb2plY3RzKS5qb2luKCcsICcpfVxuICAgICAgICA8L3A+XG4gICAgYDtcbn0iLCJpbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2QmFyLmpzJztcbmltcG9ydCB7IFByb2plY3REZXRhaWxzIH0gZnJvbSAnLi9Qcm9qZWN0cy5qcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFBhZ2UocHJvamVjdE5hbWUsIGRhdGEpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuaW5uZXJIVE1MID0gYFxuICAgICAgICAke05hdkJhcihwcm9qZWN0TmFtZSwgZGF0YS5hYm91dC5uYW1lLCBPYmplY3Qua2V5cyhkYXRhKSl9XG4gICAgICAgIDxzZWN0aW9uIGlkPVwicHJvamVjdC1wYWdlXCI+XG4gICAgICAgICAgICAke1Byb2plY3REZXRhaWxzKGdldFByb2plY3QocHJvamVjdE5hbWUsIGRhdGEucHJvamVjdHMpKX1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAke0Zvb3RlcihkYXRhLmFib3V0KX1cbiAgICBgO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UHJvamVjdCA9IChwcm9qZWN0TmFtZSwgcHJvamVjdHMpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT0gcHJvamVjdE5hbWUpO1xufSIsImltcG9ydCB7IGlzTWFpblBhZ2UgfSBmcm9tICcuLi9pbmRleC5qcyc7XG5cbmNvbnN0IGFsbFByb2plY3RzVGFnID0gJ0FsbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGlkPVwicHJvamVjdHMtbG9jYXRpb25cIj48L2Rpdj5cbiAgICA8c2VjdGlvbiBpZD1cInByb2plY3RzXCI+XG4gICAgICAgIDxoMT5Qcm9qZWN0czwvaDE+XG4gICAgICAgIDxzcGFuIGlkPVwicHJvamVjdHMtZmlsdGVyXCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICR7UHJvamVjdHNGaWx0ZXIocHJvamVjdHMpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXYgaWQ9XCJwcm9qZWN0cy1saXN0XCI+XG4gICAgICAgICAgICAke1Byb2plY3RzTGlzdChwcm9qZWN0cyl9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICBgO1xufVxuXG5mdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVzKGFycmF5KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnJheSkpO1xufVxuXG5mdW5jdGlvbiBQcm9qZWN0c0ZpbHRlcihwcm9qZWN0cykge1xuICAgIGxldCBwcm9qZWN0VGFncyA9IHByb2plY3RzLnJlZHVjZSgoYWNjLCBwcm9qZWN0KSA9PiBhY2MuY29uY2F0KHByb2plY3QudGFncyksIFtdKTtcbiAgICBwcm9qZWN0VGFncyA9IHJlbW92ZUR1cGxpY2F0ZXMocHJvamVjdFRhZ3MubWFwKHRhZyA9PiB0YWcudGV4dCkpO1xuICAgIHByb2plY3RUYWdzLnVuc2hpZnQoYWxsUHJvamVjdHNUYWcpO1xuICAgIHByb2plY3RUYWdzLnNvcnQoKTtcbiAgICByZXR1cm4gcHJvamVjdFRhZ3MubWFwKHRhZyA9PiB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZmlsdGVyXCIgdmFsdWU9XCIke3RhZy50b0xvd2VyQ2FzZSgpfVwiPlxuICAgICAgICAgICAgPGE+JHt0YWd9PC9hPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICBgO1xuICAgIH0pLmpvaW4oJycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUHJvamVjdHNMaXN0KHByb2plY3RzKSB7XG4gICAgcmV0dXJuIHByb2plY3RzLm1hcChwcm9qZWN0ID0+IFByb2plY3REZXRhaWxzKHByb2plY3QpKS5qb2luKCcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFByb2plY3REZXRhaWxzKHByb2plY3QpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIGlkLCB0aXRsZSwgZGF0ZSwgbGFuZ3VhZ2VzLCBkZXNjcmlwdGlvbixcbiAgICAgICAgZGV0YWlsZWREZXNjcmlwdGlvbiwgdGFncywgZ2l0aHViLCBpbWFnZVxuICAgIH0gPSBwcm9qZWN0O1xuXG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2ICR7aXNNYWluUGFnZSA/ICAnY2xhc3M9XCJwcm9qZWN0IHJvd1wiJyA6ICdpZD1cInByb2plY3QtZGV0YWlsc1wiIGNsYXNzPVwicm93XCInfT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02IHByb2plY3QtaW5mb1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAke2lzTWFpblBhZ2UgPyBgPGEgaHJlZj1cIi8/cHJvamVjdD0ke2lkfVwiPjxzdHJvbmc+JHt0aXRsZX08L3N0cm9uZz48L2E+YCA6IGA8aDE+JHt0aXRsZX08L2gxPmB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RGF0ZTo8L3N0cm9uZz4gJHtkYXRlfTxicj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz4ke2lzU2luZ3VsYXIobGFuZ3VhZ2VzKSA/ICdMYW5ndWFnZScgOiAnTGFuZ3VhZ2VzJ306PC9zdHJvbmc+ICR7bGFuZ3VhZ2VzfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD4ke2lzTWFpblBhZ2UgPyBkZXNjcmlwdGlvbiA6IGRldGFpbGVkRGVzY3JpcHRpb259PC9wPiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHA+Q2hlY2tvdXQgdGhlIGNvZGUgb24gR2l0SHViIDxhIGhyZWY9XCIke2dpdGh1Yn1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5oZXJlPC9hPi48L3A+XG4gICAgICAgICAgICAgICAgJHtQcm9qZWN0VGFncyh0YWdzKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02IHByb2plY3QtaW1nXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2V9XCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG59XG5cbmNvbnN0IGlzU2luZ3VsYXIgPSBzdHIgPT4gc3RyLnNwbGl0KCcsICcpLmxlbmd0aCA8PSAxO1xuXG5mdW5jdGlvbiBQcm9qZWN0VGFncyh0YWdzKSB7XG4gICAgcmV0dXJuIHRhZ3MubWFwKHRhZyA9PiBcbiAgICAgICAgYDxzcGFuIGNsYXNzPVwidGFnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAke3RhZy5jb2xvcn1cIj4ke3RhZy50ZXh0fTwvc3Bhbj5gXG4gICAgKS5qb2luKCcnKTtcbiAgICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVByb2plY3RzRmlsdGVyKHByb2plY3RzKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Byb2plY3RzLWZpbHRlciBpbnB1dFtuYW1lPVwiZmlsdGVyXCJdJykuZm9yRWFjaChyYWRpb0J1dHRvbiA9PiB7XG4gICAgICAgIHJhZGlvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJUYWcgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRQcm9qZWN0cyA9IHByb2plY3RzLnNsaWNlKCk7XG4gICAgICAgICAgICBpZiAoZmlsdGVyVGFnICE9IGFsbFByb2plY3RzVGFnLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZFByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbG93ZXJjYXNlVGFncyA9IHByb2plY3QudGFncy5tYXAodGFnID0+IHRhZy50ZXh0LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG93ZXJjYXNlVGFncy5pbmNsdWRlcyhmaWx0ZXJUYWcudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cy1saXN0JykuaW5uZXJIVE1MID0gUHJvamVjdHNMaXN0KGZpbHRlcmVkUHJvamVjdHMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2lsbHMoe3RlY2huaWNhbCwgbm9udGVjaG5pY2FsfSkge1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBpZD1cInNraWxscy1sb2NhdGlvblwiPjwvZGl2PlxuICAgIDxzZWN0aW9uIGlkPVwic2tpbGxzXCI+XG4gICAgICAgIDxoMSBjbGFzcz1cInNraWxscy1oZWFkZXJcIj5UZWNobmljYWwgU2tpbGxzPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNraWxscy1jb250YWluZXJcIj5cbiAgICAgICAgICAke3RlY2huaWNhbC5tYXAoc2tpbGwgPT4gU2tpbGwoc2tpbGwpKS5qb2luKCcnKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMSBjbGFzcz1cInNraWxscy1oZWFkZXJcIj5Ob24tVGVjaG5pY2FsIFNraWxsczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgJHtub250ZWNobmljYWwubWFwKHNraWxsID0+IFNraWxsKHNraWxsKSkuam9pbignJyl9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICBgO1xufVxuXG5mdW5jdGlvbiBTa2lsbCh7dGl0bGUsIGxvZ28sIGRlc2NyaXB0aW9ufSkge1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBjbGFzcz1cInNraWxsXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2tpbGwtbG9nb1wiPiR7bG9nb308L3NwYW4+XG4gICAgICAgIDxoNCBjbGFzcz1cInNraWxsLXRpdGxlXCI+JHt0aXRsZX08L2g0PlxuICAgICAgICA8cCBjbGFzcz1cInNraWxsLWRlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L3A+XG4gICAgPC9kaXY+XG4gICAgYDtcbn0iLCJpbXBvcnQgTWFpblBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL01haW5QYWdlLmpzJztcbmltcG9ydCBQcm9qZWN0UGFnZSwgeyBnZXRQcm9qZWN0IH0gZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3RQYWdlLmpzJztcbmltcG9ydCBQcm9qZWN0TmFtZUVycm9yIGZyb20gJy4vY29tcG9uZW50cy9Qcm9qZWN0TmFtZUVycm9yLmpzJztcblxuZXhwb3J0IGxldCBpc01haW5QYWdlID0gZmFsc2U7XG5cbmZldGNoKCdhc3NldHMvZGF0YS5qc29uJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBxdWVyeVBhcmFtcy5nZXQoJ3Byb2plY3QnKTtcbiAgICAgICAgaWYgKHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZUlzVmFsaWQocHJvamVjdE5hbWUsIGRhdGEucHJvamVjdHMpXG4gICAgICAgICAgICAgICAgPyBQcm9qZWN0UGFnZShwcm9qZWN0TmFtZSwgZGF0YSlcbiAgICAgICAgICAgICAgICA6IFByb2plY3ROYW1lRXJyb3IocHJvamVjdE5hbWUsIGRhdGEucHJvamVjdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNNYWluUGFnZSA9IHRydWU7XG4gICAgICAgICAgICBNYWluUGFnZShkYXRhKTtcbiAgICAgICAgfVxufSk7XG5cbmNvbnN0IHByb2plY3ROYW1lSXNWYWxpZCA9IChwcm9qZWN0TmFtZSwgcHJvamVjdHMpID0+IHtcbiAgICByZXR1cm4gISFnZXRQcm9qZWN0KHByb2plY3ROYW1lLCBwcm9qZWN0cylcbn0iXSwic291cmNlUm9vdCI6IiJ9
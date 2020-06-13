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
        <div class="col-10 about-info">
            <p id="about-title">
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
        ${Object(_Projects_js__WEBPACK_IMPORTED_MODULE_4__["default"])(data.projects)}
        ${Object(_News_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data.news)}
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
    const [ about, skills, projects, news ] = navTitles;
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
    <div class="news-item">
        <i class="fas fa-angle-right news-icon"></i>
        <div class="row news-text">
            <div class="col-10">
                ${description}
            </div>
            <div class= "col-2 news-date text-align">
                <em>${date}</em>
            </div>
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
        if (shouldShowAllNewsItems)
            window.location.href = "/#news-location";
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
            ${_index_js__WEBPACK_IMPORTED_MODULE_0__["isMainPage"] ?
                `<h3>
                    <a href="/?project=${id}">
                        <strong>${title}</strong>
                    </a>
                </h3>` :
                `<h1>${title}</h1>`
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5QYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXdzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2plY3ROYW1lRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2tpbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNo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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMEVBQVc7QUFDN0Isa0JBQWtCLCtFQUFnQjtBQUNsQyxTQUFTO0FBQ1Q7QUFDQSxZQUFZLHVFQUFRO0FBQ3BCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGFBQWEsNkVBQVU7QUFDdkIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJBYm91dChhYm91dCkge1xuICAgIGNvbnN0IHsgXG4gICAgICAgIF8sIGltYWdlLCB0aXRsZSwgYWRkcmVzcywgZW1haWwsIHJlc3VtZSxcbiAgICAgICAgbGlua2VkaW4sIGdpdGh1YiwgZGVzY3JpcHRpb24sIGxhbmd1YWdlc1xuICAgIH0gPSBhYm91dDtcblxuICAgIHJldHVybiBgXG4gICAgPHNlY3Rpb24gaWQ9XCJhYm91dFwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMiBsZWZ0LXBhbmVcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZX1cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTAgYWJvdXQtaW5mb1wiPlxuICAgICAgICAgICAgPHAgaWQ9XCJhYm91dC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+JHt0aXRsZX08L3N0cm9uZz48YnI+XG4gICAgICAgICAgICAgICAgJHthZGRyZXNzfTxicj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOiR7ZW1haWx9XCI+JHtlbWFpbH08L2E+IHxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtyZXN1bWV9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYXIgZmEtZmlsZS1hbHRcIj48L2k+IFJlc3VtZTwvYT4gfFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke2xpbmtlZGlufVwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiZmFiIGZhLWxpbmtlZGluXCI+PC9pPjwvYT4gfFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke2dpdGh1Yn1cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cImZhYiBmYS1naXRodWJcIj48L2k+PC9hPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+JHtkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICBgO1xufSIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKGFib3V0LCBpc01haW5QYWdlKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8Zm9vdGVyICR7IWlzTWFpblBhZ2UgJiYgJ2NsYXNzPVwiYm9yZGVyZWQtZm9vdGVyXCInfT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3B5cmlnaHRcIj5Db3B5cmlnaHQgwqkgJHthYm91dC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmb290ZXItaWNvbnNcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIke2Fib3V0LmxpbmtlZGlufVwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiZmFiIGZhLWxpbmtlZGluIGZhLTJ4XCI+PC9pPjwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIke2Fib3V0LmdpdGh1Yn1cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cImZhYiBmYS1naXRodWIgZmEtMnhcIj48L2k+PC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9mb290ZXI+XG4gICAgYDtcbn0iLCJpbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2QmFyLmpzJztcbmltcG9ydCBBYm91dCBmcm9tICcuL0Fib3V0LmpzJztcbmltcG9ydCBTa2lsbHMgZnJvbSAnLi9Ta2lsbHMuanMnO1xuaW1wb3J0IE5ld3MsIHsgaGFuZGxlTmV3c0ZpbHRlciwgaGFuZGxlVG9nZ2xlTmV3c0l0ZW1zIH0gZnJvbSAnLi9OZXdzLmpzJztcbmltcG9ydCBQcm9qZWN0cywgeyBoYW5kbGVQcm9qZWN0c0ZpbHRlciB9IGZyb20gJy4vUHJvamVjdHMuanMnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5QYWdlKGRhdGEpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuaW5uZXJIVE1MID0gYFxuICAgICAgICAke05hdkJhcignbWFpbicsIGRhdGEuYWJvdXQubmFtZSwgT2JqZWN0LmtleXMoZGF0YSkpfVxuICAgICAgICAke0Fib3V0KGRhdGEuYWJvdXQpfVxuICAgICAgICAke1NraWxscyhkYXRhLnNraWxscyl9XG4gICAgICAgICR7UHJvamVjdHMoZGF0YS5wcm9qZWN0cyl9XG4gICAgICAgICR7TmV3cyhkYXRhLm5ld3MpfVxuICAgICAgICAke0Zvb3RlcihkYXRhLmFib3V0LCB0cnVlKX1cbiAgICBgO1xuICAgIGhhbmRsZVRvZ2dsZU5ld3NJdGVtcyhkYXRhLm5ld3MpO1xuICAgIGhhbmRsZU5ld3NGaWx0ZXIoZGF0YS5uZXdzKTtcbiAgICBoYW5kbGVQcm9qZWN0c0ZpbHRlcihkYXRhLnByb2plY3RzKTtcbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFyKHByb2plY3ROYW1lLCBuYW1lLCBuYXZUaXRsZXMpIHtcbiAgICByZXR1cm4gYFxuICAgIDxuYXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWUgZmxleC1jb250YWluZXIgY29sLTcgdmVydGljYWwtY2VudGVyXCI+XG4gICAgICAgICAgICA8aDE+PGE+JHtuYW1lfTwvYT48L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1pdGVtcyBmbGV4LWNvbnRhaW5lciBjb2wtNSBwZXJmZWN0LWNlbnRlclwiPlxuICAgICAgICAgICAgJHtOYXZMaW5rcyhwcm9qZWN0TmFtZSwgbmF2VGl0bGVzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICAgYDtcbn1cblxuZnVuY3Rpb24gTmF2TGlua3MocHJvamVjdE5hbWUsIG5hdlRpdGxlcykge1xuICAgIGNvbnN0IFsgYWJvdXQsIHNraWxscywgcHJvamVjdHMsIG5ld3MgXSA9IG5hdlRpdGxlcztcbiAgICBpZiAocHJvamVjdE5hbWUgPT09ICdtYWluJykge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1pdGVtIGFib3V0XCIgaHJlZj1cIiNcIj4ke2Fib3V0fTwvYT5cbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtaXRlbSBza2lsbHNcIiBocmVmPVwiI3NraWxscy1sb2NhdGlvblwiPiR7c2tpbGxzfTwvYT5cbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtaXRlbSBwcm9qZWN0c1wiIGhyZWY9XCIjcHJvamVjdHMtbG9jYXRpb25cIj4ke3Byb2plY3RzfTwvYT5cbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtaXRlbSBuZXdzXCIgaHJlZj1cIiNuZXdzLWxvY2F0aW9uXCI+JHtuZXdzfTwvYT5cbiAgICAgICAgYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1pdGVtIGJhY2stdG8taG9tZVwiIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1hcnJvdy1hbHQtY2lyY2xlLWxlZnRcIj48L2k+IGJhY2sgdG8gaG9tZVxuICAgICAgICA8L2E+ICAgICAgICAgICAgXG4gICAgICAgIGA7XG4gICAgfVxufSIsImNvbnN0IG51bU5ld3NJdGVtc1RvUmVuZGVyID0gNTtcbmxldCBzaG91bGRTaG93QWxsTmV3c0l0ZW1zID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3MobmV3cykge1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBpZD1cIm5ld3MtbG9jYXRpb25cIj48L2Rpdj5cbiAgICA8c2VjdGlvbiBpZD1cIm5ld3NcIj5cbiAgICAgICAgPGgxPk5ld3M8L2gxPlxuICAgICAgICA8ZGl2IGlkPVwibmV3cy1zZWFyY2gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJuZXdzLXNlYXJjaFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggTmV3cy4uLlwiPlxuICAgICAgICAgICAgPGkgaWQ9XCJuZXdzLXNlYXJjaC1pY29uXCIgY2xhc3M9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cIm5ld3MtbGlzdFwiPlxuICAgICAgICAgICAgJHtzaG91bGRTaG93QWxsTmV3c0l0ZW1zID9cbiAgICAgICAgICAgICAgICBOZXdzSXRlbXMobmV3cykgOlxuICAgICAgICAgICAgICAgIE5ld3NJdGVtcyhuZXdzLCBudW1OZXdzSXRlbXNUb1JlbmRlcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gaWQ9XCJuZXdzLWl0ZW0tdG9nZ2xlXCI+XG4gICAgICAgICAgICAke3Nob3VsZFNob3dBbGxOZXdzSXRlbXMgPyAnU2VlIExlc3MnIDogJ1NlZSBBbGwnfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L3NlY3Rpb24+XG4gICAgYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5ld3NJdGVtcyhuZXdzLCBudW1OZXdzSXRlbXMgPSBudWxsKSB7XG4gICAgbGV0IG4gPSBudW1OZXdzSXRlbXMgPyBudW1OZXdzSXRlbXMgOiBPYmplY3Qua2V5cyhuZXdzKS5sZW5ndGg7XG4gICAgcmV0dXJuIG5ld3Muc2xpY2UoMCwgbikubWFwKG5ld3NJdGVtID0+IE5ld3NJdGVtKG5ld3NJdGVtKSkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIE5ld3NJdGVtKG5ld3NJdGVtKSB7XG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiwgZGF0ZSB9ID0gbmV3c0l0ZW07XG5cbiAgICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3M9XCJuZXdzLWl0ZW1cIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtcmlnaHQgbmV3cy1pY29uXCI+PC9pPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG5ld3MtdGV4dFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMFwiPlxuICAgICAgICAgICAgICAgICR7ZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9IFwiY29sLTIgbmV3cy1kYXRlIHRleHQtYWxpZ25cIj5cbiAgICAgICAgICAgICAgICA8ZW0+JHtkYXRlfTwvZW0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTmV3c0l0ZW1zKG5ld3MsIHNob3dBbGwpIHtcbiAgICBjb25zdCBuZXdzSXRlbXMgPSBzaG93QWxsID9cbiAgICAgICAgICAgIE5ld3NJdGVtcyhuZXdzLCBudW1OZXdzSXRlbXNUb1JlbmRlcikgOlxuICAgICAgICAgICAgTmV3c0l0ZW1zKG5ld3MpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdzLWxpc3QnKS5pbm5lckhUTUwgPSBuZXdzSXRlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVUb2dnbGVOZXdzSXRlbXMobmV3cykge1xuICAgIGNvbnN0IG5ld3NJdGVtVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3MtaXRlbS10b2dnbGUnKTtcbiAgICBuZXdzSXRlbVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgcmVuZGVyTmV3c0l0ZW1zKG5ld3MsIHNob3VsZFNob3dBbGxOZXdzSXRlbXMpO1xuICAgICAgICBldmVudC50YXJnZXQuaW5uZXJIVE1MID0gc2hvdWxkU2hvd0FsbE5ld3NJdGVtcyA/ICdTZWUgQWxsJyA6ICdTZWUgTGVzcyc7XG4gICAgICAgIGlmIChzaG91bGRTaG93QWxsTmV3c0l0ZW1zKVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi8jbmV3cy1sb2NhdGlvblwiO1xuICAgICAgICBzaG91bGRTaG93QWxsTmV3c0l0ZW1zID0gIXNob3VsZFNob3dBbGxOZXdzSXRlbXM7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVOZXdzRmlsdGVyKG5ld3MpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3cy1zZWFyY2gnKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IHNlYXJjaFRleHQgPSBldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IGZpbHRlcmVkTmV3cyA9IG5ld3MuZmlsdGVyKG5ld3NJdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXdzSXRlbS5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgbmV3c0l0ZW0uZGF0ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRleHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVuZGVyTmV3c0l0ZW1zKGZpbHRlcmVkTmV3cywgIXNob3VsZFNob3dBbGxOZXdzSXRlbXMpO1xuICAgICAgICBjb25zdCBuZXdzSXRlbVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdzLWl0ZW0tdG9nZ2xlJyk7XG4gICAgICAgIG5ld3NJdGVtVG9nZ2xlLnN0eWxlLmRpc3BsYXkgPSBzZWFyY2hUZXh0ID8gJ25vbmUnIDogJ2lubGluZS1ibG9jayc7XG4gICAgfSk7XG59IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0TmFtZUVycm9yKHByb2plY3ROYW1lLCBkYXRhKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGgxPjQwMCBCYWQgUmVxdWVzdDwvaDE+XG4gICAgICAgIDxwPlRoZSB2YWx1ZSBwcm92aWRlZCBmb3IgdGhlICdwcm9qZWN0JyBxdWVyeSBwYXJhbWV0ZXIgaXMgaW52YWxpZC48L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPHN0cm9uZz5WYWx1ZSBQcm92aWRlZDo8L3N0cm9uZz4gJHtwcm9qZWN0TmFtZX08YnI+XG4gICAgICAgICAgICA8c3Ryb25nPlZhbGlkIFZhbHVlczo8L3N0cm9uZz4gJHtPYmplY3Qua2V5cyhkYXRhLnByb2plY3RzKS5qb2luKCcsICcpfVxuICAgICAgICA8L3A+XG4gICAgYDtcbn0iLCJpbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2QmFyLmpzJztcbmltcG9ydCB7IFByb2plY3REZXRhaWxzIH0gZnJvbSAnLi9Qcm9qZWN0cy5qcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFBhZ2UocHJvamVjdE5hbWUsIGRhdGEpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuaW5uZXJIVE1MID0gYFxuICAgICAgICAke05hdkJhcihwcm9qZWN0TmFtZSwgZGF0YS5hYm91dC5uYW1lLCBPYmplY3Qua2V5cyhkYXRhKSl9XG4gICAgICAgIDxzZWN0aW9uIGlkPVwicHJvamVjdC1wYWdlXCI+XG4gICAgICAgICAgICAke1Byb2plY3REZXRhaWxzKGdldFByb2plY3QocHJvamVjdE5hbWUsIGRhdGEucHJvamVjdHMpKX1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAke0Zvb3RlcihkYXRhLmFib3V0LCBmYWxzZSl9XG4gICAgYDtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFByb2plY3QgPSAocHJvamVjdE5hbWUsIHByb2plY3RzKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IHByb2plY3ROYW1lKTtcbn0iLCJpbXBvcnQgeyBpc01haW5QYWdlIH0gZnJvbSAnLi4vaW5kZXguanMnO1xuXG5jb25zdCBhbGxQcm9qZWN0c1RhZyA9ICdBbGwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBpZD1cInByb2plY3RzLWxvY2F0aW9uXCI+PC9kaXY+XG4gICAgPHNlY3Rpb24gaWQ9XCJwcm9qZWN0c1wiPlxuICAgICAgICA8aDE+UHJvamVjdHM8L2gxPlxuICAgICAgICA8c3BhbiBpZD1cInByb2plY3RzLWZpbHRlclwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAke1Byb2plY3RzRmlsdGVyKHByb2plY3RzKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2IGlkPVwicHJvamVjdHMtbGlzdFwiPlxuICAgICAgICAgICAgJHtQcm9qZWN0c0xpc3QocHJvamVjdHMpfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgYDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRHVwbGljYXRlcyhhcnJheSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyYXkpKTtcbn1cblxuZnVuY3Rpb24gUHJvamVjdHNGaWx0ZXIocHJvamVjdHMpIHtcbiAgICBsZXQgcHJvamVjdFRhZ3MgPSBwcm9qZWN0cy5yZWR1Y2UoKGFjYywgcHJvamVjdCkgPT4gYWNjLmNvbmNhdChwcm9qZWN0LnRhZ3MpLCBbXSk7XG4gICAgcHJvamVjdFRhZ3MgPSByZW1vdmVEdXBsaWNhdGVzKHByb2plY3RUYWdzLm1hcCh0YWcgPT4gdGFnLnRleHQpKTtcbiAgICBwcm9qZWN0VGFncy51bnNoaWZ0KGFsbFByb2plY3RzVGFnKTtcbiAgICBwcm9qZWN0VGFncy5zb3J0KCk7XG4gICAgcmV0dXJuIHByb2plY3RUYWdzLm1hcCh0YWcgPT4ge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImZpbHRlclwiIHZhbHVlPVwiJHt0YWcudG9Mb3dlckNhc2UoKX1cIj5cbiAgICAgICAgICAgIDxhPiR7dGFnfTwvYT5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgYDtcbiAgICB9KS5qb2luKCcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFByb2plY3RzTGlzdChwcm9qZWN0cykge1xuICAgIHJldHVybiBwcm9qZWN0cy5tYXAocHJvamVjdCA9PiBQcm9qZWN0RGV0YWlscyhwcm9qZWN0KSkuam9pbignJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0RGV0YWlscyhwcm9qZWN0KSB7XG4gICAgY29uc3Qge1xuICAgICAgICBpZCwgdGl0bGUsIGRhdGUsIGxhbmd1YWdlcywgZGVzY3JpcHRpb24sXG4gICAgICAgIGRldGFpbGVkRGVzY3JpcHRpb24sIHRhZ3MsIGdpdGh1YiwgaW1hZ2VcbiAgICB9ID0gcHJvamVjdDtcblxuICAgIHJldHVybiBgXG4gICAgPGRpdiAke2lzTWFpblBhZ2UgPyAgJ2NsYXNzPVwicHJvamVjdCByb3dcIicgOiAnaWQ9XCJwcm9qZWN0LWRldGFpbHNcIiBjbGFzcz1cInJvd1wiJ30+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBwcm9qZWN0LWluZm9cIj5cbiAgICAgICAgICAgICR7aXNNYWluUGFnZSA/XG4gICAgICAgICAgICAgICAgYDxoMz5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8/cHJvamVjdD0ke2lkfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz4ke3RpdGxlfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9oMz5gIDpcbiAgICAgICAgICAgICAgICBgPGgxPiR7dGl0bGV9PC9oMT5gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkRhdGU6PC9zdHJvbmc+ICR7ZGF0ZX08YnI+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+JHtpc1Npbmd1bGFyKGxhbmd1YWdlcykgPyAnTGFuZ3VhZ2UnIDogJ0xhbmd1YWdlcyd9Ojwvc3Ryb25nPiAke2xhbmd1YWdlc31cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+JHtpc01haW5QYWdlID8gZGVzY3JpcHRpb24gOiBkZXRhaWxlZERlc2NyaXB0aW9ufTwvcD4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxwPkNoZWNrb3V0IHRoZSBjb2RlIG9uIEdpdEh1YiA8YSBocmVmPVwiJHtnaXRodWJ9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+aGVyZTwvYT4uPC9wPlxuICAgICAgICAgICAgICAgICR7UHJvamVjdFRhZ3ModGFncyl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBwcm9qZWN0LWltZ1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlfVwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xufVxuXG5jb25zdCBpc1Npbmd1bGFyID0gc3RyID0+IHN0ci5zcGxpdCgnLCAnKS5sZW5ndGggPD0gMTtcblxuZnVuY3Rpb24gUHJvamVjdFRhZ3ModGFncykge1xuICAgIHJldHVybiB0YWdzLm1hcCh0YWcgPT4gXG4gICAgICAgIGA8c3BhbiBjbGFzcz1cInRhZ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJHt0YWcuY29sb3J9XCI+JHt0YWcudGV4dH08L3NwYW4+YFxuICAgICkuam9pbignJyk7XG4gICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVQcm9qZWN0c0ZpbHRlcihwcm9qZWN0cykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwcm9qZWN0cy1maWx0ZXIgaW5wdXRbbmFtZT1cImZpbHRlclwiXScpLmZvckVhY2gocmFkaW9CdXR0b24gPT4ge1xuICAgICAgICByYWRpb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBsZXQgZmlsdGVyVGFnID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkUHJvamVjdHMgPSBwcm9qZWN0cy5zbGljZSgpO1xuICAgICAgICAgICAgaWYgKGZpbHRlclRhZyAhPSBhbGxQcm9qZWN0c1RhZy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRQcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvd2VyY2FzZVRhZ3MgPSBwcm9qZWN0LnRhZ3MubWFwKHRhZyA9PiB0YWcudGV4dC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvd2VyY2FzZVRhZ3MuaW5jbHVkZXMoZmlsdGVyVGFnLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMtbGlzdCcpLmlubmVySFRNTCA9IFByb2plY3RzTGlzdChmaWx0ZXJlZFByb2plY3RzKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2tpbGxzKHt0ZWNobmljYWwsIG5vbnRlY2huaWNhbH0pIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgaWQ9XCJza2lsbHMtbG9jYXRpb25cIj48L2Rpdj5cbiAgICA8c2VjdGlvbiBpZD1cInNraWxsc1wiPlxuICAgICAgICA8aDEgY2xhc3M9XCJza2lsbHMtaGVhZGVyXCI+VGVjaG5pY2FsIFNraWxsczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgJHt0ZWNobmljYWwubWFwKHNraWxsID0+IFNraWxsKHNraWxsKSkuam9pbignJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDEgY2xhc3M9XCJza2lsbHMtaGVhZGVyXCI+Tm9uLVRlY2huaWNhbCBTa2lsbHM8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICR7bm9udGVjaG5pY2FsLm1hcChza2lsbCA9PiBTa2lsbChza2lsbCkpLmpvaW4oJycpfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgYDtcbn1cblxuZnVuY3Rpb24gU2tpbGwoe3RpdGxlLCBsb2dvLCBkZXNjcmlwdGlvbn0pIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3M9XCJza2lsbFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNraWxsLWxvZ29cIj4ke2xvZ299PC9zcGFuPlxuICAgICAgICA8aDQgY2xhc3M9XCJza2lsbC10aXRsZVwiPiR7dGl0bGV9PC9oND5cbiAgICAgICAgPHAgY2xhc3M9XCJza2lsbC1kZXNjcmlwdGlvblwiPiR7ZGVzY3JpcHRpb259PC9wPlxuICAgIDwvZGl2PlxuICAgIGA7XG59IiwiaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vY29tcG9uZW50cy9NYWluUGFnZS5qcyc7XG5pbXBvcnQgUHJvamVjdFBhZ2UsIHsgZ2V0UHJvamVjdCB9IGZyb20gJy4vY29tcG9uZW50cy9Qcm9qZWN0UGFnZS5qcyc7XG5pbXBvcnQgUHJvamVjdE5hbWVFcnJvciBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdE5hbWVFcnJvci5qcyc7XG5cbmV4cG9ydCBsZXQgaXNNYWluUGFnZSA9IGZhbHNlO1xuXG5mZXRjaCgnYXNzZXRzL2RhdGEuanNvbicpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcXVlcnlQYXJhbXMuZ2V0KCdwcm9qZWN0Jyk7XG4gICAgICAgIGlmIChwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgcHJvamVjdE5hbWVJc1ZhbGlkKHByb2plY3ROYW1lLCBkYXRhLnByb2plY3RzKVxuICAgICAgICAgICAgICAgID8gUHJvamVjdFBhZ2UocHJvamVjdE5hbWUsIGRhdGEpXG4gICAgICAgICAgICAgICAgOiBQcm9qZWN0TmFtZUVycm9yKHByb2plY3ROYW1lLCBkYXRhLnByb2plY3RzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzTWFpblBhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgTWFpblBhZ2UoZGF0YSk7XG4gICAgICAgIH1cbn0pO1xuXG5jb25zdCBwcm9qZWN0TmFtZUlzVmFsaWQgPSAocHJvamVjdE5hbWUsIHByb2plY3RzKSA9PiB7XG4gICAgcmV0dXJuICEhZ2V0UHJvamVjdChwcm9qZWN0TmFtZSwgcHJvamVjdHMpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
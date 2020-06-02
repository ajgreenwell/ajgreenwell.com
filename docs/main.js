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
            <p>
                <strong>Proficient in:</strong> ${languages.proficient}<br>
                <strong>Familiar with:</strong> ${languages.familiar}
            </p>
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
/* harmony import */ var _News_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./News.js */ "./src/components/News.js");
/* harmony import */ var _Projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Projects.js */ "./src/components/Projects.js");
/* harmony import */ var _Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer.js */ "./src/components/Footer.js");






function MainPage(data) {
    document.querySelector('.container').innerHTML = `
        ${Object(_NavBar_js__WEBPACK_IMPORTED_MODULE_0__["default"])('main', data.about.name, Object.keys(data))}
        ${Object(_About_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data.about)}
        ${Object(_News_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data.news)}
        ${Object(_Projects_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data.projects)}
        ${Object(_Footer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(data.about)}
    `;
    Object(_News_js__WEBPACK_IMPORTED_MODULE_2__["handleToggleNewsItems"])(data.news);
    Object(_News_js__WEBPACK_IMPORTED_MODULE_2__["handleNewsFilter"])(data.news);
    Object(_Projects_js__WEBPACK_IMPORTED_MODULE_3__["handleProjectsFilter"])(data.projects);
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
        <a class="nav-item about" href="index.html">${about}</a>
        <a class="nav-item news" href="#news-location">${news}</a>
        <a class="nav-item projects" href="#projects-location">${projects}</a>
        `;
    } else {
        return `
        <a class="nav-item" href="index.html">
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
        <input id="news-search" type="text" placeholder="Search News...">
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
        let searchText = event.target.value;
        let filteredNews = news.filter(newsItem => {
            return newsItem.description.toLowerCase().includes(searchText.toLowerCase())
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
                ${_index_js__WEBPACK_IMPORTED_MODULE_0__["isMainPage"] ? `<a href="index.html?project=${id}"><strong>${title}</strong></a>` : `<h1>${title}</h1>`}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5QYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXdzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2plY3ROYW1lRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FB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QUFDTDs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsV0FBVyxvREFBVSwrREFBK0Q7QUFDcEY7QUFDQTtBQUNBLGtCQUFrQixvREFBVSxrQ0FBa0MsR0FBRyxZQUFZLE1BQU0sd0JBQXdCLE1BQU07QUFDakg7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLEtBQUs7QUFDbEQsOEJBQThCLGlEQUFpRCxhQUFhO0FBQzVGO0FBQ0EscUJBQXFCLG9EQUFVLHFDQUFxQztBQUNwRSwwREFBMEQsT0FBTztBQUNqRSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE1BQU07QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRCxVQUFVLElBQUksU0FBUztBQUM3RTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQzs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0Q7QUFDc0I7QUFDTjs7QUFFekQ7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMEVBQVc7QUFDN0Isa0JBQWtCLCtFQUFnQjtBQUNsQyxTQUFTO0FBQ1Q7QUFDQSxZQUFZLHVFQUFRO0FBQ3BCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGFBQWEsNkVBQVU7QUFDdkIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJBYm91dChhYm91dCkge1xuICAgIGNvbnN0IHsgXG4gICAgICAgIF8sIGltYWdlLCB0aXRsZSwgYWRkcmVzcywgZW1haWwsIHJlc3VtZSxcbiAgICAgICAgbGlua2VkaW4sIGdpdGh1YiwgZGVzY3JpcHRpb24sIGxhbmd1YWdlc1xuICAgIH0gPSBhYm91dDtcblxuICAgIHJldHVybiBgXG4gICAgPHNlY3Rpb24gaWQ9XCJhYm91dFwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMiBsZWZ0LXBhbmVcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZX1cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNyBhYm91dC1pbmZvXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPiR7dGl0bGV9PC9zdHJvbmc+PGJyPlxuICAgICAgICAgICAgICAgICR7YWRkcmVzc308YnI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzoke2VtYWlsfVwiPiR7ZW1haWx9PC9hPiB8XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7cmVzdW1lfVwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiZmFyIGZhLWZpbGUtYWx0XCI+PC9pPiBSZXN1bWU8L2E+IHxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtsaW5rZWRpbn1cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cImZhYiBmYS1saW5rZWRpblwiPjwvaT48L2E+IHxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtnaXRodWJ9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYWIgZmEtZ2l0aHViXCI+PC9pPjwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPiR7ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Qcm9maWNpZW50IGluOjwvc3Ryb25nPiAke2xhbmd1YWdlcy5wcm9maWNpZW50fTxicj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkZhbWlsaWFyIHdpdGg6PC9zdHJvbmc+ICR7bGFuZ3VhZ2VzLmZhbWlsaWFyfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgYDtcbn0iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcihhYm91dCkge1xuICAgIHJldHVybiBgXG4gICAgPGZvb3Rlcj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3B5cmlnaHRcIj5Db3B5cmlnaHQgwqkgJHthYm91dC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJyb3cgZmxleC1qdXN0aWZ5LXJpZ2h0XCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiJHthYm91dC5saW5rZWRpbn1cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cImZhYiBmYS1saW5rZWRpbiBmYS0yeFwiPjwvaT48L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiJHthYm91dC5naXRodWJ9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYWIgZmEtZ2l0aHViIGZhLTJ4XCI+PC9pPjwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvZm9vdGVyPlxuICAgIGA7XG59IiwiaW1wb3J0IE5hdkJhciBmcm9tICcuL05hdkJhci5qcyc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9BYm91dC5qcyc7XG5pbXBvcnQgTmV3cywgeyBoYW5kbGVOZXdzRmlsdGVyLCBoYW5kbGVUb2dnbGVOZXdzSXRlbXMgfSBmcm9tICcuL05ld3MuanMnO1xuaW1wb3J0IFByb2plY3RzLCB7IGhhbmRsZVByb2plY3RzRmlsdGVyIH0gZnJvbSAnLi9Qcm9qZWN0cy5qcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpblBhZ2UoZGF0YSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5pbm5lckhUTUwgPSBgXG4gICAgICAgICR7TmF2QmFyKCdtYWluJywgZGF0YS5hYm91dC5uYW1lLCBPYmplY3Qua2V5cyhkYXRhKSl9XG4gICAgICAgICR7QWJvdXQoZGF0YS5hYm91dCl9XG4gICAgICAgICR7TmV3cyhkYXRhLm5ld3MpfVxuICAgICAgICAke1Byb2plY3RzKGRhdGEucHJvamVjdHMpfVxuICAgICAgICAke0Zvb3RlcihkYXRhLmFib3V0KX1cbiAgICBgO1xuICAgIGhhbmRsZVRvZ2dsZU5ld3NJdGVtcyhkYXRhLm5ld3MpO1xuICAgIGhhbmRsZU5ld3NGaWx0ZXIoZGF0YS5uZXdzKTtcbiAgICBoYW5kbGVQcm9qZWN0c0ZpbHRlcihkYXRhLnByb2plY3RzKTtcbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFyKHByb2plY3ROYW1lLCBuYW1lLCBuYXZUaXRsZXMpIHtcbiAgICByZXR1cm4gYFxuICAgIDxuYXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWUgZmxleC1jb250YWluZXIgY29sLTYgdmVydGljYWwtY2VudGVyXCI+XG4gICAgICAgICAgICA8aDE+PGEgaHJlZj1cImluZGV4Lmh0bWxcIj4ke25hbWV9PC9hPjwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWl0ZW1zIGZsZXgtY29udGFpbmVyIGNvbC02IHBlcmZlY3QtY2VudGVyXCI+XG4gICAgICAgICAgICAke05hdkxpbmtzKHByb2plY3ROYW1lLCBuYXZUaXRsZXMpfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgICBgO1xufVxuXG5mdW5jdGlvbiBOYXZMaW5rcyhwcm9qZWN0TmFtZSwgbmF2VGl0bGVzKSB7XG4gICAgY29uc3QgWyBhYm91dCwgbmV3cywgcHJvamVjdHMgXSA9IG5hdlRpdGxlcztcbiAgICBpZiAocHJvamVjdE5hbWUgPT09ICdtYWluJykge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1pdGVtIGFib3V0XCIgaHJlZj1cImluZGV4Lmh0bWxcIj4ke2Fib3V0fTwvYT5cbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtaXRlbSBuZXdzXCIgaHJlZj1cIiNuZXdzLWxvY2F0aW9uXCI+JHtuZXdzfTwvYT5cbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtaXRlbSBwcm9qZWN0c1wiIGhyZWY9XCIjcHJvamVjdHMtbG9jYXRpb25cIj4ke3Byb2plY3RzfTwvYT5cbiAgICAgICAgYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1pdGVtXCIgaHJlZj1cImluZGV4Lmh0bWxcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWFycm93LWFsdC1jaXJjbGUtbGVmdFwiPjwvaT4gYmFjayB0byBob21lXG4gICAgICAgIDwvYT4gICAgICAgICAgICBcbiAgICAgICAgYDtcbiAgICB9XG59IiwiY29uc3QgbnVtTmV3c0l0ZW1zVG9SZW5kZXIgPSA1O1xubGV0IHNob3VsZFNob3dBbGxOZXdzSXRlbXMgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3cyhuZXdzKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGlkPVwibmV3cy1sb2NhdGlvblwiPjwvZGl2PlxuICAgIDxzZWN0aW9uIGlkPVwibmV3c1wiPlxuICAgICAgICA8aDE+TmV3czwvaDE+XG4gICAgICAgIDxpbnB1dCBpZD1cIm5ld3Mtc2VhcmNoXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBOZXdzLi4uXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJuZXdzLWxpc3RcIj5cbiAgICAgICAgICAgICR7c2hvdWxkU2hvd0FsbE5ld3NJdGVtcyA/XG4gICAgICAgICAgICAgICAgTmV3c0l0ZW1zKG5ld3MpIDpcbiAgICAgICAgICAgICAgICBOZXdzSXRlbXMobmV3cywgbnVtTmV3c0l0ZW1zVG9SZW5kZXIpXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGlkPVwibmV3cy1pdGVtLXRvZ2dsZVwiPlxuICAgICAgICAgICAgJHtzaG91bGRTaG93QWxsTmV3c0l0ZW1zID8gJ1NlZSBMZXNzJyA6ICdTZWUgQWxsJ31cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9zZWN0aW9uPlxuICAgIGA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOZXdzSXRlbXMobmV3cywgbnVtTmV3c0l0ZW1zID0gbnVsbCkge1xuICAgIGxldCBuID0gbnVtTmV3c0l0ZW1zID8gbnVtTmV3c0l0ZW1zIDogT2JqZWN0LmtleXMobmV3cykubGVuZ3RoO1xuICAgIHJldHVybiBuZXdzLnNsaWNlKDAsIG4pLm1hcChuZXdzSXRlbSA9PiBOZXdzSXRlbShuZXdzSXRlbSkpLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBOZXdzSXRlbShuZXdzSXRlbSkge1xuICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIGRhdGUgfSA9IG5ld3NJdGVtO1xuXG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwicm93IG5ld3MtaXRlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwXCI+XG4gICAgICAgICAgICAke2Rlc2NyaXB0aW9ufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0gXCJjb2wtMiBuZXdzLWRhdGUgdGV4dC1hbGlnblwiPlxuICAgICAgICAgICAgPGVtPiR7ZGF0ZX08L2VtPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xufVxuXG5mdW5jdGlvbiByZW5kZXJOZXdzSXRlbXMobmV3cywgc2hvd0FsbCkge1xuICAgIGNvbnN0IG5ld3NJdGVtcyA9IHNob3dBbGwgP1xuICAgICAgICAgICAgTmV3c0l0ZW1zKG5ld3MsIG51bU5ld3NJdGVtc1RvUmVuZGVyKSA6XG4gICAgICAgICAgICBOZXdzSXRlbXMobmV3cyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3MtbGlzdCcpLmlubmVySFRNTCA9IG5ld3NJdGVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVRvZ2dsZU5ld3NJdGVtcyhuZXdzKSB7XG4gICAgY29uc3QgbmV3c0l0ZW1Ub2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3cy1pdGVtLXRvZ2dsZScpO1xuICAgIG5ld3NJdGVtVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICByZW5kZXJOZXdzSXRlbXMobmV3cywgc2hvdWxkU2hvd0FsbE5ld3NJdGVtcyk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5pbm5lckhUTUwgPSBzaG91bGRTaG93QWxsTmV3c0l0ZW1zID8gJ1NlZSBBbGwnIDogJ1NlZSBMZXNzJztcbiAgICAgICAgc2hvdWxkU2hvd0FsbE5ld3NJdGVtcyA9ICFzaG91bGRTaG93QWxsTmV3c0l0ZW1zO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTmV3c0ZpbHRlcihuZXdzKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3Mtc2VhcmNoJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBldmVudCA9PiB7XG4gICAgICAgIGxldCBzZWFyY2hUZXh0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBsZXQgZmlsdGVyZWROZXdzID0gbmV3cy5maWx0ZXIobmV3c0l0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ld3NJdGVtLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpKVxuICAgICAgICB9KTtcbiAgICAgICAgcmVuZGVyTmV3c0l0ZW1zKGZpbHRlcmVkTmV3cywgIXNob3VsZFNob3dBbGxOZXdzSXRlbXMpO1xuICAgICAgICBjb25zdCBuZXdzSXRlbVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdzLWl0ZW0tdG9nZ2xlJyk7XG4gICAgICAgIG5ld3NJdGVtVG9nZ2xlLnN0eWxlLmRpc3BsYXkgPSBzZWFyY2hUZXh0ID8gJ25vbmUnIDogJ2lubGluZS1ibG9jayc7XG4gICAgfSk7XG59IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0TmFtZUVycm9yKHByb2plY3ROYW1lLCBkYXRhKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGgxPjQwMCBCYWQgUmVxdWVzdDwvaDE+XG4gICAgICAgIDxwPlRoZSB2YWx1ZSBwcm92aWRlZCBmb3IgdGhlICdwcm9qZWN0JyBxdWVyeSBwYXJhbWV0ZXIgaXMgaW52YWxpZC48L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPHN0cm9uZz5WYWx1ZSBQcm92aWRlZDo8L3N0cm9uZz4gJHtwcm9qZWN0TmFtZX08YnI+XG4gICAgICAgICAgICA8c3Ryb25nPlZhbGlkIFZhbHVlczo8L3N0cm9uZz4gJHtPYmplY3Qua2V5cyhkYXRhLnByb2plY3RzKS5qb2luKCcsICcpfVxuICAgICAgICA8L3A+XG4gICAgYDtcbn0iLCJpbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2QmFyLmpzJztcbmltcG9ydCB7IFByb2plY3REZXRhaWxzIH0gZnJvbSAnLi9Qcm9qZWN0cy5qcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFBhZ2UocHJvamVjdE5hbWUsIGRhdGEpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuaW5uZXJIVE1MID0gYFxuICAgICAgICAke05hdkJhcihwcm9qZWN0TmFtZSwgZGF0YS5hYm91dC5uYW1lLCBPYmplY3Qua2V5cyhkYXRhKSl9XG4gICAgICAgIDxzZWN0aW9uIGlkPVwicHJvamVjdC1wYWdlXCI+XG4gICAgICAgICAgICAke1Byb2plY3REZXRhaWxzKGdldFByb2plY3QocHJvamVjdE5hbWUsIGRhdGEucHJvamVjdHMpKX1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAke0Zvb3RlcihkYXRhLmFib3V0KX1cbiAgICBgO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UHJvamVjdCA9IChwcm9qZWN0TmFtZSwgcHJvamVjdHMpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT0gcHJvamVjdE5hbWUpO1xufSIsImltcG9ydCB7IGlzTWFpblBhZ2UgfSBmcm9tICcuLi9pbmRleC5qcyc7XG5cbmNvbnN0IGFsbFByb2plY3RzVGFnID0gJ0FsbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGlkPVwicHJvamVjdHMtbG9jYXRpb25cIj48L2Rpdj5cbiAgICA8c2VjdGlvbiBpZD1cInByb2plY3RzXCI+XG4gICAgICAgIDxoMT5Qcm9qZWN0czwvaDE+XG4gICAgICAgIDxzcGFuIGlkPVwicHJvamVjdHMtZmlsdGVyXCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICR7UHJvamVjdHNGaWx0ZXIocHJvamVjdHMpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXYgaWQ9XCJwcm9qZWN0cy1saXN0XCI+XG4gICAgICAgICAgICAke1Byb2plY3RzTGlzdChwcm9qZWN0cyl9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICBgO1xufVxuXG5mdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVzKGFycmF5KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnJheSkpO1xufVxuXG5mdW5jdGlvbiBQcm9qZWN0c0ZpbHRlcihwcm9qZWN0cykge1xuICAgIGxldCBwcm9qZWN0VGFncyA9IHByb2plY3RzLnJlZHVjZSgoYWNjLCBwcm9qZWN0KSA9PiBhY2MuY29uY2F0KHByb2plY3QudGFncyksIFtdKTtcbiAgICBwcm9qZWN0VGFncyA9IHJlbW92ZUR1cGxpY2F0ZXMocHJvamVjdFRhZ3MubWFwKHRhZyA9PiB0YWcudGV4dCkpO1xuICAgIHByb2plY3RUYWdzLnVuc2hpZnQoYWxsUHJvamVjdHNUYWcpO1xuICAgIHJldHVybiBwcm9qZWN0VGFncy5tYXAodGFnID0+IHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmaWx0ZXJcIiB2YWx1ZT1cIiR7dGFnLnRvTG93ZXJDYXNlKCl9XCI+XG4gICAgICAgICAgICA8YT4ke3RhZ308L2E+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIGA7XG4gICAgfSkuam9pbignJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0c0xpc3QocHJvamVjdHMpIHtcbiAgICByZXR1cm4gcHJvamVjdHMubWFwKHByb2plY3QgPT4gUHJvamVjdERldGFpbHMocHJvamVjdCkpLmpvaW4oJycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUHJvamVjdERldGFpbHMocHJvamVjdCkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgaWQsIHRpdGxlLCBkYXRlLCBsYW5ndWFnZXMsIGRlc2NyaXB0aW9uLFxuICAgICAgICBkZXRhaWxlZERlc2NyaXB0aW9uLCB0YWdzLCBnaXRodWIsIGltYWdlXG4gICAgfSA9IHByb2plY3Q7XG5cbiAgICByZXR1cm4gYFxuICAgIDxkaXYgJHtpc01haW5QYWdlID8gICdjbGFzcz1cInByb2plY3Qgcm93XCInIDogJ2lkPVwicHJvamVjdC1kZXRhaWxzXCIgY2xhc3M9XCJyb3dcIid9PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgcHJvamVjdC1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICR7aXNNYWluUGFnZSA/IGA8YSBocmVmPVwiaW5kZXguaHRtbD9wcm9qZWN0PSR7aWR9XCI+PHN0cm9uZz4ke3RpdGxlfTwvc3Ryb25nPjwvYT5gIDogYDxoMT4ke3RpdGxlfTwvaDE+YH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5EYXRlOjwvc3Ryb25nPiAke2RhdGV9PGJyPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPiR7aXNTaW5ndWxhcihsYW5ndWFnZXMpID8gJ0xhbmd1YWdlJyA6ICdMYW5ndWFnZXMnfTo8L3N0cm9uZz4gJHtsYW5ndWFnZXN9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPiR7aXNNYWluUGFnZSA/IGRlc2NyaXB0aW9uIDogZGV0YWlsZWREZXNjcmlwdGlvbn08L3A+ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8cD5DaGVja291dCB0aGUgY29kZSBvbiBHaXRIdWIgPGEgaHJlZj1cIiR7Z2l0aHVifVwiIHRhcmdldD1cIl9ibGFua1wiPmhlcmU8L2E+LjwvcD5cbiAgICAgICAgICAgICAgICAke1Byb2plY3RUYWdzKHRhZ3MpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgcHJvamVjdC1pbWdcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZX1cIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbn1cblxuY29uc3QgaXNTaW5ndWxhciA9IHN0ciA9PiBzdHIuc3BsaXQoJywgJykubGVuZ3RoIDw9IDE7XG5cbmZ1bmN0aW9uIFByb2plY3RUYWdzKHRhZ3MpIHtcbiAgICByZXR1cm4gdGFncy5tYXAodGFnID0+IFxuICAgICAgICBgPHNwYW4gY2xhc3M9XCJ0YWdcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICR7dGFnLmNvbG9yfVwiPiR7dGFnLnRleHR9PC9zcGFuPmBcbiAgICApLmpvaW4oJycpO1xuICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUHJvamVjdHNGaWx0ZXIocHJvamVjdHMpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcHJvamVjdHMtZmlsdGVyIGlucHV0W25hbWU9XCJmaWx0ZXJcIl0nKS5mb3JFYWNoKHJhZGlvQnV0dG9uID0+IHtcbiAgICAgICAgcmFkaW9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgbGV0IGZpbHRlclRhZyA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFByb2plY3RzID0gcHJvamVjdHMuc2xpY2UoKTtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJUYWcgIT0gYWxsUHJvamVjdHNUYWcudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkUHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsb3dlcmNhc2VUYWdzID0gcHJvamVjdC50YWdzLm1hcCh0YWcgPT4gdGFnLnRleHQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb3dlcmNhc2VUYWdzLmluY2x1ZGVzKGZpbHRlclRhZy50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzLWxpc3QnKS5pbm5lckhUTUwgPSBQcm9qZWN0c0xpc3QoZmlsdGVyZWRQcm9qZWN0cyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSIsImltcG9ydCBNYWluUGFnZSBmcm9tICcuL2NvbXBvbmVudHMvTWFpblBhZ2UuanMnO1xuaW1wb3J0IFByb2plY3RQYWdlLCB7IGdldFByb2plY3QgfSBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdFBhZ2UuanMnO1xuaW1wb3J0IFByb2plY3ROYW1lRXJyb3IgZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3ROYW1lRXJyb3IuanMnO1xuXG5leHBvcnQgbGV0IGlzTWFpblBhZ2UgPSBmYWxzZTtcblxuZmV0Y2goJ2Fzc2V0cy9kYXRhLmpzb24nKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHF1ZXJ5UGFyYW1zLmdldCgncHJvamVjdCcpO1xuICAgICAgICBpZiAocHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIHByb2plY3ROYW1lSXNWYWxpZChwcm9qZWN0TmFtZSwgZGF0YS5wcm9qZWN0cylcbiAgICAgICAgICAgICAgICA/IFByb2plY3RQYWdlKHByb2plY3ROYW1lLCBkYXRhKVxuICAgICAgICAgICAgICAgIDogUHJvamVjdE5hbWVFcnJvcihwcm9qZWN0TmFtZSwgZGF0YS5wcm9qZWN0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc01haW5QYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgIE1haW5QYWdlKGRhdGEpO1xuICAgICAgICB9XG59KTtcblxuY29uc3QgcHJvamVjdE5hbWVJc1ZhbGlkID0gKHByb2plY3ROYW1lLCBwcm9qZWN0cykgPT4ge1xuICAgIHJldHVybiAhIWdldFByb2plY3QocHJvamVjdE5hbWUsIHByb2plY3RzKVxufSJdLCJzb3VyY2VSb290IjoiIn0=
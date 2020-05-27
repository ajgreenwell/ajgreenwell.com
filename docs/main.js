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
                ${title}<br>
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

/***/ }),

/***/ "./src/components/News.js":
/*!********************************!*\
  !*** ./src/components/News.js ***!
  \********************************/
/*! exports provided: default, NewsItems, handleNewsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return News; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItems", function() { return NewsItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleNewsFilter", function() { return handleNewsFilter; });
const numNewsItemsToRender = 5;

function News(news) {
    return `
    <div id="news-location"></div>
    <section id="news">
        <h1>News</h1>
        <input id="news-search" type="search" placeholder="Search News...">
        <div id="news-list">
            ${NewsItems(news, numNewsItemsToRender)}
        </div>
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

function handleNewsFilter(news) {
    document.querySelector('#news-search').addEventListener('input', event => {
        let searchText = event.target.value;
        let filteredNews = news.filter(newsItem => {
            return newsItem.description.toLowerCase().includes(searchText.toLowerCase())
        });
        document.querySelector('#news-list').innerHTML = NewsItems(filteredNews, numNewsItemsToRender);
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
        ${Object(_Projects_js__WEBPACK_IMPORTED_MODULE_1__["ProjectDetails"])(getProject(projectName, data.projects))}
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


const projectTags = ['Personal Project', 'Class Project', 'Backend'];
const allProjectsTag = 'All';

function Projects(projects) {
    return `
    <div id="projects-location"></div> <!-- For Navigation -->
    <section id="projects">
        <h1>Projects</h1>
        <span id="projects-filter" class="row">
            ${ProjectsFilter()}
        </span>
        <div id="projects-list">
            ${ProjectsList(projects)}
        </div>
    </section>
    `;
}

function ProjectsFilter() {
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
                <span class="tag personal">${tags[0]}</span>
                <span class="tag backend">${tags[1]}</span>
            </div>
        </div>
        <div class="col-6 project-img">
            <img src="${image}" width="100%">
        </div>
    </div>
    `;
}

const isSingular = str => str.split(', ').length <= 1;


function handleProjectsFilter(projects) {
    document.querySelectorAll('#projects-filter input[name="filter"]').forEach(radioButton => {
        radioButton.addEventListener('change', event => {
            let filterTag = event.target.value;
            let filteredProjects = projects.slice();
            if (filterTag != allProjectsTag.toLowerCase()) {
                filteredProjects = projects.filter(project => {
                    let lowercaseTags = project.tags.map(tag => tag.toLowerCase());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5QYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXdzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2plY3ROYW1lRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FB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LDhCQUE4QixpREFBaUQsYUFBYTtBQUM1RjtBQUNBLHFCQUFxQixvREFBVSxxQ0FBcUM7QUFDcEUsMERBQTBELE9BQU87QUFDakUsNkNBQTZDLFFBQVE7QUFDckQsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE1BQU07QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDOzs7Ozs7Ozs7Ozs7QUNuRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRDtBQUNzQjtBQUNOOztBQUV6RDs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwwRUFBVztBQUM3QixrQkFBa0IsK0VBQWdCO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLFlBQVksdUVBQVE7QUFDcEI7QUFDQSxDQUFDOztBQUVEO0FBQ0EsYUFBYSw2RUFBVTtBQUN2QixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckFib3V0KGFib3V0KSB7XG4gICAgY29uc3QgeyBcbiAgICAgICAgXywgaW1hZ2UsIHRpdGxlLCBhZGRyZXNzLCBlbWFpbCwgcmVzdW1lLFxuICAgICAgICBsaW5rZWRpbiwgZ2l0aHViLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2VzXG4gICAgfSA9IGFib3V0O1xuXG4gICAgcmV0dXJuIGBcbiAgICA8c2VjdGlvbiBpZD1cImFib3V0XCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yIGxlZnQtcGFuZVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlfVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC03IGFib3V0LWluZm9cIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICR7dGl0bGV9PGJyPlxuICAgICAgICAgICAgICAgICR7YWRkcmVzc308YnI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzoke2VtYWlsfVwiPiR7ZW1haWx9PC9hPiB8XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7cmVzdW1lfVwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiZmFyIGZhLWZpbGUtYWx0XCI+PC9pPiBSZXN1bWU8L2E+IHxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtsaW5rZWRpbn1cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cImZhYiBmYS1saW5rZWRpblwiPjwvaT48L2E+IHxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtnaXRodWJ9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYWIgZmEtZ2l0aHViXCI+PC9pPjwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPiR7ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Qcm9maWNpZW50IGluOjwvc3Ryb25nPiAke2xhbmd1YWdlcy5wcm9maWNpZW50fTxicj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkZhbWlsaWFyIHdpdGg6PC9zdHJvbmc+ICR7bGFuZ3VhZ2VzLmZhbWlsaWFyfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgYDtcbn0iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcihhYm91dCkge1xuICAgIHJldHVybiBgXG4gICAgPGZvb3Rlcj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3B5cmlnaHRcIj5Db3B5cmlnaHQgwqkgJHthYm91dC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJyb3cgZmxleC1qdXN0aWZ5LXJpZ2h0XCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiJHthYm91dC5saW5rZWRpbn1cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cImZhYiBmYS1saW5rZWRpbiBmYS0yeFwiPjwvaT48L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiJHthYm91dC5naXRodWJ9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYWIgZmEtZ2l0aHViIGZhLTJ4XCI+PC9pPjwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvZm9vdGVyPlxuICAgIGA7XG59IiwiaW1wb3J0IE5hdkJhciBmcm9tICcuL05hdkJhci5qcyc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9BYm91dC5qcyc7XG5pbXBvcnQgTmV3cywgeyBoYW5kbGVOZXdzRmlsdGVyIH0gZnJvbSAnLi9OZXdzLmpzJztcbmltcG9ydCBQcm9qZWN0cywgeyBoYW5kbGVQcm9qZWN0c0ZpbHRlciB9IGZyb20gJy4vUHJvamVjdHMuanMnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5QYWdlKGRhdGEpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuaW5uZXJIVE1MID0gYFxuICAgICAgICAke05hdkJhcignbWFpbicsIGRhdGEuYWJvdXQubmFtZSwgT2JqZWN0LmtleXMoZGF0YSkpfVxuICAgICAgICAke0Fib3V0KGRhdGEuYWJvdXQpfVxuICAgICAgICAke05ld3MoZGF0YS5uZXdzKX1cbiAgICAgICAgJHtQcm9qZWN0cyhkYXRhLnByb2plY3RzKX1cbiAgICAgICAgJHtGb290ZXIoZGF0YS5hYm91dCl9XG4gICAgYDtcbiAgICBoYW5kbGVOZXdzRmlsdGVyKGRhdGEubmV3cyk7XG4gICAgaGFuZGxlUHJvamVjdHNGaWx0ZXIoZGF0YS5wcm9qZWN0cyk7XG59IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIocHJvamVjdE5hbWUsIG5hbWUsIG5hdlRpdGxlcykge1xuICAgIHJldHVybiBgXG4gICAgPG5hdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZSBmbGV4LWNvbnRhaW5lciBjb2wtNiB2ZXJ0aWNhbC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMT48YSBocmVmPVwiaW5kZXguaHRtbFwiPiR7bmFtZX08L2E+PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtaXRlbXMgZmxleC1jb250YWluZXIgY29sLTYgcGVyZmVjdC1jZW50ZXJcIj5cbiAgICAgICAgICAgICR7TmF2TGlua3MocHJvamVjdE5hbWUsIG5hdlRpdGxlcyl9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICAgIGA7XG59XG5cbmZ1bmN0aW9uIE5hdkxpbmtzKHByb2plY3ROYW1lLCBuYXZUaXRsZXMpIHtcbiAgICBjb25zdCBbIGFib3V0LCBuZXdzLCBwcm9qZWN0cyBdID0gbmF2VGl0bGVzO1xuICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gJ21haW4nKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWl0ZW0gYWJvdXQgYW5pbWF0ZWQgcHVsc2VcIiBocmVmPVwiaW5kZXguaHRtbFwiPiR7YWJvdXR9PC9hPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1pdGVtIG5ld3MgYW5pbWF0ZWQgcHVsc2UgZGVsYXktMXNcIiBocmVmPVwiI25ld3MtbG9jYXRpb25cIj4ke25ld3N9PC9hPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1pdGVtIHByb2plY3RzIGFuaW1hdGVkIHB1bHNlIGRlbGF5LTJzXCIgaHJlZj1cIiNwcm9qZWN0cy1sb2NhdGlvblwiPiR7cHJvamVjdHN9PC9hPlxuICAgICAgICBgO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWl0ZW1cIiBocmVmPVwiaW5kZXguaHRtbFwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtYXJyb3ctYWx0LWNpcmNsZS1sZWZ0XCI+PC9pPiBiYWNrIHRvIGhvbWVcbiAgICAgICAgPC9hPiAgICAgICAgICAgIFxuICAgICAgICBgO1xuICAgIH1cbn0iLCJjb25zdCBudW1OZXdzSXRlbXNUb1JlbmRlciA9IDU7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3MobmV3cykge1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBpZD1cIm5ld3MtbG9jYXRpb25cIj48L2Rpdj5cbiAgICA8c2VjdGlvbiBpZD1cIm5ld3NcIj5cbiAgICAgICAgPGgxPk5ld3M8L2gxPlxuICAgICAgICA8aW5wdXQgaWQ9XCJuZXdzLXNlYXJjaFwiIHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBOZXdzLi4uXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJuZXdzLWxpc3RcIj5cbiAgICAgICAgICAgICR7TmV3c0l0ZW1zKG5ld3MsIG51bU5ld3NJdGVtc1RvUmVuZGVyKX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIGA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOZXdzSXRlbXMobmV3cywgbnVtTmV3c0l0ZW1zID0gbnVsbCkge1xuICAgIGxldCBuID0gbnVtTmV3c0l0ZW1zID8gbnVtTmV3c0l0ZW1zIDogT2JqZWN0LmtleXMobmV3cykubGVuZ3RoO1xuICAgIHJldHVybiBuZXdzLnNsaWNlKDAsIG4pLm1hcChuZXdzSXRlbSA9PiBOZXdzSXRlbShuZXdzSXRlbSkpLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBOZXdzSXRlbShuZXdzSXRlbSkge1xuICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIGRhdGUgfSA9IG5ld3NJdGVtO1xuXG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwicm93IG5ld3MtaXRlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwXCI+XG4gICAgICAgICAgICAke2Rlc2NyaXB0aW9ufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0gXCJjb2wtMiBuZXdzLWRhdGUgdGV4dC1hbGlnblwiPlxuICAgICAgICAgICAgPGVtPiR7ZGF0ZX08L2VtPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTmV3c0ZpbHRlcihuZXdzKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3Mtc2VhcmNoJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBldmVudCA9PiB7XG4gICAgICAgIGxldCBzZWFyY2hUZXh0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBsZXQgZmlsdGVyZWROZXdzID0gbmV3cy5maWx0ZXIobmV3c0l0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ld3NJdGVtLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpKVxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3MtbGlzdCcpLmlubmVySFRNTCA9IE5ld3NJdGVtcyhmaWx0ZXJlZE5ld3MsIG51bU5ld3NJdGVtc1RvUmVuZGVyKTtcbiAgICB9KTtcbn0iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3ROYW1lRXJyb3IocHJvamVjdE5hbWUsIGRhdGEpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDE+NDAwIEJhZCBSZXF1ZXN0PC9oMT5cbiAgICAgICAgPHA+VGhlIHZhbHVlIHByb3ZpZGVkIGZvciB0aGUgJ3Byb2plY3QnIHF1ZXJ5IHBhcmFtZXRlciBpcyBpbnZhbGlkLjwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Ryb25nPlZhbHVlIFByb3ZpZGVkOjwvc3Ryb25nPiAke3Byb2plY3ROYW1lfTxicj5cbiAgICAgICAgICAgIDxzdHJvbmc+VmFsaWQgVmFsdWVzOjwvc3Ryb25nPiAke09iamVjdC5rZXlzKGRhdGEucHJvamVjdHMpLmpvaW4oJywgJyl9XG4gICAgICAgIDwvcD5cbiAgICBgO1xufSIsImltcG9ydCBOYXZCYXIgZnJvbSAnLi9OYXZCYXIuanMnO1xuaW1wb3J0IHsgUHJvamVjdERldGFpbHMgfSBmcm9tICcuL1Byb2plY3RzLmpzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UGFnZShwcm9qZWN0TmFtZSwgZGF0YSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5pbm5lckhUTUwgPSBgXG4gICAgICAgICR7TmF2QmFyKHByb2plY3ROYW1lLCBkYXRhLmFib3V0Lm5hbWUsIE9iamVjdC5rZXlzKGRhdGEpKX1cbiAgICAgICAgJHtQcm9qZWN0RGV0YWlscyhnZXRQcm9qZWN0KHByb2plY3ROYW1lLCBkYXRhLnByb2plY3RzKSl9XG4gICAgICAgICR7Rm9vdGVyKGRhdGEuYWJvdXQpfVxuICAgIGA7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3ROYW1lLCBwcm9qZWN0cykgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5pZCA9PSBwcm9qZWN0TmFtZSk7XG59IiwiaW1wb3J0IHsgaXNNYWluUGFnZSB9IGZyb20gJy4uL2luZGV4LmpzJztcblxuY29uc3QgcHJvamVjdFRhZ3MgPSBbJ1BlcnNvbmFsIFByb2plY3QnLCAnQ2xhc3MgUHJvamVjdCcsICdCYWNrZW5kJ107XG5jb25zdCBhbGxQcm9qZWN0c1RhZyA9ICdBbGwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBpZD1cInByb2plY3RzLWxvY2F0aW9uXCI+PC9kaXY+IDwhLS0gRm9yIE5hdmlnYXRpb24gLS0+XG4gICAgPHNlY3Rpb24gaWQ9XCJwcm9qZWN0c1wiPlxuICAgICAgICA8aDE+UHJvamVjdHM8L2gxPlxuICAgICAgICA8c3BhbiBpZD1cInByb2plY3RzLWZpbHRlclwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAke1Byb2plY3RzRmlsdGVyKCl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBpZD1cInByb2plY3RzLWxpc3RcIj5cbiAgICAgICAgICAgICR7UHJvamVjdHNMaXN0KHByb2plY3RzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIGA7XG59XG5cbmZ1bmN0aW9uIFByb2plY3RzRmlsdGVyKCkge1xuICAgIHByb2plY3RUYWdzLnVuc2hpZnQoYWxsUHJvamVjdHNUYWcpO1xuICAgIHJldHVybiBwcm9qZWN0VGFncy5tYXAodGFnID0+IHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmaWx0ZXJcIiB2YWx1ZT1cIiR7dGFnLnRvTG93ZXJDYXNlKCl9XCI+XG4gICAgICAgICAgICA8YT4ke3RhZ308L2E+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIGA7XG4gICAgfSkuam9pbignJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0c0xpc3QocHJvamVjdHMpIHtcbiAgICByZXR1cm4gcHJvamVjdHMubWFwKHByb2plY3QgPT4gUHJvamVjdERldGFpbHMocHJvamVjdCkpLmpvaW4oJycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUHJvamVjdERldGFpbHMocHJvamVjdCkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgaWQsIHRpdGxlLCBkYXRlLCBsYW5ndWFnZXMsIGRlc2NyaXB0aW9uLFxuICAgICAgICBkZXRhaWxlZERlc2NyaXB0aW9uLCB0YWdzLCBnaXRodWIsIGltYWdlXG4gICAgfSA9IHByb2plY3Q7XG5cbiAgICByZXR1cm4gYFxuICAgIDxkaXYgJHtpc01haW5QYWdlID8gICdjbGFzcz1cInByb2plY3Qgcm93XCInIDogJ2lkPVwicHJvamVjdC1kZXRhaWxzXCIgY2xhc3M9XCJyb3dcIid9PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgcHJvamVjdC1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICR7aXNNYWluUGFnZSA/IGA8YSBocmVmPVwiaW5kZXguaHRtbD9wcm9qZWN0PSR7aWR9XCI+PHN0cm9uZz4ke3RpdGxlfTwvc3Ryb25nPjwvYT5gIDogYDxoMT4ke3RpdGxlfTwvaDE+YH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5EYXRlOjwvc3Ryb25nPiAke2RhdGV9PGJyPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPiR7aXNTaW5ndWxhcihsYW5ndWFnZXMpID8gJ0xhbmd1YWdlJyA6ICdMYW5ndWFnZXMnfTo8L3N0cm9uZz4gJHtsYW5ndWFnZXN9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPiR7aXNNYWluUGFnZSA/IGRlc2NyaXB0aW9uIDogZGV0YWlsZWREZXNjcmlwdGlvbn08L3A+ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8cD5DaGVja291dCB0aGUgY29kZSBvbiBHaXRIdWIgPGEgaHJlZj1cIiR7Z2l0aHVifVwiIHRhcmdldD1cIl9ibGFua1wiPmhlcmU8L2E+LjwvcD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyBwZXJzb25hbFwiPiR7dGFnc1swXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWcgYmFja2VuZFwiPiR7dGFnc1sxXX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBwcm9qZWN0LWltZ1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlfVwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xufVxuXG5jb25zdCBpc1Npbmd1bGFyID0gc3RyID0+IHN0ci5zcGxpdCgnLCAnKS5sZW5ndGggPD0gMTtcblxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUHJvamVjdHNGaWx0ZXIocHJvamVjdHMpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcHJvamVjdHMtZmlsdGVyIGlucHV0W25hbWU9XCJmaWx0ZXJcIl0nKS5mb3JFYWNoKHJhZGlvQnV0dG9uID0+IHtcbiAgICAgICAgcmFkaW9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgbGV0IGZpbHRlclRhZyA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFByb2plY3RzID0gcHJvamVjdHMuc2xpY2UoKTtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJUYWcgIT0gYWxsUHJvamVjdHNUYWcudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkUHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsb3dlcmNhc2VUYWdzID0gcHJvamVjdC50YWdzLm1hcCh0YWcgPT4gdGFnLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG93ZXJjYXNlVGFncy5pbmNsdWRlcyhmaWx0ZXJUYWcudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cy1saXN0JykuaW5uZXJIVE1MID0gUHJvamVjdHNMaXN0KGZpbHRlcmVkUHJvamVjdHMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0iLCJpbXBvcnQgTWFpblBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL01haW5QYWdlLmpzJztcbmltcG9ydCBQcm9qZWN0UGFnZSwgeyBnZXRQcm9qZWN0IH0gZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3RQYWdlLmpzJztcbmltcG9ydCBQcm9qZWN0TmFtZUVycm9yIGZyb20gJy4vY29tcG9uZW50cy9Qcm9qZWN0TmFtZUVycm9yLmpzJztcblxuZXhwb3J0IGxldCBpc01haW5QYWdlID0gZmFsc2U7XG5cbmZldGNoKCdhc3NldHMvZGF0YS5qc29uJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBxdWVyeVBhcmFtcy5nZXQoJ3Byb2plY3QnKTtcbiAgICAgICAgaWYgKHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZUlzVmFsaWQocHJvamVjdE5hbWUsIGRhdGEucHJvamVjdHMpXG4gICAgICAgICAgICAgICAgPyBQcm9qZWN0UGFnZShwcm9qZWN0TmFtZSwgZGF0YSlcbiAgICAgICAgICAgICAgICA6IFByb2plY3ROYW1lRXJyb3IocHJvamVjdE5hbWUsIGRhdGEucHJvamVjdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNNYWluUGFnZSA9IHRydWU7XG4gICAgICAgICAgICBNYWluUGFnZShkYXRhKTtcbiAgICAgICAgfVxufSk7XG5cbmNvbnN0IHByb2plY3ROYW1lSXNWYWxpZCA9IChwcm9qZWN0TmFtZSwgcHJvamVjdHMpID0+IHtcbiAgICByZXR1cm4gISFnZXRQcm9qZWN0KHByb2plY3ROYW1lLCBwcm9qZWN0cylcbn0iXSwic291cmNlUm9vdCI6IiJ9
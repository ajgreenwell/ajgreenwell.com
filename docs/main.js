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
            <h1><a>${name}</a></h1>
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
        <a class="nav-item about" href="#">${about}</a>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5QYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXdzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2plY3ROYW1lRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FB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QUFJO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLFdBQVcsb0RBQVUsK0RBQStEO0FBQ3BGO0FBQ0E7QUFDQSxrQkFBa0Isb0RBQVUsa0NBQWtDLEdBQUcsWUFBWSxNQUFNLHdCQUF3QixNQUFNO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxLQUFLO0FBQ2xELDhCQUE4QixpREFBaUQsYUFBYTtBQUM1RjtBQUNBLHFCQUFxQixvREFBVSxxQ0FBcUM7QUFDcEUsMERBQTBELE9BQU87QUFDakUsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixNQUFNO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0QsVUFBVSxJQUFJLFNBQVM7QUFDN0U7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLEM7Ozs7Ozs7Ozs7OztBQzlGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdEO0FBQ3NCO0FBQ047O0FBRXpEOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDBFQUFXO0FBQzdCLGtCQUFrQiwrRUFBZ0I7QUFDbEMsU0FBUztBQUNUO0FBQ0EsWUFBWSx1RUFBUTtBQUNwQjtBQUNBLENBQUM7O0FBRUQ7QUFDQSxhQUFhLDZFQUFVO0FBQ3ZCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyQWJvdXQoYWJvdXQpIHtcbiAgICBjb25zdCB7IFxuICAgICAgICBfLCBpbWFnZSwgdGl0bGUsIGFkZHJlc3MsIGVtYWlsLCByZXN1bWUsXG4gICAgICAgIGxpbmtlZGluLCBnaXRodWIsIGRlc2NyaXB0aW9uLCBsYW5ndWFnZXNcbiAgICB9ID0gYWJvdXQ7XG5cbiAgICByZXR1cm4gYFxuICAgIDxzZWN0aW9uIGlkPVwiYWJvdXRcIiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTIgbGVmdC1wYW5lXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2V9XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTcgYWJvdXQtaW5mb1wiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz4ke3RpdGxlfTwvc3Ryb25nPjxicj5cbiAgICAgICAgICAgICAgICAke2FkZHJlc3N9PGJyPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86JHtlbWFpbH1cIj4ke2VtYWlsfTwvYT4gfFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3Jlc3VtZX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cImZhciBmYS1maWxlLWFsdFwiPjwvaT4gUmVzdW1lPC9hPiB8XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7bGlua2VkaW59XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYWIgZmEtbGlua2VkaW5cIj48L2k+PC9hPiB8XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7Z2l0aHVifVwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiZmFiIGZhLWdpdGh1YlwiPjwvaT48L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD4ke2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+UHJvZmljaWVudCBpbjo8L3N0cm9uZz4gJHtsYW5ndWFnZXMucHJvZmljaWVudH08YnI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5GYW1pbGlhciB3aXRoOjwvc3Ryb25nPiAke2xhbmd1YWdlcy5mYW1pbGlhcn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIGA7XG59IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoYWJvdXQpIHtcbiAgICByZXR1cm4gYFxuICAgIDxmb290ZXI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY29weXJpZ2h0XCI+Q29weXJpZ2h0IMKpICR7YWJvdXQubmFtZX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwicm93IGZsZXgtanVzdGlmeS1yaWdodFwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiR7YWJvdXQubGlua2VkaW59XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYWIgZmEtbGlua2VkaW4gZmEtMnhcIj48L2k+PC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiR7YWJvdXQuZ2l0aHVifVwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiZmFiIGZhLWdpdGh1YiBmYS0yeFwiPjwvaT48L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Zvb3Rlcj5cbiAgICBgO1xufSIsImltcG9ydCBOYXZCYXIgZnJvbSAnLi9OYXZCYXIuanMnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQuanMnO1xuaW1wb3J0IE5ld3MsIHsgaGFuZGxlTmV3c0ZpbHRlciwgaGFuZGxlVG9nZ2xlTmV3c0l0ZW1zIH0gZnJvbSAnLi9OZXdzLmpzJztcbmltcG9ydCBQcm9qZWN0cywgeyBoYW5kbGVQcm9qZWN0c0ZpbHRlciB9IGZyb20gJy4vUHJvamVjdHMuanMnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5QYWdlKGRhdGEpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuaW5uZXJIVE1MID0gYFxuICAgICAgICAke05hdkJhcignbWFpbicsIGRhdGEuYWJvdXQubmFtZSwgT2JqZWN0LmtleXMoZGF0YSkpfVxuICAgICAgICAke0Fib3V0KGRhdGEuYWJvdXQpfVxuICAgICAgICAke05ld3MoZGF0YS5uZXdzKX1cbiAgICAgICAgJHtQcm9qZWN0cyhkYXRhLnByb2plY3RzKX1cbiAgICAgICAgJHtGb290ZXIoZGF0YS5hYm91dCl9XG4gICAgYDtcbiAgICBoYW5kbGVUb2dnbGVOZXdzSXRlbXMoZGF0YS5uZXdzKTtcbiAgICBoYW5kbGVOZXdzRmlsdGVyKGRhdGEubmV3cyk7XG4gICAgaGFuZGxlUHJvamVjdHNGaWx0ZXIoZGF0YS5wcm9qZWN0cyk7XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkJhcihwcm9qZWN0TmFtZSwgbmFtZSwgbmF2VGl0bGVzKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8bmF2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lIGZsZXgtY29udGFpbmVyIGNvbC02IHZlcnRpY2FsLWNlbnRlclwiPlxuICAgICAgICAgICAgPGgxPjxhPiR7bmFtZX08L2E+PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtaXRlbXMgZmxleC1jb250YWluZXIgY29sLTYgcGVyZmVjdC1jZW50ZXJcIj5cbiAgICAgICAgICAgICR7TmF2TGlua3MocHJvamVjdE5hbWUsIG5hdlRpdGxlcyl9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICAgIGA7XG59XG5cbmZ1bmN0aW9uIE5hdkxpbmtzKHByb2plY3ROYW1lLCBuYXZUaXRsZXMpIHtcbiAgICBjb25zdCBbIGFib3V0LCBuZXdzLCBwcm9qZWN0cyBdID0gbmF2VGl0bGVzO1xuICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gJ21haW4nKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWl0ZW0gYWJvdXRcIiBocmVmPVwiI1wiPiR7YWJvdXR9PC9hPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1pdGVtIG5ld3NcIiBocmVmPVwiI25ld3MtbG9jYXRpb25cIj4ke25ld3N9PC9hPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1pdGVtIHByb2plY3RzXCIgaHJlZj1cIiNwcm9qZWN0cy1sb2NhdGlvblwiPiR7cHJvamVjdHN9PC9hPlxuICAgICAgICBgO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWl0ZW1cIiBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtYXJyb3ctYWx0LWNpcmNsZS1sZWZ0XCI+PC9pPiBiYWNrIHRvIGhvbWVcbiAgICAgICAgPC9hPiAgICAgICAgICAgIFxuICAgICAgICBgO1xuICAgIH1cbn0iLCJjb25zdCBudW1OZXdzSXRlbXNUb1JlbmRlciA9IDU7XG5sZXQgc2hvdWxkU2hvd0FsbE5ld3NJdGVtcyA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzKG5ld3MpIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgaWQ9XCJuZXdzLWxvY2F0aW9uXCI+PC9kaXY+XG4gICAgPHNlY3Rpb24gaWQ9XCJuZXdzXCI+XG4gICAgICAgIDxoMT5OZXdzPC9oMT5cbiAgICAgICAgPGRpdiBpZD1cIm5ld3Mtc2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3cy1zZWFyY2hcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIE5ld3MuLi5cIj5cbiAgICAgICAgICAgIDxpIGlkPVwibmV3cy1zZWFyY2gtaWNvblwiIGNsYXNzPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJuZXdzLWxpc3RcIj5cbiAgICAgICAgICAgICR7c2hvdWxkU2hvd0FsbE5ld3NJdGVtcyA/XG4gICAgICAgICAgICAgICAgTmV3c0l0ZW1zKG5ld3MpIDpcbiAgICAgICAgICAgICAgICBOZXdzSXRlbXMobmV3cywgbnVtTmV3c0l0ZW1zVG9SZW5kZXIpXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGlkPVwibmV3cy1pdGVtLXRvZ2dsZVwiPlxuICAgICAgICAgICAgJHtzaG91bGRTaG93QWxsTmV3c0l0ZW1zID8gJ1NlZSBMZXNzJyA6ICdTZWUgQWxsJ31cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9zZWN0aW9uPlxuICAgIGA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOZXdzSXRlbXMobmV3cywgbnVtTmV3c0l0ZW1zID0gbnVsbCkge1xuICAgIGxldCBuID0gbnVtTmV3c0l0ZW1zID8gbnVtTmV3c0l0ZW1zIDogT2JqZWN0LmtleXMobmV3cykubGVuZ3RoO1xuICAgIHJldHVybiBuZXdzLnNsaWNlKDAsIG4pLm1hcChuZXdzSXRlbSA9PiBOZXdzSXRlbShuZXdzSXRlbSkpLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBOZXdzSXRlbShuZXdzSXRlbSkge1xuICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIGRhdGUgfSA9IG5ld3NJdGVtO1xuXG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwicm93IG5ld3MtaXRlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwXCI+XG4gICAgICAgICAgICAke2Rlc2NyaXB0aW9ufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0gXCJjb2wtMiBuZXdzLWRhdGUgdGV4dC1hbGlnblwiPlxuICAgICAgICAgICAgPGVtPiR7ZGF0ZX08L2VtPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xufVxuXG5mdW5jdGlvbiByZW5kZXJOZXdzSXRlbXMobmV3cywgc2hvd0FsbCkge1xuICAgIGNvbnN0IG5ld3NJdGVtcyA9IHNob3dBbGwgP1xuICAgICAgICAgICAgTmV3c0l0ZW1zKG5ld3MsIG51bU5ld3NJdGVtc1RvUmVuZGVyKSA6XG4gICAgICAgICAgICBOZXdzSXRlbXMobmV3cyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3MtbGlzdCcpLmlubmVySFRNTCA9IG5ld3NJdGVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVRvZ2dsZU5ld3NJdGVtcyhuZXdzKSB7XG4gICAgY29uc3QgbmV3c0l0ZW1Ub2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3cy1pdGVtLXRvZ2dsZScpO1xuICAgIG5ld3NJdGVtVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICByZW5kZXJOZXdzSXRlbXMobmV3cywgc2hvdWxkU2hvd0FsbE5ld3NJdGVtcyk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5pbm5lckhUTUwgPSBzaG91bGRTaG93QWxsTmV3c0l0ZW1zID8gJ1NlZSBBbGwnIDogJ1NlZSBMZXNzJztcbiAgICAgICAgc2hvdWxkU2hvd0FsbE5ld3NJdGVtcyA9ICFzaG91bGRTaG93QWxsTmV3c0l0ZW1zO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTmV3c0ZpbHRlcihuZXdzKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3Mtc2VhcmNoJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBldmVudCA9PiB7XG4gICAgICAgIGxldCBzZWFyY2hUZXh0ID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCBmaWx0ZXJlZE5ld3MgPSBuZXdzLmZpbHRlcihuZXdzSXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3c0l0ZW0uZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXh0KSB8fFxuICAgICAgICAgICAgICAgICAgIG5ld3NJdGVtLmRhdGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbmRlck5ld3NJdGVtcyhmaWx0ZXJlZE5ld3MsICFzaG91bGRTaG93QWxsTmV3c0l0ZW1zKTtcbiAgICAgICAgY29uc3QgbmV3c0l0ZW1Ub2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3cy1pdGVtLXRvZ2dsZScpO1xuICAgICAgICBuZXdzSXRlbVRvZ2dsZS5zdHlsZS5kaXNwbGF5ID0gc2VhcmNoVGV4dCA/ICdub25lJyA6ICdpbmxpbmUtYmxvY2snO1xuICAgIH0pO1xufSIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdE5hbWVFcnJvcihwcm9qZWN0TmFtZSwgZGF0YSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMT40MDAgQmFkIFJlcXVlc3Q8L2gxPlxuICAgICAgICA8cD5UaGUgdmFsdWUgcHJvdmlkZWQgZm9yIHRoZSAncHJvamVjdCcgcXVlcnkgcGFyYW1ldGVyIGlzIGludmFsaWQuPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzdHJvbmc+VmFsdWUgUHJvdmlkZWQ6PC9zdHJvbmc+ICR7cHJvamVjdE5hbWV9PGJyPlxuICAgICAgICAgICAgPHN0cm9uZz5WYWxpZCBWYWx1ZXM6PC9zdHJvbmc+ICR7T2JqZWN0LmtleXMoZGF0YS5wcm9qZWN0cykuam9pbignLCAnKX1cbiAgICAgICAgPC9wPlxuICAgIGA7XG59IiwiaW1wb3J0IE5hdkJhciBmcm9tICcuL05hdkJhci5qcyc7XG5pbXBvcnQgeyBQcm9qZWN0RGV0YWlscyB9IGZyb20gJy4vUHJvamVjdHMuanMnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RQYWdlKHByb2plY3ROYW1lLCBkYXRhKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmlubmVySFRNTCA9IGBcbiAgICAgICAgJHtOYXZCYXIocHJvamVjdE5hbWUsIGRhdGEuYWJvdXQubmFtZSwgT2JqZWN0LmtleXMoZGF0YSkpfVxuICAgICAgICA8c2VjdGlvbiBpZD1cInByb2plY3QtcGFnZVwiPlxuICAgICAgICAgICAgJHtQcm9qZWN0RGV0YWlscyhnZXRQcm9qZWN0KHByb2plY3ROYW1lLCBkYXRhLnByb2plY3RzKSl9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgJHtGb290ZXIoZGF0YS5hYm91dCl9XG4gICAgYDtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFByb2plY3QgPSAocHJvamVjdE5hbWUsIHByb2plY3RzKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IHByb2plY3ROYW1lKTtcbn0iLCJpbXBvcnQgeyBpc01haW5QYWdlIH0gZnJvbSAnLi4vaW5kZXguanMnO1xuXG5jb25zdCBhbGxQcm9qZWN0c1RhZyA9ICdBbGwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBpZD1cInByb2plY3RzLWxvY2F0aW9uXCI+PC9kaXY+XG4gICAgPHNlY3Rpb24gaWQ9XCJwcm9qZWN0c1wiPlxuICAgICAgICA8aDE+UHJvamVjdHM8L2gxPlxuICAgICAgICA8c3BhbiBpZD1cInByb2plY3RzLWZpbHRlclwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAke1Byb2plY3RzRmlsdGVyKHByb2plY3RzKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2IGlkPVwicHJvamVjdHMtbGlzdFwiPlxuICAgICAgICAgICAgJHtQcm9qZWN0c0xpc3QocHJvamVjdHMpfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgYDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRHVwbGljYXRlcyhhcnJheSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyYXkpKTtcbn1cblxuZnVuY3Rpb24gUHJvamVjdHNGaWx0ZXIocHJvamVjdHMpIHtcbiAgICBsZXQgcHJvamVjdFRhZ3MgPSBwcm9qZWN0cy5yZWR1Y2UoKGFjYywgcHJvamVjdCkgPT4gYWNjLmNvbmNhdChwcm9qZWN0LnRhZ3MpLCBbXSk7XG4gICAgcHJvamVjdFRhZ3MgPSByZW1vdmVEdXBsaWNhdGVzKHByb2plY3RUYWdzLm1hcCh0YWcgPT4gdGFnLnRleHQpKTtcbiAgICBwcm9qZWN0VGFncy51bnNoaWZ0KGFsbFByb2plY3RzVGFnKTtcbiAgICBwcm9qZWN0VGFncy5zb3J0KCk7XG4gICAgcmV0dXJuIHByb2plY3RUYWdzLm1hcCh0YWcgPT4ge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImZpbHRlclwiIHZhbHVlPVwiJHt0YWcudG9Mb3dlckNhc2UoKX1cIj5cbiAgICAgICAgICAgIDxhPiR7dGFnfTwvYT5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgYDtcbiAgICB9KS5qb2luKCcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFByb2plY3RzTGlzdChwcm9qZWN0cykge1xuICAgIHJldHVybiBwcm9qZWN0cy5tYXAocHJvamVjdCA9PiBQcm9qZWN0RGV0YWlscyhwcm9qZWN0KSkuam9pbignJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0RGV0YWlscyhwcm9qZWN0KSB7XG4gICAgY29uc3Qge1xuICAgICAgICBpZCwgdGl0bGUsIGRhdGUsIGxhbmd1YWdlcywgZGVzY3JpcHRpb24sXG4gICAgICAgIGRldGFpbGVkRGVzY3JpcHRpb24sIHRhZ3MsIGdpdGh1YiwgaW1hZ2VcbiAgICB9ID0gcHJvamVjdDtcblxuICAgIHJldHVybiBgXG4gICAgPGRpdiAke2lzTWFpblBhZ2UgPyAgJ2NsYXNzPVwicHJvamVjdCByb3dcIicgOiAnaWQ9XCJwcm9qZWN0LWRldGFpbHNcIiBjbGFzcz1cInJvd1wiJ30+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBwcm9qZWN0LWluZm9cIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgJHtpc01haW5QYWdlID8gYDxhIGhyZWY9XCJpbmRleC5odG1sP3Byb2plY3Q9JHtpZH1cIj48c3Ryb25nPiR7dGl0bGV9PC9zdHJvbmc+PC9hPmAgOiBgPGgxPiR7dGl0bGV9PC9oMT5gfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkRhdGU6PC9zdHJvbmc+ICR7ZGF0ZX08YnI+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+JHtpc1Npbmd1bGFyKGxhbmd1YWdlcykgPyAnTGFuZ3VhZ2UnIDogJ0xhbmd1YWdlcyd9Ojwvc3Ryb25nPiAke2xhbmd1YWdlc31cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+JHtpc01haW5QYWdlID8gZGVzY3JpcHRpb24gOiBkZXRhaWxlZERlc2NyaXB0aW9ufTwvcD4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxwPkNoZWNrb3V0IHRoZSBjb2RlIG9uIEdpdEh1YiA8YSBocmVmPVwiJHtnaXRodWJ9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+aGVyZTwvYT4uPC9wPlxuICAgICAgICAgICAgICAgICR7UHJvamVjdFRhZ3ModGFncyl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBwcm9qZWN0LWltZ1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlfVwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xufVxuXG5jb25zdCBpc1Npbmd1bGFyID0gc3RyID0+IHN0ci5zcGxpdCgnLCAnKS5sZW5ndGggPD0gMTtcblxuZnVuY3Rpb24gUHJvamVjdFRhZ3ModGFncykge1xuICAgIHJldHVybiB0YWdzLm1hcCh0YWcgPT4gXG4gICAgICAgIGA8c3BhbiBjbGFzcz1cInRhZ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJHt0YWcuY29sb3J9XCI+JHt0YWcudGV4dH08L3NwYW4+YFxuICAgICkuam9pbignJyk7XG4gICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVQcm9qZWN0c0ZpbHRlcihwcm9qZWN0cykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwcm9qZWN0cy1maWx0ZXIgaW5wdXRbbmFtZT1cImZpbHRlclwiXScpLmZvckVhY2gocmFkaW9CdXR0b24gPT4ge1xuICAgICAgICByYWRpb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBsZXQgZmlsdGVyVGFnID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkUHJvamVjdHMgPSBwcm9qZWN0cy5zbGljZSgpO1xuICAgICAgICAgICAgaWYgKGZpbHRlclRhZyAhPSBhbGxQcm9qZWN0c1RhZy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRQcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvd2VyY2FzZVRhZ3MgPSBwcm9qZWN0LnRhZ3MubWFwKHRhZyA9PiB0YWcudGV4dC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvd2VyY2FzZVRhZ3MuaW5jbHVkZXMoZmlsdGVyVGFnLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMtbGlzdCcpLmlubmVySFRNTCA9IFByb2plY3RzTGlzdChmaWx0ZXJlZFByb2plY3RzKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59IiwiaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vY29tcG9uZW50cy9NYWluUGFnZS5qcyc7XG5pbXBvcnQgUHJvamVjdFBhZ2UsIHsgZ2V0UHJvamVjdCB9IGZyb20gJy4vY29tcG9uZW50cy9Qcm9qZWN0UGFnZS5qcyc7XG5pbXBvcnQgUHJvamVjdE5hbWVFcnJvciBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdE5hbWVFcnJvci5qcyc7XG5cbmV4cG9ydCBsZXQgaXNNYWluUGFnZSA9IGZhbHNlO1xuXG5mZXRjaCgnYXNzZXRzL2RhdGEuanNvbicpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcXVlcnlQYXJhbXMuZ2V0KCdwcm9qZWN0Jyk7XG4gICAgICAgIGlmIChwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgcHJvamVjdE5hbWVJc1ZhbGlkKHByb2plY3ROYW1lLCBkYXRhLnByb2plY3RzKVxuICAgICAgICAgICAgICAgID8gUHJvamVjdFBhZ2UocHJvamVjdE5hbWUsIGRhdGEpXG4gICAgICAgICAgICAgICAgOiBQcm9qZWN0TmFtZUVycm9yKHByb2plY3ROYW1lLCBkYXRhLnByb2plY3RzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzTWFpblBhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgTWFpblBhZ2UoZGF0YSk7XG4gICAgICAgIH1cbn0pO1xuXG5jb25zdCBwcm9qZWN0TmFtZUlzVmFsaWQgPSAocHJvamVjdE5hbWUsIHByb2plY3RzKSA9PiB7XG4gICAgcmV0dXJuICEhZ2V0UHJvamVjdChwcm9qZWN0TmFtZSwgcHJvamVjdHMpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
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
    <i class="fab fa-ethereum news-icon"></i>
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

function Skill({title, icons, animationClass, description}) {
    return `
    <div class="skill">
        <span class="skill-icon ${animationClass}">${Icons(icons)}</span>
        <h4 class="skill-title">${title}</h4>
        <p class="skill-description">${description}</p>
    </div>
    `;
}

function Icons(icons) {
  return icons.reduce((acc, icon) =>
    `${acc}<i class="fas fa-plus skill-icon-concatenator"></i>${icon}`
  );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5QYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXdzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2plY3ROYW1lRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2tpbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNo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QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRDtBQUNzQjtBQUNOOztBQUV6RDs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwwRUFBVztBQUM3QixrQkFBa0IsK0VBQWdCO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLFlBQVksdUVBQVE7QUFDcEI7QUFDQSxDQUFDOztBQUVEO0FBQ0EsYUFBYSw2RUFBVTtBQUN2QixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckFib3V0KGFib3V0KSB7XG4gICAgY29uc3QgeyBcbiAgICAgICAgXywgaW1hZ2UsIHRpdGxlLCBhZGRyZXNzLCBlbWFpbCwgcmVzdW1lLFxuICAgICAgICBsaW5rZWRpbiwgZ2l0aHViLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2VzXG4gICAgfSA9IGFib3V0O1xuXG4gICAgcmV0dXJuIGBcbiAgICA8c2VjdGlvbiBpZD1cImFib3V0XCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yIGxlZnQtcGFuZVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlfVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMCBhYm91dC1pbmZvXCI+XG4gICAgICAgICAgICA8cCBpZD1cImFib3V0LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz4ke3RpdGxlfTwvc3Ryb25nPjxicj5cbiAgICAgICAgICAgICAgICAke2FkZHJlc3N9PGJyPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86JHtlbWFpbH1cIj4ke2VtYWlsfTwvYT4gfFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3Jlc3VtZX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cImZhciBmYS1maWxlLWFsdFwiPjwvaT4gUmVzdW1lPC9hPiB8XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7bGlua2VkaW59XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYWIgZmEtbGlua2VkaW5cIj48L2k+PC9hPiB8XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7Z2l0aHVifVwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiZmFiIGZhLWdpdGh1YlwiPjwvaT48L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD4ke2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIGA7XG59IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoYWJvdXQsIGlzTWFpblBhZ2UpIHtcbiAgICByZXR1cm4gYFxuICAgIDxmb290ZXIgJHshaXNNYWluUGFnZSAmJiAnY2xhc3M9XCJib3JkZXJlZC1mb290ZXJcIid9PlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNvcHlyaWdodFwiPkNvcHlyaWdodCDCqSAke2Fib3V0Lm5hbWV9PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImZvb3Rlci1pY29uc1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiR7YWJvdXQubGlua2VkaW59XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYWIgZmEtbGlua2VkaW4gZmEtMnhcIj48L2k+PC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiR7YWJvdXQuZ2l0aHVifVwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwiZmFiIGZhLWdpdGh1YiBmYS0yeFwiPjwvaT48L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Zvb3Rlcj5cbiAgICBgO1xufSIsImltcG9ydCBOYXZCYXIgZnJvbSAnLi9OYXZCYXIuanMnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQuanMnO1xuaW1wb3J0IFNraWxscyBmcm9tICcuL1NraWxscy5qcyc7XG5pbXBvcnQgTmV3cywgeyBoYW5kbGVOZXdzRmlsdGVyLCBoYW5kbGVUb2dnbGVOZXdzSXRlbXMgfSBmcm9tICcuL05ld3MuanMnO1xuaW1wb3J0IFByb2plY3RzLCB7IGhhbmRsZVByb2plY3RzRmlsdGVyIH0gZnJvbSAnLi9Qcm9qZWN0cy5qcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpblBhZ2UoZGF0YSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5pbm5lckhUTUwgPSBgXG4gICAgICAgICR7TmF2QmFyKCdtYWluJywgZGF0YS5hYm91dC5uYW1lLCBPYmplY3Qua2V5cyhkYXRhKSl9XG4gICAgICAgICR7QWJvdXQoZGF0YS5hYm91dCl9XG4gICAgICAgICR7U2tpbGxzKGRhdGEuc2tpbGxzKX1cbiAgICAgICAgJHtQcm9qZWN0cyhkYXRhLnByb2plY3RzKX1cbiAgICAgICAgJHtOZXdzKGRhdGEubmV3cyl9XG4gICAgICAgICR7Rm9vdGVyKGRhdGEuYWJvdXQsIHRydWUpfVxuICAgIGA7XG4gICAgaGFuZGxlVG9nZ2xlTmV3c0l0ZW1zKGRhdGEubmV3cyk7XG4gICAgaGFuZGxlTmV3c0ZpbHRlcihkYXRhLm5ld3MpO1xuICAgIGhhbmRsZVByb2plY3RzRmlsdGVyKGRhdGEucHJvamVjdHMpO1xufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIocHJvamVjdE5hbWUsIG5hbWUsIG5hdlRpdGxlcykge1xuICAgIHJldHVybiBgXG4gICAgPG5hdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZSBmbGV4LWNvbnRhaW5lciBjb2wtNyB2ZXJ0aWNhbC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMT48YT4ke25hbWV9PC9hPjwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LWl0ZW1zIGZsZXgtY29udGFpbmVyIGNvbC01IHBlcmZlY3QtY2VudGVyXCI+XG4gICAgICAgICAgICAke05hdkxpbmtzKHByb2plY3ROYW1lLCBuYXZUaXRsZXMpfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgICBgO1xufVxuXG5mdW5jdGlvbiBOYXZMaW5rcyhwcm9qZWN0TmFtZSwgbmF2VGl0bGVzKSB7XG4gICAgY29uc3QgWyBhYm91dCwgc2tpbGxzLCBwcm9qZWN0cywgbmV3cyBdID0gbmF2VGl0bGVzO1xuICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gJ21haW4nKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWl0ZW0gYWJvdXRcIiBocmVmPVwiI1wiPiR7YWJvdXR9PC9hPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1pdGVtIHNraWxsc1wiIGhyZWY9XCIjc2tpbGxzLWxvY2F0aW9uXCI+JHtza2lsbHN9PC9hPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1pdGVtIHByb2plY3RzXCIgaHJlZj1cIiNwcm9qZWN0cy1sb2NhdGlvblwiPiR7cHJvamVjdHN9PC9hPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1pdGVtIG5ld3NcIiBocmVmPVwiI25ld3MtbG9jYXRpb25cIj4ke25ld3N9PC9hPlxuICAgICAgICBgO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWl0ZW0gYmFjay10by1ob21lXCIgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWFycm93LWFsdC1jaXJjbGUtbGVmdFwiPjwvaT4gYmFjayB0byBob21lXG4gICAgICAgIDwvYT4gICAgICAgICAgICBcbiAgICAgICAgYDtcbiAgICB9XG59IiwiY29uc3QgbnVtTmV3c0l0ZW1zVG9SZW5kZXIgPSA1O1xubGV0IHNob3VsZFNob3dBbGxOZXdzSXRlbXMgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3cyhuZXdzKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGlkPVwibmV3cy1sb2NhdGlvblwiPjwvZGl2PlxuICAgIDxzZWN0aW9uIGlkPVwibmV3c1wiPlxuICAgICAgICA8aDE+TmV3czwvaDE+XG4gICAgICAgIDxkaXYgaWQ9XCJuZXdzLXNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5ld3Mtc2VhcmNoXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBOZXdzLi4uXCI+XG4gICAgICAgICAgICA8aSBpZD1cIm5ld3Mtc2VhcmNoLWljb25cIiBjbGFzcz1cImZhcyBmYS1zZWFyY2hcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwibmV3cy1saXN0XCI+XG4gICAgICAgICAgICAke3Nob3VsZFNob3dBbGxOZXdzSXRlbXMgP1xuICAgICAgICAgICAgICAgIE5ld3NJdGVtcyhuZXdzKSA6XG4gICAgICAgICAgICAgICAgTmV3c0l0ZW1zKG5ld3MsIG51bU5ld3NJdGVtc1RvUmVuZGVyKVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cIm5ld3MtaXRlbS10b2dnbGVcIj5cbiAgICAgICAgICAgICR7c2hvdWxkU2hvd0FsbE5ld3NJdGVtcyA/ICdTZWUgTGVzcycgOiAnU2VlIEFsbCd9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvc2VjdGlvbj5cbiAgICBgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTmV3c0l0ZW1zKG5ld3MsIG51bU5ld3NJdGVtcyA9IG51bGwpIHtcbiAgICBsZXQgbiA9IG51bU5ld3NJdGVtcyA/IG51bU5ld3NJdGVtcyA6IE9iamVjdC5rZXlzKG5ld3MpLmxlbmd0aDtcbiAgICByZXR1cm4gbmV3cy5zbGljZSgwLCBuKS5tYXAobmV3c0l0ZW0gPT4gTmV3c0l0ZW0obmV3c0l0ZW0pKS5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gTmV3c0l0ZW0obmV3c0l0ZW0pIHtcbiAgICBjb25zdCB7IGRlc2NyaXB0aW9uLCBkYXRlIH0gPSBuZXdzSXRlbTtcblxuICAgIHJldHVybiBgXG4gICAgPGRpdiBjbGFzcz1cIm5ld3MtaXRlbVwiPlxuICAgIDxpIGNsYXNzPVwiZmFiIGZhLWV0aGVyZXVtIG5ld3MtaWNvblwiPjwvaT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBuZXdzLXRleHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTBcIj5cbiAgICAgICAgICAgICAgICAke2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSBcImNvbC0yIG5ld3MtZGF0ZSB0ZXh0LWFsaWduXCI+XG4gICAgICAgICAgICAgICAgPGVtPiR7ZGF0ZX08L2VtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck5ld3NJdGVtcyhuZXdzLCBzaG93QWxsKSB7XG4gICAgY29uc3QgbmV3c0l0ZW1zID0gc2hvd0FsbCA/XG4gICAgICAgICAgICBOZXdzSXRlbXMobmV3cywgbnVtTmV3c0l0ZW1zVG9SZW5kZXIpIDpcbiAgICAgICAgICAgIE5ld3NJdGVtcyhuZXdzKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3cy1saXN0JykuaW5uZXJIVE1MID0gbmV3c0l0ZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVG9nZ2xlTmV3c0l0ZW1zKG5ld3MpIHtcbiAgICBjb25zdCBuZXdzSXRlbVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdzLWl0ZW0tdG9nZ2xlJyk7XG4gICAgbmV3c0l0ZW1Ub2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIHJlbmRlck5ld3NJdGVtcyhuZXdzLCBzaG91bGRTaG93QWxsTmV3c0l0ZW1zKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9IHNob3VsZFNob3dBbGxOZXdzSXRlbXMgPyAnU2VlIEFsbCcgOiAnU2VlIExlc3MnO1xuICAgICAgICBpZiAoc2hvdWxkU2hvd0FsbE5ld3NJdGVtcylcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvI25ld3MtbG9jYXRpb25cIjtcbiAgICAgICAgc2hvdWxkU2hvd0FsbE5ld3NJdGVtcyA9ICFzaG91bGRTaG93QWxsTmV3c0l0ZW1zO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTmV3c0ZpbHRlcihuZXdzKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3Mtc2VhcmNoJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBldmVudCA9PiB7XG4gICAgICAgIGxldCBzZWFyY2hUZXh0ID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCBmaWx0ZXJlZE5ld3MgPSBuZXdzLmZpbHRlcihuZXdzSXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3c0l0ZW0uZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXh0KSB8fFxuICAgICAgICAgICAgICAgICAgIG5ld3NJdGVtLmRhdGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbmRlck5ld3NJdGVtcyhmaWx0ZXJlZE5ld3MsICFzaG91bGRTaG93QWxsTmV3c0l0ZW1zKTtcbiAgICAgICAgY29uc3QgbmV3c0l0ZW1Ub2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3cy1pdGVtLXRvZ2dsZScpO1xuICAgICAgICBuZXdzSXRlbVRvZ2dsZS5zdHlsZS5kaXNwbGF5ID0gc2VhcmNoVGV4dCA/ICdub25lJyA6ICdpbmxpbmUtYmxvY2snO1xuICAgIH0pO1xufSIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdE5hbWVFcnJvcihwcm9qZWN0TmFtZSwgZGF0YSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMT40MDAgQmFkIFJlcXVlc3Q8L2gxPlxuICAgICAgICA8cD5UaGUgdmFsdWUgcHJvdmlkZWQgZm9yIHRoZSAncHJvamVjdCcgcXVlcnkgcGFyYW1ldGVyIGlzIGludmFsaWQuPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzdHJvbmc+VmFsdWUgUHJvdmlkZWQ6PC9zdHJvbmc+ICR7cHJvamVjdE5hbWV9PGJyPlxuICAgICAgICAgICAgPHN0cm9uZz5WYWxpZCBWYWx1ZXM6PC9zdHJvbmc+ICR7T2JqZWN0LmtleXMoZGF0YS5wcm9qZWN0cykuam9pbignLCAnKX1cbiAgICAgICAgPC9wPlxuICAgIGA7XG59IiwiaW1wb3J0IE5hdkJhciBmcm9tICcuL05hdkJhci5qcyc7XG5pbXBvcnQgeyBQcm9qZWN0RGV0YWlscyB9IGZyb20gJy4vUHJvamVjdHMuanMnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RQYWdlKHByb2plY3ROYW1lLCBkYXRhKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmlubmVySFRNTCA9IGBcbiAgICAgICAgJHtOYXZCYXIocHJvamVjdE5hbWUsIGRhdGEuYWJvdXQubmFtZSwgT2JqZWN0LmtleXMoZGF0YSkpfVxuICAgICAgICA8c2VjdGlvbiBpZD1cInByb2plY3QtcGFnZVwiPlxuICAgICAgICAgICAgJHtQcm9qZWN0RGV0YWlscyhnZXRQcm9qZWN0KHByb2plY3ROYW1lLCBkYXRhLnByb2plY3RzKSl9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgJHtGb290ZXIoZGF0YS5hYm91dCwgZmFsc2UpfVxuICAgIGA7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3ROYW1lLCBwcm9qZWN0cykgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5pZCA9PSBwcm9qZWN0TmFtZSk7XG59IiwiaW1wb3J0IHsgaXNNYWluUGFnZSB9IGZyb20gJy4uL2luZGV4LmpzJztcblxuY29uc3QgYWxsUHJvamVjdHNUYWcgPSAnQWxsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMocHJvamVjdHMpIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgaWQ9XCJwcm9qZWN0cy1sb2NhdGlvblwiPjwvZGl2PlxuICAgIDxzZWN0aW9uIGlkPVwicHJvamVjdHNcIj5cbiAgICAgICAgPGgxPlByb2plY3RzPC9oMT5cbiAgICAgICAgPHNwYW4gaWQ9XCJwcm9qZWN0cy1maWx0ZXJcIiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgJHtQcm9qZWN0c0ZpbHRlcihwcm9qZWN0cyl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBpZD1cInByb2plY3RzLWxpc3RcIj5cbiAgICAgICAgICAgICR7UHJvamVjdHNMaXN0KHByb2plY3RzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIGA7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZXMoYXJyYXkpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFycmF5KSk7XG59XG5cbmZ1bmN0aW9uIFByb2plY3RzRmlsdGVyKHByb2plY3RzKSB7XG4gICAgbGV0IHByb2plY3RUYWdzID0gcHJvamVjdHMucmVkdWNlKChhY2MsIHByb2plY3QpID0+IGFjYy5jb25jYXQocHJvamVjdC50YWdzKSwgW10pO1xuICAgIHByb2plY3RUYWdzID0gcmVtb3ZlRHVwbGljYXRlcyhwcm9qZWN0VGFncy5tYXAodGFnID0+IHRhZy50ZXh0KSk7XG4gICAgcHJvamVjdFRhZ3MudW5zaGlmdChhbGxQcm9qZWN0c1RhZyk7XG4gICAgcHJvamVjdFRhZ3Muc29ydCgpO1xuICAgIHJldHVybiBwcm9qZWN0VGFncy5tYXAodGFnID0+IHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmaWx0ZXJcIiB2YWx1ZT1cIiR7dGFnLnRvTG93ZXJDYXNlKCl9XCI+XG4gICAgICAgICAgICA8YT4ke3RhZ308L2E+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIGA7XG4gICAgfSkuam9pbignJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0c0xpc3QocHJvamVjdHMpIHtcbiAgICByZXR1cm4gcHJvamVjdHMubWFwKHByb2plY3QgPT4gUHJvamVjdERldGFpbHMocHJvamVjdCkpLmpvaW4oJycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUHJvamVjdERldGFpbHMocHJvamVjdCkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgaWQsIHRpdGxlLCBkYXRlLCBsYW5ndWFnZXMsIGRlc2NyaXB0aW9uLFxuICAgICAgICBkZXRhaWxlZERlc2NyaXB0aW9uLCB0YWdzLCBnaXRodWIsIGltYWdlXG4gICAgfSA9IHByb2plY3Q7XG5cbiAgICByZXR1cm4gYFxuICAgIDxkaXYgJHtpc01haW5QYWdlID8gICdjbGFzcz1cInByb2plY3Qgcm93XCInIDogJ2lkPVwicHJvamVjdC1kZXRhaWxzXCIgY2xhc3M9XCJyb3dcIid9PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgcHJvamVjdC1pbmZvXCI+XG4gICAgICAgICAgICAke2lzTWFpblBhZ2UgP1xuICAgICAgICAgICAgICAgIGA8aDM+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvP3Byb2plY3Q9JHtpZH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+JHt0aXRsZX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvaDM+YCA6XG4gICAgICAgICAgICAgICAgYDxoMT4ke3RpdGxlfTwvaDE+YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5EYXRlOjwvc3Ryb25nPiAke2RhdGV9PGJyPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPiR7aXNTaW5ndWxhcihsYW5ndWFnZXMpID8gJ0xhbmd1YWdlJyA6ICdMYW5ndWFnZXMnfTo8L3N0cm9uZz4gJHtsYW5ndWFnZXN9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPiR7aXNNYWluUGFnZSA/IGRlc2NyaXB0aW9uIDogZGV0YWlsZWREZXNjcmlwdGlvbn08L3A+ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8cD5DaGVja291dCB0aGUgY29kZSBvbiBHaXRIdWIgPGEgaHJlZj1cIiR7Z2l0aHVifVwiIHRhcmdldD1cIl9ibGFua1wiPmhlcmU8L2E+LjwvcD5cbiAgICAgICAgICAgICAgICAke1Byb2plY3RUYWdzKHRhZ3MpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgcHJvamVjdC1pbWdcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZX1cIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbn1cblxuY29uc3QgaXNTaW5ndWxhciA9IHN0ciA9PiBzdHIuc3BsaXQoJywgJykubGVuZ3RoIDw9IDE7XG5cbmZ1bmN0aW9uIFByb2plY3RUYWdzKHRhZ3MpIHtcbiAgICByZXR1cm4gdGFncy5tYXAodGFnID0+IFxuICAgICAgICBgPHNwYW4gY2xhc3M9XCJ0YWdcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICR7dGFnLmNvbG9yfVwiPiR7dGFnLnRleHR9PC9zcGFuPmBcbiAgICApLmpvaW4oJycpO1xuICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUHJvamVjdHNGaWx0ZXIocHJvamVjdHMpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcHJvamVjdHMtZmlsdGVyIGlucHV0W25hbWU9XCJmaWx0ZXJcIl0nKS5mb3JFYWNoKHJhZGlvQnV0dG9uID0+IHtcbiAgICAgICAgcmFkaW9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgbGV0IGZpbHRlclRhZyA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFByb2plY3RzID0gcHJvamVjdHMuc2xpY2UoKTtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJUYWcgIT0gYWxsUHJvamVjdHNUYWcudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkUHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsb3dlcmNhc2VUYWdzID0gcHJvamVjdC50YWdzLm1hcCh0YWcgPT4gdGFnLnRleHQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb3dlcmNhc2VUYWdzLmluY2x1ZGVzKGZpbHRlclRhZy50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzLWxpc3QnKS5pbm5lckhUTUwgPSBQcm9qZWN0c0xpc3QoZmlsdGVyZWRQcm9qZWN0cyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNraWxscyh7dGVjaG5pY2FsLCBub250ZWNobmljYWx9KSB7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGlkPVwic2tpbGxzLWxvY2F0aW9uXCI+PC9kaXY+XG4gICAgPHNlY3Rpb24gaWQ9XCJza2lsbHNcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwic2tpbGxzLWhlYWRlclwiPlRlY2huaWNhbCBTa2lsbHM8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICR7dGVjaG5pY2FsLm1hcChza2lsbCA9PiBTa2lsbChza2lsbCkpLmpvaW4oJycpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxIGNsYXNzPVwic2tpbGxzLWhlYWRlclwiPk5vbi1UZWNobmljYWwgU2tpbGxzPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNraWxscy1jb250YWluZXJcIj5cbiAgICAgICAgICAke25vbnRlY2huaWNhbC5tYXAoc2tpbGwgPT4gU2tpbGwoc2tpbGwpKS5qb2luKCcnKX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIGA7XG59XG5cbmZ1bmN0aW9uIFNraWxsKHt0aXRsZSwgaWNvbnMsIGFuaW1hdGlvbkNsYXNzLCBkZXNjcmlwdGlvbn0pIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3M9XCJza2lsbFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNraWxsLWljb24gJHthbmltYXRpb25DbGFzc31cIj4ke0ljb25zKGljb25zKX08L3NwYW4+XG4gICAgICAgIDxoNCBjbGFzcz1cInNraWxsLXRpdGxlXCI+JHt0aXRsZX08L2g0PlxuICAgICAgICA8cCBjbGFzcz1cInNraWxsLWRlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L3A+XG4gICAgPC9kaXY+XG4gICAgYDtcbn1cblxuZnVuY3Rpb24gSWNvbnMoaWNvbnMpIHtcbiAgcmV0dXJuIGljb25zLnJlZHVjZSgoYWNjLCBpY29uKSA9PlxuICAgIGAke2FjY308aSBjbGFzcz1cImZhcyBmYS1wbHVzIHNraWxsLWljb24tY29uY2F0ZW5hdG9yXCI+PC9pPiR7aWNvbn1gXG4gICk7XG59IiwiaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vY29tcG9uZW50cy9NYWluUGFnZS5qcyc7XG5pbXBvcnQgUHJvamVjdFBhZ2UsIHsgZ2V0UHJvamVjdCB9IGZyb20gJy4vY29tcG9uZW50cy9Qcm9qZWN0UGFnZS5qcyc7XG5pbXBvcnQgUHJvamVjdE5hbWVFcnJvciBmcm9tICcuL2NvbXBvbmVudHMvUHJvamVjdE5hbWVFcnJvci5qcyc7XG5cbmV4cG9ydCBsZXQgaXNNYWluUGFnZSA9IGZhbHNlO1xuXG5mZXRjaCgnYXNzZXRzL2RhdGEuanNvbicpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcXVlcnlQYXJhbXMuZ2V0KCdwcm9qZWN0Jyk7XG4gICAgICAgIGlmIChwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgcHJvamVjdE5hbWVJc1ZhbGlkKHByb2plY3ROYW1lLCBkYXRhLnByb2plY3RzKVxuICAgICAgICAgICAgICAgID8gUHJvamVjdFBhZ2UocHJvamVjdE5hbWUsIGRhdGEpXG4gICAgICAgICAgICAgICAgOiBQcm9qZWN0TmFtZUVycm9yKHByb2plY3ROYW1lLCBkYXRhLnByb2plY3RzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzTWFpblBhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgTWFpblBhZ2UoZGF0YSk7XG4gICAgICAgIH1cbn0pO1xuXG5jb25zdCBwcm9qZWN0TmFtZUlzVmFsaWQgPSAocHJvamVjdE5hbWUsIHByb2plY3RzKSA9PiB7XG4gICAgcmV0dXJuICEhZ2V0UHJvamVjdChwcm9qZWN0TmFtZSwgcHJvamVjdHMpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
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
        <img src="assets/background.png" alt="background-image" id="about-background"/>
        <div id="about-content">
            <div class="col-2 left-pane">
                <img src="${image}" id="about-profile">
            </div>
            <div id="about-info" class="col-10">
                <p id="about-title">
                    <strong>${title}</strong><br>
                    ${address}<br>
                    <a href="mailto:${email}">${email}</a> |
                    <a href="${resume}" target="_blank"><i class="far fa-file-alt"></i> Resume</a>
                </p>
                <p>${description}</p>
            </div>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5QYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXdzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2plY3ROYW1lRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2tpbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNo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QUFBQTtBQUFnRDtBQUNzQjtBQUNOOztBQUV6RDs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwwRUFBVztBQUM3QixrQkFBa0IsK0VBQWdCO0FBQ2xDLFNBQVM7QUFDVDtBQUNBLFlBQVksdUVBQVE7QUFDcEI7QUFDQSxDQUFDOztBQUVEO0FBQ0EsYUFBYSw2RUFBVTtBQUN2QixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckFib3V0KGFib3V0KSB7XG4gICAgY29uc3QgeyBcbiAgICAgICAgXywgaW1hZ2UsIHRpdGxlLCBhZGRyZXNzLCBlbWFpbCwgcmVzdW1lLFxuICAgICAgICBsaW5rZWRpbiwgZ2l0aHViLCBkZXNjcmlwdGlvbiwgbGFuZ3VhZ2VzXG4gICAgfSA9IGFib3V0O1xuXG4gICAgcmV0dXJuIGBcbiAgICA8c2VjdGlvbiBpZD1cImFib3V0XCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvYmFja2dyb3VuZC5wbmdcIiBhbHQ9XCJiYWNrZ3JvdW5kLWltYWdlXCIgaWQ9XCJhYm91dC1iYWNrZ3JvdW5kXCIvPlxuICAgICAgICA8ZGl2IGlkPVwiYWJvdXQtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yIGxlZnQtcGFuZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZX1cIiBpZD1cImFib3V0LXByb2ZpbGVcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImFib3V0LWluZm9cIiBjbGFzcz1cImNvbC0xMFwiPlxuICAgICAgICAgICAgICAgIDxwIGlkPVwiYWJvdXQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz4ke3RpdGxlfTwvc3Ryb25nPjxicj5cbiAgICAgICAgICAgICAgICAgICAgJHthZGRyZXNzfTxicj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzoke2VtYWlsfVwiPiR7ZW1haWx9PC9hPiB8XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3Jlc3VtZX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cImZhciBmYS1maWxlLWFsdFwiPjwvaT4gUmVzdW1lPC9hPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD4ke2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgYDtcbn0iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcihhYm91dCwgaXNNYWluUGFnZSkge1xuICAgIHJldHVybiBgXG4gICAgPGZvb3RlciAkeyFpc01haW5QYWdlICYmICdjbGFzcz1cImJvcmRlcmVkLWZvb3RlclwiJ30+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY29weXJpZ2h0XCI+Q29weXJpZ2h0IMKpICR7YWJvdXQubmFtZX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZm9vdGVyLWljb25zXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiJHthYm91dC5saW5rZWRpbn1cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cImZhYiBmYS1saW5rZWRpbiBmYS0yeFwiPjwvaT48L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiJHthYm91dC5naXRodWJ9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3M9XCJmYWIgZmEtZ2l0aHViIGZhLTJ4XCI+PC9pPjwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvZm9vdGVyPlxuICAgIGA7XG59IiwiaW1wb3J0IE5hdkJhciBmcm9tICcuL05hdkJhci5qcyc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9BYm91dC5qcyc7XG5pbXBvcnQgU2tpbGxzIGZyb20gJy4vU2tpbGxzLmpzJztcbmltcG9ydCBOZXdzLCB7IGhhbmRsZU5ld3NGaWx0ZXIsIGhhbmRsZVRvZ2dsZU5ld3NJdGVtcyB9IGZyb20gJy4vTmV3cy5qcyc7XG5pbXBvcnQgUHJvamVjdHMsIHsgaGFuZGxlUHJvamVjdHNGaWx0ZXIgfSBmcm9tICcuL1Byb2plY3RzLmpzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluUGFnZShkYXRhKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmlubmVySFRNTCA9IGBcbiAgICAgICAgJHtOYXZCYXIoJ21haW4nLCBkYXRhLmFib3V0Lm5hbWUsIE9iamVjdC5rZXlzKGRhdGEpKX1cbiAgICAgICAgJHtBYm91dChkYXRhLmFib3V0KX1cbiAgICAgICAgJHtTa2lsbHMoZGF0YS5za2lsbHMpfVxuICAgICAgICAke1Byb2plY3RzKGRhdGEucHJvamVjdHMpfVxuICAgICAgICAke05ld3MoZGF0YS5uZXdzKX1cbiAgICAgICAgJHtGb290ZXIoZGF0YS5hYm91dCwgdHJ1ZSl9XG4gICAgYDtcbiAgICBoYW5kbGVUb2dnbGVOZXdzSXRlbXMoZGF0YS5uZXdzKTtcbiAgICBoYW5kbGVOZXdzRmlsdGVyKGRhdGEubmV3cyk7XG4gICAgaGFuZGxlUHJvamVjdHNGaWx0ZXIoZGF0YS5wcm9qZWN0cyk7XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkJhcihwcm9qZWN0TmFtZSwgbmFtZSwgbmF2VGl0bGVzKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8bmF2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lIGZsZXgtY29udGFpbmVyIGNvbC03IHZlcnRpY2FsLWNlbnRlclwiPlxuICAgICAgICAgICAgPGgxPjxhPiR7bmFtZX08L2E+PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtaXRlbXMgZmxleC1jb250YWluZXIgY29sLTUgcGVyZmVjdC1jZW50ZXJcIj5cbiAgICAgICAgICAgICR7TmF2TGlua3MocHJvamVjdE5hbWUsIG5hdlRpdGxlcyl9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICAgIGA7XG59XG5cbmZ1bmN0aW9uIE5hdkxpbmtzKHByb2plY3ROYW1lLCBuYXZUaXRsZXMpIHtcbiAgICBjb25zdCBbIGFib3V0LCBza2lsbHMsIHByb2plY3RzLCBuZXdzIF0gPSBuYXZUaXRsZXM7XG4gICAgaWYgKHByb2plY3ROYW1lID09PSAnbWFpbicpIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtaXRlbSBhYm91dFwiIGhyZWY9XCIjXCI+JHthYm91dH08L2E+XG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWl0ZW0gc2tpbGxzXCIgaHJlZj1cIiNza2lsbHMtbG9jYXRpb25cIj4ke3NraWxsc308L2E+XG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWl0ZW0gcHJvamVjdHNcIiBocmVmPVwiI3Byb2plY3RzLWxvY2F0aW9uXCI+JHtwcm9qZWN0c308L2E+XG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWl0ZW0gbmV3c1wiIGhyZWY9XCIjbmV3cy1sb2NhdGlvblwiPiR7bmV3c308L2E+XG4gICAgICAgIGA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtaXRlbSBiYWNrLXRvLWhvbWVcIiBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtYXJyb3ctYWx0LWNpcmNsZS1sZWZ0XCI+PC9pPiBiYWNrIHRvIGhvbWVcbiAgICAgICAgPC9hPiAgICAgICAgICAgIFxuICAgICAgICBgO1xuICAgIH1cbn0iLCJjb25zdCBudW1OZXdzSXRlbXNUb1JlbmRlciA9IDU7XG5sZXQgc2hvdWxkU2hvd0FsbE5ld3NJdGVtcyA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzKG5ld3MpIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgaWQ9XCJuZXdzLWxvY2F0aW9uXCI+PC9kaXY+XG4gICAgPHNlY3Rpb24gaWQ9XCJuZXdzXCI+XG4gICAgICAgIDxoMT5OZXdzPC9oMT5cbiAgICAgICAgPGRpdiBpZD1cIm5ld3Mtc2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3cy1zZWFyY2hcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIE5ld3MuLi5cIj5cbiAgICAgICAgICAgIDxpIGlkPVwibmV3cy1zZWFyY2gtaWNvblwiIGNsYXNzPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJuZXdzLWxpc3RcIj5cbiAgICAgICAgICAgICR7c2hvdWxkU2hvd0FsbE5ld3NJdGVtcyA/XG4gICAgICAgICAgICAgICAgTmV3c0l0ZW1zKG5ld3MpIDpcbiAgICAgICAgICAgICAgICBOZXdzSXRlbXMobmV3cywgbnVtTmV3c0l0ZW1zVG9SZW5kZXIpXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGlkPVwibmV3cy1pdGVtLXRvZ2dsZVwiPlxuICAgICAgICAgICAgJHtzaG91bGRTaG93QWxsTmV3c0l0ZW1zID8gJ1NlZSBMZXNzJyA6ICdTZWUgQWxsJ31cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9zZWN0aW9uPlxuICAgIGA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOZXdzSXRlbXMobmV3cywgbnVtTmV3c0l0ZW1zID0gbnVsbCkge1xuICAgIGxldCBuID0gbnVtTmV3c0l0ZW1zID8gbnVtTmV3c0l0ZW1zIDogT2JqZWN0LmtleXMobmV3cykubGVuZ3RoO1xuICAgIHJldHVybiBuZXdzLnNsaWNlKDAsIG4pLm1hcChuZXdzSXRlbSA9PiBOZXdzSXRlbShuZXdzSXRlbSkpLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBOZXdzSXRlbShuZXdzSXRlbSkge1xuICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIGRhdGUgfSA9IG5ld3NJdGVtO1xuXG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwibmV3cy1pdGVtXCI+XG4gICAgPGkgY2xhc3M9XCJmYWIgZmEtZXRoZXJldW0gbmV3cy1pY29uXCI+PC9pPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG5ld3MtdGV4dFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMFwiPlxuICAgICAgICAgICAgICAgICR7ZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9IFwiY29sLTIgbmV3cy1kYXRlIHRleHQtYWxpZ25cIj5cbiAgICAgICAgICAgICAgICA8ZW0+JHtkYXRlfTwvZW0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTmV3c0l0ZW1zKG5ld3MsIHNob3dBbGwpIHtcbiAgICBjb25zdCBuZXdzSXRlbXMgPSBzaG93QWxsID9cbiAgICAgICAgICAgIE5ld3NJdGVtcyhuZXdzLCBudW1OZXdzSXRlbXNUb1JlbmRlcikgOlxuICAgICAgICAgICAgTmV3c0l0ZW1zKG5ld3MpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdzLWxpc3QnKS5pbm5lckhUTUwgPSBuZXdzSXRlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVUb2dnbGVOZXdzSXRlbXMobmV3cykge1xuICAgIGNvbnN0IG5ld3NJdGVtVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3MtaXRlbS10b2dnbGUnKTtcbiAgICBuZXdzSXRlbVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgcmVuZGVyTmV3c0l0ZW1zKG5ld3MsIHNob3VsZFNob3dBbGxOZXdzSXRlbXMpO1xuICAgICAgICBldmVudC50YXJnZXQuaW5uZXJIVE1MID0gc2hvdWxkU2hvd0FsbE5ld3NJdGVtcyA/ICdTZWUgQWxsJyA6ICdTZWUgTGVzcyc7XG4gICAgICAgIGlmIChzaG91bGRTaG93QWxsTmV3c0l0ZW1zKVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi8jbmV3cy1sb2NhdGlvblwiO1xuICAgICAgICBzaG91bGRTaG93QWxsTmV3c0l0ZW1zID0gIXNob3VsZFNob3dBbGxOZXdzSXRlbXM7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVOZXdzRmlsdGVyKG5ld3MpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3cy1zZWFyY2gnKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IHNlYXJjaFRleHQgPSBldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IGZpbHRlcmVkTmV3cyA9IG5ld3MuZmlsdGVyKG5ld3NJdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXdzSXRlbS5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgbmV3c0l0ZW0uZGF0ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFRleHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVuZGVyTmV3c0l0ZW1zKGZpbHRlcmVkTmV3cywgIXNob3VsZFNob3dBbGxOZXdzSXRlbXMpO1xuICAgICAgICBjb25zdCBuZXdzSXRlbVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdzLWl0ZW0tdG9nZ2xlJyk7XG4gICAgICAgIG5ld3NJdGVtVG9nZ2xlLnN0eWxlLmRpc3BsYXkgPSBzZWFyY2hUZXh0ID8gJ25vbmUnIDogJ2lubGluZS1ibG9jayc7XG4gICAgfSk7XG59IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0TmFtZUVycm9yKHByb2plY3ROYW1lLCBkYXRhKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGgxPjQwMCBCYWQgUmVxdWVzdDwvaDE+XG4gICAgICAgIDxwPlRoZSB2YWx1ZSBwcm92aWRlZCBmb3IgdGhlICdwcm9qZWN0JyBxdWVyeSBwYXJhbWV0ZXIgaXMgaW52YWxpZC48L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPHN0cm9uZz5WYWx1ZSBQcm92aWRlZDo8L3N0cm9uZz4gJHtwcm9qZWN0TmFtZX08YnI+XG4gICAgICAgICAgICA8c3Ryb25nPlZhbGlkIFZhbHVlczo8L3N0cm9uZz4gJHtPYmplY3Qua2V5cyhkYXRhLnByb2plY3RzKS5qb2luKCcsICcpfVxuICAgICAgICA8L3A+XG4gICAgYDtcbn0iLCJpbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2QmFyLmpzJztcbmltcG9ydCB7IFByb2plY3REZXRhaWxzIH0gZnJvbSAnLi9Qcm9qZWN0cy5qcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFBhZ2UocHJvamVjdE5hbWUsIGRhdGEpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuaW5uZXJIVE1MID0gYFxuICAgICAgICAke05hdkJhcihwcm9qZWN0TmFtZSwgZGF0YS5hYm91dC5uYW1lLCBPYmplY3Qua2V5cyhkYXRhKSl9XG4gICAgICAgIDxzZWN0aW9uIGlkPVwicHJvamVjdC1wYWdlXCI+XG4gICAgICAgICAgICAke1Byb2plY3REZXRhaWxzKGdldFByb2plY3QocHJvamVjdE5hbWUsIGRhdGEucHJvamVjdHMpKX1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAke0Zvb3RlcihkYXRhLmFib3V0LCBmYWxzZSl9XG4gICAgYDtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFByb2plY3QgPSAocHJvamVjdE5hbWUsIHByb2plY3RzKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IHByb2plY3ROYW1lKTtcbn0iLCJpbXBvcnQgeyBpc01haW5QYWdlIH0gZnJvbSAnLi4vaW5kZXguanMnO1xuXG5jb25zdCBhbGxQcm9qZWN0c1RhZyA9ICdBbGwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBpZD1cInByb2plY3RzLWxvY2F0aW9uXCI+PC9kaXY+XG4gICAgPHNlY3Rpb24gaWQ9XCJwcm9qZWN0c1wiPlxuICAgICAgICA8aDE+UHJvamVjdHM8L2gxPlxuICAgICAgICA8c3BhbiBpZD1cInByb2plY3RzLWZpbHRlclwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAke1Byb2plY3RzRmlsdGVyKHByb2plY3RzKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2IGlkPVwicHJvamVjdHMtbGlzdFwiPlxuICAgICAgICAgICAgJHtQcm9qZWN0c0xpc3QocHJvamVjdHMpfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgYDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRHVwbGljYXRlcyhhcnJheSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoYXJyYXkpKTtcbn1cblxuZnVuY3Rpb24gUHJvamVjdHNGaWx0ZXIocHJvamVjdHMpIHtcbiAgICBsZXQgcHJvamVjdFRhZ3MgPSBwcm9qZWN0cy5yZWR1Y2UoKGFjYywgcHJvamVjdCkgPT4gYWNjLmNvbmNhdChwcm9qZWN0LnRhZ3MpLCBbXSk7XG4gICAgcHJvamVjdFRhZ3MgPSByZW1vdmVEdXBsaWNhdGVzKHByb2plY3RUYWdzLm1hcCh0YWcgPT4gdGFnLnRleHQpKTtcbiAgICBwcm9qZWN0VGFncy51bnNoaWZ0KGFsbFByb2plY3RzVGFnKTtcbiAgICBwcm9qZWN0VGFncy5zb3J0KCk7XG4gICAgcmV0dXJuIHByb2plY3RUYWdzLm1hcCh0YWcgPT4ge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImZpbHRlclwiIHZhbHVlPVwiJHt0YWcudG9Mb3dlckNhc2UoKX1cIj5cbiAgICAgICAgICAgIDxhPiR7dGFnfTwvYT5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgYDtcbiAgICB9KS5qb2luKCcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFByb2plY3RzTGlzdChwcm9qZWN0cykge1xuICAgIHJldHVybiBwcm9qZWN0cy5tYXAocHJvamVjdCA9PiBQcm9qZWN0RGV0YWlscyhwcm9qZWN0KSkuam9pbignJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0RGV0YWlscyhwcm9qZWN0KSB7XG4gICAgY29uc3Qge1xuICAgICAgICBpZCwgdGl0bGUsIGRhdGUsIGxhbmd1YWdlcywgZGVzY3JpcHRpb24sXG4gICAgICAgIGRldGFpbGVkRGVzY3JpcHRpb24sIHRhZ3MsIGdpdGh1YiwgaW1hZ2VcbiAgICB9ID0gcHJvamVjdDtcblxuICAgIHJldHVybiBgXG4gICAgPGRpdiAke2lzTWFpblBhZ2UgPyAgJ2NsYXNzPVwicHJvamVjdCByb3dcIicgOiAnaWQ9XCJwcm9qZWN0LWRldGFpbHNcIiBjbGFzcz1cInJvd1wiJ30+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBwcm9qZWN0LWluZm9cIj5cbiAgICAgICAgICAgICR7aXNNYWluUGFnZSA/XG4gICAgICAgICAgICAgICAgYDxoMz5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8/cHJvamVjdD0ke2lkfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz4ke3RpdGxlfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9oMz5gIDpcbiAgICAgICAgICAgICAgICBgPGgxPiR7dGl0bGV9PC9oMT5gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkRhdGU6PC9zdHJvbmc+ICR7ZGF0ZX08YnI+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+JHtpc1Npbmd1bGFyKGxhbmd1YWdlcykgPyAnTGFuZ3VhZ2UnIDogJ0xhbmd1YWdlcyd9Ojwvc3Ryb25nPiAke2xhbmd1YWdlc31cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+JHtpc01haW5QYWdlID8gZGVzY3JpcHRpb24gOiBkZXRhaWxlZERlc2NyaXB0aW9ufTwvcD4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxwPkNoZWNrb3V0IHRoZSBjb2RlIG9uIEdpdEh1YiA8YSBocmVmPVwiJHtnaXRodWJ9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+aGVyZTwvYT4uPC9wPlxuICAgICAgICAgICAgICAgICR7UHJvamVjdFRhZ3ModGFncyl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiBwcm9qZWN0LWltZ1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlfVwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xufVxuXG5jb25zdCBpc1Npbmd1bGFyID0gc3RyID0+IHN0ci5zcGxpdCgnLCAnKS5sZW5ndGggPD0gMTtcblxuZnVuY3Rpb24gUHJvamVjdFRhZ3ModGFncykge1xuICAgIHJldHVybiB0YWdzLm1hcCh0YWcgPT4gXG4gICAgICAgIGA8c3BhbiBjbGFzcz1cInRhZ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJHt0YWcuY29sb3J9XCI+JHt0YWcudGV4dH08L3NwYW4+YFxuICAgICkuam9pbignJyk7XG4gICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVQcm9qZWN0c0ZpbHRlcihwcm9qZWN0cykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwcm9qZWN0cy1maWx0ZXIgaW5wdXRbbmFtZT1cImZpbHRlclwiXScpLmZvckVhY2gocmFkaW9CdXR0b24gPT4ge1xuICAgICAgICByYWRpb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBsZXQgZmlsdGVyVGFnID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkUHJvamVjdHMgPSBwcm9qZWN0cy5zbGljZSgpO1xuICAgICAgICAgICAgaWYgKGZpbHRlclRhZyAhPSBhbGxQcm9qZWN0c1RhZy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRQcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvd2VyY2FzZVRhZ3MgPSBwcm9qZWN0LnRhZ3MubWFwKHRhZyA9PiB0YWcudGV4dC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvd2VyY2FzZVRhZ3MuaW5jbHVkZXMoZmlsdGVyVGFnLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMtbGlzdCcpLmlubmVySFRNTCA9IFByb2plY3RzTGlzdChmaWx0ZXJlZFByb2plY3RzKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2tpbGxzKHt0ZWNobmljYWwsIG5vbnRlY2huaWNhbH0pIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgaWQ9XCJza2lsbHMtbG9jYXRpb25cIj48L2Rpdj5cbiAgICA8c2VjdGlvbiBpZD1cInNraWxsc1wiPlxuICAgICAgICA8aDEgY2xhc3M9XCJza2lsbHMtaGVhZGVyXCI+VGVjaG5pY2FsIFNraWxsczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgJHt0ZWNobmljYWwubWFwKHNraWxsID0+IFNraWxsKHNraWxsKSkuam9pbignJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDEgY2xhc3M9XCJza2lsbHMtaGVhZGVyXCI+Tm9uLVRlY2huaWNhbCBTa2lsbHM8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGxzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICR7bm9udGVjaG5pY2FsLm1hcChza2lsbCA9PiBTa2lsbChza2lsbCkpLmpvaW4oJycpfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgYDtcbn1cblxuZnVuY3Rpb24gU2tpbGwoe3RpdGxlLCBpY29ucywgYW5pbWF0aW9uQ2xhc3MsIGRlc2NyaXB0aW9ufSkge1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBjbGFzcz1cInNraWxsXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2tpbGwtaWNvbiAke2FuaW1hdGlvbkNsYXNzfVwiPiR7SWNvbnMoaWNvbnMpfTwvc3Bhbj5cbiAgICAgICAgPGg0IGNsYXNzPVwic2tpbGwtdGl0bGVcIj4ke3RpdGxlfTwvaDQ+XG4gICAgICAgIDxwIGNsYXNzPVwic2tpbGwtZGVzY3JpcHRpb25cIj4ke2Rlc2NyaXB0aW9ufTwvcD5cbiAgICA8L2Rpdj5cbiAgICBgO1xufVxuXG5mdW5jdGlvbiBJY29ucyhpY29ucykge1xuICByZXR1cm4gaWNvbnMucmVkdWNlKChhY2MsIGljb24pID0+XG4gICAgYCR7YWNjfTxpIGNsYXNzPVwiZmFzIGZhLXBsdXMgc2tpbGwtaWNvbi1jb25jYXRlbmF0b3JcIj48L2k+JHtpY29ufWBcbiAgKTtcbn0iLCJpbXBvcnQgTWFpblBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL01haW5QYWdlLmpzJztcbmltcG9ydCBQcm9qZWN0UGFnZSwgeyBnZXRQcm9qZWN0IH0gZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3RQYWdlLmpzJztcbmltcG9ydCBQcm9qZWN0TmFtZUVycm9yIGZyb20gJy4vY29tcG9uZW50cy9Qcm9qZWN0TmFtZUVycm9yLmpzJztcblxuZXhwb3J0IGxldCBpc01haW5QYWdlID0gZmFsc2U7XG5cbmZldGNoKCdhc3NldHMvZGF0YS5qc29uJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBxdWVyeVBhcmFtcy5nZXQoJ3Byb2plY3QnKTtcbiAgICAgICAgaWYgKHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZUlzVmFsaWQocHJvamVjdE5hbWUsIGRhdGEucHJvamVjdHMpXG4gICAgICAgICAgICAgICAgPyBQcm9qZWN0UGFnZShwcm9qZWN0TmFtZSwgZGF0YSlcbiAgICAgICAgICAgICAgICA6IFByb2plY3ROYW1lRXJyb3IocHJvamVjdE5hbWUsIGRhdGEucHJvamVjdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNNYWluUGFnZSA9IHRydWU7XG4gICAgICAgICAgICBNYWluUGFnZShkYXRhKTtcbiAgICAgICAgfVxufSk7XG5cbmNvbnN0IHByb2plY3ROYW1lSXNWYWxpZCA9IChwcm9qZWN0TmFtZSwgcHJvamVjdHMpID0+IHtcbiAgICByZXR1cm4gISFnZXRQcm9qZWN0KHByb2plY3ROYW1lLCBwcm9qZWN0cylcbn0iXSwic291cmNlUm9vdCI6IiJ9
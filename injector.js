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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/injector.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/injector.js":
/*!*************************!*\
  !*** ./src/injector.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar scr = document.createElement(\"script\");\nscr.id = 'whatsallapp-content-script';\nscr.type = 'text/javascript';\nscr.src = chrome.extension.getURL('/bundle.js');\n(document.head || document.body || document.documentElement).appendChild(scr);\n\nchrome.storage.sync.get('pluginEnabled', function (data) {\n    if (data.pluginEnabled) {\n        var rootEl = document.createElement('div');\n        rootEl.id = 'whatsallapp-root';\n        rootEl.setAttribute('data-extension-id', chrome.runtime.id);\n        document.body.appendChild(rootEl);\n    } else {}\n});\n\n//# sourceURL=webpack:///./src/injector.js?");


// mathe1: find top10 phonenumbers and set for monitoring
// under construction
// https://github.com/ohari5336/WhatsAllApp-Mod/issues/2
 
function getUrlVars(url) {
//https://html-online.com/articles/get-url-parameters-javascript/
    var vars = {};
    var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function StartMonitoring() {
 var pbc=document.getElementsByClassName("_3RWII");
 var phn='';
 for (let i=0;i<pbc.length;i++) {
  var pburl=getUrlVars(pbc[0].firstElementChild.src)["u"];
  if (pburl) phn+=pburl.substr(0,pburl.indexOf("%"))+',';
  else {//no number at profilphoto - search deeper for phonenumber
  }
  if (phn.length>3) {
   var ped=document.getElementById('mathe1edit');
   if (ped) {
    ped.value=phn.substr(0,phn.length-1);
    ped.onchange();
    document.getElementById('mathe1btn').click();
   }     
  }
 }
}
//StartMonitoring();

/***/ })

/******/ });
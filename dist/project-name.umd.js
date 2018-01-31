(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.RootName = global.RootName || {}, global.RootName.ProjectName = {})));
}(this, (function (exports) { 'use strict';

const a = () => {
  console.log('a');
};

exports.a = a;

Object.defineProperty(exports, '__esModule', { value: true });

})));

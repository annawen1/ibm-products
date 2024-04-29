"use strict";(self.webpackChunk_carbon_ibm_cloud_cognitive_core=self.webpackChunk_carbon_ibm_cloud_cognitive_core||[]).push([[8694],{"../ibm-products/src/components/EmptyStates/NotificationsEmptyState/NotificationsEmptyState.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithDarkModeIllustration:()=>WithDarkModeIllustration,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,withAction:()=>withAction,withActionAndLink:()=>withActionAndLink,withActionIconButton:()=>withActionIconButton,withLink:()=>withLink});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_carbon_react_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@carbon/icons-react/es/generated/bucket-0.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../ibm-products/src/components/EmptyStates/NotificationsEmptyState/NotificationsEmptyState.js"),_global_js_utils_StoryDocsPage__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../ibm-products/src/global/js/utils/StoryDocsPage.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"IBM Products/Patterns/Empty state/NotificationsEmptyState",component:___WEBPACK_IMPORTED_MODULE_2__.T,tags:["autodocs"],parameters:{storySource:{source:"function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n/**\n * Copyright IBM Corp. 2020, 2024\n *\n * This source code is licensed under the Apache-2.0 license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport React from 'react';\nimport { action } from '@storybook/addon-actions';\nimport { Add } from '@carbon/react/icons';\n// import mdx from './NotificationsEmptyState.mdx';\nimport { NotificationsEmptyState } from '.';\nimport { StoryDocsPage } from '../../../global/js/utils/StoryDocsPage';\n\n// import styles from '../_index.scss';\n\nexport default {\n  title: 'IBM Products/Patterns/Empty state/NotificationsEmptyState',\n  component: NotificationsEmptyState,\n  tags: ['autodocs'],\n  parameters: {\n    // styles,\n    docs: {\n      page: function page() {\n        return /*#__PURE__*/React.createElement(StoryDocsPage, {\n          altGuidelinesHref: [{\n            href: 'https://pages.github.ibm.com/cdai-design/pal/patterns/empty-state/usage',\n            label: 'Error pattern usage guidelines'\n          }, {\n            href: 'https://www.carbondesignsystem.com/patterns/empty-states-pattern/',\n            label: 'Carbon empty pattern usage guidelines'\n          }]\n        });\n      }\n    }\n  }\n};\nvar defaultStoryProps = {\n  title: 'Empty state title',\n  subtitle: 'Description text explaining why this section is empty.',\n  illustrationDescription: 'Test alt text'\n};\nvar Template = function Template(args) {\n  return /*#__PURE__*/React.createElement(NotificationsEmptyState, args);\n};\nexport var Default = Template.bind({});\nDefault.args = _objectSpread({}, defaultStoryProps);\nexport var WithDarkModeIllustration = Template.bind({});\nWithDarkModeIllustration.args = _objectSpread(_objectSpread({}, defaultStoryProps), {}, {\n  illustrationTheme: 'dark'\n});\nexport var withAction = Template.bind({});\nwithAction.args = _objectSpread(_objectSpread({}, defaultStoryProps), {}, {\n  action: {\n    text: 'Create new',\n    onClick: action('Clicked empty state action button')\n  }\n});\nexport var withActionIconButton = Template.bind({});\nwithActionIconButton.args = _objectSpread(_objectSpread({}, defaultStoryProps), {}, {\n  action: {\n    text: 'Create new',\n    onClick: action('Clicked empty state action button'),\n    renderIcon: function renderIcon(props) {\n      return /*#__PURE__*/React.createElement(Add, _extends({\n        size: 20\n      }, props));\n    },\n    iconDescription: 'Add icon'\n  }\n});\nexport var withLink = Template.bind({});\nwithLink.args = _objectSpread(_objectSpread({}, defaultStoryProps), {}, {\n  link: {\n    text: 'View documentation',\n    href: 'https://www.carbondesignsystem.com'\n  }\n});\nexport var withActionAndLink = Template.bind({});\nwithActionAndLink.args = _objectSpread(_objectSpread({}, defaultStoryProps), {}, {\n  action: {\n    text: 'Create new',\n    onClick: action('Clicked empty state action button'),\n    renderIcon: function renderIcon(props) {\n      return /*#__PURE__*/React.createElement(Add, _extends({\n        size: 20\n      }, props));\n    },\n    iconDescription: 'Add icon'\n  },\n  link: {\n    text: 'View documentation',\n    href: 'https://www.carbondesignsystem.com'\n  }\n});",locationsMap:{default:{startLoc:{col:15,line:50},endLoc:{col:1,line:52},startBody:{col:15,line:50},endBody:{col:1,line:52}},"with-dark-mode-illustration":{startLoc:{col:15,line:50},endLoc:{col:1,line:52},startBody:{col:15,line:50},endBody:{col:1,line:52}},"with-action":{startLoc:{col:15,line:50},endLoc:{col:1,line:52},startBody:{col:15,line:50},endBody:{col:1,line:52}},"with-action-icon-button":{startLoc:{col:15,line:50},endLoc:{col:1,line:52},startBody:{col:15,line:50},endBody:{col:1,line:52}},"with-link":{startLoc:{col:15,line:50},endLoc:{col:1,line:52},startBody:{col:15,line:50},endBody:{col:1,line:52}},"with-action-and-link":{startLoc:{col:15,line:50},endLoc:{col:1,line:52},startBody:{col:15,line:50},endBody:{col:1,line:52}}}},docs:{page:function page(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_global_js_utils_StoryDocsPage__WEBPACK_IMPORTED_MODULE_3__.r,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/cdai-design/pal/patterns/empty-state/usage",label:"Error pattern usage guidelines"},{href:"https://www.carbondesignsystem.com/patterns/empty-states-pattern/",label:"Carbon empty pattern usage guidelines"}]})}}}};var defaultStoryProps={title:"Empty state title",subtitle:"Description text explaining why this section is empty.",illustrationDescription:"Test alt text"},Template=function Template(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.T,args)},Default=Template.bind({});Default.args=_objectSpread({},defaultStoryProps);var WithDarkModeIllustration=Template.bind({});WithDarkModeIllustration.args=_objectSpread(_objectSpread({},defaultStoryProps),{},{illustrationTheme:"dark"});var withAction=Template.bind({});withAction.args=_objectSpread(_objectSpread({},defaultStoryProps),{},{action:{text:"Create new",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("Clicked empty state action button")}});var withActionIconButton=Template.bind({});withActionIconButton.args=_objectSpread(_objectSpread({},defaultStoryProps),{},{action:{text:"Create new",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("Clicked empty state action button"),renderIcon:function renderIcon(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_carbon_react_icons__WEBPACK_IMPORTED_MODULE_4__.mm,_extends({size:20},props))},iconDescription:"Add icon"}});var withLink=Template.bind({});withLink.args=_objectSpread(_objectSpread({},defaultStoryProps),{},{link:{text:"View documentation",href:"https://www.carbondesignsystem.com"}});var withActionAndLink=Template.bind({});withActionAndLink.args=_objectSpread(_objectSpread({},defaultStoryProps),{},{action:{text:"Create new",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("Clicked empty state action button"),renderIcon:function renderIcon(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_carbon_react_icons__WEBPACK_IMPORTED_MODULE_4__.mm,_extends({size:20},props))},iconDescription:"Add icon"},link:{text:"View documentation",href:"https://www.carbondesignsystem.com"}}),Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  return <NotificationsEmptyState {...args} />;\n}",...Default.parameters?.docs?.source}}},WithDarkModeIllustration.parameters={...WithDarkModeIllustration.parameters,docs:{...WithDarkModeIllustration.parameters?.docs,source:{originalSource:"args => {\n  return <NotificationsEmptyState {...args} />;\n}",...WithDarkModeIllustration.parameters?.docs?.source}}},withAction.parameters={...withAction.parameters,docs:{...withAction.parameters?.docs,source:{originalSource:"args => {\n  return <NotificationsEmptyState {...args} />;\n}",...withAction.parameters?.docs?.source}}},withActionIconButton.parameters={...withActionIconButton.parameters,docs:{...withActionIconButton.parameters?.docs,source:{originalSource:"args => {\n  return <NotificationsEmptyState {...args} />;\n}",...withActionIconButton.parameters?.docs?.source}}},withLink.parameters={...withLink.parameters,docs:{...withLink.parameters?.docs,source:{originalSource:"args => {\n  return <NotificationsEmptyState {...args} />;\n}",...withLink.parameters?.docs?.source}}},withActionAndLink.parameters={...withActionAndLink.parameters,docs:{...withActionAndLink.parameters?.docs,source:{originalSource:"args => {\n  return <NotificationsEmptyState {...args} />;\n}",...withActionAndLink.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithDarkModeIllustration","withAction","withActionIconButton","withLink","withActionAndLink"]}}]);
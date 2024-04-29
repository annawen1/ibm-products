"use strict";(self.webpackChunk_carbon_ibm_cloud_cognitive_core=self.webpackChunk_carbon_ibm_cloud_cognitive_core||[]).push([[3642],{"../ibm-products/src/components/Cascade/Cascade.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithGrid:()=>WithGrid,WithoutGrid:()=>WithoutGrid,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Cascade_stories});var react=__webpack_require__("../../node_modules/react/index.js"),Cascade=__webpack_require__("../ibm-products/src/components/Cascade/Cascade.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),_storybook_styles=__webpack_require__("../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[2]!../ibm-products/src/components/Cascade/_storybook-styles.scss"),exported={};_storybook_styles.Z&&_storybook_styles.Z.locals&&(exported.locals=_storybook_styles.Z.locals);var update,refs=0,options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),exported.use=function(insertOptions){return options.options=insertOptions||{},refs++||(update=injectStylesIntoStyleTag_default()(_storybook_styles.Z,options)),exported},exported.unuse=function(){refs>0&&! --refs&&(update(),update=null)};const Cascade_storybook_styles=exported;var es=__webpack_require__("../../node_modules/@carbon/react/es/index.js"),StoryDocsPage=__webpack_require__("../ibm-products/src/global/js/utils/StoryDocsPage.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),story_helper=__webpack_require__("../ibm-products/src/global/js/utils/story-helper.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),DocsPage=function DocsPage(){var csfFile=(0,dist.co)("meta",["meta"]).csfFile;return(0,jsx_runtime.jsx)(StoryDocsPage.r,{altGuidelinesHref:[(0,story_helper.pK)(csfFile),{href:"https://www.carbondesignsystem.com/guidelines/motion/overview/",label:"Carbon motion guidelines"}],blocks:[{story:WithoutGrid},{description:"When using `Cascade` with  grid support its important that you follow the example code structure and provide the rows and columns. The component will assume this structure and add the appropriate CSS classes to the columns.",story:WithGrid}]})};DocsPage.displayName="DocsPage";const Cascade_docs_page=DocsPage;DocsPage.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};var _div,_div2,_div3,_div4,_div5,_div6,_div7,_div8,_Column;const Cascade_stories={title:"IBM Products/Patterns/Cascade",component:Cascade.c,tags:["autodocs"],parameters:{storySource:{source:'var _div, _div2, _div3, _div4, _div5, _div6, _div7, _div8, _Column;\n/**\n * Copyright IBM Corp. 2021, 2024\n *\n * This source code is licensed under the Apache-2.0 license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport React from \'react\';\nimport { Cascade } from \'.\';\nimport styles from \'./_storybook-styles.scss\'; // import index in case more files are added later.\nimport { Column } from \'@carbon/react\';\nimport DocsPage from \'./Cascade.docs-page\';\nexport default {\n  title: \'IBM Products/Patterns/Cascade\',\n  component: Cascade,\n  tags: [\'autodocs\'],\n  parameters: {\n    layout: \'fullscreen\',\n    styles: styles,\n    docs: {\n      page: DocsPage\n    }\n  }\n};\nvar DefaultTemplate = function DefaultTemplate(args) {\n  return /*#__PURE__*/React.createElement(Cascade, args, _div || (_div = /*#__PURE__*/React.createElement("div", {\n    className: "box"\n  })), _div2 || (_div2 = /*#__PURE__*/React.createElement("div", {\n    className: "box"\n  })), _div3 || (_div3 = /*#__PURE__*/React.createElement("div", {\n    className: "box"\n  })), _div4 || (_div4 = /*#__PURE__*/React.createElement("div", {\n    className: "box"\n  })), _div5 || (_div5 = /*#__PURE__*/React.createElement("div", {\n    className: "box"\n  })), _div6 || (_div6 = /*#__PURE__*/React.createElement("div", {\n    className: "box"\n  })), _div7 || (_div7 = /*#__PURE__*/React.createElement("div", {\n    className: "box"\n  })), _div8 || (_div8 = /*#__PURE__*/React.createElement("div", {\n    className: "box"\n  })));\n};\nvar GridTemplate = function GridTemplate(args) {\n  var getBoxes = function getBoxes() {\n    var boxes = [];\n    for (var i = 0; i < 4; i++) {\n      boxes.push(_Column || (_Column = /*#__PURE__*/React.createElement(Column, {\n        lg: 4\n      }, /*#__PURE__*/React.createElement("div", {\n        className: "grid-box"\n      }))));\n    }\n    return boxes;\n  };\n  return /*#__PURE__*/React.createElement(Cascade, args, getBoxes(), getBoxes());\n};\nexport var WithoutGrid = DefaultTemplate.bind({});\nWithoutGrid.args = {};\nexport var WithGrid = GridTemplate.bind({});\nWithGrid.args = {\n  grid: true\n};',locationsMap:{"without-grid":{startLoc:{col:22,line:26},endLoc:{col:1,line:44},startBody:{col:22,line:26},endBody:{col:1,line:44}},"with-grid":{startLoc:{col:19,line:45},endLoc:{col:1,line:58},startBody:{col:19,line:45},endBody:{col:1,line:58}}}},layout:"fullscreen",styles:Cascade_storybook_styles,docs:{page:Cascade_docs_page}}};var WithoutGrid=function DefaultTemplate(args){return react.createElement(Cascade.c,args,_div||(_div=react.createElement("div",{className:"box"})),_div2||(_div2=react.createElement("div",{className:"box"})),_div3||(_div3=react.createElement("div",{className:"box"})),_div4||(_div4=react.createElement("div",{className:"box"})),_div5||(_div5=react.createElement("div",{className:"box"})),_div6||(_div6=react.createElement("div",{className:"box"})),_div7||(_div7=react.createElement("div",{className:"box"})),_div8||(_div8=react.createElement("div",{className:"box"})))}.bind({});WithoutGrid.args={};var WithGrid=function GridTemplate(args){var getBoxes=function getBoxes(){for(var boxes=[],i=0;i<4;i++)boxes.push(_Column||(_Column=react.createElement(es.sgG,{lg:4},react.createElement("div",{className:"grid-box"}))));return boxes};return react.createElement(Cascade.c,args,getBoxes(),getBoxes())}.bind({});WithGrid.args={grid:!0},WithoutGrid.parameters={...WithoutGrid.parameters,docs:{...WithoutGrid.parameters?.docs,source:{originalSource:'args => {\n  return <Cascade {...args}>\n      <div className="box" />\n      <div className="box" />\n      <div className="box" />\n      <div className="box" />\n      <div className="box" />\n      <div className="box" />\n      <div className="box" />\n      <div className="box" />\n    </Cascade>;\n}',...WithoutGrid.parameters?.docs?.source}}},WithGrid.parameters={...WithGrid.parameters,docs:{...WithGrid.parameters?.docs,source:{originalSource:'args => {\n  const getBoxes = () => {\n    const boxes = [];\n    for (let i = 0; i < 4; i++) {\n      boxes.push(<Column lg={4}>\n          <div className="grid-box" />\n        </Column>);\n    }\n    return boxes;\n  };\n  return <Cascade {...args}>\n      {getBoxes()}\n      {getBoxes()}\n    </Cascade>;\n}',...WithGrid.parameters?.docs?.source}}};const __namedExportsOrder=["WithoutGrid","WithGrid"]},"../ibm-products/src/components/Cascade/Cascade.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>Cascade});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_carbon_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@carbon/react/es/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),_settings__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../ibm-products/src/settings.js"),_global_js_utils_devtools__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../ibm-products/src/global/js/utils/devtools.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["children","className","grid"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var blockClass="".concat(_settings__WEBPACK_IMPORTED_MODULE_4__.K.prefix,"--cascade"),defaults_grid=!1,Cascade=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref,ref){var children=_ref.children,className=_ref.className,_ref$grid=_ref.grid,grid=void 0===_ref$grid?defaults_grid:_ref$grid,props=_objectSpread(_objectSpread({},_objectWithoutProperties(_ref,_excluded)),{},{className:classnames__WEBPACK_IMPORTED_MODULE_2___default()(blockClass,className),ref},(0,_global_js_utils_devtools__WEBPACK_IMPORTED_MODULE_5__.n8)("Cascade"));if(grid){var colIdx=0,gridElm=react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children,(function(row){if(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(row)){var cols=react__WEBPACK_IMPORTED_MODULE_0__.Children.map(null==row?void 0:row.props.children,(function(col){colIdx+=1;var colClassnames=classnames__WEBPACK_IMPORTED_MODULE_2___default()(col.props.className,"".concat(blockClass,"__col"),"".concat(blockClass,"__col-").concat(colIdx));return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(col,{className:colClassnames})}));return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(row,{children:cols})}return children}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",_objectSpread(_objectSpread({},props),{},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_carbon_react__WEBPACK_IMPORTED_MODULE_1__.rjZ,{children:gridElm})}))}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",_objectSpread(_objectSpread({},props),{},{children:function getModifiedChildren(){return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children,(function(child){return function modifyChildren(child){var className=classnames__WEBPACK_IMPORTED_MODULE_2___default()(child.props.className,"".concat(blockClass,"__element"));return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child,{className})}(child)}))}()}))}));(Cascade=_settings__WEBPACK_IMPORTED_MODULE_4__.K.checkComponentEnabled(Cascade,"Cascade")).displayName="Cascade",Cascade.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_6___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,grid:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool},Cascade.__docgenInfo={description:"This pattern is intended for use with cards, tiles, or similarly styled\ncomponents. Use this patterns in areas that are the primary focus on the page to\nhelp the user along their journey or locate the most important information on\nthe page. It should not be used on a page if it is the secondary focus of the\npage as that will distract the user.",methods:[],displayName:"Cascade",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Main content that is shown.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Specify an optional className to be applied to\nthe container node.",type:{name:"string"}},grid:{required:!1,tsType:{name:"boolean"},description:"Specifies whether or not to wrap the child content in a `<Grid />`.\nIf this is set to true it's important that the children are being wrapped in rows in columns.\nCheck the documentation for additional clarification.",defaultValue:{value:"false",computed:!1},type:{name:"bool"}}}}},"../ibm-products/src/global/js/utils/devtools.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n8:()=>getDevtoolsProps});var _package_settings__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../ibm-products/src/global/js/package-settings.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function getDevtoolsProps(componentName){return _defineProperty({},_package_settings__WEBPACK_IMPORTED_MODULE_0__.s5,(0,_package_settings__WEBPACK_IMPORTED_MODULE_0__.Md)(componentName))}},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[2]!../ibm-products/src/components/Cascade/_storybook-styles.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"#storybook-docs .docs-story{padding:30px 0}.box{display:inline-block;width:400px;height:300px;margin:.75rem;background-color:var(--cds-layer-selected-inverse, #161616);color:var(--cds-text-on-color, #ffffff)}.grid-box{display:flex;width:100%;height:300px;align-items:center;justify-content:center;margin-bottom:.5rem;background-color:var(--cds-layer-selected-inverse, #161616);color:var(--cds-text-on-color, #ffffff)}","",{version:3,sources:["webpack://./../ibm-products/src/components/Cascade/_storybook-styles.scss","webpack://./../../node_modules/@carbon/layout/scss/generated/_spacing.scss","webpack://./../../node_modules/@carbon/themes/scss/generated/_tokens.scss"],names:[],mappings:"AAUA,4BAEE,cAAA,CAGF,KACE,oBAAA,CACA,WAAA,CACA,YAAA,CACA,aCOW,CDNX,2DEuEuB,CFtEvB,uCE8Lc,CF3LhB,UACE,YAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,mBCTW,CDUX,2DE4DuB,CF3DvB,uCEmLc",sourcesContent:["//\n// Copyright IBM Corp. 20201, 2021\n//\n// This source code is licensed under the Apache-2.0 license found in the\n// LICENSE file in the root directory of this source tree.\n//\n\n@use '@carbon/styles/scss/theme' as *;\n@use '@carbon/styles/scss/spacing' as *;\n\n#storybook-docs .docs-story {\n  /* stylelint-disable-next-line carbon/layout-token-use */\n  padding: 30px 0;\n}\n\n.box {\n  display: inline-block;\n  width: 400px;\n  height: 300px;\n  margin: $spacing-04;\n  background-color: $layer-selected-inverse;\n  color: $text-on-color;\n}\n\n.grid-box {\n  display: flex;\n  width: 100%;\n  height: 300px;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: $spacing-03;\n  background-color: $layer-selected-inverse;\n  color: $text-on-color;\n}\n","// Code generated by @carbon/layout. DO NOT EDIT.\n//\n// Copyright IBM Corp. 2018, 2023\n//\n// This source code is licensed under the Apache-2.0 license found in the\n// LICENSE file in the root directory of this source tree.\n//\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-01: 0.125rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-02: 0.25rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-03: 0.5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-04: 0.75rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-05: 1rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-06: 1.5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-07: 2rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-08: 2.5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-09: 3rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-10: 4rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-11: 5rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-12: 6rem !default;\n\n/// @type Number\n/// @access public\n/// @group @carbon/layout\n$spacing-13: 10rem !default;\n\n/// @type Map\n/// @access public\n/// @group @carbon/layout\n$spacing: (\n  spacing-01: $spacing-01,\n  spacing-02: $spacing-02,\n  spacing-03: $spacing-03,\n  spacing-04: $spacing-04,\n  spacing-05: $spacing-05,\n  spacing-06: $spacing-06,\n  spacing-07: $spacing-07,\n  spacing-08: $spacing-08,\n  spacing-09: $spacing-09,\n  spacing-10: $spacing-10,\n  spacing-11: $spacing-11,\n  spacing-12: $spacing-12,\n  spacing-13: $spacing-13,\n);\n","// Code generated by @carbon/themes. DO NOT EDIT.\n//\n// Copyright IBM Corp. 2018, 2023\n//\n// This source code is licensed under the Apache-2.0 license found in the\n// LICENSE file in the root directory of this source tree.\n//\n\n@use 'sass:map';\n@use '../config';\n@use '../theme';\n\n/// Internal helper for generating CSS Custom Properties\n@function _get($token) {\n  @if config.$use-fallback-value == false {\n    @return var(--#{config.$prefix}-#{$token});\n  } @else {\n    @return var(--#{config.$prefix}-#{$token}, #{theme.get($token)});\n  }\n}\n\n/// The CSS Custom Property for the `background` token\n$background: _get('background') !default;\n\n/// The CSS Custom Property for the `background-active` token\n$background-active: _get('background-active') !default;\n\n/// The CSS Custom Property for the `background-selected` token\n$background-selected: _get('background-selected') !default;\n\n/// The CSS Custom Property for the `background-selected-hover` token\n$background-selected-hover: _get('background-selected-hover') !default;\n\n/// The CSS Custom Property for the `background-hover` token\n$background-hover: _get('background-hover') !default;\n\n/// The CSS Custom Property for the `background-brand` token\n$background-brand: _get('background-brand') !default;\n\n/// The CSS Custom Property for the `background-inverse` token\n$background-inverse: _get('background-inverse') !default;\n\n/// The CSS Custom Property for the `background-inverse-hover` token\n$background-inverse-hover: _get('background-inverse-hover') !default;\n\n/// The CSS Custom Property for the `layer-01` token\n$layer-01: _get('layer-01') !default;\n\n/// The CSS Custom Property for the `layer-active-01` token\n$layer-active-01: _get('layer-active-01') !default;\n\n/// The CSS Custom Property for the `layer-hover-01` token\n$layer-hover-01: _get('layer-hover-01') !default;\n\n/// The CSS Custom Property for the `layer-selected-01` token\n$layer-selected-01: _get('layer-selected-01') !default;\n\n/// The CSS Custom Property for the `layer-selected-hover-01` token\n$layer-selected-hover-01: _get('layer-selected-hover-01') !default;\n\n/// The CSS Custom Property for the `layer-02` token\n$layer-02: _get('layer-02') !default;\n\n/// The CSS Custom Property for the `layer-active-02` token\n$layer-active-02: _get('layer-active-02') !default;\n\n/// The CSS Custom Property for the `layer-hover-02` token\n$layer-hover-02: _get('layer-hover-02') !default;\n\n/// The CSS Custom Property for the `layer-selected-02` token\n$layer-selected-02: _get('layer-selected-02') !default;\n\n/// The CSS Custom Property for the `layer-selected-hover-02` token\n$layer-selected-hover-02: _get('layer-selected-hover-02') !default;\n\n/// The CSS Custom Property for the `layer-03` token\n$layer-03: _get('layer-03') !default;\n\n/// The CSS Custom Property for the `layer-active-03` token\n$layer-active-03: _get('layer-active-03') !default;\n\n/// The CSS Custom Property for the `layer-hover-03` token\n$layer-hover-03: _get('layer-hover-03') !default;\n\n/// The CSS Custom Property for the `layer-selected-03` token\n$layer-selected-03: _get('layer-selected-03') !default;\n\n/// The CSS Custom Property for the `layer-selected-hover-03` token\n$layer-selected-hover-03: _get('layer-selected-hover-03') !default;\n\n/// The CSS Custom Property for the `layer-selected-inverse` token\n$layer-selected-inverse: _get('layer-selected-inverse') !default;\n\n/// The CSS Custom Property for the `layer-selected-disabled` token\n$layer-selected-disabled: _get('layer-selected-disabled') !default;\n\n/// The CSS Custom Property for the `layer-accent-01` token\n$layer-accent-01: _get('layer-accent-01') !default;\n\n/// The CSS Custom Property for the `layer-accent-active-01` token\n$layer-accent-active-01: _get('layer-accent-active-01') !default;\n\n/// The CSS Custom Property for the `layer-accent-hover-01` token\n$layer-accent-hover-01: _get('layer-accent-hover-01') !default;\n\n/// The CSS Custom Property for the `layer-accent-02` token\n$layer-accent-02: _get('layer-accent-02') !default;\n\n/// The CSS Custom Property for the `layer-accent-active-02` token\n$layer-accent-active-02: _get('layer-accent-active-02') !default;\n\n/// The CSS Custom Property for the `layer-accent-hover-02` token\n$layer-accent-hover-02: _get('layer-accent-hover-02') !default;\n\n/// The CSS Custom Property for the `layer-accent-03` token\n$layer-accent-03: _get('layer-accent-03') !default;\n\n/// The CSS Custom Property for the `layer-accent-active-03` token\n$layer-accent-active-03: _get('layer-accent-active-03') !default;\n\n/// The CSS Custom Property for the `layer-accent-hover-03` token\n$layer-accent-hover-03: _get('layer-accent-hover-03') !default;\n\n/// The CSS Custom Property for the `field-01` token\n$field-01: _get('field-01') !default;\n\n/// The CSS Custom Property for the `field-hover-01` token\n$field-hover-01: _get('field-hover-01') !default;\n\n/// The CSS Custom Property for the `field-02` token\n$field-02: _get('field-02') !default;\n\n/// The CSS Custom Property for the `field-hover-02` token\n$field-hover-02: _get('field-hover-02') !default;\n\n/// The CSS Custom Property for the `field-03` token\n$field-03: _get('field-03') !default;\n\n/// The CSS Custom Property for the `field-hover-03` token\n$field-hover-03: _get('field-hover-03') !default;\n\n/// The CSS Custom Property for the `interactive` token\n$interactive: _get('interactive') !default;\n\n/// The CSS Custom Property for the `border-subtle-00` token\n$border-subtle-00: _get('border-subtle-00') !default;\n\n/// The CSS Custom Property for the `border-subtle-01` token\n$border-subtle-01: _get('border-subtle-01') !default;\n\n/// The CSS Custom Property for the `border-subtle-selected-01` token\n$border-subtle-selected-01: _get('border-subtle-selected-01') !default;\n\n/// The CSS Custom Property for the `border-subtle-02` token\n$border-subtle-02: _get('border-subtle-02') !default;\n\n/// The CSS Custom Property for the `border-subtle-selected-02` token\n$border-subtle-selected-02: _get('border-subtle-selected-02') !default;\n\n/// The CSS Custom Property for the `border-subtle-03` token\n$border-subtle-03: _get('border-subtle-03') !default;\n\n/// The CSS Custom Property for the `border-subtle-selected-03` token\n$border-subtle-selected-03: _get('border-subtle-selected-03') !default;\n\n/// The CSS Custom Property for the `border-strong-01` token\n$border-strong-01: _get('border-strong-01') !default;\n\n/// The CSS Custom Property for the `border-strong-02` token\n$border-strong-02: _get('border-strong-02') !default;\n\n/// The CSS Custom Property for the `border-strong-03` token\n$border-strong-03: _get('border-strong-03') !default;\n\n/// The CSS Custom Property for the `border-tile-01` token\n$border-tile-01: _get('border-tile-01') !default;\n\n/// The CSS Custom Property for the `border-tile-02` token\n$border-tile-02: _get('border-tile-02') !default;\n\n/// The CSS Custom Property for the `border-tile-03` token\n$border-tile-03: _get('border-tile-03') !default;\n\n/// The CSS Custom Property for the `border-inverse` token\n$border-inverse: _get('border-inverse') !default;\n\n/// The CSS Custom Property for the `border-interactive` token\n$border-interactive: _get('border-interactive') !default;\n\n/// The CSS Custom Property for the `border-disabled` token\n$border-disabled: _get('border-disabled') !default;\n\n/// The CSS Custom Property for the `text-primary` token\n$text-primary: _get('text-primary') !default;\n\n/// The CSS Custom Property for the `text-secondary` token\n$text-secondary: _get('text-secondary') !default;\n\n/// The CSS Custom Property for the `text-placeholder` token\n$text-placeholder: _get('text-placeholder') !default;\n\n/// The CSS Custom Property for the `text-helper` token\n$text-helper: _get('text-helper') !default;\n\n/// The CSS Custom Property for the `text-error` token\n$text-error: _get('text-error') !default;\n\n/// The CSS Custom Property for the `text-inverse` token\n$text-inverse: _get('text-inverse') !default;\n\n/// The CSS Custom Property for the `text-on-color` token\n$text-on-color: _get('text-on-color') !default;\n\n/// The CSS Custom Property for the `text-on-color-disabled` token\n$text-on-color-disabled: _get('text-on-color-disabled') !default;\n\n/// The CSS Custom Property for the `text-disabled` token\n$text-disabled: _get('text-disabled') !default;\n\n/// The CSS Custom Property for the `link-primary` token\n$link-primary: _get('link-primary') !default;\n\n/// The CSS Custom Property for the `link-primary-hover` token\n$link-primary-hover: _get('link-primary-hover') !default;\n\n/// The CSS Custom Property for the `link-secondary` token\n$link-secondary: _get('link-secondary') !default;\n\n/// The CSS Custom Property for the `link-visited` token\n$link-visited: _get('link-visited') !default;\n\n/// The CSS Custom Property for the `link-inverse` token\n$link-inverse: _get('link-inverse') !default;\n\n/// The CSS Custom Property for the `link-inverse-active` token\n$link-inverse-active: _get('link-inverse-active') !default;\n\n/// The CSS Custom Property for the `link-inverse-hover` token\n$link-inverse-hover: _get('link-inverse-hover') !default;\n\n/// The CSS Custom Property for the `icon-primary` token\n$icon-primary: _get('icon-primary') !default;\n\n/// The CSS Custom Property for the `icon-secondary` token\n$icon-secondary: _get('icon-secondary') !default;\n\n/// The CSS Custom Property for the `icon-inverse` token\n$icon-inverse: _get('icon-inverse') !default;\n\n/// The CSS Custom Property for the `icon-on-color` token\n$icon-on-color: _get('icon-on-color') !default;\n\n/// The CSS Custom Property for the `icon-on-color-disabled` token\n$icon-on-color-disabled: _get('icon-on-color-disabled') !default;\n\n/// The CSS Custom Property for the `icon-disabled` token\n$icon-disabled: _get('icon-disabled') !default;\n\n/// The CSS Custom Property for the `icon-interactive` token\n$icon-interactive: _get('icon-interactive') !default;\n\n/// The CSS Custom Property for the `support-error` token\n$support-error: _get('support-error') !default;\n\n/// The CSS Custom Property for the `support-success` token\n$support-success: _get('support-success') !default;\n\n/// The CSS Custom Property for the `support-warning` token\n$support-warning: _get('support-warning') !default;\n\n/// The CSS Custom Property for the `support-info` token\n$support-info: _get('support-info') !default;\n\n/// The CSS Custom Property for the `support-error-inverse` token\n$support-error-inverse: _get('support-error-inverse') !default;\n\n/// The CSS Custom Property for the `support-success-inverse` token\n$support-success-inverse: _get('support-success-inverse') !default;\n\n/// The CSS Custom Property for the `support-warning-inverse` token\n$support-warning-inverse: _get('support-warning-inverse') !default;\n\n/// The CSS Custom Property for the `support-info-inverse` token\n$support-info-inverse: _get('support-info-inverse') !default;\n\n/// The CSS Custom Property for the `support-caution-major` token\n$support-caution-major: _get('support-caution-major') !default;\n\n/// The CSS Custom Property for the `support-caution-minor` token\n$support-caution-minor: _get('support-caution-minor') !default;\n\n/// The CSS Custom Property for the `support-caution-undefined` token\n$support-caution-undefined: _get('support-caution-undefined') !default;\n\n/// The CSS Custom Property for the `ai-popover-background` token\n$ai-popover-background: _get('ai-popover-background') !default;\n\n/// The CSS Custom Property for the `ai-popover-shadow-outer-01` token\n$ai-popover-shadow-outer-01: _get('ai-popover-shadow-outer-01') !default;\n\n/// The CSS Custom Property for the `ai-popover-shadow-outer-02` token\n$ai-popover-shadow-outer-02: _get('ai-popover-shadow-outer-02') !default;\n\n/// The CSS Custom Property for the `ai-inner-shadow` token\n$ai-inner-shadow: _get('ai-inner-shadow') !default;\n\n/// The CSS Custom Property for the `ai-aura-start-sm` token\n$ai-aura-start-sm: _get('ai-aura-start-sm') !default;\n\n/// The CSS Custom Property for the `ai-aura-start` token\n$ai-aura-start: _get('ai-aura-start') !default;\n\n/// The CSS Custom Property for the `ai-aura-end` token\n$ai-aura-end: _get('ai-aura-end') !default;\n\n/// The CSS Custom Property for the `ai-aura-hover-background` token\n$ai-aura-hover-background: _get('ai-aura-hover-background') !default;\n\n/// The CSS Custom Property for the `ai-aura-hover-start` token\n$ai-aura-hover-start: _get('ai-aura-hover-start') !default;\n\n/// The CSS Custom Property for the `ai-aura-hover-end` token\n$ai-aura-hover-end: _get('ai-aura-hover-end') !default;\n\n/// The CSS Custom Property for the `ai-border-strong` token\n$ai-border-strong: _get('ai-border-strong') !default;\n\n/// The CSS Custom Property for the `ai-border-start` token\n$ai-border-start: _get('ai-border-start') !default;\n\n/// The CSS Custom Property for the `ai-border-end` token\n$ai-border-end: _get('ai-border-end') !default;\n\n/// The CSS Custom Property for the `ai-drop-shadow` token\n$ai-drop-shadow: _get('ai-drop-shadow') !default;\n\n/// The CSS Custom Property for the `ai-skeleton-background` token\n$ai-skeleton-background: _get('ai-skeleton-background') !default;\n\n/// The CSS Custom Property for the `ai-skeleton-element-background` token\n$ai-skeleton-element-background: _get(\n  'ai-skeleton-element-background'\n) !default;\n\n/// The CSS Custom Property for the `ai-overlay` token\n$ai-overlay: _get('ai-overlay') !default;\n\n/// The CSS Custom Property for the `ai-popover-caret-center` token\n$ai-popover-caret-center: _get('ai-popover-caret-center') !default;\n\n/// The CSS Custom Property for the `ai-popover-caret-bottom` token\n$ai-popover-caret-bottom: _get('ai-popover-caret-bottom') !default;\n\n/// The CSS Custom Property for the `ai-popover-caret-bottom-background` token\n$ai-popover-caret-bottom-background: _get(\n  'ai-popover-caret-bottom-background'\n) !default;\n\n/// The CSS Custom Property for the `ai-popover-caret-bottom-background-actions` token\n$ai-popover-caret-bottom-background-actions: _get(\n  'ai-popover-caret-bottom-background-actions'\n) !default;\n\n/// The CSS Custom Property for the `chat-prompt-background` token\n$chat-prompt-background: _get('chat-prompt-background') !default;\n\n/// The CSS Custom Property for the `chat-prompt-border-start` token\n$chat-prompt-border-start: _get('chat-prompt-border-start') !default;\n\n/// The CSS Custom Property for the `chat-prompt-border-end` token\n$chat-prompt-border-end: _get('chat-prompt-border-end') !default;\n\n/// The CSS Custom Property for the `chat-bubble-user` token\n$chat-bubble-user: _get('chat-bubble-user') !default;\n\n/// The CSS Custom Property for the `chat-bubble-agent` token\n$chat-bubble-agent: _get('chat-bubble-agent') !default;\n\n/// The CSS Custom Property for the `chat-bubble-border` token\n$chat-bubble-border: _get('chat-bubble-border') !default;\n\n/// The CSS Custom Property for the `chat-avatar-bot` token\n$chat-avatar-bot: _get('chat-avatar-bot') !default;\n\n/// The CSS Custom Property for the `chat-avatar-agent` token\n$chat-avatar-agent: _get('chat-avatar-agent') !default;\n\n/// The CSS Custom Property for the `chat-avatar-user` token\n$chat-avatar-user: _get('chat-avatar-user') !default;\n\n/// The CSS Custom Property for the `chat-shell-background` token\n$chat-shell-background: _get('chat-shell-background') !default;\n\n/// The CSS Custom Property for the `chat-header-background` token\n$chat-header-background: _get('chat-header-background') !default;\n\n/// The CSS Custom Property for the `chat-button` token\n$chat-button: _get('chat-button') !default;\n\n/// The CSS Custom Property for the `chat-button-hover` token\n$chat-button-hover: _get('chat-button-hover') !default;\n\n/// The CSS Custom Property for the `chat-button-text-hover` token\n$chat-button-text-hover: _get('chat-button-text-hover') !default;\n\n/// The CSS Custom Property for the `chat-button-active` token\n$chat-button-active: _get('chat-button-active') !default;\n\n/// The CSS Custom Property for the `chat-button-selected` token\n$chat-button-selected: _get('chat-button-selected') !default;\n\n/// The CSS Custom Property for the `chat-button-text-selected` token\n$chat-button-text-selected: _get('chat-button-text-selected') !default;\n\n/// The CSS Custom Property for the `highlight` token\n$highlight: _get('highlight') !default;\n\n/// The CSS Custom Property for the `overlay` token\n$overlay: _get('overlay') !default;\n\n/// The CSS Custom Property for the `toggle-off` token\n$toggle-off: _get('toggle-off') !default;\n\n/// The CSS Custom Property for the `shadow` token\n$shadow: _get('shadow') !default;\n\n/// The CSS Custom Property for the `focus` token\n$focus: _get('focus') !default;\n\n/// The CSS Custom Property for the `focus-inset` token\n$focus-inset: _get('focus-inset') !default;\n\n/// The CSS Custom Property for the `focus-inverse` token\n$focus-inverse: _get('focus-inverse') !default;\n\n/// The CSS Custom Property for the `skeleton-background` token\n$skeleton-background: _get('skeleton-background') !default;\n\n/// The CSS Custom Property for the `skeleton-element` token\n$skeleton-element: _get('skeleton-element') !default;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
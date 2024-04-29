"use strict";(self.webpackChunk_carbon_ibm_cloud_cognitive_core=self.webpackChunk_carbon_ibm_cloud_cognitive_core||[]).push([[3233],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(1040).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs")},"../ibm-products/src/components/BigNumbers/BigNumbers.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,bigNumbers:()=>bigNumbers,default:()=>BigNumbers_stories,withEditButton:()=>withEditButton});var _Information,react=__webpack_require__("../../node_modules/react/index.js"),es=__webpack_require__("../../node_modules/@carbon/react/es/index.js"),bucket_5=__webpack_require__("../../node_modules/@carbon/icons-react/es/generated/bucket-5.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),devtools=__webpack_require__("../ibm-products/src/global/js/utils/devtools.js"),settings=__webpack_require__("../ibm-products/src/settings.js"),bucket_8=__webpack_require__("../../node_modules/@carbon/icons-react/es/generated/bucket-8.js"),bucket_0=__webpack_require__("../../node_modules/@carbon/icons-react/es/generated/bucket-0.js"),TooltipTrigger=__webpack_require__("../ibm-products/src/components/TooltipTrigger/TooltipTrigger.js"),BigNumbersSize={Default:"default",Large:"lg",XLarge:"xl"},Characters_Dash="–",Characters_Slash="/",formatValue=function formatValue(locale,value,fractionDigits,truncate){return null==value||"number"!=typeof value?null:truncate?Intl.NumberFormat(locale,{notation:"compact",minimumFractionDigits:0,maximumFractionDigits:Math.round(fractionDigits)}).format(value):Intl.NumberFormat(locale).format(value)},getIconSize=function getIconSize(size){switch(size){case BigNumbersSize.Large:return 20;case BigNumbersSize.XLarge:return 24;default:return 16}},jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["className","forceShowTotal","fractionDigits","iconButton","loading","label","locale","percentage","size","tooltipDescription","total","trending","truncate","value"],_excluded2=["className","size"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var blockClass="".concat(settings.K.prefix,"--big-numbers"),skeletonBlockClass="".concat(settings.K.prefix,"--big-numbers-skeleton"),defaults={forceShowTotal:!1,fractionDigits:1,loading:!1,locale:"en-US",percentage:!1,size:BigNumbersSize.Default,total:0,trending:!1,truncate:!0,value:null},BigNumbers=react.forwardRef((function(_ref,ref){var _formatValue,_formatValue2,className=_ref.className,_ref$forceShowTotal=_ref.forceShowTotal,forceShowTotal=void 0===_ref$forceShowTotal?defaults.forceShowTotal:_ref$forceShowTotal,_ref$fractionDigits=_ref.fractionDigits,fractionDigits=void 0===_ref$fractionDigits?defaults.fractionDigits:_ref$fractionDigits,iconButton=_ref.iconButton,_ref$loading=_ref.loading,loading=void 0===_ref$loading?defaults.loading:_ref$loading,label=_ref.label,_ref$locale=_ref.locale,locale=void 0===_ref$locale?defaults.locale:_ref$locale,_ref$percentage=_ref.percentage,percentage=void 0===_ref$percentage?defaults.percentage:_ref$percentage,_ref$size=_ref.size,size=void 0===_ref$size?defaults.size:_ref$size,tooltipDescription=_ref.tooltipDescription,_ref$total=_ref.total,total=void 0===_ref$total?defaults.total:_ref$total,_ref$trending=_ref.trending,trending=void 0===_ref$trending?defaults.trending:_ref$trending,_ref$truncate=_ref.truncate,truncate=void 0===_ref$truncate?defaults.truncate:_ref$truncate,_ref$value=_ref.value,value=void 0===_ref$value?defaults.value:_ref$value,rest=_objectWithoutProperties(_ref,_excluded),BigNumbersClasses=classnames_default()(className,_defineProperty(_defineProperty({},"".concat(blockClass,"--lg"),size===BigNumbersSize.Large),"".concat(blockClass,"--xl"),size===BigNumbersSize.XLarge)),supportedLocale=function getSupportedLocale(locale){return Intl.NumberFormat.supportedLocalesOf(locale).length>0?locale:"en-US"}(locale),truncatedValue=null!==(_formatValue=formatValue(supportedLocale,value,fractionDigits,truncate))&&void 0!==_formatValue?_formatValue:Characters_Dash,truncatedTotal=null!==(_formatValue2=formatValue(supportedLocale,total,fractionDigits,truncate))&&void 0!==_formatValue2?_formatValue2:"Unknown",shouldDisplayDenominator=!percentage&&total>value&&truncatedValue!==truncatedTotal||forceShowTotal&&total>0;return loading?(0,jsx_runtime.jsx)(SkeletonBigNumbers,_objectSpread(_objectSpread({},rest),{},{ref,className,size},(0,devtools.n8)("BigNumbers"))):(0,jsx_runtime.jsxs)("div",_objectSpread(_objectSpread(_objectSpread({},rest),{},{className:classnames_default()(blockClass,BigNumbersClasses,className),ref},(0,devtools.n8)("BigNumbers")),{},{children:[(0,jsx_runtime.jsxs)("span",{className:"".concat(blockClass,"__row"),children:[(0,jsx_runtime.jsx)("h4",{className:"".concat(blockClass,"__label"),children:label}),tooltipDescription&&(0,jsx_runtime.jsx)(es.ua7,{description:tooltipDescription,align:"right",className:"".concat(blockClass,"__info"),children:(0,jsx_runtime.jsx)(TooltipTrigger.a,{className:"".concat(blockClass,"__tooltip-trigger"),children:_Information||(_Information=(0,jsx_runtime.jsx)(bucket_8.d,{size:16}))})})]}),(0,jsx_runtime.jsxs)("span",{className:"".concat(blockClass,"__row"),role:"math",children:[trending&&(0,jsx_runtime.jsx)(bucket_0.a2,{className:"".concat(blockClass,"__trend"),size:getIconSize(size)}),(0,jsx_runtime.jsx)("span",{className:"".concat(blockClass,"__value"),children:percentage?(0,jsx_runtime.jsxs)("div",{className:"".concat(blockClass,"__percentage"),children:[truncatedValue,(0,jsx_runtime.jsx)("span",{className:"".concat(blockClass,"__percentage-mark"),children:"%"})]}):truncatedValue}),shouldDisplayDenominator&&(0,jsx_runtime.jsx)("span",{className:"".concat(blockClass,"__total"),children:(0,jsx_runtime.jsxs)("span",{children:[Characters_Slash,truncatedTotal]})}),iconButton]})]}))}));(BigNumbers=settings.K.checkComponentEnabled(BigNumbers,"BigNumbers")).displayName="BigNumbers",BigNumbers.propTypes={className:prop_types_default().string,forceShowTotal:prop_types_default().bool,fractionDigits:prop_types_default().number,iconButton:prop_types_default().node,label:prop_types_default().string.isRequired,loading:prop_types_default().bool,locale:prop_types_default().string,percentage:prop_types_default().bool,size:prop_types_default().oneOf(Object.values(BigNumbersSize)),tooltipDescription:prop_types_default().string,total:prop_types_default().number,trending:prop_types_default().bool,truncate:prop_types_default().bool,value:prop_types_default().number};var SkeletonBigNumbers=react.forwardRef((function(_ref2,ref){var className=_ref2.className,size=_ref2.size,rest=_objectWithoutProperties(_ref2,_excluded2),BigNumbersSkeletonClasses=classnames_default()(className,_defineProperty(_defineProperty({},"".concat(skeletonBlockClass,"--lg"),size===BigNumbersSize.Large),"".concat(skeletonBlockClass,"--xl"),size===BigNumbersSize.XLarge));return(0,jsx_runtime.jsxs)("div",_objectSpread(_objectSpread(_objectSpread({},rest),{},{className:classnames_default()(className,skeletonBlockClass,BigNumbersSkeletonClasses),ref},(0,devtools.n8)("BigNumbers")),{},{children:[(0,jsx_runtime.jsx)(es.N2B,{className:"".concat(skeletonBlockClass,"__label")}),(0,jsx_runtime.jsx)(es.N2B,{heading:!0,className:"".concat(skeletonBlockClass,"__value"),width:"80%"})]}))}));SkeletonBigNumbers.propTypes={className:prop_types_default().string,size:prop_types_default().oneOf(Object.values(BigNumbersSize))},BigNumbers.__docgenInfo={description:"BigNumbers is used to display large values in a small area. The display of\nvalues can be the value itself, or grouped in a numerator / denominator fashion.\nControl over the total fraction decimals displayed as well as how the\nvalues/totals are displayed are done via a locale prop. Other optional props\nallow control over size, truncation, if the value is a percentage, the addition\nof a button as well as tool tip functionality.\nThe default locale is English (`en-US`) if one is not provided or if the provided one is not supported.",methods:[],displayName:"BigNumbers",props:{forceShowTotal:{defaultValue:{value:"false",computed:!1},description:"Display the `total` even when the `value` is equal to\nthe `total` when `forceShowTotal` prop is true on the\ncondition that the `total` is greater than 0.\n@type bool",type:{name:"bool"},required:!1},fractionDigits:{defaultValue:{value:"1",computed:!1},description:"Optional value to control the maximum fraction digits\nused when truncating the value and total.\n@type number",type:{name:"number"},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"Specify if the BigNumbers is in a loading state\n@type bool",type:{name:"bool"},required:!1},locale:{defaultValue:{value:"'en-US'",computed:!1},description:"Locale value to determine approach to formatting numbers.\n@type string",type:{name:"string"},required:!1},percentage:{defaultValue:{value:"false",computed:!1},description:"Format number to percentage when `percentage` prop is true.\n@type bool",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'default'",computed:!1},description:"The size of the BigNumbers.\n@type string",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"lg"',computed:!1},{value:'"xl"',computed:!1}]},required:!1},total:{defaultValue:{value:"0",computed:!1},description:"Total value that the main BigNumbers value is a subset of.\n@type number",type:{name:"number"},required:!1},trending:{defaultValue:{value:"false",computed:!1},description:"Display trending icon.\n@type boolean",type:{name:"bool"},required:!1},truncate:{defaultValue:{value:"true",computed:!1},description:"Specify whether or not the values should be truncated.\n@type boolean",type:{name:"bool"},required:!1},value:{defaultValue:{value:"null",computed:!1},description:"The main BigNumbers value to display\n@type number",type:{name:"number"},required:!1},className:{description:"Optional class name.\n@type number",type:{name:"string"},required:!1},iconButton:{description:"Displays an iconButton next to the BigNumbers value\n@type node",type:{name:"node"},required:!1},label:{description:"Text label for BigNumbers.\n@type string",type:{name:"string"},required:!0},tooltipDescription:{description:"Label applied to a Tooltip - marked with the Information icon.\n@type string",type:{name:"string"},required:!1}}};var lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",a:"a",p:"p",code:"code",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"bignumbers",children:"BigNumbers"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#example-usage",children:"Example usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#component-api",children:"Component API"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["BigNumbers is used to display large values in a small area. The display of\nvalues can be the value itself, or grouped in a numerator / denominator fashion.\nControl over the total fraction decimals displayed as well as how the\nvalues/totals are displayed are done via a locale prop. Other optional props\nallow control over size, truncation, if the value is a percentage, the addition\nof a button as well as tool tip functionality. The default locale is English\n(",(0,jsx_runtime.jsx)(_components.code,{children:"en-US"}),") if one is not provided or if the provided one is not supported."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales",target:"_blank",rel:"nofollow noopener noreferrer",children:"Supported locales"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"example-usage",children:"Example usage"}),"\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"big-numbers",children:"Big numbers"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{of:bigNumbers})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"big-numbers-with-edit-button",children:"Big numbers with edit button"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{of:withEditButton})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"code-sample",children:"Code sample"}),"\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"component-api",children:"Component API"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{})]})}const BigNumbers_BigNumbers=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),_storybook_styles=__webpack_require__("../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[2]!../ibm-products/src/components/BigNumbers/_storybook-styles.scss"),exported={};_storybook_styles.Z&&_storybook_styles.Z.locals&&(exported.locals=_storybook_styles.Z.locals);var update,refs=0,options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),exported.use=function(insertOptions){return options.options=insertOptions||{},refs++||(update=injectStylesIntoStyleTag_default()(_storybook_styles.Z,options)),exported},exported.unuse=function(){refs>0&&! --refs&&(update(),update=null)};const BigNumbers_storybook_styles=exported;function BigNumbers_stories_typeof(o){return BigNumbers_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},BigNumbers_stories_typeof(o)}function BigNumbers_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function BigNumbers_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?BigNumbers_stories_ownKeys(Object(t),!0).forEach((function(r){BigNumbers_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):BigNumbers_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function BigNumbers_stories_defineProperty(obj,key,value){return(key=function BigNumbers_stories_toPropertyKey(t){var i=function BigNumbers_stories_toPrimitive(t,r){if("object"!=BigNumbers_stories_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=BigNumbers_stories_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==BigNumbers_stories_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var numericOptions={"-123":-123,"0 ":0,"12 ":12,"345 ":345,"6789 ":6789,"12345.678 ":12345.678,"678901.2456 ":678901.2456,"2345678 ":2345678,"90123456 ":90123456,"789012345 ":789012345,"6789012345 ":6789012345,"null ":null,"undefined ":void 0};const BigNumbers_stories={title:"IBM Products/Components/Big numbers/BigNumbers",component:BigNumbers,tags:["autodocs"],argTypes:{loading:{options:[!0,!1],control:{type:"boolean"}},value:{control:{type:"select",labels:Object.keys(numericOptions)},options:Object.values(numericOptions).map((function(_k,i){return i})),mapping:Object.values(numericOptions)},total:{control:{type:"select",labels:Object.keys(numericOptions)},options:Object.values(numericOptions).map((function(_k,i){return i})),mapping:Object.values(numericOptions)},size:{options:Object.values(BigNumbersSize),control:{type:"radio"}},percentage:{options:[!0,!1],control:{type:"boolean"}},forceShowTotal:{options:[!0,!1],control:{type:"boolean"}},trending:{options:[!0,!1],control:{type:"boolean"}},truncate:{options:[!0,!1],control:{type:"boolean"}},locale:{options:["bg","cs","da-DK","de-CH","de","en-AU","en-GB","en-US","en-ZA","es-ES","es","et","fi","fr-CA","fr-CH","fr","hu","it","ja","lv","nl-BE","nl-NL","no","pl","pt-BR","pt-PT","ru-UA","ru","sk","sl","th","tr","uk-UA","vi"],control:{type:"select"}},iconButton:{control:{type:null}}},parameters:{storySource:{source:"function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n/**\n * Copyright IBM Corp. 2024, 2024\n *\n * This source code is licensed under the Apache-2.0 license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport React from 'react';\nimport { Button } from '@carbon/react';\nimport { Edit } from '@carbon/react/icons';\nimport { BigNumbers } from '.';\nimport { BigNumbersSize } from './constants';\nimport mdx from './BigNumbers.mdx';\nimport styles from './_storybook-styles.scss';\nvar numericOptions = {\n  '-123': -123,\n  '0 ': 0,\n  '12 ': 12,\n  '345 ': 345,\n  '6789 ': 6789,\n  '12345.678 ': 12345.678,\n  '678901.2456 ': 678901.2456,\n  '2345678 ': 2345678,\n  '90123456 ': 90123456,\n  '789012345 ': 789012345,\n  '6789012345 ': 6789012345,\n  'null ': null,\n  'undefined ': undefined\n};\nexport default {\n  title: 'IBM Products/Components/Big numbers/BigNumbers',\n  component: BigNumbers,\n  tags: ['autodocs'],\n  // TODO: Define argTypes for props not represented by standard JS types.\n  argTypes: {\n    loading: {\n      options: [true, false],\n      control: {\n        type: 'boolean'\n      }\n    },\n    value: {\n      control: {\n        type: 'select',\n        labels: Object.keys(numericOptions)\n      },\n      options: Object.values(numericOptions).map(function (_k, i) {\n        return i;\n      }),\n      mapping: Object.values(numericOptions)\n    },\n    total: {\n      control: {\n        type: 'select',\n        labels: Object.keys(numericOptions)\n      },\n      options: Object.values(numericOptions).map(function (_k, i) {\n        return i;\n      }),\n      mapping: Object.values(numericOptions)\n    },\n    size: {\n      options: Object.values(BigNumbersSize),\n      control: {\n        type: 'radio'\n      }\n    },\n    percentage: {\n      options: [true, false],\n      control: {\n        type: 'boolean'\n      }\n    },\n    forceShowTotal: {\n      options: [true, false],\n      control: {\n        type: 'boolean'\n      }\n    },\n    trending: {\n      options: [true, false],\n      control: {\n        type: 'boolean'\n      }\n    },\n    truncate: {\n      options: [true, false],\n      control: {\n        type: 'boolean'\n      }\n    },\n    locale: {\n      options: ['bg', 'cs', 'da-DK', 'de-CH', 'de', 'en-AU', 'en-GB', 'en-US', 'en-ZA', 'es-ES', 'es', 'et', 'fi', 'fr-CA', 'fr-CH', 'fr', 'hu', 'it', 'ja', 'lv', 'nl-BE', 'nl-NL', 'no', 'pl', 'pt-BR', 'pt-PT', 'ru-UA', 'ru', 'sk', 'sl', 'th', 'tr', 'uk-UA', 'vi'],\n      control: {\n        type: 'select'\n      }\n    },\n    iconButton: {\n      control: {\n        type: null\n      }\n    }\n  },\n  parameters: {\n    styles: styles,\n    docs: {\n      page: mdx\n    }\n  }\n};\nvar defaultProps = {\n  label: 'Label',\n  value: 12345.678,\n  total: 678901.2456,\n  percentage: false,\n  size: BigNumbersSize.Default,\n  forceShowTotal: false,\n  trending: false,\n  truncate: true,\n  locale: 'en-US'\n};\n\n/**\n * TODO: Declare template(s) for one or more scenarios.\n */\nvar Template = function Template(args) {\n  return /*#__PURE__*/React.createElement(BigNumbers\n  // TODO: handle events with action or local handler.\n  // onTodo={action('onTodo log action')}\n  , args);\n};\n\n/**\n * TODO: Declare one or more stories, generally one per design scenario.\n * NB no need for a 'Playground' because all stories have all controls anyway.\n */\nexport var bigNumbers = Template.bind({});\nbigNumbers.args = _objectSpread({}, defaultProps);\nexport var withEditButton = Template.bind({});\nwithEditButton.args = _objectSpread(_objectSpread({}, defaultProps), {}, {\n  tooltipDescription: 'Tooltip description',\n  iconButton: /*#__PURE__*/React.createElement(Button, {\n    renderIcon: Edit,\n    iconDescription: \"Icon Description\",\n    kind: \"ghost\",\n    size: 'sm',\n    hasIconOnly: true,\n    onClick: function onClick() {\n      return console.log('clicked icon');\n    },\n    tooltipPosition: \"bottom\"\n  })\n});",locationsMap:{"big-numbers":{startLoc:{col:15,line:132},endLoc:{col:1,line:137},startBody:{col:15,line:132},endBody:{col:1,line:137}},"with-edit-button":{startLoc:{col:15,line:132},endLoc:{col:1,line:137},startBody:{col:15,line:132},endBody:{col:1,line:137}}}},styles:BigNumbers_storybook_styles,docs:{page:BigNumbers_BigNumbers}}};var defaultProps={label:"Label",value:12345.678,total:678901.2456,percentage:!1,size:BigNumbersSize.Default,forceShowTotal:!1,trending:!1,truncate:!0,locale:"en-US"},Template=function Template(args){return react.createElement(BigNumbers,args)},bigNumbers=Template.bind({});bigNumbers.args=BigNumbers_stories_objectSpread({},defaultProps);var withEditButton=Template.bind({});withEditButton.args=BigNumbers_stories_objectSpread(BigNumbers_stories_objectSpread({},defaultProps),{},{tooltipDescription:"Tooltip description",iconButton:react.createElement(es.zxk,{renderIcon:bucket_5.I8,iconDescription:"Icon Description",kind:"ghost",size:"sm",hasIconOnly:!0,onClick:function onClick(){return console.log("clicked icon")},tooltipPosition:"bottom"})}),bigNumbers.parameters={...bigNumbers.parameters,docs:{...bigNumbers.parameters?.docs,source:{originalSource:"args => {\n  return <BigNumbers\n  // TODO: handle events with action or local handler.\n  // onTodo={action('onTodo log action')}\n  {...args} />;\n}",...bigNumbers.parameters?.docs?.source},description:{story:"TODO: Declare one or more stories, generally one per design scenario.\nNB no need for a 'Playground' because all stories have all controls anyway.",...bigNumbers.parameters?.docs?.description}}},withEditButton.parameters={...withEditButton.parameters,docs:{...withEditButton.parameters?.docs,source:{originalSource:"args => {\n  return <BigNumbers\n  // TODO: handle events with action or local handler.\n  // onTodo={action('onTodo log action')}\n  {...args} />;\n}",...withEditButton.parameters?.docs?.source}}};const __namedExportsOrder=["bigNumbers","withEditButton"]},"../ibm-products/src/components/TooltipTrigger/TooltipTrigger.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>TooltipTrigger});__webpack_require__("../../node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_settings__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../ibm-products/src/settings.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["children","className"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var blockClass="".concat(_settings__WEBPACK_IMPORTED_MODULE_3__.K.prefix,"--tooltip-trigger"),TooltipTrigger=function TooltipTrigger(_ref){var children=_ref.children,className=_ref.className,rest=_objectWithoutProperties(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",_objectSpread(_objectSpread({type:"button"},rest),{},{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(blockClass,className),children}))};TooltipTrigger.displayName="TooltipTrigger",(TooltipTrigger=_settings__WEBPACK_IMPORTED_MODULE_3__.K.checkComponentEnabled(TooltipTrigger,"TooltipTrigger")).displayName="TooltipTrigger",TooltipTrigger.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string},TooltipTrigger.__docgenInfo={description:"This is an tooltip trigger as Carbon Tooltip requires an active element to work but provides\nno blanked button.",methods:[],displayName:"TooltipTrigger",props:{children:{description:"Child content of tooltip trigger",type:{name:"node"},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1}}}},"../ibm-products/src/global/js/utils/devtools.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n8:()=>getDevtoolsProps});var _package_settings__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../ibm-products/src/global/js/package-settings.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function getDevtoolsProps(componentName){return _defineProperty({},_package_settings__WEBPACK_IMPORTED_MODULE_0__.s5,(0,_package_settings__WEBPACK_IMPORTED_MODULE_0__.Md)(componentName))}},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[2]!../ibm-products/src/components/BigNumbers/_storybook-styles.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
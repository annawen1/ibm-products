"use strict";(self.webpackChunk_carbon_ibm_cloud_cognitive_core=self.webpackChunk_carbon_ibm_cloud_cognitive_core||[]).push([[7652],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>action});var v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("../../node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors.is({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}},"../ibm-products/src/components/ButtonMenu/ButtonMenu.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,buttonMenu:()=>buttonMenu,default:()=>ButtonMenu_stories});var react=__webpack_require__("../../node_modules/react/index.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),es=__webpack_require__("../../node_modules/@carbon/react/es/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),settings=__webpack_require__("../ibm-products/src/settings.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["children","className","iconDescription","kind","label","menuAriaLabel","menuOptionsClass","renderIcon","size"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var blockClass="".concat(settings.K.prefix,"--button-menu"),defaults_size="lg",defaults_kind="primary",ButtonMenu=react.forwardRef((function(_ref,ref){var children=_ref.children,className=_ref.className,iconDescription=_ref.iconDescription,_ref$kind=_ref.kind,kind=void 0===_ref$kind?defaults_kind:_ref$kind,label=_ref.label,menuAriaLabel=_ref.menuAriaLabel,menuOptionsClass=_ref.menuOptionsClass,Icon=_ref.renderIcon,_ref$size=_ref.size,size=void 0===_ref$size?defaults_size:_ref$size,rest=_objectWithoutProperties(_ref,_excluded),carbonPrefix=(0,es.AKj)();return(0,jsx_runtime.jsx)(es.PQB,_objectSpread(_objectSpread({},rest),{},{className:classnames_default()(blockClass,className,"".concat(carbonPrefix,"--btn--").concat(size),_defineProperty({},"".concat(blockClass,"__wrapper--").concat(kind),kind)),"aria-label":menuAriaLabel,menuOptionsClass:classnames_default()("".concat(blockClass,"__options"),menuOptionsClass),size,renderIcon:function renderIcon(){return(0,jsx_runtime.jsxs)("div",{className:classnames_default()("".concat(blockClass,"__trigger")),children:[label,Icon&&(0,jsx_runtime.jsx)(Icon,{"aria-hidden":"true","aria-label":iconDescription,className:"".concat(carbonPrefix,"--btn__icon")})]})},innerRef:ref,children}))}));function ButtonMenuItem_typeof(o){return ButtonMenuItem_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},ButtonMenuItem_typeof(o)}function ButtonMenuItem_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function ButtonMenuItem_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ButtonMenuItem_ownKeys(Object(t),!0).forEach((function(r){ButtonMenuItem_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ButtonMenuItem_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function ButtonMenuItem_defineProperty(obj,key,value){return(key=function ButtonMenuItem_toPropertyKey(arg){var key=function ButtonMenuItem_toPrimitive(input,hint){if("object"!==ButtonMenuItem_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==ButtonMenuItem_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===ButtonMenuItem_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}ButtonMenu.deprecated={level:"warn",details:"Please replace ".concat("ButtonMenu"," with Carbon's MenuButton")},(ButtonMenu=settings.K.checkComponentEnabled(ButtonMenu,"ButtonMenu")).displayName="ButtonMenu",ButtonMenu.propTypes={children:prop_types_default().arrayOf(prop_types_default().element).isRequired,className:prop_types_default().string,iconDescription:es.zxk.propTypes.iconDescription,kind:prop_types_default().oneOf(["primary","tertiary","ghost"]),label:prop_types_default().node,menuAriaLabel:prop_types_default().string.isRequired,menuOptionsClass:prop_types_default().string,renderIcon:es.zxk.propTypes.renderIcon,size:prop_types_default().oneOf(["sm","md","lg"])},ButtonMenu.__docgenInfo={description:"Combining a standard button with an overflow menu, this component appears\nas a button and has all the usual carbon Button props and rendering, but\nacts as an overflow menu when clicked. The ButtonMenu component can contain\nzero to many ButtonMenuItem, which is identical to the carbon\nOverflowMenuItem component.",methods:[],displayName:"ButtonMenu",props:{kind:{defaultValue:{value:"'primary'",computed:!1},description:"The three types the menu button supports: primary, tertiary and ghost.",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'tertiary'",computed:!1},{value:"'ghost'",computed:!1}]},required:!1},size:{defaultValue:{value:"'lg'",computed:!1},description:"The size of the button for the menu trigger.\nThe menu button supports: sm, md, lg",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1}]},required:!1},children:{description:"Provide the contents of the ButtonMenu. This should be one or more\nButtonMenuItem components.",type:{name:"arrayOf",value:{name:"element"}},required:!0},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},iconDescription:{description:"If specifying the `renderIcon` prop, provide a description for that icon that can\nbe read by screen readers",type:{name:"custom",raw:"Button.propTypes.iconDescription"},required:!1},label:{description:"The button label for the menu trigger.",type:{name:"node"},required:!1},menuAriaLabel:{description:"Provide the ariaLabel prop to be passed to the OverflowMenu. This is distinctly\nseparate from `label` to support icon only ButtonMenus",type:{name:"string"},required:!0},menuOptionsClass:{description:"class name applied to the overflow options",type:{name:"string"},required:!1},renderIcon:{description:"Optional prop to allow overriding the icon rendering.\nCan be a React component class",type:{name:"custom",raw:"Button.propTypes.renderIcon"},required:!1}}};var ButtonMenuItem=react.forwardRef((function(props,ref){return(0,jsx_runtime.jsx)(es.laM,ButtonMenuItem_objectSpread(ButtonMenuItem_objectSpread({},props),{},{ref}))}));(ButtonMenuItem=settings.K.checkComponentEnabled(ButtonMenuItem,"ButtonMenuItem")).propTypes=es.laM.propTypes,ButtonMenuItem.__docgenInfo={description:"A menu item to include in a button menu component. This component has the\nsame props and behaviors as carbon OverflowMenuItem.",methods:[],displayName:"ButtonMenuItem",composes:["@carbon/react"]};var bucket_0=__webpack_require__("../../node_modules/@carbon/icons-react/es/generated/bucket-0.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const ButtonMenu_stories={title:"IBM Products/Internal/ButtonMenu",component:ButtonMenu,tags:["autodocs"],parameters:{storySource:{source:'function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n/**\n * Copyright IBM Corp. 2021, 2024\n *\n * This source code is licensed under the Apache-2.0 license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport React from \'react\';\nimport { action } from \'@storybook/addon-actions\';\nimport { ActionableNotification } from \'@carbon/react\';\nimport { ButtonMenu, ButtonMenuItem } from \'.\';\n// import mdx from \'./ButtonMenu.mdx\';\n\n// import styles from \'./_storybook-styles.scss\';\n\nimport { Add } from \'@carbon/react/icons\';\nexport default {\n  title: \'IBM Products/Internal/ButtonMenu\',\n  component: ButtonMenu,\n  tags: [\'autodocs\'],\n  // TODO: Define argTypes for props not represented by standard JS types.\n  // argTypes: {\n  //   egProp: { control: \'color\' },\n  // },\n  parameters: {\n    // styles,\n    /*\n    docs: {\n      page: mdx,\n    },\n    */\n  }\n};\nvar Template = function Template(args) {\n  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActionableNotification, {\n    title: "Deprecation notice",\n    subtitle: "This component is deprecated and will be removed in the next major version. Please migrate to Carbon\\u2019s MenuButton.",\n    inline: true,\n    kind: "warning",\n    lowContrast: true,\n    hideCloseButton: true,\n    actionButtonLabel: "See MenuButton",\n    statusIconDescription: "deprecation notification",\n    onActionButtonClick: function onActionButtonClick() {\n      window.open(\'https://react.carbondesignsystem.com/?path=/docs/components-menubutton--overview\');\n    },\n    style: {\n      marginBottom: \'1rem\'\n    }\n  }), /*#__PURE__*/React.createElement(ButtonMenu, _extends({\n    label: "Primary button",\n    menuAriaLabel: "Primary button",\n    renderIcon: function renderIcon(props) {\n      return /*#__PURE__*/React.createElement(Add, _extends({\n        size: 16\n      }, props));\n    }\n  }, args), /*#__PURE__*/React.createElement(ButtonMenuItem, {\n    itemText: "Option 1a",\n    onClick: action("Click on Option 1")\n  }), /*#__PURE__*/React.createElement(ButtonMenuItem, {\n    itemText: "Option 2",\n    onClick: action("Click on Option 2")\n  }), /*#__PURE__*/React.createElement(ButtonMenuItem, {\n    itemText: "Option 3",\n    onClick: action("Click on Option 3")\n  }), /*#__PURE__*/React.createElement(ButtonMenuItem, {\n    itemText: "Option 4",\n    onClick: action("Click on Option 4"),\n    hasDivider: true\n  })));\n};\nexport var buttonMenu = Template.bind({});\nbuttonMenu.storyName = \'Button menu\';',locationsMap:{"button-menu":{startLoc:{col:15,line:35},endLoc:{col:1,line:73},startBody:{col:15,line:35},endBody:{col:1,line:73}}}}}};var buttonMenu=function Template(args){return react.createElement(react.Fragment,null,react.createElement(es.FQz,{title:"Deprecation notice",subtitle:"This component is deprecated and will be removed in the next major version. Please migrate to Carbon’s MenuButton.",inline:!0,kind:"warning",lowContrast:!0,hideCloseButton:!0,actionButtonLabel:"See MenuButton",statusIconDescription:"deprecation notification",onActionButtonClick:function onActionButtonClick(){window.open("https://react.carbondesignsystem.com/?path=/docs/components-menubutton--overview")},style:{marginBottom:"1rem"}}),react.createElement(ButtonMenu,_extends({label:"Primary button",menuAriaLabel:"Primary button",renderIcon:function renderIcon(props){return react.createElement(bucket_0.mm,_extends({size:16},props))}},args),react.createElement(ButtonMenuItem,{itemText:"Option 1a",onClick:(0,dist.aD)("Click on Option 1")}),react.createElement(ButtonMenuItem,{itemText:"Option 2",onClick:(0,dist.aD)("Click on Option 2")}),react.createElement(ButtonMenuItem,{itemText:"Option 3",onClick:(0,dist.aD)("Click on Option 3")}),react.createElement(ButtonMenuItem,{itemText:"Option 4",onClick:(0,dist.aD)("Click on Option 4"),hasDivider:!0})))}.bind({});buttonMenu.storyName="Button menu",buttonMenu.parameters={...buttonMenu.parameters,docs:{...buttonMenu.parameters?.docs,source:{originalSource:'args => {\n  return <>\n      <ActionableNotification title="Deprecation notice" subtitle="This component is deprecated and will be removed in the next major version. Please migrate to Carbon’s MenuButton." inline kind="warning" lowContrast hideCloseButton actionButtonLabel="See MenuButton" statusIconDescription="deprecation notification" onActionButtonClick={() => {\n      window.open(\'https://react.carbondesignsystem.com/?path=/docs/components-menubutton--overview\');\n    }} style={{\n      marginBottom: \'1rem\'\n    }} />\n      <ButtonMenu label="Primary button" menuAriaLabel="Primary button" renderIcon={props => <Add size={16} {...props} />} {...args}>\n        <ButtonMenuItem itemText="Option 1a" onClick={action(`Click on Option 1`)} />\n        <ButtonMenuItem itemText="Option 2" onClick={action(`Click on Option 2`)} />\n        <ButtonMenuItem itemText="Option 3" onClick={action(`Click on Option 3`)} />\n        <ButtonMenuItem itemText="Option 4" onClick={action(`Click on Option 4`)} hasDivider />\n      </ButtonMenu>\n    </>;\n}',...buttonMenu.parameters?.docs?.source}}};const __namedExportsOrder=["buttonMenu"]}}]);
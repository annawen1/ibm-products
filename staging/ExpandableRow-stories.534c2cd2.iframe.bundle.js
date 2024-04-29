"use strict";(self.webpackChunk_carbon_ibm_cloud_cognitive_core=self.webpackChunk_carbon_ibm_cloud_cognitive_core||[]).push([[4324],{"../ibm-products/src/components/Datagrid/Extensions/ExpandableRow/ExpandableRow.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExpandableRowStory:()=>ExpandableRowStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ExpandableRow_stories});var react=__webpack_require__("../../node_modules/react/index.js"),bucket_5=__webpack_require__("../../node_modules/@carbon/icons-react/es/generated/bucket-5.js"),bucket_16=__webpack_require__("../../node_modules/@carbon/icons-react/es/generated/bucket-16.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),Datagrid=__webpack_require__("../ibm-products/src/components/Datagrid/Datagrid/Datagrid.js"),useDatagrid=__webpack_require__("../ibm-products/src/components/Datagrid/useDatagrid.js"),useStickyColumn=__webpack_require__("../ibm-products/src/components/Datagrid/useStickyColumn.js"),useSelectRows=__webpack_require__("../ibm-products/src/components/Datagrid/useSelectRows.js"),useExpandedRow=__webpack_require__("../ibm-products/src/components/Datagrid/useExpandedRow.js"),Datagrid_stories=__webpack_require__("../ibm-products/src/components/Datagrid/Datagrid.stories.js"),_storybook_styles=__webpack_require__("../ibm-products/src/components/Datagrid/_storybook-styles.scss"),DatagridActions=__webpack_require__("../ibm-products/src/components/Datagrid/utils/DatagridActions.js"),DatagridPagination=__webpack_require__("../ibm-products/src/components/Datagrid/utils/DatagridPagination.js"),makeData=__webpack_require__("../ibm-products/src/components/Datagrid/utils/makeData.js"),getArgTypes=__webpack_require__("../ibm-products/src/components/Datagrid/utils/getArgTypes.js"),StoryDocsPage=__webpack_require__("../ibm-products/src/global/js/utils/StoryDocsPage.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),DocsPage=function DocsPage(){return(0,jsx_runtime.jsx)(StoryDocsPage.r,{blocks:[{description:"The `Datagrid` supports expandable rows with the use of the `useExpandedRow` hook.",source:{language:"jsx",code:"\nimport { Datagrid, useDatagrid, useExpandedRow } from '@carbon/ibm-products';\n\nconst App = () => {\n  const columns = React.useMemo(() => defaultHeader, []); // These are the columns that will be used by the datagrid\n  const [data] = useState(makeData(10)); // This is the data that will be rendered by the datagrid\n\n  const expansionRenderer = ({ row }) => {\n    return <div>Content for row index: {row.id}</div>;\n  };\n\n  const datagridState = useDatagrid(\n    {\n      columns,\n      data,\n      ExpandedRowContentComponent: expansionRenderer,\n      expanderButtonTitleExpanded: 'Collapse row',\n      expanderButtonTitleCollapsed: 'Expand row', \n    },\n    useExpandedRow\n  );\n\n  return <Datagrid datagridState={datagridState} />;\n};\n          "}}]})};DocsPage.displayName="DocsPage",DocsPage.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};var package_settings=__webpack_require__("../ibm-products/src/global/js/package-settings.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectDestructuringEmpty(obj){if(null==obj)throw new TypeError("Cannot destructure "+obj)}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const ExpandableRow_stories={title:"IBM Products/Components/Datagrid/ExpandableRow",component:Datagrid.c,tags:["autodocs"],parameters:{storySource:{source:"function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError(\"Cannot destructure \" + obj); }\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n/**\n * Copyright IBM Corp. 2022, 2024\n *\n * This source code is licensed under the Apache-2.0 license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport React, { useState } from 'react';\nimport { Edit, TrashCan } from '@carbon/react/icons';\nimport { action } from '@storybook/addon-actions';\nimport { Datagrid, useDatagrid, useExpandedRow, useSelectRows, useStickyColumn } from '../../index';\nimport { getBatchActions } from '../../Datagrid.stories';\nimport styles from '../../_storybook-styles.scss';\nimport { DatagridActions } from '../../utils/DatagridActions';\nimport { DatagridPagination } from '../../utils/DatagridPagination';\nimport { makeData } from '../../utils/makeData';\nimport { ARG_TYPES } from '../../utils/getArgTypes';\nimport { DocsPage } from './ExpandableRow.docs-page';\nimport { usePrefix } from '../../../../global/js/hooks';\nexport default {\n  title: 'IBM Products/Components/Datagrid/ExpandableRow',\n  component: Datagrid,\n  tags: ['autodocs'],\n  parameters: {\n    styles: styles,\n    docs: {\n      page: DocsPage\n    },\n    layout: 'fullscreen',\n    argTypes: {\n      featureFlags: {\n        table: {\n          disable: true\n        }\n      }\n    }\n  }\n};\nvar defaultHeader = [{\n  Header: 'Row Index',\n  accessor: function accessor(row, i) {\n    return i;\n  },\n  sticky: 'left',\n  id: 'rowIndex' // id is required when accessor is a function.\n}, {\n  Header: 'First Name',\n  accessor: 'firstName'\n}, {\n  Header: 'Last Name',\n  accessor: 'lastName'\n}, {\n  Header: 'Age',\n  accessor: 'age',\n  width: 50\n}, {\n  Header: 'Visits',\n  accessor: 'visits',\n  width: 60\n}, {\n  Header: 'Someone 1',\n  accessor: 'someone1'\n}, {\n  Header: 'Someone 2',\n  accessor: 'someone2'\n}, {\n  Header: 'Someone 3',\n  accessor: 'someone3'\n}, {\n  Header: 'Someone 4',\n  accessor: 'someone4'\n}, {\n  Header: 'Someone 5',\n  accessor: 'someone5'\n}, {\n  Header: 'Someone 6',\n  accessor: 'someone6'\n}, {\n  Header: 'Someone 7',\n  accessor: 'someone7'\n}, {\n  Header: 'Someone 8',\n  accessor: 'someone8'\n}, {\n  Header: 'Someone 9',\n  accessor: 'someone9'\n}, {\n  Header: 'Someone 10',\n  accessor: 'someone10'\n}];\nvar sharedDatagridProps = {\n  emptyStateTitle: 'Empty state title',\n  emptyStateDescription: 'Description text explaining why table is empty',\n  emptyStateSize: 'lg',\n  gridTitle: 'Data table title',\n  gridDescription: 'Additional information if needed',\n  useDenseHeader: false,\n  rowSize: 'lg',\n  rowSizes: [{\n    value: 'xl',\n    labelText: 'Extra large'\n  }, {\n    value: 'lg',\n    labelText: 'Large'\n  }, {\n    value: 'md',\n    labelText: 'Medium'\n  }, {\n    value: 'xs',\n    labelText: 'Small'\n  }],\n  onRowSizeChange: function onRowSizeChange(value) {\n    console.log('row size changed to: ', value);\n  },\n  rowActions: [{\n    id: 'edit',\n    itemText: 'Edit',\n    icon: Edit,\n    onClick: action('Clicked row action: edit')\n  }, {\n    id: 'delete',\n    itemText: 'Delete',\n    icon: TrashCan,\n    isDelete: true,\n    onClick: action('Clicked row action: delete')\n  }],\n  expandedContentHeight: 96,\n  expanderButtonTitleExpanded: 'Collapse row',\n  expanderButtonTitleCollapsed: 'Expand row'\n};\nvar ExpansionRenderer = function ExpansionRenderer(_ref) {\n  var row = _ref.row;\n  var prefix = usePrefix();\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"\".concat(prefix, \"__test-class-with-prefix-hook\")\n  }, \"Content for row index: \", row.id);\n};\nvar ExpandedRows = function ExpandedRows(_ref2) {\n  var args = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));\n  var columns = React.useMemo(function () {\n    return [].concat(defaultHeader);\n  }, []);\n  var _useState = useState(makeData(10)),\n    _useState2 = _slicedToArray(_useState, 1),\n    data = _useState2[0];\n  var datagridState = useDatagrid(_objectSpread({\n    columns: columns,\n    data: data,\n    initialState: {\n      pageSize: 10,\n      pageSizes: [5, 10, 25, 50]\n    },\n    DatagridActions: DatagridActions,\n    DatagridPagination: DatagridPagination,\n    ExpandedRowContentComponent: ExpansionRenderer,\n    tags: ['autodocs'],\n    batchActions: true,\n    toolbarBatchActions: getBatchActions(),\n    onRowExpand: function onRowExpand(row, event) {\n      return console.log(row, event);\n    }\n  }, args.defaultGridProps), useStickyColumn, useSelectRows, useExpandedRow);\n  return /*#__PURE__*/React.createElement(Datagrid, {\n    datagridState: datagridState\n  });\n};\nvar BasicTemplateWrapper = function BasicTemplateWrapper(_ref3) {\n  var args = _extends({}, (_objectDestructuringEmpty(_ref3), _ref3));\n  return /*#__PURE__*/React.createElement(ExpandedRows, {\n    defaultGridProps: _objectSpread({}, args)\n  });\n};\nvar expandableRowControlProps = {\n  gridTitle: sharedDatagridProps.gridTitle,\n  gridDescription: sharedDatagridProps.gridDescription,\n  expandedContentHeight: sharedDatagridProps.expandedContentHeight,\n  expanderButtonTitleExpanded: sharedDatagridProps.expanderButtonTitleExpanded,\n  expanderButtonTitleCollapsed: sharedDatagridProps.expanderButtonTitleCollapsed\n};\nvar expandableRowStoryName = 'With expandable row';\nexport var ExpandableRowStory = BasicTemplateWrapper.bind({});\nExpandableRowStory.storyName = expandableRowStoryName;\nExpandableRowStory.argTypes = {\n  gridTitle: ARG_TYPES.gridTitle,\n  gridDescription: ARG_TYPES.gridDescription,\n  expandedContentHeight: ARG_TYPES.expandedContentHeight,\n  expanderButtonTitleExpanded: ARG_TYPES.expanderButtonTitleExpanded,\n  expanderButtonTitleCollapsed: ARG_TYPES.expanderButtonTitleCollapsed\n};\nExpandableRowStory.args = _objectSpread({}, expandableRowControlProps);",locationsMap:{"expandable-row-story":{startLoc:{col:27,line:182},endLoc:{col:1,line:187},startBody:{col:27,line:182},endBody:{col:1,line:187}}}},styles:_storybook_styles.Z,docs:{page:DocsPage},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}};var defaultHeader=[{Header:"Row Index",accessor:function accessor(row,i){return i},sticky:"left",id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:50},{Header:"Visits",accessor:"visits",width:60},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"},{Header:"Someone 4",accessor:"someone4"},{Header:"Someone 5",accessor:"someone5"},{Header:"Someone 6",accessor:"someone6"},{Header:"Someone 7",accessor:"someone7"},{Header:"Someone 8",accessor:"someone8"},{Header:"Someone 9",accessor:"someone9"},{Header:"Someone 10",accessor:"someone10"}],sharedDatagridProps_gridTitle="Data table title",sharedDatagridProps_gridDescription="Additional information if needed",ExpansionRenderer=(bucket_5.I8,(0,dist.aD)("Clicked row action: edit"),bucket_16.ZN,(0,dist.aD)("Clicked row action: delete"),function ExpansionRenderer(_ref){var row=_ref.row,prefix=function usePrefix(){return package_settings.ZP.prefix}();return react.createElement("div",{className:"".concat(prefix,"__test-class-with-prefix-hook")},"Content for row index: ",row.id)}),ExpandedRows=function ExpandedRows(_ref2){var args=_extends({},(_objectDestructuringEmpty(_ref2),_ref2)),columns=react.useMemo((function(){return[].concat(defaultHeader)}),[]),data=_slicedToArray((0,react.useState)((0,makeData._l)(10)),1)[0],datagridState=(0,useDatagrid.Z)(_objectSpread({columns,data,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:DatagridActions.D,DatagridPagination:DatagridPagination.N,ExpandedRowContentComponent:ExpansionRenderer,tags:["autodocs"],batchActions:!0,toolbarBatchActions:(0,Datagrid_stories.getBatchActions)(),onRowExpand:function onRowExpand(row,event){return console.log(row,event)}},args.defaultGridProps),useStickyColumn.Z,useSelectRows.Z,useExpandedRow.Z);return react.createElement(Datagrid.c,{datagridState})},expandableRowControlProps={gridTitle:sharedDatagridProps_gridTitle,gridDescription:sharedDatagridProps_gridDescription,expandedContentHeight:96,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"},ExpandableRowStory=function BasicTemplateWrapper(_ref3){var args=_extends({},(_objectDestructuringEmpty(_ref3),_ref3));return react.createElement(ExpandedRows,{defaultGridProps:_objectSpread({},args)})}.bind({});ExpandableRowStory.storyName="With expandable row",ExpandableRowStory.argTypes={gridTitle:getArgTypes.u.gridTitle,gridDescription:getArgTypes.u.gridDescription,expandedContentHeight:getArgTypes.u.expandedContentHeight,expanderButtonTitleExpanded:getArgTypes.u.expanderButtonTitleExpanded,expanderButtonTitleCollapsed:getArgTypes.u.expanderButtonTitleCollapsed},ExpandableRowStory.args=_objectSpread({},expandableRowControlProps),ExpandableRowStory.parameters={...ExpandableRowStory.parameters,docs:{...ExpandableRowStory.parameters?.docs,source:{originalSource:"({\n  ...args\n}) => {\n  return <ExpandedRows defaultGridProps={{\n    ...args\n  }} />;\n}",...ExpandableRowStory.parameters?.docs?.source}}};const __namedExportsOrder=["ExpandableRowStory"]}}]);
import{j as m}from"./settings-CRrTVbgr.js";import{R as d,r as w}from"./index-CTjT7uj6.js";import{a as i}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{D as g,a as E,m as A,u as h}from"./_storybook-styles-i3iCgewe.js";import{S as z}from"./StoryDocsPage-Bt8tN_UY.js";import{D as b}from"./DatagridActions-hsLtu9vl.js";import{D}from"./DatagridPagination-cJgZF2xk.js";import{A as o}from"./getArgTypes-CUsKgYxs.js";import{u as k}from"./useActionsColumn-ByRSk8uw.js";import{u as f}from"./useStickyColumn-ZVO1WK8S.js";import{u as N}from"./useSelectRows-BL8RvDfN.js";import{a as I}from"./bucket-5--iEWWNCt.js";import{T as M}from"./bucket-16-C5jbOqAN.js";import{C as G}from"./events-D0gen66i.js";import{A as u}from"./bucket-0-oY2tyfOj.js";import"./index-BU4hwJwl.js";import"./index-BRV0Se7Z.js";import"./deprecate-BLSDO8J_.js";import"./index-DN5spsdJ.js";import"./v4-CQkTLCs1.js";import"./devtools-BECPDnEK.js";import"./TableRow-CfUWZmJ6.js";import"./wrapComponent-DuUaIn3s.js";import"./TableToolbar-issDisOB.js";import"./Text-CJa2B8Yb.js";import"./ErrorEmptyState-JVdmBFpY.js";import"./Link-B87RWa8F.js";import"./EmptyState-ziZ15FsL.js";import"./props-helper-CMbLuKX0.js";import"./EmptyStateV2-D0xS4Aff.js";import"./iframe-DBTVSOxk.js";import"../sb-preview/runtime.js";import"./ErrorIllustration-BJJAi4cB.js";import"./uuidv4-BQrI85uz.js";import"./NoDataEmptyState-6owofLdA.js";import"./NoDataIllustration-Cbu5equv.js";import"./NotFoundEmptyState-BBqq9YRC.js";import"./NotFoundIllustration-CUxt5hHs.js";import"./useMultipleKeyTracking-CH9TKWYU.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-SLCf_n8R.js";import"./usePreviousValue-BqVTtLed.js";import"./useResizeObserver-BvbgZjpI.js";import"./index-fsmjFOXH.js";import"./useControllableState-B1slDU0H.js";import"./useAttachedMenu-TY58osux.js";import"./bucket-1-D9I7e5DL.js";import"./getFocusableElements-BW7cf991.js";import"./index-CJaoAHRt.js";import"./index-DshjxXYm.js";import"./useClickOutside-BabGwu55.js";import"./AccordionItem-C4NI2xLC.js";import"./Search-DsgRvTuS.js";import"./FormContext-D0sdIVRD.js";import"./bucket-13-DW3ggDVU.js";import"./index-JTvCgqhd.js";import"./LayerContext-BJwyboGm.js";import"./motionConstants-C62tzl7F.js";import"./tslib.es6-CI8bilKU.js";import"./index-DkUr2NOz.js";import"./ActionSet-B7TUuTqf.js";import"./ButtonSet-CltDhnub.js";import"./InlineLoading-BAXzw7Vs.js";import"./Checkbox-BIXmEu_U.js";import"./bucket-17-DCCQrBLC.js";import"./DatePicker-DKaYnu5B.js";import"./Dropdown-ClvEqLzO.js";import"./index-Dgpqnxx_.js";import"./index-DcAOwtUU.js";import"./mergeRefs-CTUecegF.js";import"./FormGroup-jYEYux68.js";import"./NumberInput-BAY_6XtC.js";import"./useNormalizedInputProps-DXf7f817.js";import"./bucket-14-CVMjmpSy.js";import"./RadioButton-e3vkHDFl.js";import"./RadioButtonGroup-5O28pTwM.js";import"./MultiSelect-BUG_YuIi.js";import"./index-CVMazV68.js";import"./toString-Cu7nsjnZ.js";import"./isSymbol-D87B3_a6.js";import"./FilterSummary-_0Q1hst9.js";import"./debounce-BaS29eSe.js";import"./toNumber-CpuPfuLu.js";import"./useWindowResize-CQvE3W8T.js";import"./TagSet-thr0-q_Q.js";import"./Tag-BhXbbo73.js";import"./ComposedModal-uB4X-JZy.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-ldDxJswA.js";import"./index-DASh2Ycj.js";import"./usePortalTarget-BYb2WbwP.js";import"./SkeletonText-Rz2pBgBx.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-75KDai46.js";import"./bucket-6-ckIbrPfr.js";import"./index-D2xy4Ma0.js";import"./index-C2eUe6cH.js";import"./index-D4-blIwu.js";import"./index-DrFu-skq.js";import"./story-helper-B-B3tTUV.js";import"./index-D3kbHbBV.js";import"./bucket-11-DVAi0r8D.js";import"./createClassWrapper-CcV1pVUD.js";import"./TableToolbarSearch-DCJBnmH2.js";import"./bucket-12-B9dKP5Fb.js";import"./Select-0ed2M-1J.js";import"./SelectItem-BiVyLHyp.js";import"./TableSelectRow-Ci3FKCGw.js";const j=()=>m.jsx(z,{blocks:[{title:"Actions column",description:"This will add row actions (if more than two actions are provided an OverflowMenu component will be used) to the cells on the column marked with `isAction: true`. Each action button callback will include the actionId and the row object.\n- Include useActionsColumn hook\n- Add `isAction = true` to the column object in which you which to add the overflow menu actions\n- Add `rowActions = []` array to the props\n  - `rowActions[].id` for callback to identify the action is called\n  - `rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldHideMenuItem(row: Row)` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n  - `rowActions[].shouldDisableMenuItem(row: Row)` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)\n    - This will override `rowActions[].disabled` (from Carbon) because `shouldDisableMenuItem` is more specific to the row.\n  - each action object can take all the props from OverflowMenuItem props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)\n        ",source:{code:`
const columns = [
  // other columns
  {
    Header: '',
    accessor: 'actions',
    isAction: true,
  },
];
const onActionClick = (actionId, row, event) => {};
const datagridState = useDatagrid(
  {
    columns,
    data,
    rowActions: [
      {
        id: 'edit',
        itemText: 'Edit',
        onClick: onActionClick,
      },
      {
        id: 'hidden',
        itemText: 'Hidden item',
        onClick: onActionClick,
        shouldHideMenuItem: () => true,
      },
      {
        id: 'delete',
        itemText: 'Delete',
        hasDivider: true,
        isDelete: true,
        onClick: onActionClick,
      },
    ],
  },
  useActionsColumn
);

return <Datagrid datagridState={datagridState} />;`}}]});j.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const $o={title:"IBM Products/Components/Datagrid/RowActionButtons",component:g,tags:["autodocs"],parameters:{styles:E,docs:{page:j},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}}},S=[{Header:"Row Index",accessor:(t,s)=>s,id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:90},{Header:"Visits",accessor:"visits",width:100},{Header:"Someone 1",accessor:"someone1"},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"}],e={emptyStateTitle:"Empty state title",emptyStateDescription:"Description text explaining why table is empty",emptyStateSize:"lg",gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowSize:"lg",rowSizes:[{value:"xl",labelText:"Extra large"},{value:"lg",labelText:"Large"},{value:"md",labelText:"Medium"},{value:"xs",labelText:"Small"}],onRowSizeChange:t=>{console.log("row size changed to: ",t)},rowActions:[{id:"edit",itemText:"Edit",icon:I,onClick:i("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:M,isDelete:!0,onClick:i("Clicked row action: delete"),align:"top-right"}]},U=({...t})=>{const s=d.useMemo(()=>[...S,{Header:"",accessor:"actions",isAction:!0}],[]),[r]=w.useState(A(10)),p=d.useMemo(()=>r,[r]),l=h({columns:s,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:b,DatagridPagination:D,...t.defaultGridProps},f,k);return m.jsx(g,{datagridState:l})},O=({...t})=>m.jsx(U,{defaultGridProps:{...t}}),W={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:e.rowActions},_="With row action buttons",a=O.bind({});a.storyName=_;a.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};a.args={...W};const F=({...t})=>{const s=d.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[r]=w.useState(A(10)),p=d.useMemo(()=>r,[r]),l=h({columns:s,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:b,DatagridPagination:D,...t.defaultGridProps},f,k);return m.jsx(g,{datagridState:l})},L=({...t})=>m.jsx(F,{defaultGridProps:{...t}}),V={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:[{id:"edit",itemText:"Edit",icon:I,onClick:i("Clicked row action: edit")},{id:"approve",itemText:"Approve",icon:G,onClick:i("Clicked row action: approve")},{id:"delete",itemText:"Delete",icon:M,isDelete:!0,hasDivider:!0,onClick:i("Clicked row action: delete")}]},Y="With many row action buttons",n=L.bind({});n.storyName=Y;n.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions};n.args={...V};const q=({...t})=>{const s=d.useMemo(()=>[...S,{Header:"",accessor:"actions",sticky:"right",isAction:!0}],[]),[r]=w.useState(A(10)),p=d.useMemo(()=>r,[r]),l=h({columns:s,data:p,initialState:{pageSize:10,pageSizes:[5,10,25,50]},DatagridActions:b,DatagridPagination:D,...t.defaultGridProps},f,k,N);return m.jsx(g,{datagridState:l})},J=()=>[{label:"Duplicate",renderIcon:u,onClick:i("Clicked batch action button")},{label:"Add",renderIcon:u,onClick:i("Clicked batch action button")},{label:"Publish to catalog",renderIcon:u,onClick:i("Clicked batch action button")},{label:"Download",renderIcon:u,onClick:i("Clicked batch action button")},{label:"Delete",renderIcon:u,onClick:i("Clicked batch action button"),hasDivider:!0,kind:"danger"}],K=({...t})=>m.jsx(q,{defaultGridProps:{...t}}),Q={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowActions:e.rowActions,toolbarBatchActions:J(),batchActions:!0},X="With row action buttons and batch actions",c=K.bind({});c.storyName=X;c.argTypes={gridTitle:o.gridTitle,gridDescription:o.gridDescription,useDenseHeader:o.useDenseHeader,rowActions:o.rowActions,batchActions:o.batchActions};c.args={...Q};var T,C,y;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtons defaultGridProps={{
    ...args
  }} />;
}`,...(y=(C=a.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var B,R,x;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsOverflow defaultGridProps={{
    ...args
  }} />;
}`,...(x=(R=n.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var H,v,P;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`({
  ...args
}) => {
  return <RowActionButtonsBatchActions defaultGridProps={{
    ...args
  }} />;
}`,...(P=(v=c.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};const te=["RowActionButtonsUsageStory","ManyRowActionButtonsUsageStory","RowActionButtonsBatchActionsUsageStory"];export{n as ManyRowActionButtonsUsageStory,c as RowActionButtonsBatchActionsUsageStory,a as RowActionButtonsUsageStory,te as __namedExportsOrder,$o as default};

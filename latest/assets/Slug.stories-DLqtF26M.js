import{j as p}from"./settings-CRrTVbgr.js";import{R as W,r as I}from"./index-CTjT7uj6.js";import{u as _}from"./deprecate-BLSDO8J_.js";import{a as w}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{D as B,a as M,m as V,u as F,b as L,E as h}from"./_storybook-styles-i3iCgewe.js";import{D as O}from"./DatagridActions-hsLtu9vl.js";import{A as e}from"./getArgTypes-CUsKgYxs.js";import{S as Y}from"./StoryDocsPage-Bt8tN_UY.js";import{u as $}from"./useExpandedRow-Bdr0XU-w.js";import{u as q}from"./useSelectRows-BL8RvDfN.js";import{a as J}from"./bucket-5--iEWWNCt.js";import{T as K}from"./bucket-16-C5jbOqAN.js";import"./index-BU4hwJwl.js";import"./index-BRV0Se7Z.js";import"./events-D0gen66i.js";import"./index-DN5spsdJ.js";import"./v4-CQkTLCs1.js";import"./devtools-BECPDnEK.js";import"./TableRow-CfUWZmJ6.js";import"./wrapComponent-DuUaIn3s.js";import"./bucket-0-oY2tyfOj.js";import"./TableToolbar-issDisOB.js";import"./Text-CJa2B8Yb.js";import"./ErrorEmptyState-JVdmBFpY.js";import"./Link-B87RWa8F.js";import"./EmptyState-ziZ15FsL.js";import"./props-helper-CMbLuKX0.js";import"./EmptyStateV2-D0xS4Aff.js";import"./iframe-DBTVSOxk.js";import"../sb-preview/runtime.js";import"./ErrorIllustration-BJJAi4cB.js";import"./uuidv4-BQrI85uz.js";import"./NoDataEmptyState-6owofLdA.js";import"./NoDataIllustration-Cbu5equv.js";import"./NotFoundEmptyState-BBqq9YRC.js";import"./NotFoundIllustration-CUxt5hHs.js";import"./useMultipleKeyTracking-CH9TKWYU.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-SLCf_n8R.js";import"./usePreviousValue-BqVTtLed.js";import"./useResizeObserver-BvbgZjpI.js";import"./index-fsmjFOXH.js";import"./useControllableState-B1slDU0H.js";import"./useAttachedMenu-TY58osux.js";import"./bucket-1-D9I7e5DL.js";import"./getFocusableElements-BW7cf991.js";import"./index-CJaoAHRt.js";import"./index-DshjxXYm.js";import"./useClickOutside-BabGwu55.js";import"./AccordionItem-C4NI2xLC.js";import"./Search-DsgRvTuS.js";import"./FormContext-D0sdIVRD.js";import"./bucket-13-DW3ggDVU.js";import"./index-JTvCgqhd.js";import"./LayerContext-BJwyboGm.js";import"./motionConstants-C62tzl7F.js";import"./tslib.es6-CI8bilKU.js";import"./index-DkUr2NOz.js";import"./ActionSet-B7TUuTqf.js";import"./ButtonSet-CltDhnub.js";import"./InlineLoading-BAXzw7Vs.js";import"./Checkbox-BIXmEu_U.js";import"./bucket-17-DCCQrBLC.js";import"./DatePicker-DKaYnu5B.js";import"./Dropdown-ClvEqLzO.js";import"./index-Dgpqnxx_.js";import"./index-DcAOwtUU.js";import"./mergeRefs-CTUecegF.js";import"./FormGroup-jYEYux68.js";import"./NumberInput-BAY_6XtC.js";import"./useNormalizedInputProps-DXf7f817.js";import"./bucket-14-CVMjmpSy.js";import"./RadioButton-e3vkHDFl.js";import"./RadioButtonGroup-5O28pTwM.js";import"./MultiSelect-BUG_YuIi.js";import"./index-CVMazV68.js";import"./toString-Cu7nsjnZ.js";import"./isSymbol-D87B3_a6.js";import"./FilterSummary-_0Q1hst9.js";import"./debounce-BaS29eSe.js";import"./toNumber-CpuPfuLu.js";import"./useWindowResize-CQvE3W8T.js";import"./TagSet-thr0-q_Q.js";import"./Tag-BhXbbo73.js";import"./ComposedModal-uB4X-JZy.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-ldDxJswA.js";import"./index-DASh2Ycj.js";import"./usePortalTarget-BYb2WbwP.js";import"./SkeletonText-Rz2pBgBx.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-75KDai46.js";import"./bucket-6-ckIbrPfr.js";import"./index-D3kbHbBV.js";import"./bucket-11-DVAi0r8D.js";import"./createClassWrapper-CcV1pVUD.js";import"./TableToolbarSearch-DCJBnmH2.js";import"./bucket-12-B9dKP5Fb.js";import"./index-D2xy4Ma0.js";import"./index-C2eUe6cH.js";import"./index-D4-blIwu.js";import"./index-DrFu-skq.js";import"./story-helper-B-B3tTUV.js";import"./useFocusRowExpander-BfDxXWCM.js";import"./TableSelectRow-Ci3FKCGw.js";const rr={title:"IBM Products/Components/Datagrid/Slug",component:B,tags:["autodocs"],parameters:{styles:M,docs:{page:()=>p.jsx(Y,{blocks:[{description:"A Carbon AI slug can be used within the Datagrid for both column headers and rows. To include a column header AI slug, include a `slug` property within your column definition and include the Slug component as it's own custom component",source:{code:`
{
  Header: 'Visits',
  accessor: 'visits',
  slug: <ExampleSlug />,
}
`}},{description:"or used directly from the Slug component itself",source:{code:`
{
  Header: 'Visits',
  accessor: 'visits',
  slug: (
    <Slug className="slug-container" autoAlign={false} align="bottom-right">
      <SlugContent>
        ...
        ...
      </SlugContent>
    </Slug>
  ),
}
`}},{description:"To include a slug on the row level, include a `slug` property in your row data with the same structure as outlined above."}]})},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}},excludeStories:["ExampleSlug"]},Q=(o,r)=>[{Header:"Row Index",accessor:(u,m)=>m,sticky:"left",id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:60},{Header:"Visits",accessor:"visits",width:120,slug:!o&&p.jsx(h,{align:r})},{Header:"Someone 1",accessor:"someone1",slug:!o&&p.jsx(h,{align:r}),width:200},{Header:"Someone 2",accessor:"someone2"},{Header:"Someone 3",accessor:"someone3"},{Header:"Someone 4",accessor:"someone4"},{Header:"Someone 5",accessor:"someone5"},{Header:"Someone 6",accessor:"someone6"},{Header:"Someone 7",accessor:"someone7"},{Header:"Someone 8",accessor:"someone8"},{Header:"Someone 9",accessor:"someone9"},{Header:"Someone 10",accessor:"someone10"}],l={emptyStateTitle:"Empty state title",emptyStateDescription:"Description text explaining why table is empty",emptyStateSize:"lg",gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowSize:"lg",rowSizes:[{value:"xl",labelText:"Extra large"},{value:"lg",labelText:"Large"},{value:"md",labelText:"Medium"},{value:"xs",labelText:"Small"}],onRowSizeChange:o=>{console.log("row size changed to: ",o)},rowActions:[{id:"edit",itemText:"Edit",icon:J,onClick:w("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:K,isDelete:!0,onClick:w("Clicked row action: delete")}]},d={gridTitle:l.gridTitle,gridDescription:l.gridDescription,useDenseHeader:l.useDenseHeader,rowSize:l.rowSize,rowSizes:l.rowSizes,onRowSizeChange:l.onRowSizeChange},U=({row:o})=>{const r=_();return p.jsxs("div",{className:`${r}__test-class-with-prefix-hook`,children:["Content for row index: ",o.id]})},X=({rowSlug:o,rowSlugAlign:r,withSorting:u,withSelect:m,withExpansion:S,...c})=>{const v=W.useMemo(()=>Q(o,r),[]),[j]=I.useState(V(10,2,{enableAIRow:o,slugAlign:r})),k=F({columns:v,data:j,DatagridActions:O,ExpandedRowContentComponent:U,...c.defaultGridProps},u?L:"",m?q:"",S?$:"");return p.jsx(B,{datagridState:k})},g=({rowSlug:o,rowSlugAlign:r,withSorting:u,withSelect:m,withExpansion:S,...c})=>p.jsx(X,{defaultGridProps:{...c},withSorting:u,rowSlug:o,rowSlugAlign:r,withSelect:m,withExpansion:S}),Z="Column slug",t=g.bind({});t.storyName=Z;t.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};t.args={...d};const ee="Column slug sort",i=g.bind({});i.storyName=ee;i.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};i.args={...d,withSorting:!0};const oe="Row slug",n=g.bind({});n.storyName=oe;n.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};n.args={...d,rowSlug:!0,rowSlugAlign:"right"};const re="Row slug with selection",s=g.bind({});s.storyName=re;s.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};s.args={...d,rowSlug:!0,rowSlugAlign:"right",withSelect:!0};const te="Row slug with selection and expansion",a=g.bind({});a.storyName=te;a.argTypes={gridTitle:e.gridTitle,gridDescription:e.gridDescription,useDenseHeader:e.useDenseHeader,rowSize:e.rowSize,rowSizes:e.rowSizes,onRowSizeChange:e.onRowSizeChange,expanderButtonTitleExpanded:"Collapse row",expanderButtonTitleCollapsed:"Expand row"};a.args={...d,rowSlug:!0,rowSlugAlign:"right",withSelect:!0,withExpansion:!0};var x,C,E;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`({
  rowSlug,
  rowSlugAlign,
  withSorting,
  withSelect,
  withExpansion,
  ...args
}) => {
  return <GridWithSlugColumnHeader defaultGridProps={{
    ...args
  }} withSorting={withSorting} rowSlug={rowSlug} rowSlugAlign={rowSlugAlign} withSelect={withSelect} withExpansion={withExpansion} />;
}`,...(E=(C=t.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var H,D,y;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`({
  rowSlug,
  rowSlugAlign,
  withSorting,
  withSelect,
  withExpansion,
  ...args
}) => {
  return <GridWithSlugColumnHeader defaultGridProps={{
    ...args
  }} withSorting={withSorting} rowSlug={rowSlug} rowSlugAlign={rowSlugAlign} withSelect={withSelect} withExpansion={withExpansion} />;
}`,...(y=(D=i.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var z,T,f;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`({
  rowSlug,
  rowSlugAlign,
  withSorting,
  withSelect,
  withExpansion,
  ...args
}) => {
  return <GridWithSlugColumnHeader defaultGridProps={{
    ...args
  }} withSorting={withSorting} rowSlug={rowSlug} rowSlugAlign={rowSlugAlign} withSelect={withSelect} withExpansion={withExpansion} />;
}`,...(f=(T=n.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var R,A,b;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`({
  rowSlug,
  rowSlugAlign,
  withSorting,
  withSelect,
  withExpansion,
  ...args
}) => {
  return <GridWithSlugColumnHeader defaultGridProps={{
    ...args
  }} withSorting={withSorting} rowSlug={rowSlug} rowSlugAlign={rowSlugAlign} withSelect={withSelect} withExpansion={withExpansion} />;
}`,...(b=(A=s.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var N,G,P;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`({
  rowSlug,
  rowSlugAlign,
  withSorting,
  withSelect,
  withExpansion,
  ...args
}) => {
  return <GridWithSlugColumnHeader defaultGridProps={{
    ...args
  }} withSorting={withSorting} rowSlug={rowSlug} rowSlugAlign={rowSlugAlign} withSelect={withSelect} withExpansion={withExpansion} />;
}`,...(P=(G=a.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};const tr=["SlugColumnHeaderStory","SlugSortableColumnHeaderStory","SlugRowStory","SlugRowSelectionStory","SlugRowSelectionAndExpandStory"];export{t as SlugColumnHeaderStory,a as SlugRowSelectionAndExpandStory,s as SlugRowSelectionStory,n as SlugRowStory,i as SlugSortableColumnHeaderStory,tr as __namedExportsOrder,rr as default};

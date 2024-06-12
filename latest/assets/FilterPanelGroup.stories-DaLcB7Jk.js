import{j as e}from"./settings-CRrTVbgr.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import"./chunk-HLWAVYOI-C5JlZMjl.js";import{e as c,i as m,C as d}from"./index-D2xy4Ma0.js";import{s as u}from"./_storybook-styles-C0uQlRwR.js";import{F as p}from"./FilterPanelGroup-B5aQjfxd.js";import{a as h}from"./FilterPanelLabel-BTABVmOg.js";import"./index-CTjT7uj6.js";import"./index-BU4hwJwl.js";import"./index-BRV0Se7Z.js";import"./deprecate-BLSDO8J_.js";import"./events-D0gen66i.js";import"./index-DN5spsdJ.js";import"./iframe-DBTVSOxk.js";import"../sb-preview/runtime.js";import"./react-18-BLKOY-yY.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./inheritsLoose-SLCf_n8R.js";import"./toString-Cu7nsjnZ.js";import"./isSymbol-D87B3_a6.js";import"./index-D4-blIwu.js";import"./index-DrFu-skq.js";import"./devtools-BECPDnEK.js";function o(n){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"filterpanelgroup",children:"FilterPanelGroup"}),`
`,e.jsx(r.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(r.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"FilterPanelGroup"}),` is a container for visually grouping content with a label
and optional count.`]}),`
`,e.jsx(c,{children:e.jsx(m,{of:t})}),`
`,e.jsx(r.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(d,{})]})}function x(n={}){const{wrapper:r}={...a(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}const j="filter-panel-stories",B={title:"IBM Products/Components/Filter panel/FilterPanelGroup",component:p,tags:["autodocs"],parameters:{styles:u,docs:{page:x}},argTypes:{children:{table:{disable:!0}},className:{control:{type:{}}},count:{control:{type:"select",labels:{0:"No value",1:"As number: 10",2:'As string: "1,500"'}},mapping:{0:void 0,1:10,2:"1,500"},options:[0,1,2]},labelText:{control:{type:"select",labels:{0:"Plain text",1:"Very long text",2:"Using markup"}},mapping:{0:"Group name",1:"Really, really, really long group name",2:e.jsxs(e.Fragment,{children:["Formatted ",e.jsx("em",{children:"group"})," ",e.jsx("span",{style:{fontWeight:"normal"},children:"label"})]})},options:[0,1,2]}},args:{count:1,labelText:0}},g=n=>e.jsx("div",{className:`${j}__viewport`,children:e.jsx(h,{children:e.jsx(p,{...n,children:" "})})}),t=g.bind({});t.storyName="Default";t.args={title:""};var l,s,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <FilterPanel>
        <FilterPanelGroup {...args}>
          {/* \`children\` are required. */}
          &nbsp;
        </FilterPanelGroup>
      </FilterPanel>
    </div>;
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const L=["Default"];export{t as Default,L as __namedExportsOrder,B as default};

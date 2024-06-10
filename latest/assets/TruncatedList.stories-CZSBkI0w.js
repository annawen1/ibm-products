import{j as t}from"./settings-K-okNOOf.js";import"./deprecate-BLSDO8J_.js";import{T as a,L as s}from"./TruncatedList-BIC-5ZHU.js";import{a as l}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{useMDXComponents as d}from"./index-DSkyVWTJ.js";import"./chunk-HLWAVYOI-CelMkzh-.js";import{e as I,i as p,C as h}from"./index-Cf6dYWJP.js";import"./index-CTjT7uj6.js";import"./index-BU4hwJwl.js";import"./index-BRV0Se7Z.js";import"./events-D0gen66i.js";import"./index-DN5spsdJ.js";import"./Text-CJa2B8Yb.js";import"./devtools-Bwmhsu0A.js";import"./v4-CQkTLCs1.js";import"./iframe-ZAk7Pddq.js";import"../sb-preview/runtime.js";import"./react-18-BLKOY-yY.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./inheritsLoose-SLCf_n8R.js";import"./toString-Cu7nsjnZ.js";import"./isSymbol-D87B3_a6.js";import"./index-D4-blIwu.js";import"./index-DrFu-skq.js";const x=".sb-show-main.sb-main-centered #storybook-root{margin-top:1rem}.truncated-list-stories__viewport{width:10rem}";function r(i){const e={a:"a",h1:"h1",h2:"h2",li:"li",ul:"ul",...d(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h1,{id:"truncatedlist",children:"TruncatedList"}),`
`,t.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,t.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,`
`,t.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,t.jsx(I,{children:t.jsx(p,{of:n})}),`
`,t.jsx(e.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(h,{})]})}function L(i={}){const{wrapper:e}={...d(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(r,{...i})}):r(i)}const j="truncated-list-stories",G={title:"IBM Products/Components/Truncated list/TruncatedList",component:a,tags:["autodocs"],parameters:{styles:x,layout:"centered",docs:{page:L}}},u=i=>t.jsx("div",{className:`${j}__viewport`,children:t.jsxs(a,{onClick:e=>{l(`clicked, is ${e?"collapsed":"expanded"}`)()},...i,children:[t.jsx(s,{children:"Item 1"}),t.jsx(s,{children:"Item 2"}),t.jsx(s,{children:"Item 3"}),t.jsx(s,{children:"Item 4"}),t.jsx(s,{children:"Item 5"}),t.jsx(s,{children:"Item 6"}),t.jsx(s,{children:"Item 7"}),t.jsx(s,{children:"Item 8"}),t.jsx(s,{children:"Item 9"}),t.jsx(s,{children:"Item 10"}),t.jsx(s,{children:"Item 11"}),t.jsx(s,{children:"Item 12"}),t.jsx(s,{children:"Item 13"}),t.jsx(s,{children:"Item 14"}),t.jsx(s,{children:"Item 15"}),t.jsx(s,{children:"Item 16"})]})}),n=u.bind({});n.args={as:"ul",collapsedItemsLimit:3,expandedItemsLimit:9};var m,o,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <TruncatedList onClick={isCollapsed => {
      action(\`clicked, is \${isCollapsed ? 'collapsed' : 'expanded'}\`)();
    }} {...args}>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
        <ListItem>Item 5</ListItem>
        <ListItem>Item 6</ListItem>
        <ListItem>Item 7</ListItem>
        <ListItem>Item 8</ListItem>
        <ListItem>Item 9</ListItem>
        <ListItem>Item 10</ListItem>
        <ListItem>Item 11</ListItem>
        <ListItem>Item 12</ListItem>
        <ListItem>Item 13</ListItem>
        <ListItem>Item 14</ListItem>
        <ListItem>Item 15</ListItem>
        <ListItem>Item 16</ListItem>
      </TruncatedList>
    </div>;
}`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const H=["truncatedList"];export{H as __namedExportsOrder,G as default,n as truncatedList};

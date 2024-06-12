import{j as t}from"./settings-CRrTVbgr.js";import{a as r}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{useMDXComponents as m}from"./index-DSkyVWTJ.js";import"./chunk-HLWAVYOI-C5JlZMjl.js";import{e as u,i as h,C as x}from"./index-D2xy4Ma0.js";import{D as s}from"./DecoratorBase-hRm7rLR5.js";import"./index-CTjT7uj6.js";import"./index-BU4hwJwl.js";import"./index-BRV0Se7Z.js";import"./deprecate-BLSDO8J_.js";import"./events-D0gen66i.js";import"./index-DN5spsdJ.js";import"./v4-CQkTLCs1.js";import"./iframe-DBTVSOxk.js";import"../sb-preview/runtime.js";import"./react-18-BLKOY-yY.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./inheritsLoose-SLCf_n8R.js";import"./toString-Cu7nsjnZ.js";import"./isSymbol-D87B3_a6.js";import"./index-D4-blIwu.js";import"./index-DrFu-skq.js";import"./devtools-BECPDnEK.js";import"./bucket-1-D9I7e5DL.js";import"./bucket-4-CyLPAhM6.js";import"./bucket-14-CVMjmpSy.js";function l(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...m(),...n.components};return t.jsxs(t.Fragment,{children:[`
`,`
`,t.jsx(e.h1,{id:"decoratorbase",children:"DecoratorBase"}),`
`,t.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#example-setlabeltitle",children:"Example setLabelTitle()"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,t.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,t.jsx(e.p,{children:t.jsx(e.em,{children:t.jsx(e.strong,{children:`The DecoratorBase is for internal use only and is used to build the other
Decorator types.`})})}),`
`,t.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,t.jsx(u,{children:t.jsx(h,{of:o})}),`
`,t.jsxs(e.h2,{id:"example-setlabeltitle",children:["Example ",t.jsx(e.strong,{children:"setLabelTitle()"})]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`setLabelTitle: (score, scoreThresholds, magnitude) => {
  if (typeof score !== 'number') {
    return 'Unknown score';
  }
  return \`"\${magnitude}" magnitude. Score \${score} out of \${
    scoreThresholds[scoreThresholds.length - 1]
  }\`;
},
`})}),`
`,t.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(x,{})]})}function g(n={}){const{wrapper:e}={...m(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(l,{...n})}):l(n)}const j="",a={"-1 (less than 0 is 0)":-1,"0 ":0,"1 ":1,"2 ":2,"3 ":3,"4 ":4,"5 ":5,"6 ":6,"7 ":7,"8 ":8,"9 ":9,"10 ":10,"11 (greater than 10 is 10)":11,'NaN; treated as "Unknown"':null},z={title:"IBM Products/Internal/DecoratorBase",component:s,tags:["autodocs"],parameters:{styles:j,docs:{page:g}},argTypes:{kind:{table:{disable:!0}},className:{control:{type:{}}},onClickLabel:{control:{type:{}}},onClickValue:{control:{type:{}}},onContextMenuLabel:{control:{type:{}}},onContextMenuValue:{control:{type:{}}},setLabelTitle:{control:{type:{}}},score:{control:{type:"select",labels:Object.keys(a)},mapping:Object.values(a),options:Object.values(a).map((n,e)=>e)},truncateValue:{control:{type:"select",labels:{0:"No truncation",1:'"end"',2:'"start"',3:"{ maxLength:20, front:9, back:10 }"}},mapping:{0:void 0,1:"end",2:"start",3:{maxLength:20,front:9,back:10}},options:[0,1,2,3]}},args:{truncateValue:0}},f=n=>n.truncateValue?t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{padding:"0 0 1rem"},children:"With limited width."}),t.jsx("div",{style:{maxWidth:"16rem",padding:"3px",outline:"2px dashed #999"},children:t.jsx(s,{...n,value:"Very long value to show truncation"})})]}):t.jsx(s,{...n}),o=f.bind({});o.storyName="DecoratorBase";o.args={disabled:!1,kind:"default",hideIcon:!1,label:"IP",onClickLabel:(n,e)=>r("onClickLabel")(e),onClickValue:(n,e)=>r("onClickValue")(e),onContextMenuLabel:(n,e)=>r("onContextMenuLabel")(e),onContextMenuValue:(n,e)=>r("onContextMenuValue")(e),score:5,scoreThresholds:[0,4,7,10],setLabelTitle:(n,e,p)=>typeof n!="number"?"Unknown score":`"${p}" magnitude. Score ${n} out of ${e[e.length-1]}`,small:!1,theme:"light",value:"192.168.0.50",valueTitle:""};var i,c,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  if (args.truncateValue) {
    return <>
        <div style={{
        padding: '0 0 1rem'
      }}>With limited width.</div>
        <div style={{
        maxWidth: '16rem',
        padding: '3px',
        outline: '2px dashed #999'
      }}>
          <DecoratorBase {...args} value="Very long value to show truncation" />
        </div>
      </>;
  }
  return <DecoratorBase {...args} />;
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const G=["Default"];export{o as Default,G as __namedExportsOrder,z as default};

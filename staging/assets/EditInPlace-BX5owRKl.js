import{p as N,j as n,c as R,I as _}from"./settings-BiUEFdm2.js";import{r as l}from"./index-BwDkhjyp.js";import{c as $,C as Z}from"./deprecate-D9ms-jbM.js";import{P as e}from"./index-Dk74W0Oi.js";import{g as ee}from"./devtools-BPcQvzXy.js";import{W as te}from"./bucket-17-CArjO86K.js";import{C as ne}from"./events-Bq7WR1mU.js";import{a as ae}from"./bucket-5-BuK6y5Rd.js";const j="EditInPlace",t=`${N.prefix}--edit-in-place`,ie={tooltipAlignment:"top",size:"sm"};let m=l.forwardRef(({cancelLabel:E,editAlwaysVisible:A,editLabel:S,id:H,inheritTypography:L,invalid:s,invalidLabel:z=" ",invalidText:B,labelText:V,onCancel:F,onChange:O,onSave:W,onBlur:C,saveLabel:D,size:o="sm",tooltipAlignment:f,value:u,...K},G)=>{const[g,d]=l.useState(!1),[p,P]=l.useState(""),[h,v]=l.useState(!1),r=l.useRef(null),b=u!==p&&!s,y=l.useRef(!1),J=typeof f=="object",T=["edit","save","cancel"].reduce((a,i)=>(a[i]=(J?f[i]:f)??ie.tooltipAlignment,a),{});l.useEffect(()=>{!p&&!h&&P(u)},[p,h,u]);const x=({currentTarget:a,relatedTarget:i})=>a.contains(i),M=({target:a})=>{h||v(!0),O(a.value)},k=a=>{var i;x(a)||((i=r.current)==null||i.focus(),d(!0))},w=()=>{P(u),d(!1),v(!1),W()},q=()=>{d(!1),v(!1),F(p)},Q=a=>{if(typeof C=="function"&&!x(a))C(p),d(!1);else{if(y.current)return;x(a)||(b?w():q())}},U=()=>{b&&w()},X=()=>{q()},Y=a=>{var i,I;switch(y.current=!0,a.key){case"Escape":(i=r.current)==null||i.blur(),X();break;case"Enter":(I=r.current)==null||I.blur(),U();break}y.current=!1};return n.jsxs("div",{...K,ref:G,...ee(j),children:[n.jsxs("div",{className:$(t,`${t}--${o}`,{[`${t}--focused`]:g,[`${t}--invalid`]:s,[`${t}--inherit-type`]:L,[`${t}--overflows`]:r.current&&r.current.scrollWidth>r.current.offsetWidth}),onFocus:k,onBlur:Q,children:[n.jsx("input",{id:H,className:$(`${t}__text-input`,`${R.prefix}--text-input`,`${R.prefix}--text-input--${o}`),type:"text",value:u,onChange:M,ref:r,onKeyDown:Y,"aria-label":V,"aria-invalid":s}),n.jsx("div",{className:`${t}__ellipsis`,"aria-hidden":!g,children:"…"}),n.jsxs("div",{className:`${t}__toolbar`,children:[s&&n.jsx(te,{size:16,className:`${t}__warning-icon`}),g?n.jsxs(n.Fragment,{children:[n.jsx(_,{align:T.cancel,size:o,label:E,onClick:q,kind:"ghost",tabIndex:0,className:`${t}__btn ${t}__btn-cancel`,children:n.jsx(Z,{size:16})},"cancel"),n.jsx(_,{align:T.save,size:o,label:D,onClick:w,kind:"ghost",tabIndex:0,className:`${t}__btn ${t}__btn-save`,disabled:!b,children:n.jsx(ne,{size:16})},"save")]}):n.jsx(_,{align:T.edit,className:$(`${t}__btn`,`${t}__btn-edit`,{[`${t}__btn-edit--always-visible`]:A}),size:o,label:S,onClick:k,kind:"ghost",tabIndex:0,children:n.jsx(ae,{size:16})},"edit")]})]}),s&&n.jsx("p",{className:`${t}__warning-text`,children:B??z})]})});m=N.checkComponentEnabled(m,j);m.displayName=j;const re={invalidText:e.string},c=e.oneOf(["top","top-left","top-right","bottom","bottom-left","bottom-right","left","right"]);m.propTypes={cancelLabel:e.string.isRequired,editAlwaysVisible:e.bool,editLabel:e.string.isRequired,id:e.string.isRequired,inheritTypography:e.bool,invalid:e.bool,invalidText:e.string,labelText:e.string.isRequired,onBlur:e.func,onCancel:e.func.isRequired,onChange:e.func.isRequired,onSave:e.func.isRequired,saveLabel:e.string.isRequired,size:e.oneOf(["sm","md","lg"]),tooltipAlignment:e.oneOfType([c,e.shape({cancel:c,edit:c,save:c})]),value:e.string.isRequired,...re};m.__docgenInfo={description:"",methods:[],displayName:"EditInPlace",props:{cancelLabel:{required:!0,tsType:{name:"string"},description:"label for cancel button",type:{name:"string"}},editAlwaysVisible:{required:!1,tsType:{name:"boolean"},description:"By default the edit icon is shown on hover only.",type:{name:"bool"}},editLabel:{required:!0,tsType:{name:"string"},description:"label for edit button",type:{name:"string"}},id:{required:!0,tsType:{name:"string"},description:"Specify a custom id for the input",type:{name:"string"}},inheritTypography:{required:!1,tsType:{name:"boolean"},description:`inheritTypography - causes the text entry field to inherit typography settings
assigned to the container. This is useful when editing titles for instance.

NOTE: The size property limits the vertical size of the input element.
Inherited font's should be selected to fit within the size selected.`,type:{name:"bool"}},invalid:{required:!1,tsType:{name:"boolean"},description:"determines if the input is invalid",type:{name:"bool"}},invalidText:{required:!1,tsType:{name:"string"},description:"text that is displayed if the input is invalid",type:{name:"string"}},labelText:{required:!0,tsType:{name:"string"},description:"Provide the text that will be read by a screen reader when visiting this control",type:{name:"string"}},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"handler to add custom onBlur event",type:{name:"func"}},onCancel:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"handler that is called when the cancel button is pressed or when the user removes focus from the input and there is no new value",type:{name:"func"}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"handler that is called when the input is updated",type:{name:"func"}},onSave:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"handler that is called when the save button is pressed or when the user removes focus from the input if it has a new value",type:{name:"func"}},saveLabel:{required:!0,tsType:{name:"string"},description:"label for save button",type:{name:"string"}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"vertical size of control",defaultValue:{value:"'sm'",computed:!1},type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1}]}},tooltipAlignment:{required:!1,tsType:{name:"union",raw:"AlignPropType | Shape",elements:[{name:"union",raw:`| 'top'
| 'top-left'
| 'top-right'
| 'bottom'
| 'bottom-left'
| 'bottom-right'
| 'left'
| 'right'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!0},{name:"signature",type:"object",raw:`{
  cancel: AlignPropType;
  edit: AlignPropType;
  save: AlignPropType;
}`,signature:{properties:[{key:"cancel",value:{name:"union",raw:`| 'top'
| 'top-left'
| 'top-right'
| 'bottom'
| 'bottom-left'
| 'bottom-right'
| 'left'
| 'right'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!0}},{key:"edit",value:{name:"union",raw:`| 'top'
| 'top-left'
| 'top-right'
| 'bottom'
| 'bottom-left'
| 'bottom-right'
| 'left'
| 'right'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!0}},{key:"save",value:{name:"union",raw:`| 'top'
| 'top-left'
| 'top-right'
| 'bottom'
| 'bottom-left'
| 'bottom-right'
| 'left'
| 'right'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!0}}]}}]},description:`tooltipAlignment from the standard tooltip. Default center.

Can be passed either as one of tooltip options or as an object specifying cancel, edit and save separately`,type:{name:"union",value:[{name:"custom",raw:"alignPropType"},{name:"shape",value:{cancel:{name:"custom",raw:"alignPropType",required:!1},edit:{name:"custom",raw:"alignPropType",required:!1},save:{name:"custom",raw:"alignPropType",required:!1}}}]}},value:{required:!0,tsType:{name:"string"},description:"current value of the input",type:{name:"string"}},invalidLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"' '",computed:!1}}},composes:["PropsWithChildren"]};export{m as E};

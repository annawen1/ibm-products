import{p as T,j as o,B as _,a as de}from"./settings-CRrTVbgr.js";import{R as q,r as d}from"./index-CTjT7uj6.js";import{u as ue}from"./uuidv4-BQrI85uz.js";import{P as t}from"./index-BRV0Se7Z.js";import{c as w,C as ie}from"./deprecate-BLSDO8J_.js";import{g as W}from"./devtools-BECPDnEK.js";import{e as me}from"./bucket-5--iEWWNCt.js";import{l as ee}from"./lodash-BQHnPze3.js";import{S as pe}from"./SteppedAnimatedMedia-C2_n0IOp.js";import{C as he}from"./Carousel-Crwk9A3i.js";const te=`${T.prefix}--coachmark-dragbar`,oe=`${T.prefix}--coachmark-overlay`,Z="CoachmarkDragbar",N={closeIconDescription:"Close",onDrag:()=>{},onClose:()=>{},showCloseButton:!0,theme:"light"};let B=q.forwardRef(({a11yKeyboardHandler:e,closeIconDescription:l=N.closeIconDescription,onClose:s=N.onClose,onDrag:n=N.onDrag,showCloseButton:a=N.showCloseButton,theme:r=N.theme,...i},P)=>{const[$,p]=d.useState(!1);d.useEffect(()=>{const b=()=>p(!1);return window.addEventListener("mouseup",b),()=>{window.removeEventListener("mouseup",b)}},[]),d.useEffect(()=>{const b=O=>{n(O.movementX,O.movementY)};return $&&window.addEventListener("mousemove",b),()=>{window.removeEventListener("mousemove",b)}},[$,n]);const g=()=>p(!0);return o.jsxs("header",{...i,className:w(te,`${te}__${r}`,{}),ref:P,...W(Z),children:[o.jsx("button",{type:"button",className:`${oe}__handle`,onMouseDown:g,onKeyDown:e,title:"Drag Handle",children:o.jsx(me,{size:"16"})}),a&&o.jsx(_,{kind:"ghost",size:"sm",renderIcon:ie,iconDescription:l,hasIconOnly:!0,className:`${oe}--close-btn`,onClick:s})]})});B=T.checkComponentEnabled(B,Z);B.displayName=Z;B.propTypes={a11yKeyboardHandler:t.func.isRequired,closeIconDescription:t.string,onClose:t.func,onDrag:t.func,showCloseButton:t.bool,theme:t.oneOf(["light","dark"])};B.__docgenInfo={description:`DO NOT USE. This component is for the exclusive use
of other Onboarding components.`,methods:[],displayName:"CoachmarkDragbar",props:{closeIconDescription:{defaultValue:{value:"'Close'",computed:!1},description:"Tooltip text and aria label for the Close button icon.",type:{name:"string"},required:!1},onClose:{defaultValue:{value:"() => {}",computed:!1},description:"Function to call when the close button is clicked.",type:{name:"func"},required:!1},onDrag:{defaultValue:{value:"() => {}",computed:!1},description:`Function to call when the user clicks and drags the Coachmark.
For internal use only by the parent CoachmarkOverlay.`,type:{name:"func"},required:!1},showCloseButton:{defaultValue:{value:"true",computed:!1},description:'Show/hide the "X" close button.',type:{name:"bool"},required:!1},theme:{defaultValue:{value:"'light'",computed:!1},description:"Determines the theme of the component.",type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},a11yKeyboardHandler:{description:"Handler to manage keyboard interactions with the dragbar.",type:{name:"func"},required:!0}}};const ne=`${T.prefix}--coachmark-header`,se=`${T.prefix}--coachmark-overlay`,K="CoachmarkHeader",Y={closeIconDescription:"Close",onClose:()=>{},showCloseButton:!0,theme:"light"};let E=q.forwardRef(({closeIconDescription:e=Y.closeIconDescription,onClose:l=Y.onClose,showCloseButton:s=Y.showCloseButton,theme:n=Y.theme,...a},r)=>o.jsx("header",{...a,className:w(ne,`${ne}__${n}`),ref:r,...W(K),children:s&&o.jsx("div",{className:`${se}--close-btn-container`,children:o.jsx(_,{kind:"ghost",size:"sm",renderIcon:ie,iconDescription:e,hasIconOnly:!0,className:`${se}--close-btn`,onClick:l})})}));E=T.checkComponentEnabled(E,K);E.displayName=K;E.propTypes={closeIconDescription:t.string,onClose:t.func,showCloseButton:t.bool,theme:t.oneOf(["light","dark"])};E.__docgenInfo={description:`DO NOT USE. This component is for the exclusive use
of other Onboarding components.`,methods:[],displayName:"CoachmarkHeader",props:{closeIconDescription:{defaultValue:{value:"'Close'",computed:!1},description:"Tooltip text and aria label for the Close button icon.",type:{name:"string"},required:!1},onClose:{defaultValue:{value:"() => {}",computed:!1},description:"Function to call when the close button is clicked.",type:{name:"func"},required:!1},showCloseButton:{defaultValue:{value:"true",computed:!1},description:'Show/hide the "X" close button.',type:{name:"bool"},required:!1},theme:{defaultValue:{value:"'light'",computed:!1},description:"Determines the theme of the component.",type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1}}};var fe=(e=>(e.DEFAULT="default",e))(fe||{}),j=(e=>(e.TOOLTIP="tooltip",e.FLOATING="floating",e.FIXED="fixed",e.STACKED="stacked",e))(j||{}),f=(e=>(e.BOTTOM="bottom",e.BOTTOM_LEFT="bottom-left",e.BOTTOM_RIGHT="bottom-right",e.LEFT="left",e.LEFT_TOP="left-top",e.LEFT_BOTTOM="left-bottom",e.RIGHT="right",e.RIGHT_TOP="right-top",e.RIGHT_BOTTOM="right-bottom",e.TOP="top",e.TOP_LEFT="top-left",e.TOP_RIGHT="top-right",e))(f||{});const ge=(e,l)=>{const{width:s,height:n}=e.targetRect,a=24;let r=0,i=0;if(l!==j.TOOLTIP)switch(e.align){case f.TOP:i=s/2;break;case f.TOP_LEFT:i=a;break;case f.TOP_RIGHT:i=s-a;break;case f.BOTTOM:r=n,i=s/2;break;case f.BOTTOM_LEFT:r=n,i=a;break;case f.BOTTOM_RIGHT:r=n,i=s-a;break;case f.LEFT:r=n/2;break;case f.LEFT_TOP:r=a;break;case f.LEFT_BOTTOM:r=n-a;break;case f.RIGHT:r=n/2,i=s;break;case f.RIGHT_TOP:r=a,i=s;break;case f.RIGHT_BOTTOM:r=n-a,i=s;break}return{top:r,left:i}},be=d.createContext(),le=()=>d.useContext(be),C=`${T.prefix}--coachmark-overlay`,M="CoachmarkOverlay",ae={kind:j.FLOATING,theme:"light"};let L=d.forwardRef(({children:e,onClose:l,fixedIsVisible:s,className:n,kind:a=ae.kind,theme:r=ae.theme,...i},P)=>{const{winHeight:$,winWidth:p}=ye(),[g,b]=d.useState(!1),O=d.useRef(null),y=le(),D=a===j.TOOLTIP,x=a===j.FLOATING,X=n&&n.includes("is-visible"),I=m=>{const{shiftKey:F,key:c}=m;if(c==="Enter"||c===" ")b(h=>!h);else if(g){const h=F?128:32;switch(c){case"ArrowLeft":u(h*-1,0);break;case"ArrowRight":u(h,0);break;case"ArrowUp":u(0,h*-1);break;case"ArrowDown":u(0,h);break}}},k={};if((D||x)&&(y.targetRect&&(k.left=y.targetRect.x+window.scrollX,k.top=y.targetRect.y+window.scrollY),k.left&&k.top&&(D&&(k.left+=16,k.top+=16),x))){const m=ge(y,a);k.left+=m.left,k.top+=m.top}function S(m,F){let c=m,h=F;const G=p-288,U=$-150;return c<0?c=0:c>G&&(c=G),h<0?h=0:h>U&&(h=U),{targetX:c,targetY:h}}function u(m,F){const c=O.current;if(!c)return;const{x:h,y:G}=c.getBoundingClientRect(),{targetX:U,targetY:ce}=S(h+m,G+F);c.style.transform="none",c.style.position="fixed",c.style.left=`${U}px`,c.style.top=`${ce}px`,c.style.bottom="auto"}const v=ue();return o.jsxs("div",{...i,className:w(C,`${C}--${a}`,`${C}__${r}`,(D||x)&&`${C}--${y.align}`,s&&`${C}--is-visible`,g&&`${C}--is-dragmode`,n),ref:O,style:k,"aria-labelledby":v,tabIndex:-1,...W(M),children:[x?o.jsx(B,{a11yKeyboardHandler:I,onBlur:()=>b(!1),onDrag:u,theme:r,onClose:l}):o.jsx(E,{onClose:l}),o.jsx("div",{className:`${C}__body`,ref:P,id:v,children:q.Children.map(e,m=>q.cloneElement(m,{isVisible:X}))}),D&&o.jsx("span",{className:`${C}__caret`})]})});function re(){const{innerWidth:e,innerHeight:l}=window;return{winWidth:e,winHeight:l}}const ye=()=>{const[e,l]=d.useState(re());return d.useEffect(()=>{function s(){l(re())}return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),e};L=T.checkComponentEnabled(L,M);L.displayName=M;L.propTypes={children:t.node.isRequired,className:t.string,fixedIsVisible:t.bool.isRequired,kind:t.oneOf(Object.values(j)),onClose:t.func.isRequired,theme:t.oneOf(["light","dark"])};L.__docgenInfo={description:`DO NOT USE. This component is for the exclusive use
of other Onboarding components.`,methods:[],displayName:"CoachmarkOverlay",props:{kind:{defaultValue:{value:"COACHMARK_OVERLAY_KIND.FLOATING",computed:!0},description:"What kind or style of Coachmark to render.",type:{name:"enum",computed:!0,value:"Object.values(COACHMARK_OVERLAY_KIND)"},required:!1},theme:{defaultValue:{value:"'light'",computed:!1},description:"Determines the theme of the component.",type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},children:{description:`The CoachmarkOverlayElements child components.
Validation is handled in the parent Coachmark component.`,type:{name:"node"},required:!0},className:{description:"Optional class name for this component.",type:{name:"string"},required:!1},fixedIsVisible:{description:`The visibility of CoachmarkOverlay is
managed in the parent Coachmark component.`,type:{name:"bool"},required:!0},onClose:{description:"Function to call when the Coachmark closes.",type:{name:"func"},required:!0}}};const R=`${T.prefix}--coachmark-overlay-element`,A="CoachmarkOverlayElement";let z=q.forwardRef(({button:e,className:l,description:s,title:n,...a},r)=>o.jsxs("div",{...a,className:w(R,l,{}),ref:r,...W(A),children:[o.jsxs("div",{className:`${R}__content`,children:[n&&o.jsx("h2",{className:`${R}__title`,children:n}),s&&o.jsx("p",{className:`${R}__body`,children:s})]}),e&&o.jsx("div",{className:`${R}__button`,children:e})]}));z=T.checkComponentEnabled(z,A);z.displayName=A;z.propTypes={button:t.node,className:t.string,description:t.node.isRequired,title:t.string.isRequired};z.__docgenInfo={description:`Component to be displayed within a CoachmarkOverlayElements container.
Can be used 1 to N number, to display content in a Coachmark's overlay
in a carousel fashion.`,methods:[],displayName:"CoachmarkOverlayElement",props:{button:{description:`An optional button can be rendered below the description.
This can be a link, button, Coachmark button, etc.`,type:{name:"node"},required:!1},className:{description:"Optional class name for this component.",type:{name:"string"},required:!1},description:{description:"The description of the Coachmark.",type:{name:"node"},required:!0},title:{description:"The title of the Coachmark.",type:{name:"string"},required:!0}}};const V=`${T.prefix}--coachmark-overlay-elements`,Q="CoachmarkOverlayElements",J={isVisible:!1,nextButtonText:"Next",previousButtonLabel:"Back",closeButtonLabel:"Got it"};let H=q.forwardRef(({className:e,children:l,isVisible:s=J.isVisible,media:n,nextButtonText:a=J.nextButtonText,previousButtonLabel:r=J.previousButtonLabel,closeButtonLabel:i=J.closeButtonLabel,...P},$)=>{const p=d.useRef(),g=d.useRef(),[b,O]=d.useState(0),[y,D]=d.useState(0),x=le(),X=u=>{y>0&&u===0&&p.current&&setTimeout(()=>{p.current.focus()},1e3),D(u)},I=d.Children.count(l),k=0,S=I-1;return d.useEffect(()=>{p.current&&p.current.focus()},[]),d.useEffect(()=>{setTimeout(()=>{p.current&&s&&p.current.focus()},100)},[s]),x?o.jsxs("section",{...P,className:w(V,e,{}),ref:$,...W(Q),children:[n&&(n.render?n.render():o.jsx(pe,{className:`${V}__element-stepped-media`,filePaths:n.filePaths,playStep:y})),I===1?o.jsxs(o.Fragment,{children:[l,i&&o.jsx("div",{className:w(`${V}__footer`,"coachmark-carousel-controls"),children:o.jsx(_,{size:"sm",...x.closeButtonProps,ref:p,children:i})})]}):o.jsxs(o.Fragment,{children:[o.jsx(he,{disableArrowScroll:!0,ref:g,onScroll:u=>{O(u)},children:l}),o.jsxs("div",{className:w(`${V}__footer`),children:[o.jsx("div",{className:`${V}--controls-progress`,children:`${y+1} / ${I}`}),b>0&&o.jsx(_,{size:"sm",kind:"ghost",title:r,disabled:b===0,onClick:()=>{var v,m;const u=ee.clamp(y-1,k,S);(m=(v=g==null?void 0:g.current)==null?void 0:v.scrollToView)==null||m.call(v,u),X(u)},children:r}),y<S?o.jsx(_,{size:"sm",ref:p,title:a,disabled:b===1,onClick:()=>{var v,m;const u=ee.clamp(y+1,k,S);(m=(v=g==null?void 0:g.current)==null?void 0:v.scrollToView)==null||m.call(v,u),X(u)},children:a}):i&&o.jsx(_,{size:"sm",ref:p,...x.closeButtonProps,children:i})]})]})]}):de.warn(`The ${Q} is a composable container element which should be used only within the scope of a Coachmark or a CoachmarkFixed component.`)});H=T.checkComponentEnabled(H,Q);H.displayName=Q;H.propTypes={children:t.node.isRequired,className:t.string,closeButtonLabel:t.string,isVisible:t.bool,media:t.oneOfType([t.shape({render:t.func}),t.shape({filePaths:t.arrayOf(t.string)})]),nextButtonText:t.string,previousButtonLabel:t.string};H.__docgenInfo={description:`Composable container to allow for the displaying of CoachmarkOverlayElement
components in a carousel fashion.`,methods:[],displayName:"CoachmarkOverlayElements",props:{isVisible:{defaultValue:{value:"false",computed:!1},description:`The visibility of CoachmarkOverlayElements is
managed in the parent component.`,type:{name:"bool"},required:!1},nextButtonText:{defaultValue:{value:"'Next'",computed:!1},description:"The label for the Next button.",type:{name:"string"},required:!1},previousButtonLabel:{defaultValue:{value:"'Back'",computed:!1},description:"The label for the Previous button.",type:{name:"string"},required:!1},closeButtonLabel:{defaultValue:{value:"'Got it'",computed:!1},description:"The label for the Close button.",type:{name:"string"},required:!1},children:{description:`CoachmarkOverlayElements should be used with one or many CoachmarkOverlayElement components as children.
@see CoachmarkOverlayElement`,type:{name:"node"},required:!0},className:{description:"Optional class name for this component.",type:{name:"string"},required:!1},media:{description:"The object describing an image in one of two shapes.\nIf a single media element is required, use `{render}`.\nIf a stepped animation is required, use `{filePaths}`.",type:{name:"union",value:[{name:"shape",value:{render:{name:"func",required:!1}}},{name:"shape",value:{filePaths:{name:"arrayOf",value:{name:"string"},required:!1}}}]},required:!1}}};export{fe as B,j as C,be as a,L as b,H as c,z as d,E as e,le as u};

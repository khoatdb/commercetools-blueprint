(this["webpackJsonpecommerce-app"]=this["webpackJsonpecommerce-app"]||[]).push([[7],{659:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return T}));var c=a(25),n=a(20),s=a(21),i=a(19),r=a(1),l=a(605),o=a(354),u=a(606),j=a(607),d=a(63),h=a(176),p=a(178),m=a(41),b=a(42),f=a(43),g=a(58),v=(a(548),a(555)),O=a(0),x=(0,v.a.createSliderWithTooltip)(v.a.Range),_=function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props,t=e.min,a=e.max,c=e.marks,n=e.value,s=e.tipFormatter,i=e.tipOptions,r=e.onChange,l=e.onAfterChange;return Object(O.jsxs)("div",{className:"slider",children:[Object(O.jsx)("div",{className:"slider__min",children:Object(O.jsx)("p",{children:s?s(t):t})}),Object(O.jsx)("div",{className:"slider__max",children:Object(O.jsx)("p",{children:s?s(a):a})}),Object(O.jsx)(x,{min:t,max:a,defaultValue:n,tipFormatter:s,marks:c,tipProps:i,onAfterChange:l,onChange:r})]})}}]),a}(r.PureComponent);_.defaultProps={marks:{},tipFormatter:function(e){return e},tipOptions:{visible:!0}};function k(e){var t=e.title,a=e.facets,c=e.checked,n=e.onSelection;return Object(O.jsxs)("nav",{className:"multiple-selection-facets",children:[t&&Object(O.jsx)("h2",{className:"facet-list-title",children:t}),Object(O.jsx)("div",{className:"form__form-group",children:a.map((function(e){return Object(O.jsx)("div",{className:"form__form-group-field",children:Object(O.jsx)(h.a,{name:"categories",label:e.label,value:e.value,checked:c.includes(e.value),onChange:function(t){return n(t.target.checked,e)}})},e.value)}))})]})}function N(e){var t=e.title,a=e.facets;return Object(O.jsxs)("nav",{className:"single-selection-facets",children:[t&&Object(O.jsx)("h2",{className:"facet-list-title",children:t}),Object(O.jsx)("div",{className:"form__form-group",children:a.map((function(e){return Object(O.jsx)("div",{className:"form__form-group-field",children:Object(p.b)({label:e.label,radioValue:e.value,input:{value:a[0].value,name:"singleGroupName",onChange:function(){}}})},e.value)}))})]})}function y(e){var t=e.min,a=e.max,c=e.value,n=e.title,s=e.onChange,i=e.tipFormatter;return Object(O.jsxs)("nav",{className:"range-selection-facet",children:[Object(O.jsx)("h2",{className:"facet-list-title",children:n}),Object(O.jsx)(_,{min:t,max:a,value:c,tipOptions:{visible:!1},onAfterChange:s,tipFormatter:i})]})}N.defaultProps=k.defaultProps=function e(t){var a=t.title,c=t.facets,n=t.checked,i=t.onSelection;return Object(O.jsxs)("nav",{className:"hierarchical-facets",children:[a&&Object(O.jsx)("h2",{className:"facet-list-title",children:"Clothing"}),c.map((function(a){return Object(O.jsxs)(r.Fragment,{children:[Object(O.jsx)("button",{className:"hierarchical-facets__item ".concat(n[a.value]?"hierarchical-facets__item--checked":""),onClick:function(){return i(a)},children:a.label}),a.children&&a.children.length&&n[a.value]&&Object(O.jsx)(e,Object(s.a)(Object(s.a)({},t),{},{title:null,facets:a.children}))]},a.value)}))]})}.defaultProps={title:"Clothing",facets:[{label:"Dresses",value:"dresses"},{label:"Cardigans & Sweaters",value:"cardigans_n_sweaters",children:[{label:"Sweaters",value:"sweaters"},{label:"Cardigans",value:"cardigans"},{label:"Sweatshirts",value:"sweatshirts"}]},{label:"Jumpsuits",value:"jumpsuits"},{label:"T-shirts",value:"t-shirts"},{label:"Jackets",value:"jackets"}],checked:{cardigans_n_sweaters:!0},onSelection:function(e){}};var C=a(5),w=a(164),q=a(77),P=a(55),S=a(79),F=a(33),E=a(205),L=a.n(E),R=a(552),A=a.n(R),J=a(553),D=a.n(J),I=a(554),V=a.n(I),K=a(39);function T(e){var t=Object(K.e)(),a=e.history,h=Object(K.f)((function(e){return e.products})),p=h.byId,m=h.facets,b=h.query,f=h.loading,g=h.errors,v=p?Object.values(p):null,x=Object(r.useRef)(),_=q.parse(e.location.search),E={list:[],types:{},state:{}};m&&m.forEach((function(e){var t=e.type,a=e.value;switch(E.list.push(a),E.types[a]=t,t){case"multiple":E.state[a]=[];break;case"single":E.state[a]="";break;case"range":E.state[a]=null}})),Object.entries(_).forEach((function(e){var t=Object(i.a)(e,2),a=t[0],c=t[1];"q"===a?(a="keywords",E.state[a]=c):E.state[a]="offset"===a||"limit"===a?c:["rating","price"].includes(a)?c.split("-").reduce((function(e,t,a){return Object(s.a)(Object(s.a)({},e),Object(n.a)({},0===a?"min":"max",parseInt(t)))}),{}):E.state[a]=c.split(",")}));var R=function(){t(Object(P.R)(E.state))};return Object(r.useEffect)(R,[a.location.search,b.locale,b.currency,t]),Object(r.useEffect)((function(){(x.current||{value:""}).value=b.keywords}),[b.keywords]),Object(O.jsx)(d.a,{children:Object(O.jsxs)(l.a,{children:[g[P.l]&&Object(O.jsx)(S.a,{color:"danger",className:"alert--bordered",icon:!0,dismiss:!1,children:Object(O.jsxs)("span",{children:["An error has occurred trying to fetch products.",Object(O.jsx)(o.a,{outline:!0,onClick:R,className:"btn-retry btn-sm",children:"Retry"})]})}),f[P.l]&&Object(O.jsx)(C.a,{contained:!0}),!1===f[P.l]&&Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(u.a,{children:[E.state.keywords&&Object(O.jsxs)(j.a,{md:12,children:[Object(O.jsxs)("h2",{className:"page-title",children:['Search results for "',E.state.keywords,'"']}),Object(O.jsx)(F.b,{className:"page-subhead",to:"/catalog",children:"(clear query)"})]}),Object(O.jsx)(j.a,{md:9,children:Object(O.jsxs)("div",{className:"catalog-items__wrap",children:[Object(O.jsx)("div",{className:"catalog-page-controls",children:Object(O.jsx)(V.a,{containerClassName:"pagination",pageClassName:"pagination__item",pageLinkClassName:"pagination__link",previousClassName:"pagination__item",previousLinkClassName:"pagination__link pagination__link--arrow",nextClassName:"pagination__item",nextLinkClassName:"pagination__link pagination__link--arrow",pageRangeDisplayed:3,marginPagesDisplayed:3,activeClassName:"active",initialPage:b.offset/b.limit,pageCount:Math.ceil(b.total/b.limit),onPageChange:function(e){return function(e){var t=[],c=e-1,n=b.limit*c;null!=n&&t.push("offset=".concat(n)),_.q&&t.push("q=".concat(_.q)),_.price&&t.push("price=".concat(_.price)),_.rating&&t.push("rating=".concat(_.rating)),_.categories&&t.push("categories=".concat(_.categories)),_.colors&&t.push("colors=".concat(_.colors)),a.push("/catalog".concat(t.length?"?".concat(t.join("&")):""))}(e.selected+1)},disableInitialCallback:!0,previousLabel:Object(O.jsx)(D.a,{className:"pagination__link-icon"}),nextLabel:Object(O.jsx)(A.a,{className:"pagination__link-icon"})})}),Object(O.jsxs)("div",{className:"catalog-items",children:[v.map((function(e){return Object(O.jsx)(w.a,{product:e},e.id)})),0===v.length&&Object(O.jsx)(S.a,{color:"info",className:"alert--bordered",icon:!0,dismiss:!1,children:Object(O.jsxs)("span",{children:["No products to display (",Object(O.jsx)(F.b,{to:"/catalog",children:"clear filters"}),")"]})})]})]})}),Object(O.jsxs)(j.a,{md:3,children:[Object(O.jsx)("div",{className:"form",style:{background:"white",marginBottom:20,border:"1px solid #ddd"},children:Object(O.jsxs)("div",{className:"form__form-group-field",children:[Object(O.jsx)("div",{className:"form__form-group-icon",children:Object(O.jsx)(L.a,{})}),Object(O.jsx)("input",{ref:x,type:"text",name:"keywords",placeholder:"Keywords...",defaultValue:b.keywords,onKeyPress:function(e){return"Enter"===e.key&&function(e){var t=[];t.push("q=".concat(e||"")),_.price&&t.push("price=".concat(_.price)),_.rating&&t.push("rating=".concat(_.rating)),_.categories&&t.push("categories=".concat(_.categories)),_.colors&&t.push("colors=".concat(_.colors)),a.push("/catalog".concat(t.length?"?".concat(t.join("&")):""))}(e.target.value)}})]})}),m&&m.map((function(e){switch(e.type){case"single":case"multiple":var t="multiple"===e.type?k:N;return Object(O.jsx)(t,{title:e.name,checked:E.state[e.value],onSelection:function(t,n){return function(e,t,n){var s=n.value,r=b[e]||[];r=t?[].concat(Object(c.a)(r),[s]):r.filter((function(e){return e!==s}));var l=[];_.q&&l.push("q=".concat(_.q)),Object.entries(_).forEach((function(t){var a=Object(i.a)(t,2),c=a[0],n=a[1];"offset"===c?l.push("".concat(c,"=0")):c!==e&&l.push("".concat(c,"=").concat(n))})),r.length>0&&l.push("".concat(e,"=").concat(r.join(","))),a.push("/catalog".concat(l.length?"?".concat(l.join("&")):""))}(e.value,t,n)},facets:e.items.map((function(e){return{value:e.value,label:e.name}}))},e.value);case"range":return Object(O.jsx)(y,{onChange:function(t){return function(e,t){var c=[];_.q&&c.push("q=".concat(_.q)),Object.entries(_).forEach((function(t){var a=Object(i.a)(t,2),n=a[0],s=a[1];return n!==e&&c.push("".concat(n,"=").concat(s))})),c.push("".concat(e,"=").concat(t.join("-"))),a.push("/catalog".concat(c.length?"?".concat(c.join("&")):""))}(e.value,t)},title:e.name,min:e.min,max:e.max,tipFormatter:"price"===e.value?function(e){return"$".concat(e)}:function(e){return e},value:E.state[e.value]?[E.state[e.value].min,E.state[e.value].max]:[e.min,e.max]},e.value);default:return null}}))]})]})})]})})}}}]);
//# sourceMappingURL=7.65709067.chunk.js.map
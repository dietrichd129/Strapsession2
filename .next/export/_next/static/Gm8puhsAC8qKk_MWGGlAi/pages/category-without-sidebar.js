(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"50Wx":function(t,a,e){"use strict";e.r(a);var c=e("1OyB"),r=e("vuIU"),n=e("JX7q"),o=e("Ji7U"),s=e("md7G"),l=e("foSv"),i=e("rePB"),u=e("wx14"),d=e("q1tI"),f=e.n(d),p=e("/MKj"),m=e("zCU4"),h=e("v6Hh"),v=e("rIQk"),b=e("tDAt"),O=e("YFqc"),j=e.n(O),N=e("7smD"),y=e("EsL0"),g=f.a.createElement;function w(t){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,c=Object(l.a)(t);if(a){var r=Object(l.a)(this).constructor;e=Reflect.construct(c,arguments,r)}else e=c.apply(this,arguments);return Object(s.a)(this,e)}}var D=function(t){Object(o.a)(e,t);var a=w(e);function e(){var t;Object(c.a)(this,e);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return t=a.call.apply(a,[this].concat(o)),Object(i.a)(Object(n.a)(t),"state",{modalOpen:!1,modalData:null}),Object(i.a)(Object(n.a)(t),"handleModalData",(function(a){t.setState({modalData:a})})),Object(i.a)(Object(n.a)(t),"openModal",(function(){t.setState({modalOpen:!0})})),Object(i.a)(Object(n.a)(t),"closeModal",(function(){t.setState({modalOpen:!1})})),t}return Object(r.a)(e,[{key:"render",value:function(){var t=this,a=this.props.products,e=this.state.modalOpen;return g(f.a.Fragment,null,a.map((function(a,e){return g("div",{className:"col-lg-3 col-md-6 products-col-item",key:e},g("div",{className:"single-product-box"},g("div",{className:"product-image"},g(j.a,{href:"/product/[id]",as:"/product/".concat(a.id)},g("a",null,g("img",{src:a.image,alt:"image"}),g("img",{src:a.imageHover,alt:"image"}))),g("ul",null,g("li",null,g(j.a,{href:"#"},g("a",{"data-tip":"Quick View","data-place":"left",onClick:function(e){e.preventDefault(),t.openModal(),t.handleModalData(a)}},g("i",{className:"far fa-eye"})))),g("li",null,g(j.a,{href:"#"},g("a",{"data-tip":"Add to Wishlist","data-place":"left"},g("i",{className:"far fa-heart"})))),g("li",null,g(j.a,{href:"#"},g("a",{"data-tip":"Add to Compare","data-place":"left"},g("i",{className:"fas fa-sync"})))))),g("div",{className:"product-content"},g("h3",null,g(j.a,{href:"/product/[id]",as:"/product/".concat(a.id)},g("a",null,a.title))),g("div",{className:"product-price"},g("span",{className:"new-price"},"$",a.price)),g("div",{className:"rating"},g("i",{className:"fas fa-star"}),g("i",{className:"fas fa-star"}),g("i",{className:"fas fa-star"}),g("i",{className:"fas fa-star"}),g("i",{className:"far fa-star"})),g(y.a,a))))})),e?g(N.a,{closeModal:this.closeModal,modalData:this.state.modalData}):"")}}]),e}(d.Component),C=f.a.createElement;function R(t){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,c=Object(l.a)(t);if(a){var r=Object(l.a)(this).constructor;e=Reflect.construct(c,arguments,r)}else e=c.apply(this,arguments);return Object(s.a)(this,e)}}var k=function(t){Object(o.a)(e,t);var a=R(e);function e(){var t;Object(c.a)(this,e);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return t=a.call.apply(a,[this].concat(o)),Object(i.a)(Object(n.a)(t),"state",{gridClass:"products-col-four"}),Object(i.a)(Object(n.a)(t),"handleGrid",(function(a){t.setState({gridClass:a})})),t}return Object(r.a)(e,[{key:"render",value:function(){var t=this.state.gridClass,a=this.props,e=a.products,c=a.CompareProducts;return C(f.a.Fragment,null,C(m.a,null),C(v.a,{title:"Women's"}),C("section",{className:"products-collections-area ptb-60"},C("div",{className:"container"},C("div",{className:"section-title"},C("h2",null,C("span",{className:"dot"})," Without Sidebar")),C("div",{className:"row"},C("div",{className:"col-lg-12 col-md-12"},C(b.a,{onClick:this.handleGrid}),C("div",{id:"products-filter",className:"products-collections-listing row ".concat(t)},C(D,{products:e,CompareProducts:c})))))),C(h.a,null))}}]),e}(d.Component);a.default=function(t){var a=Object(p.d)((function(t){return t.products})),e=Object(p.d)((function(t){return t.addedItemsToCompare}));return C(k,Object(u.a)({},t,{products:a,CompareProducts:e}))}},ODb5:function(t,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category-without-sidebar",function(){return e("50Wx")}])}},[["ODb5",1,2,0,3,4,5,7,17]]]);
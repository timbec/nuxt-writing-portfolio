(window.webpackJsonp=window.webpackJsonp||[]).push([[14,5,8],{242:function(t,e,n){"use strict";n.r(e);var r=n(27),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader"},[t._v("\n  loading . . . loading . . .\n  "),n("div",{staticClass:"loader-icon"},[n("svg",{attrs:{version:"1.1",id:"L2",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100","enable-background":"new 0 0 100 100","xml:space":"preserve"}},[n("circle",{attrs:{fill:"none",stroke:"#09021d","stroke-width":"4","stroke-miterlimit":"10",cx:"50",cy:"50",r:"48"}}),t._v(" "),n("line",{attrs:{fill:"none","stroke-linecap":"round",stroke:"#09021d","stroke-width":"4","stroke-miterlimit":"10",x1:"50",y1:"50",x2:"85",y2:"50.5"}},[n("animateTransform",{attrs:{attributeName:"transform",dur:"2s",type:"rotate",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"}})],1),t._v(" "),n("line",{attrs:{fill:"none","stroke-linecap":"round",stroke:"#09021d","stroke-width":"4","stroke-miterlimit":"10",x1:"50",y1:"50",x2:"49.5",y2:"74"}},[n("animateTransform",{attrs:{attributeName:"transform",dur:"15s",type:"rotate",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null);e.default=component.exports},243:function(t,e,n){"use strict";n.r(e);var r={props:{id:{type:String,required:!0},slug:{type:String,required:!0},post:{type:Object,default:function(){}}},computed:{postLink:function(){return"/posts/"+this.slug}}},o=n(27),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-item"},[n("img",{attrs:{src:t.post.fimg_url,alt:t.post.title.rendered}}),t._v(" "),n("h3",[n("nuxt-link",{attrs:{to:t.postLink}},[n("span",{domProps:{innerHTML:t._s(t.post.title.rendered)}})])],1),t._v(" "),n("div",{staticClass:"the-excerpt",domProps:{innerHTML:t._s(t.post.excerpt.rendered)}})])}),[],!1,null,null,null);e.default=component.exports},260:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(48),n(122)),l=n.n(o),c={components:{Loader:n(242).default},data:function(){return{posts:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("https://timbeckett-writing.com/wp-json/wp/v2/posts");case 2:n=e.sent,r=n.data,t.posts=r;case 5:case"end":return e.stop()}}),e)})))()}},d=n(27),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-page"},[n("h2",{staticClass:"home-page__title"},[t._v("\n    Welcome")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"home-page-container"},[t.$fetchState.pending?n("Loader"):n("section",{staticClass:"home-page__articles"},t._l(t.posts,(function(t){return n("post-item",{key:t.id,attrs:{post:t,id:t.slug,slug:t.slug,title:t.title,thumbnail:t.fimg_url}})})),1)],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"home-page__content"},[n("p",[t._v("I write mostly fiction, published here and there. Currently working on a novel, tentatively title 'Crossings'\n      set in\n      northern Canada, where I grew up.")]),t._v(" "),n("p",[t._v("I also write occasional journalism, and maintained two blogs in the late '00s and early 10's. I recently\n      started blogging about technology at "),n("a",{attrs:{href:"https://tim-beckett/blog"}},[t._v("on my tech portfolio.")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Loader:n(242).default,PostItem:n(243).default})}}]);
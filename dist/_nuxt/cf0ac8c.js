(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{261:function(t,e,o){"use strict";o.r(e);var n=o(123),d=o.n(n),c={data:{},asyncData:function(t){return d.a.get("https://timbeckett-writing.com/wp-json/wp/v2/posts?slug="+t.params.id).then((function(t){return console.log(t.data[0]),{loadedPost:t.data[0]}})).catch((function(e){return t.error(e)}))}},r=o(21),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"single-post-page"},[o("section",{staticClass:"post"},[o("h1",{staticClass:"post-title",domProps:{innerHTML:t._s(t.loadedPost.title.rendered)}}),t._v(" "),o("div",{staticClass:"post-details"},[o("div",{staticClass:"post-detail"},[t._v("Last updated on "+t._s(t.loadedPost.date))])]),t._v(" "),o("div",{staticClass:"post-content"},[o("div",{domProps:{innerHTML:t._s(t.loadedPost.content.rendered)}})])]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"post-feedback"},[o("p",[t._v("Let me know what you think about the post, send a mail to "),o("a",{attrs:{href:"mailto:feedback@my-awesome-domain.com"}},[t._v("feedback@my-awesome-domain.com")]),t._v(".")])])}],!1,null,null,null);e.default=component.exports}}]);
webpackJsonp([2],{"0F2v":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("WfzA"),o=r("tNs5"),n=r("VU/8")(s.a,o.a,!1,null,null,null);n.options.__file="pages/courses/index.vue",e.default=n.exports},WfzA:function(t,e,r){"use strict";var s=r("Dd8w"),o=r.n(s),n=r("NYxO"),i=r("bQiS");e.a={computed:Object(n.mapGetters)(["courses"]),methods:o()({},Object(n.mapActions)(["getCourses"])),components:{CourseItem:i.a},mounted:function(){0===this.courses.length&&this.getCourses()}}},bQiS:function(t,e,r){"use strict";var s=r("fdrq"),o=r("dZqY"),n=r("VU/8")(s.a,o.a,!1,null,null,null);n.options.__file="components/CourseItem.vue",e.a=n.exports},dZqY:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-card",{attrs:{to:t.goTo,hover:""}},[r("v-card-media",{staticClass:"white--text",attrs:{width:"100%",src:"http://via.placeholder.com/350x150?text=..."}},[r("v-container",{attrs:{"fill-height":"",fluid:""}},[r("v-layout",{attrs:{"fill-height":""}},[r("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[r("span",{staticClass:"headline"},[t._v(t._s(t.course.name))])])],1)],1)],1),r("v-card-title",[r("div",[r("span",{staticClass:"grey--text"},[t._v("Duration: "+t._s(t.course.durationHours)+" hours")]),r("br"),r("span",[t._v(t._s(t.course.description))])])]),r("v-card-actions",[r("v-btn",{attrs:{flat:"",color:"grey",to:t.goTo}},[t._v("Explore")]),t.isAuthenticated?t._e():r("v-btn",{attrs:{to:"/login",flat:"",color:"grey"}},[t._v("Enroll")]),t.isAuthenticated&&!t.course.enrolled?r("v-btn",{attrs:{flat:"",color:"grey"},on:{click:t.onClickEnroll}},[t._v("Enroll")]):t._e()],1)],1)],1)};s._withStripped=!0;var o={render:s,staticRenderFns:[]};e.a=o},fdrq:function(t,e,r){"use strict";var s=r("Dd8w"),o=r.n(s),n=r("NYxO");e.a={props:["course"],computed:o()({},Object(n.mapGetters)(["isAuthenticated"]),{goTo:function(){return"/courses/"+this.course.id}}),methods:o()({},Object(n.mapActions)(["enroll"]),{onClickEnroll:function(t){t.stopPropagation(),t.preventDefault(),this.enroll(this.course.id)}})}},tNs5:function(t,e,r){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("h1",[this._v("Courses")]),e("v-container",{attrs:{fluid:"","grid-list-sm":""}},[e("v-layout",{attrs:{row:"",wrap:""}},this._l(this.courses,function(t){return e("v-flex",{key:t.id,attrs:{xs12:"",sm6:"",md4:"","order-md1":"","order-sm3":""}},[e("course-item",{attrs:{course:t}})],1)}))],1),e("v-container",[e("v-layout",{attrs:{row:"",wrap:"","justify-space-between":""}})],1)],1)};s._withStripped=!0;var o={render:s,staticRenderFns:[]};e.a=o}});
"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[815],{632:function(t,s,e){e.d(s,{D:function(){return h}});var n=e(1413),a=e(5671),i=e(3144),r=e(9340),c=e(2882),o=e(2791),l=e(8687),u=e(6871),d=e(184),h=function(t){var s=function(s){(0,r.Z)(o,s);var e=(0,c.Z)(o);function o(){return(0,a.Z)(this,o),e.apply(this,arguments)}return(0,i.Z)(o,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(t,(0,n.Z)({},this.props)):(0,d.jsx)(u.Fg,{to:"/login"})}}]),o}(o.Component);return(0,l.$j)((function(t){return{isAuth:t.auth.isAuth}}))(s)}},5815:function(t,s,e){e.r(s),e.d(s,{default:function(){return D}});var n=e(1413),a=e(2791),i=e(6871),r=e(8687),c=e(7781),o=e(6260),l=e(2644),u="ProfileInfo_descriptionBlock__rxGeE",d="ProfileInfo_userData__YMbqs",h="ProfileInfo_description__fOBTy",f="ProfileInfo_contacts__qwsSh",x="ProfileInfo_userLink__24IJp",j=e(885),p=e(184),v=function(t){var s=(0,a.useState)(!1),e=(0,j.Z)(s,2),n=e[0],i=e[1],r=(0,a.useState)(t.status),c=(0,j.Z)(r,2),o=c[0],l=c[1];(0,a.useEffect)((function(){l(t.status)}),[t.status]);return(0,p.jsxs)("div",{children:[!n&&(0,p.jsx)("div",{children:(0,p.jsx)("span",{onDoubleClick:function(){i(!0)},children:t.status||"======="})}),n&&(0,p.jsx)("div",{children:(0,p.jsx)("input",{autoFocus:!0,onBlur:function(){i(!1),t.updateUserStatus(o)},onChange:function(t){l(t.currentTarget.value)},value:o})})]})},m=function(t){var s=t.profile,e=t.updateUserStatus,n=t.status;return s?(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{children:(0,p.jsx)("img",{src:"https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-and-stars-shine_107791-7397.jpg?w=2000",alt:"wallpaper"})}),(0,p.jsxs)("div",{className:u,children:[(0,p.jsxs)("div",{className:d,children:[(0,p.jsx)("img",{src:null!=s.photos.large?s.photos.large:l,alt:"large_avatar"}),(0,p.jsxs)("div",{className:h,children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{children:(0,p.jsx)("b",{children:s.fullName})}),(0,p.jsx)(v,{status:n||"Your status",updateUserStatus:e})]}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{children:[" ",s.aboutMe]}),(0,p.jsxs)("div",{children:["Looking for a job: ",s.lookingForAJob?"yes":"no"]}),(0,p.jsxs)("div",{children:["Job description: ",s.lookingForAJobDescription]})]})]})]}),(0,p.jsxs)("div",{className:f,children:[(0,p.jsx)("div",{children:"Contacts:"}),(0,p.jsxs)("div",{children:["facebook: ",null!=s.contacts.facebook?(0,p.jsx)("a",{className:x,href:s.contacts.facebook,target:"_blank",children:s.contacts.facebook}):"-"]}),(0,p.jsxs)("div",{children:["website: ",null!=s.contacts.website?(0,p.jsx)("a",{className:x,href:s.contacts.website,target:"_blank",children:s.contacts.website}):"-"]}),(0,p.jsxs)("div",{children:["vk: ",null!=s.contacts.vk?(0,p.jsx)("a",{className:x,href:s.contacts.vk,target:"_blank",children:s.contacts.vk}):"-"]}),(0,p.jsxs)("div",{children:["twitter: ",null!=s.contacts.twitter?(0,p.jsx)("a",{className:x,href:s.contacts.twitter,target:"_blank",children:s.contacts.twitter}):"-"]}),(0,p.jsxs)("div",{children:["instagram: ",null!=s.contacts.instagram?(0,p.jsx)("a",{className:x,href:s.contacts.instagram,target:"_blank",children:s.contacts.instagram}):"-"]}),(0,p.jsxs)("div",{children:["youtube: ",null!=s.contacts.youtube?(0,p.jsx)("a",{className:x,href:s.contacts.youtube,target:"_blank",children:s.contacts.youtube}):"-"]}),(0,p.jsxs)("div",{children:["github: ",null!=s.contacts.github?(0,p.jsx)("a",{className:x,href:s.contacts.github,target:"_blank",children:s.contacts.github}):"-"]}),(0,p.jsxs)("div",{children:["mainLink: ",null!=s.contacts.mainLink?(0,p.jsx)("a",{className:x,href:s.contacts.mainLink,target:"_blank",children:s.contacts.mainLink}):"-"]})]})]})]}):(0,p.jsx)(o.Z,{})},g=e(6070),b=e(2982),_=e(3720),k="MyPosts_postsBlock__fZFfa",N="MyPosts_posts__9R27f",P="Post_item__y8J2Z",y=function(t){return(0,p.jsxs)("div",{className:P,children:[(0,p.jsx)("img",{src:"https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg",alt:"ava"}),t.message,(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{children:"like"}),(0,p.jsx)("span",{children:t.like_count})]})]})},w=e(2703),S=e(277),U=function(t){return(0,p.jsx)(_.l0,{initialValues:{},onSubmit:function(s){var e=s.postText;t.addPost(e)},validate:function(t){},children:function(t){var s=t.handleSubmit,e=(t.pristine,t.form),n=t.submitting;return(0,p.jsxs)("form",{onSubmit:s,children:[(0,p.jsx)("div",{children:(0,p.jsx)(_.gN,{name:"postText",component:S.gx,type:"text",placeholder:"Enter your new post here",afterSubmit:e.reset,validate:(0,w.A3)(w.lp,(0,w.BS)(10))})}),(0,p.jsx)("div",{children:(0,p.jsx)("button",{type:"submit",disabled:n,children:"Add post"})})]})}})},Z=function(t){var s=(0,b.Z)(t.postsData).reverse().map((function(t){return(0,p.jsx)(y,{message:t.message,like_count:t.likesCount},t.id)}));return(0,p.jsxs)("div",{className:k,children:[(0,p.jsx)("h3",{children:"My posts"}),(0,p.jsx)(U,{updateNewPostText:t.updateNewPostText,addPost:t.addPost}),(0,p.jsx)("div",{className:N,children:s})]})},I=(0,r.$j)((function(t){return{postsData:t.profilePage.posts}}),{addPost:g.q2})(Z),C=function(t){return(0,p.jsxs)("div",{children:[(0,p.jsx)(m,{profile:t.profile,status:t.status,updateUserStatus:t.updateUserStatus}),(0,p.jsx)(I,{})]})},A=e(632),D=(0,c.qC)((0,r.$j)((function(t){return{profile:t.profilePage.profile,currentUserId:t.auth.id,status:t.profilePage.status}}),{getUserProfile:g.et,getUserStatus:g.Tq,updateUserStatus:g.OL}),A.D)((function(t){var s=(0,i.UO)().userId;return s||(s=t.currentUserId),(0,a.useEffect)((function(){t.getUserProfile(s),t.getUserStatus(s)}),[]),(0,p.jsx)(C,(0,n.Z)({},t))}))}}]);
//# sourceMappingURL=815.b7d1979b.chunk.js.map
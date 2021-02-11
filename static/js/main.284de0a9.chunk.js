(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),n=c.n(s),i=c(16),o=c.n(i),l=(c(24),c(25),c(4)),r=c(2),j=(c(26),c.p+"static/media/homepage-hero-m.18443de6.jpg"),h=c.p+"static/media/homepage-hero-t.4eb4358b.jpg",m=c.p+"static/media/homepage-hero-d.da80fc10.jpg",d=c.p+"static/media/about-img.6aa170c5.jpg",b=(c(27),function(){return Object(a.jsxs)("section",{className:"contact",children:[Object(a.jsx)("h2",{className:"contact__title",children:"Interested in doing a project together?"}),Object(a.jsx)("div",{className:"contact__line"}),Object(a.jsx)(l.b,{to:"/contact",className:"btn",children:"contact me"})]})}),u=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("section",{className:"hero",children:[Object(a.jsxs)("picture",{alt:"hero",className:"hero__img",children:[Object(a.jsx)("source",{srcSet:j,media:"(max-width: 766px)"}),Object(a.jsx)("source",{srcSet:h,media:"(max-width: 991px)"}),Object(a.jsx)("source",{srcSet:m,media:"(min-width: 992px)"}),Object(a.jsx)("img",{src:"images/home/homepage-hero-m.jpg",alt:"hero"})]}),Object(a.jsx)("h2",{className:"hero__title",children:"Hey, I\u2019m Momchil Mitev and I love building beautiful websites"}),Object(a.jsx)("a",{href:"#about",className:"hero__btn",children:"about me"})]}),Object(a.jsxs)("section",{className:"about",children:[Object(a.jsx)("img",{className:"about__img",src:d,alt:"laptop"}),Object(a.jsxs)("article",{id:"about",className:"about__content",children:[Object(a.jsx)("h2",{className:"about__title",children:"About Me"}),Object(a.jsx)("p",{className:"about__text",children:"I\u2019m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I\u2019m based in Munich, Germany, but I\u2019m happy working remotely. When I\u2019m not coding, you\u2019ll find me outdoors. I love being out in nature going for a walk with my family. I\u2019d love you to check out my work."}),Object(a.jsx)(l.b,{to:"/portfolio",className:"btn",children:"go to portfolio"})]})]}),Object(a.jsx)(b,{})]})},g=(c(33),[{name:"Officelite",description:"My challenge was to build out this 2-page coming soon website and get it looking as close to the design as possible.",url:"https://momchilmitev.github.io/officelite/",thumbnail:"images/projects/officelite.jpg"},{name:"IP Address Tracker",description:"In this challenge, I used two separate APIs together to create an IP Address Tracking app.",url:"https://momchilmitev.github.io/ip-tracker/",thumbnail:"images/projects/ipTracker.jpg"}]),p=(c(34),function(e){var t=e.project;return Object(a.jsxs)("section",{className:"project",children:[Object(a.jsx)("img",{className:"project__thumbnail",src:t.thumbnail,alt:"project thumbnail"}),Object(a.jsxs)("section",{className:"project__info",children:[Object(a.jsx)("h2",{className:"project__name",children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),Object(a.jsx)("a",{className:"btn",href:t.url,target:"_blank",rel:"noreferrer",children:"visit website"})]})]})}),f=function(){return Object(a.jsxs)(a.Fragment,{children:[(console.log(g),g.map((function(e){return Object(a.jsx)(p,{project:e},e.name)}))),Object(a.jsx)(b,{})]})},x=(c(35),c(8)),O=(c(36),c(18)),_=c.n(O),v=function(){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,t=Object(s.useState)(""),c=Object(x.a)(t,2),n=c[0],i=c[1],o=Object(s.useState)(""),l=Object(x.a)(o,2),r=l[0],j=l[1],h=Object(s.useState)(""),m=Object(x.a)(h,2),d=m[0],b=m[1],u=Object(s.useState)(""),g=Object(x.a)(u,2),p=g[0],f=g[1],O=Object(s.useState)(""),v=Object(x.a)(O,2),w=v[0],N=v[1],k=Object(s.useState)(""),y=Object(x.a)(k,2),C=y[0],I=y[1],M=Object(s.useState)(""),S=Object(x.a)(M,2),z=S[0],F=S[1],H={name:n,email:r,message:d};return Object(a.jsxs)("section",{className:"form",children:[Object(a.jsx)("h2",{className:"form__title",children:"Contact Me"}),Object(a.jsxs)("form",{className:"form__form",onSubmit:function(t){if(t.preventDefault(),n)if(r)if(e.test(r))if(d){var c=document.querySelector("#sendBtn");c.disabled=!0,_.a.send("service_d8lf4eg","template_m5xkaho",H,"user_a1hFut6IxlIUsEB4luaL0").then((function(e){console.log("SUCCESS!",e.status,e.text),F("Message sent!")}),(function(e){console.log("FAILED...",e),F("There was a problem sending the message!")})),i(""),j(""),b(""),f(""),N(""),I(""),c.disabled=!1}else I("Message is required!");else N("Please provide a correct email address!");else N("Email is required!");else f("Name is required!")},children:[Object(a.jsx)("label",{htmlFor:"name",className:"form__label",children:"Name"}),Object(a.jsx)("input",{type:"text",id:"name",className:p?"form__input error":"form__input",placeholder:"Momchil Mitev",value:n,onChange:function(e){i(e.target.value),f("")}}),p?Object(a.jsx)("p",{style:{color:"red"},children:p}):null,Object(a.jsx)("label",{htmlFor:"email",className:"form__label",children:"Email"}),Object(a.jsx)("input",{type:"text",id:"email",className:w?"form__input error":"form__input",placeholder:"example@gmail.com",value:r,onChange:function(e){j(e.target.value),N("")}}),w?Object(a.jsx)("p",{style:{color:"red"},children:w}):null,Object(a.jsx)("label",{htmlFor:"message",className:"form__label",children:"Message"}),Object(a.jsx)("textarea",{id:"message",cols:"30",rows:"10",className:C?"form__textarea error":"form__textarea",placeholder:"How can I help?",value:d,onChange:function(e){b(e.target.value),I("")}}),C?Object(a.jsx)("p",{style:{color:"red"},children:C}):null,Object(a.jsx)("button",{id:"sendBtn",className:"btn btn--dark",children:"send message"}),z?Object(a.jsx)("p",{children:z}):null]})]})},w=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("section",{className:"info",children:[Object(a.jsx)("h2",{className:"info__title",children:"Get in Touch"}),Object(a.jsxs)("div",{className:"info__divider",children:[Object(a.jsx)("p",{className:"info__description",children:"I\u2019d love to hear about what you\u2019re working on and how I could help. I\u2019m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in Munich. I\u2019m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form."}),Object(a.jsxs)("section",{className:"info__socials",children:[Object(a.jsx)("a",{className:"info__social",href:"https://github.com/momchilmitev",target:"_blank",rel:"noreferrer",children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"24",children:Object(a.jsx)("path",{fill:"#33323d",d:"M12.5 0C5.594 0 0 5.51 0 12.305c0 5.437 3.581 10.048 8.547 11.674.625.116.854-.265.854-.592 0-.292-.01-1.066-.016-2.092-3.477.742-4.21-1.65-4.21-1.65-.569-1.42-1.39-1.8-1.39-1.8-1.133-.764.087-.748.087-.748 1.255.086 1.914 1.268 1.914 1.268 1.115 1.881 2.927 1.338 3.641 1.024.113-.797.434-1.338.792-1.646-2.776-.308-5.694-1.366-5.694-6.08 0-1.343.484-2.44 1.286-3.302-.14-.31-.562-1.562.11-3.256 0 0 1.047-.33 3.437 1.261 1-.273 2.063-.409 3.125-.415 1.063.006 2.125.142 3.125.415 2.375-1.591 3.422-1.261 3.422-1.261.672 1.694.25 2.945.125 3.256.797.861 1.281 1.959 1.281 3.302 0 4.727-2.921 5.767-5.703 6.07.438.369.844 1.123.844 2.276 0 1.647-.016 2.97-.016 3.37 0 .322.22.707.86.584 5-1.615 8.579-6.23 8.579-11.658C25 5.509 19.403 0 12.5 0z"})})}),Object(a.jsx)("a",{className:"info__social",href:"https://www.linkedin.com/in/momchil-mitev-643b78181/",target:"_blank",rel:"noreferrer",children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",children:Object(a.jsx)("path",{fill:"#33323d",d:"M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zM5.4 7.56c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zm15 12.84h-3.6v-6.36c0-.96-.84-1.8-1.8-1.8-.96 0-1.8.84-1.8 1.8v6.36H9.6V9.6h3.6v1.44c.6-.96 1.92-1.68 3-1.68 2.28 0 4.2 1.92 4.2 4.2v6.84z"})})})]})]})]}),Object(a.jsx)(v,{})]})},N=(c(39),c.p+"static/media/hamburger.15a29eb2.svg"),k=c.p+"static/media/close.6229efc8.svg",y=function(){var e=Object(s.useState)(!1),t=Object(x.a)(e,2),c=t[0],n=t[1],i=function(){n(!c)};return Object(a.jsxs)("nav",{className:"navigation",children:[Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"61",height:"32",className:"navigation__logo",children:Object(a.jsx)("path",{fill:"#33323D",fillRule:"evenodd",d:"M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"})}),Object(a.jsxs)("div",{className:c?"navigation__links":"navigation__links navigation__links--closed",children:[Object(a.jsx)(l.c,{activeStyle:{color:"var(--slightlyDesaturatedCyan)"},className:"navigation__link",exact:!0,to:"/",onClick:i,children:"home"}),Object(a.jsx)(l.c,{activeStyle:{color:"var(--slightlyDesaturatedCyan)"},className:"navigation__link",to:"/projects",onClick:i,children:"portfolio"}),Object(a.jsx)(l.c,{activeStyle:{color:"var(--slightlyDesaturatedCyan)"},className:"navigation__link",to:"contact",onClick:i,children:"contact"})]}),Object(a.jsx)("img",{className:"navigation__icon",src:c?k:N,alt:"hamburger nav icon",onClick:i})]})},C=(c(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsxs)("div",{className:"footer__container",children:[Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"61",height:"32",className:"footer__logo",children:Object(a.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"})}),Object(a.jsxs)("div",{className:"footer__links",children:[Object(a.jsx)(l.b,{className:"footer__link",to:"/",children:"home"}),Object(a.jsx)(l.b,{className:"footer__link",to:"/projects",children:"portfolio"}),Object(a.jsx)(l.b,{className:"footer__link",to:"/contact",children:"contact"})]}),Object(a.jsxs)("div",{className:"footer__socials",children:[Object(a.jsx)("a",{className:"footer__social",href:"https://github.com/momchilmitev",target:"_blank",rel:"noreferrer",children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"24",children:Object(a.jsx)("path",{fill:"#fff",d:"M12.5 0C5.594 0 0 5.51 0 12.305c0 5.437 3.581 10.048 8.547 11.674.625.116.854-.265.854-.592 0-.292-.01-1.066-.016-2.092-3.477.742-4.21-1.65-4.21-1.65-.569-1.42-1.39-1.8-1.39-1.8-1.133-.764.087-.748.087-.748 1.255.086 1.914 1.268 1.914 1.268 1.115 1.881 2.927 1.338 3.641 1.024.113-.797.434-1.338.792-1.646-2.776-.308-5.694-1.366-5.694-6.08 0-1.343.484-2.44 1.286-3.302-.14-.31-.562-1.562.11-3.256 0 0 1.047-.33 3.437 1.261 1-.273 2.063-.409 3.125-.415 1.063.006 2.125.142 3.125.415 2.375-1.591 3.422-1.261 3.422-1.261.672 1.694.25 2.945.125 3.256.797.861 1.281 1.959 1.281 3.302 0 4.727-2.921 5.767-5.703 6.07.438.369.844 1.123.844 2.276 0 1.647-.016 2.97-.016 3.37 0 .322.22.707.86.584 5-1.615 8.579-6.23 8.579-11.658C25 5.509 19.403 0 12.5 0z"})})}),Object(a.jsx)("a",{className:"footer__social",href:"https://www.linkedin.com/in/momchil-mitev-643b78181/",target:"_blank",rel:"noreferrer",children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",children:Object(a.jsx)("path",{fill:"#fff",d:"M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zM5.4 7.56c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zm15 12.84h-3.6v-6.36c0-.96-.84-1.8-1.8-1.8-.96 0-1.8.84-1.8 1.8v6.36H9.6V9.6h3.6v1.44c.6-.96 1.92-1.68 3-1.68 2.28 0 4.2 1.92 4.2 4.2v6.84z"})})})]})]})})});var I=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(l.a,{basename:"portfolio",children:[Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(y,{}),Object(a.jsxs)(r.c,{children:[Object(a.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(a.jsx)(r.a,{exact:!0,path:"/projects",component:f}),Object(a.jsx)(r.a,{exact:!0,path:"/contact",component:w})]})]}),Object(a.jsx)(C,{})]})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};o.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(I,{})}),document.getElementById("root")),M()}},[[41,1,2]]]);
//# sourceMappingURL=main.284de0a9.chunk.js.map
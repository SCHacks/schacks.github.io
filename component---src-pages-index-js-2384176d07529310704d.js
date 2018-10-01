(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(137),i=a(139),l=a(143),c=a(194),m=Object(o.default)(i.Link).withConfig({displayName:"Underlined",componentId:"sc-1d0l7v6-0"})(["text-decoration:underline;text-underline-position:under;-webkit-text-underline-position:under;text-decoration-style:wavy;-webkit-text-decoration-style:wavy;"]),s=Object(o.default)(i.Flex).withConfig({displayName:"Calendar__Background",componentId:"g0q71w-0"})(["flex-direction:column;flex-shrink:0;overflow:hidden;text-align:center;width:96px;height:96px;border-color:",";border-style:solid;border-width:3px;border-radius:16px;font-weight:800;"],l.a.colors.white),h=Object(o.default)(i.Text).attrs({fontSize:3,py:1,bg:"white",color:"black"}).withConfig({displayName:"Calendar__Month",componentId:"g0q71w-1"})(["line-height:1;"]),d=Object(o.default)(i.Text).attrs({fontSize:6,color:"primary"}).withConfig({displayName:"Calendar__Day",componentId:"g0q71w-2"})(["line-height:1.25;"]),p=function(e){var t=e.month,a=e.day;return r.a.createElement(s,null,r.a.createElement(h,{children:t}),r.a.createElement(d,{children:a}))},u=a(153),g=function(){return r.a.createElement(i.Box,{align:"center",py:5},r.a.createElement(i.Link,{href:"https://hackclub.com"},r.a.createElement(i.Image,{src:"/logo-primary.svg",width:256,mx:"auto",alt:"State High Hack Club logo"})),r.a.createElement(i.Container,{maxWidth:36,mt:4,mb:[4,5],px:[3,0]},r.a.createElement(i.Text,{fontSize:[3,4]},"A club for coding + making at State College Area High School, a chapter of the international non-profit"," ",r.a.createElement(m,{href:"https://hackclub.com",color:"white"},"Hack Club"),". We meet weekly on Mondays.")),r.a.createElement(i.Flex,{align:"center",justify:"center"},r.a.createElement(p,{month:u.meeting.month,day:u.meeting.day}),r.a.createElement(i.Box,{align:"left",ml:[3,4]},r.a.createElement(i.Text,{fontSize:3,bold:!0},"Next meeting"),r.a.createElement(i.Text,{fontSize:1},"C212, 4:00–5:30pm"),r.a.createElement(i.Text,{mt:2},r.a.createElement(i.Link,{href:"http://rmd.at/schacks",target:"_blank",fontSize:1,bold:!0,hoverline:!0,chevronRight:!0,color:"white",children:"Get a reminder"})))))},f=(a(48),a(172),a(173)),b=a.n(f),w=(a(76),Object(o.default)(i.Container).attrs({maxWidth:72}).withConfig({displayName:"Leaders__Base",componentId:"sc-118dhh3-0"})(["display:grid;grid-gap:","px;width:100%;","{grid-template-columns:repeat(3,1fr);}"],l.a.space[3],l.a.mediaQueries.md)),E=Object(o.default)(i.Text).withConfig({displayName:"Leaders__LeaderName",componentId:"sc-118dhh3-1"})(["font-weight:700;line-height:1.25;"]),k=Object(o.default)(i.Button).withConfig({displayName:"Leaders__EmailButton",componentId:"sc-118dhh3-2"})(["display:inline-flex;align-items:center;line-height:1 !important;font-weight:500;"]),x=function(e){var t,a=e.name,n=e.pronouns,o=e.email;b()(e,["name","pronouns","email"]);return r.a.createElement(i.Flex,{align:"center"},r.a.createElement(i.Avatar,{src:"/team/"+(t=a,t.split(" ")[0].toLowerCase())+".jpg",alt:a,size:128,mr:3}),r.a.createElement(i.Box,{align:"left"},r.a.createElement(E,{f:4,children:a}),r.a.createElement(i.Text,{color:"muted",f:2,mb:2,children:n}),r.a.createElement(k,{href:"mailto:"+o+"@scasd.org",bg:"cool",f:2,mt:2},r.a.createElement(i.Icon,{glyph:"email",size:24}),r.a.createElement(i.Text.span,{ml:1},"Email"))))},y=function(e){return r.a.createElement(w,e,u.leaders.map(function(e){return r.a.createElement(x,{name:e.name,pronouns:e.pronouns,email:e.email,key:e.email})}))},C=function(){return r.a.createElement("section",{id:"leadership"},r.a.createElement(i.Container,{maxWidth:36,align:"center",px:3,pb:4},r.a.createElement(i.Heading.h2,{color:"white",fontSize:[5,6],mb:2},"Leadership"),r.a.createElement(i.Text,{color:"smoke",fontSize:[3,4]},"We’re a diverse group of students passionate about infusing hacker culture into our high school.")),r.a.createElement(y,{px:3,mb:[5,6]}))},v=Object(o.default)(i.Card.withComponent(i.Container)).withConfig({displayName:"Sheet",componentId:"sc-1j55m21-0"})(["position:relative;overflow:hidden;border-radius:",";",";"],i.theme.radii[2],function(e){return!e.flat&&Object(o.css)(["box-shadow:0 8px 32px rgba(0,0,0,0.0625);"])});v.defaultProps={bg:"rgba(255, 255, 255, 0.875)",p:[3,4],color:"black",width:1};var S=v,_=Object(o.default)(i.Box.withComponent("ol")).withConfig({displayName:"List",componentId:"sc-1sw0dyy-0"})(["counter-reset:li;list-style:none;text-align:left;padding:0;margin:0;li{position:relative;font-size:","px;padding-left:","px;margin-top:","px;&:before{content:counter(li);counter-increment:li;position:absolute;left:0;top:","px;height:","px;width:","px;line-height:","px;font-size:","px;background-color:",";color:",";border-radius:","px;font-weight:800;text-align:center;}","{padding-left:","px;}}"],l.a.fontSizes[3],l.a.space[4],l.a.space[3],l.a.space[1],24,24,24,l.a.fontSizes[2],l.a.colors.primary,l.a.colors.white,24,l.a.mediaQueries.md,1.25*l.a.space[4]),j=function(){return r.a.createElement(S,{id:"workshops"},r.a.createElement(i.Heading.h2,{fontSize:5,mb:2},"Workshops"),r.a.createElement(i.Text,{fontSize:3,mb:[3,4]},"This is a collection of coding tutorials from Hack Club. Go at your own pace, & submit your link below when you’re finished!"),r.a.createElement(_,null,u.workshops.map(function(e,t){return r.a.createElement("li",{key:e.slug},r.a.createElement(m,{href:"https://hackclub.com/workshops/"+e.slug,children:e.name,target:"_blank"}))})))},z=(a(35),function(){return r.a.createElement(S,{id:"start"},r.a.createElement(i.Heading.h2,{fontSize:5,mb:3},"New here?"),r.a.createElement(_,null,u.start.map(function(e,t){return r.a.createElement("li",{key:e.href},r.a.createElement(m,Object.assign({target:"_blank"},e)))})))}),L=i.Button.withComponent("input"),N=o.default.form.withConfig({displayName:"Submit__Base",componentId:"u5x9ms-0"})(["label{margin-bottom:","px;span{font-weight:800;}input{padding:0 !important;border:0;border-bottom:1px solid ",";border-radius:0;&:focus{box-shadow:0 2px 0 ",";border-bottom-color:",";}}}"],l.a.space[3],l.a.colors.muted,l.a.colors.cool,l.a.colors.cool),O=function(){return r.a.createElement(S,{id:"submit"},r.a.createElement(i.Heading.h2,{fontSize:5,mb:3},"Submit"),r.a.createElement(N,{action:"https://formspree.io/ljc14@scasd.org",method:"POST"},r.a.createElement(i.Field,{label:"Email",type:"email",name:"email",placeholder:"abc@scasd.org"}),r.a.createElement(i.Field,{label:"Link",type:"url",name:"url",placeholder:"abc.xyz"}),r.a.createElement(L,{type:"submit",mt:3})))},H=function(e){var t=e.href,a=e.service,n=b()(e,["href","service"]);return r.a.createElement(i.Link,Object.assign({target:"_blank",rel:"noopener",href:t,mx:3,color:"muted","aria-label":a,children:r.a.createElement(i.Icon,{glyph:a,size:32})},n))},T=function(e){var t=e.children;return r.a.createElement(i.Box.footer,{p:[4,5],bg:"steel",color:"muted",align:"center"},t,r.a.createElement(i.Heading.h3,{f:2,mb:3,align:"center",caps:!0},"Join the Club"),r.a.createElement(i.Flex,{justify:"center",align:"center",wrap:!0},r.a.createElement(H,{href:u.urls.slack,service:"slack"}),r.a.createElement(H,{href:u.urls.instagram,service:"instagram"}),r.a.createElement(H,{href:u.urls.github,service:"github"}),r.a.createElement(H,{href:u.urls.email,service:"email"})))},I=Object(o.default)(i.Container).attrs({pt:4,px:3,pb:5,width:1}).withConfig({displayName:"pages__Body",componentId:"sc-1v092md-0"})(["display:grid;grid-gap:","px;grid-template-areas:'start' 'workshops' 'submit';","{grid-gap:","px;grid-template-columns:repeat(2,1fr);grid-template-areas:'workshops start' 'workshops submit';}> div{&:nth-child(1){grid-area:workshops;}&:nth-child(2){grid-area:start;}&:nth-child(3){grid-area:submit;}}"],l.a.space[3],l.a.mediaQueries.md,l.a.space[5]);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(g,null),r.a.createElement(i.Heading.h2,{color:"white",align:"center",fontSize:[5,6],mb:2,px:3},"Resources"),r.a.createElement(I,null,r.a.createElement(j,null),r.a.createElement(z,null),r.a.createElement(O,null)),r.a.createElement(C,null),r.a.createElement(T,null))}},143:function(e,t,a){"use strict";var n=a(139),r={black:"#1f2d3d",steel:"#273444",slate:"#3c4858",muted:"#8492a6",smoke:"#e0e6ed",snow:"#f9fafc",white:"#ffffff",primary:"#ff5a5f",primaryLight:"#ff7e82",primaryDark:"#e00007",alt:"#007a87",altLight:"#009aab",altDark:"#004f58",success:"#3fb34f",error:"#b23f42",warm:"#ffb400",warmWash:"#ffdc89",cool:"#00bdde",coolWash:"#7cecff"};r.blue=[r.altDark,r.altLight,r.altLight],r.info=r.cool,n.theme.colors=r;n.theme.font='Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',t.a=n.theme},153:function(e){e.exports={name:"State High Hack Club",description:"A club for making + coding at State College Area High School, a chapter of the international Hack Club organization. We meet weekly on Mondays, room C212.",url:"https://statehigh.hackclub.com",repo:"https://github.com/schacks/site",card:"https://statehigh.hackclub.com/card.png",meeting:{month:"October",day:8},urls:{slack:"https://hackclub.com/slack_invite",instagram:"https://instagram.com/schacks",github:"https://github.com/schacks",email:"mailto:ljc14@scasd.org"},leaders:[{name:"Lachlan Campbell",pronouns:"they/them",email:"ljc14"},{name:"Joy Liu",pronouns:"she/her",email:"jxl55"},{name:"Jasmine Cao",pronouns:"she/her",email:"jxc35"}],workshops:[{slug:"personal_website",name:"Personal website"},{slug:"that_was_easy",name:"That was easy"},{slug:"geometric_pattern",name:"Geometric pattern"},{slug:"dodge",name:"Dodge"},{slug:"platformer",name:"Platformer"},{slug:"collaborative_sketch",name:"Collaborative sketch"},{slug:"dashboard",name:"Dashboard"},{slug:"rails_notes",name:"Rails Notes"}],start:[{href:"http://hackclub.com/slack_invite",children:"Slack"},{href:"https://github.com/hackclub/hackclub/blob/master/CONDUCT.md",children:"Code of Conduct"},{href:"https://repl.it",children:"Repl.it"}]}},194:function(e,t,a){"use strict";a(172),a(35),a(48);var n=a(0),r=a.n(n),o=a(218),i=a.n(o),l=a(220),c=a.n(l),m=a(137),s=a(143);function h(){var e=c()(["\n  body {\n    font-family: ",";\n    background-color: ",";\n    color: ",";\n    line-height: 1.6;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  h1,\n  h2 {\n    font-weight: 900;\n  }\n  ul, ol {\n    margin: 0;\n    padding: 0;\n  }\n"]);return h=function(){return e},e}Object(m.injectGlobal)(h(),s.a.font,s.a.colors.black,s.a.colors.white);var d=function(e){return r.a.createElement(m.ThemeProvider,{theme:s.a,children:r.a.createElement("div",null,e.children)})},p=a(153);t.a=function(e){var t=e.children;return r.a.createElement(d,null,r.a.createElement(i.a,{title:"State High Hack Club"},r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{charSet:"UTF-8"}),r.a.createElement("link",{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}),[{name:"description",content:p.description},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:image",content:p.card},{property:"og:image",content:p.card},{property:"og:image:width",content:1024},{property:"og:image:height",content:768},{property:"og:title",content:p.name},{name:"twitter:title",content:p.name},{property:"og:description",content:p.description},{name:"twitter:description",content:p.description},{name:"description",content:p.description},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"theme-color",content:s.a.colors.primary}].map(function(e,t){return r.a.createElement("meta",Object.assign({},e,{key:t}))}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Nunito:400,800,900i",rel:"stylesheet"})),t)}}}]);
//# sourceMappingURL=component---src-pages-index-js-2384176d07529310704d.js.map
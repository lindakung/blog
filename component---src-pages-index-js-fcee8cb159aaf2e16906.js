(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{EYWl:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("TJpk"),l=a.n(i),c=a("T/ZZ"),o=a.n(c),m=a("IpnI"),s=a.n(m);t.a=function(e){var t,a,n,i,c=e.postNode,m=e.postPath,p=e.postSEO;if(p){var u=c.frontmatter;t=u.title,a=u.description?u.description:c.excerpt,n=u.cover,i=o()(s.a.siteUrl,s.a.pathPrefix,m)}else t=s.a.siteTitle,a=s.a.siteDescription,n=s.a.siteLogo;n=o()(s.a.siteUrl,s.a.pathPrefix,n);var d=o()(s.a.siteUrl,s.a.pathPrefix),f=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:t,alternateName:s.a.siteTitleAlt?s.a.siteTitleAlt:""}];return p&&f.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":i,name:t,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:t,alternateName:s.a.siteTitleAlt?s.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:n},description:a}),r.a.createElement(l.a,null,r.a.createElement("meta",{name:"description",content:a}),r.a.createElement("meta",{name:"image",content:n}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),r.a.createElement("meta",{property:"og:url",content:p?i:d}),p?r.a.createElement("meta",{property:"og:type",content:"article"}):null,r.a.createElement("meta",{property:"og:title",content:t}),r.a.createElement("meta",{property:"og:description",content:a}),r.a.createElement("meta",{property:"og:image",content:n}),r.a.createElement("meta",{property:"fb:app_id",content:s.a.siteFBAppID?s.a.siteFBAppID:""}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:creator",content:s.a.userTwitter?s.a.userTwitter:""}),r.a.createElement("meta",{name:"twitter:title",content:t}),r.a.createElement("meta",{name:"twitter:description",content:a}),r.a.createElement("meta",{name:"twitter:image",content:n}))}},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return u}));var n=a("q1tI"),r=a.n(n),i=a("TJpk"),l=a.n(i),c=a("83Zx"),o=a("lPsB"),m=a("EYWl"),s=a("IpnI"),p=a.n(s);t.default=function(e){var t=e.data;return r.a.createElement(c.a,null,r.a.createElement("main",null,r.a.createElement(l.a,{title:p.a.siteTitle}),r.a.createElement(m.a,null),r.a.createElement(o.a,{postEdges:t.allMarkdownRemark.edges})))};var u="313773765"},"T/ZZ":function(e,t,a){var n,r,i;a("KKXr"),a("pIFo"),a("SRfc"),i=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var a=e.shift();e[0]=a+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var r=e[n];if("string"!=typeof r)throw new TypeError("Url must be a string. Received "+r);""!==r&&(n>0&&(r=r.replace(/^[\/]+/,"")),r=n<e.length-1?r.replace(/[\/]+$/,""):r.replace(/[\/]+$/,"/"),t.push(r))}var i=t.join("/"),l=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=l.shift()+(l.length>0?"?":"")+l.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(r="function"==typeof(n=i)?n.call(t,a,t,e):n)||(e.exports=r)},lPsB:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),l=a("LZFG"),c=a.n(l);t.a=function(e){var t=e.postEdges,a=function(){var e=[];return t.forEach((function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,categories:t.node.frontmatter.categories,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})})),e}();return r.a.createElement("div",{className:c.a.articleList},a.map((function(e){return r.a.createElement(i.Link,{to:e.path,key:e.title},r.a.createElement("article",{className:c.a.articleBox},r.a.createElement("div",{className:c.a.right},r.a.createElement("h3",null,e.title),r.a.createElement("div",{className:c.a.meta},e.date," — ",r.a.createElement("span",null,e.categories.join(" / "))," ","— ",e.timeToRead," Min Read"," "),r.a.createElement("p",null,e.excerpt))))})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-fcee8cb159aaf2e16906.js.map
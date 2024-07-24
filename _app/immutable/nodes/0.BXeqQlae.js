import{s as E,n as k,q as Y,u as G,o as J,v as U,w as W,x as X,y as ee}from"../chunks/scheduler.CzBjrY2S.js";import{S as T,i as C,e as $,c as w,g as K,a as _,b as y,d,t as B,H as V,s as S,h as L,j as O,z as q,f as x,k as p,n as z,A as N,v as Z,w as j,x as F,m as M,o as A,y as I}from"../chunks/index.BA0BYdG8.js";import{w as te}from"../chunks/index.CsHgCZGu.js";const ae=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,ne=!0,Se=Object.freeze(Object.defineProperty({__proto__:null,prerender:ne},Symbol.toStringTag,{value:"Module"}));function se(a){let e,t='<nav class="flex justify-center gap-1"><a class="nav-item" href="/"><img width="32" height="32" src="https://library.gxres.net/images/icons/favicon.webp" alt="Site favicon"/></a> <a class="nav-item" href="/">Index</a> <a class="nav-item" href="/project">Project</a> <a class="nav-item" href="/about">About</a></nav>';return{c(){e=$("header"),e.innerHTML=t,this.h()},l(r){e=w(r,"HEADER",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-z12kh0"&&(e.innerHTML=t),this.h()},h(){_(e,"class","shadow-md bg-neutral-50 dark:bg-neutral-700 px-2")},m(r,n){y(r,e,n)},p:k,i:k,o:k,d(r){r&&d(e)}}}class oe extends T{constructor(e){super(),C(this,e,null,se,E,{})}}function re(a){let e,t,r,n,l=new Date().getFullYear()+"",f,o,v="Sliver Complex",c;return{c(){e=$("footer"),t=$("p"),r=B("© 2022 - "),n=new V(!1),f=S(),o=$("a"),o.textContent=v,c=B(". Powered by SvelteKit."),this.h()},l(i){e=w(i,"FOOTER",{class:!0});var u=L(e);t=w(u,"P",{});var h=L(t);r=O(h,"© 2022 - "),n=q(h,!1),f=x(h),o=w(h,"A",{href:!0,"data-svelte-h":!0}),K(o)!=="svelte-jex14o"&&(o.textContent=v),c=O(h,". Powered by SvelteKit."),h.forEach(d),u.forEach(d),this.h()},h(){n.a=f,_(o,"href","/"),_(e,"class","p-4 text-center")},m(i,u){y(i,e,u),p(e,t),p(t,r),n.m(l,t),p(t,f),p(t,o),p(t,c)},p:k,i:k,o:k,d(i){i&&d(e)}}}class le extends T{constructor(e){super(),C(this,e,null,re,E,{})}}const R={selectLabel:"text-slate-700 dark:text-slate-500",selectButton:"ring-1 ring-slate-900/10 rounded-lg shadow-sm p-2 text-slate-700  bg-white dark:bg-slate-600 dark:ring-0 dark:highlight-white/5 dark:text-slate-200",selectIcon:"text-slate-400",dropdownList:"text-slate-700 bg-white ring-1 ring-black ring-opacity-5 dark:bg-slate-700 dark:ring-0 dark:highlight-white/5 dark:text-slate-300",dropdownHover:"hover:bg-slate-50 hover:dark:bg-slate-800/50",textActive:"text-sky-500",iconActiveStroke:"stroke-sky-500",iconActiveFill:"fill-sky-500",iconActiveShade:"fill-sky-400/20",iconStroke:"stroke-slate-400",iconFill:"fill-slate-400"},ie=a=>({dark:e=>`
<svg viewBox="0 0 24 24" fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
	<path
		class="${e?a.iconActiveShade:a.iconStroke}"
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
	/>
	<path
		class="${e?a.iconActiveFill:a.iconFill}"
		d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
	/>
	<path
		class="${e?a.iconActiveFill:a.iconFill}"
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
	/>
</svg>`,light:e=>`
<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
	<path class="${e?a.iconActiveStroke+" "+a.iconActiveShade:a.iconStroke}" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
	<path
		class=${e?a.iconActiveStroke:a.iconStroke}
		d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
	/>
</svg>`,system:e=>`
<svg viewBox="0 0 24 24" fill="none">
	<path
		class="${e?a.iconActiveStroke+" "+a.iconActiveShade:a.iconStroke}"
		d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
		stroke-width="2"
		stroke-linejoin="round"
	/>
	<path
		class="${e?a.iconActiveStroke:a.iconStroke}"
		d="M14 15c0 3 2 5 2 5H8s2-2 2-5"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>`}),ce=ie(R),Q={};function de(){return G(Q)}function he(a){Y(Q,a)}const me=["light","dark","system"],ue={light:"Light",dark:"Dark",system:"System"};function fe(a){const{key:e,colors:t,icons:r,labels:n}={key:"theme",colors:R,icons:ce,labels:ue,...a};let l="system";{const i=localStorage.theme;(i==="light"||i==="dark")&&(l=i)}const{subscribe:f,set:o}=te(l);function v(i){me.includes(i)&&i!==l&&(l=i,o(l))}const c={subscribe:f,setTheme:v,colors:t,icons:r,labels:n};return he(c),c}const{document:D}=ae;function ge(a){let e,t;return{c(){e=new V(!1),t=z(),this.h()},l(r){const n=N("svelte-1cgseeh",D.head);e=q(n,!1),t=z(),n.forEach(d),this.h()},h(){e.a=t},m(r,n){e.m(a[0],D.head),p(D.head,t)},p:k,i:k,o:k,d(r){r&&e.d(),d(t)}}}function pe(a){const e=de(),t=()=>document.documentElement.classList.toggle("dark",localStorage.theme==="dark"||!localStorage.theme&&window.matchMedia("(prefers-color-scheme: dark)").matches);function r(){e.setTheme(localStorage.theme||"system")}function n(o){switch(o){case"light":case"dark":localStorage.setItem("theme",o);break;case"system":localStorage.removeItem("theme");break}t()}return J(()=>{const o=matchMedia("(prefers-color-scheme: dark)");o.addEventListener?o.addEventListener("change",t):o.addListener(t),addEventListener("storage",r);const v=e.subscribe(n);return()=>{o.removeEventListener?o.removeEventListener("change",t):o.removeListener(t),removeEventListener("storage",r),v()}}),["<script>"+t.toString().substring(6)+"<\/script>"]}class ve extends T{constructor(e){super(),C(this,e,pe,ge,E,{})}}function ke(a){let e,t,r,n,l,f,o,v,c,i,u,h;l=new oe({});const H=a[1].default,m=U(H,a,a[0],null);return c=new le({}),u=new ve({}),{c(){e=$("meta"),t=$("link"),r=S(),n=$("div"),Z(l.$$.fragment),f=S(),o=$("main"),m&&m.c(),v=S(),Z(c.$$.fragment),i=S(),Z(u.$$.fragment),this.h()},l(s){const g=N("svelte-160owll",document.head);e=w(g,"META",{name:!0,content:!0}),t=w(g,"LINK",{rel:!0,href:!0}),g.forEach(d),r=x(s),n=w(s,"DIV",{});var b=L(n);j(l.$$.fragment,b),f=x(b),o=w(b,"MAIN",{class:!0});var P=L(o);m&&m.l(P),P.forEach(d),v=x(b),j(c.$$.fragment,b),b.forEach(d),i=x(s),j(u.$$.fragment,s),this.h()},h(){document.title="Sliver Complex",_(e,"name","description"),_(e,"content","The landing site of Sliver Complex."),_(t,"rel","icon"),_(t,"href","https://library.gxres.net/images/icons/favicon.webp"),_(o,"class","max-w-4xl mx-auto p-4")},m(s,g){p(document.head,e),p(document.head,t),y(s,r,g),y(s,n,g),F(l,n,null),p(n,f),p(n,o),m&&m.m(o,null),p(n,v),F(c,n,null),y(s,i,g),F(u,s,g),h=!0},p(s,[g]){m&&m.p&&(!h||g&1)&&W(m,H,s,s[0],h?ee(H,s[0],g,null):X(s[0]),null)},i(s){h||(M(l.$$.fragment,s),M(m,s),M(c.$$.fragment,s),M(u.$$.fragment,s),h=!0)},o(s){A(l.$$.fragment,s),A(m,s),A(c.$$.fragment,s),A(u.$$.fragment,s),h=!1},d(s){s&&(d(r),d(n),d(i)),d(e),d(t),I(l),m&&m.d(s),I(c),I(u,s)}}}function _e(a,e,t){let{$$slots:r={},$$scope:n}=e;return fe(),a.$$set=l=>{"$$scope"in l&&t(0,n=l.$$scope)},[n,r]}class xe extends T{constructor(e){super(),C(this,e,_e,ke,E,{})}}export{xe as component,Se as universal};

import{q,u as z,s as I,n as $,o as K,v as N,w as R,x as Q,y as G}from"../chunks/scheduler.CzBjrY2S.js";import{S as B,i as D,H as J,n as C,z as O,A as U,d as u,k as f,e as b,s as x,v as W,c as _,f as w,h as E,g as H,w as X,a as m,b as M,x as Y,m as Z,o as F,y as ee}from"../chunks/index.BQncQoD1.js";import{w as te}from"../chunks/index.CsHgCZGu.js";const se=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,ae=!0,be=Object.freeze(Object.defineProperty({__proto__:null,prerender:ae},Symbol.toStringTag,{value:"Module"})),P={selectLabel:"text-slate-700 dark:text-slate-500",selectButton:"ring-1 ring-slate-900/10 rounded-lg shadow-sm p-2 text-slate-700  bg-white dark:bg-slate-600 dark:ring-0 dark:highlight-white/5 dark:text-slate-200",selectIcon:"text-slate-400",dropdownList:"text-slate-700 bg-white ring-1 ring-black ring-opacity-5 dark:bg-slate-700 dark:ring-0 dark:highlight-white/5 dark:text-slate-300",dropdownHover:"hover:bg-slate-50 hover:dark:bg-slate-800/50",textActive:"text-sky-500",iconActiveStroke:"stroke-sky-500",iconActiveFill:"fill-sky-500",iconActiveShade:"fill-sky-400/20",iconStroke:"stroke-slate-400",iconFill:"fill-slate-400"},ne=t=>({dark:e=>`
<svg viewBox="0 0 24 24" fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
	<path
		class="${e?t.iconActiveShade:t.iconStroke}"
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
	/>
	<path
		class="${e?t.iconActiveFill:t.iconFill}"
		d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
	/>
	<path
		class="${e?t.iconActiveFill:t.iconFill}"
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
	/>
</svg>`,light:e=>`
<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
	<path class="${e?t.iconActiveStroke+" "+t.iconActiveShade:t.iconStroke}" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
	<path
		class=${e?t.iconActiveStroke:t.iconStroke}
		d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
	/>
</svg>`,system:e=>`
<svg viewBox="0 0 24 24" fill="none">
	<path
		class="${e?t.iconActiveStroke+" "+t.iconActiveShade:t.iconStroke}"
		d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
		stroke-width="2"
		stroke-linejoin="round"
	/>
	<path
		class="${e?t.iconActiveStroke:t.iconStroke}"
		d="M14 15c0 3 2 5 2 5H8s2-2 2-5"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>`}),le=ne(P),V={};function ie(){return z(V)}function oe(t){q(V,t)}const re=["light","dark","system"],ce={light:"Light",dark:"Dark",system:"System"};function de(t){const{key:e,colors:s,icons:i,labels:n}={key:"theme",colors:P,icons:le,labels:ce,...t};let l="system";{const r=localStorage.theme;(r==="light"||r==="dark")&&(l=r)}const{subscribe:y,set:o}=te(l);function h(r){re.includes(r)&&r!==l&&(l=r,o(l))}const g={subscribe:y,setTheme:h,colors:s,icons:i,labels:n};return oe(g),g}const{document:L}=se;function he(t){let e,s;return{c(){e=new J(!1),s=C(),this.h()},l(i){const n=O("svelte-1cgseeh",L.head);e=U(n,!1),s=C(),n.forEach(u),this.h()},h(){e.a=s},m(i,n){e.m(t[0],L.head),f(L.head,s)},p:$,i:$,o:$,d(i){i&&e.d(),u(s)}}}function me(t){const e=ie(),s=()=>document.documentElement.classList.toggle("dark",localStorage.theme==="dark"||!localStorage.theme&&window.matchMedia("(prefers-color-scheme: dark)").matches);function i(){e.setTheme(localStorage.theme||"system")}function n(o){switch(o){case"light":case"dark":localStorage.setItem("theme",o);break;case"system":localStorage.removeItem("theme");break}s()}return K(()=>{const o=matchMedia("(prefers-color-scheme: dark)");o.addEventListener?o.addEventListener("change",s):o.addListener(s),addEventListener("storage",i);const h=e.subscribe(n);return()=>{o.removeEventListener?o.removeEventListener("change",s):o.removeListener(s),removeEventListener("storage",i),h()}}),["<script>"+s.toString().substring(6)+"<\/script>"]}class ue extends B{constructor(e){super(),D(this,e,me,he,I,{})}}function fe(t){let e,s,i,n,l,y=`<div class="flex justify-center svelte-ie2j05"><img class="rounded-full svelte-ie2j05" width="128" height="128" src="https://library.gxres.net/images/icons/big-favicon.webp" alt="Sliver Complex logo"/></div> <hgroup class="text-center space-y-2 svelte-ie2j05"><h1 class="text-2xl svelte-ie2j05">Sliver Complex</h1> <p class="svelte-ie2j05">Personal lab of <a target="_blank" href="https://github.com/gxres042" class="svelte-ie2j05">@gxres042</a> and
				<a target="_blank" href="https://github.com/slivermoe" class="svelte-ie2j05">@slivermoe</a></p></hgroup> <div class="flex justify-center gap-4 svelte-ie2j05"><a class="button svelte-ie2j05" href="/">Index</a> <a class="button svelte-ie2j05" href="/project">Projects</a> <a class="button svelte-ie2j05" href="/about">About</a></div>`,o,h,g,r,A='<p class="svelte-ie2j05">Copyright © 2019 - 2024 <a href="/" class="svelte-ie2j05">Sliver Complex</a>. Powered by SvelteKit.</p>',S,v,p;const j=t[1].default,c=N(j,t,t[0],null);return v=new ue({}),{c(){e=b("meta"),s=b("link"),i=x(),n=b("div"),l=b("header"),l.innerHTML=y,o=x(),h=b("main"),c&&c.c(),g=x(),r=b("footer"),r.innerHTML=A,S=x(),W(v.$$.fragment),this.h()},l(a){const d=O("svelte-160owll",document.head);e=_(d,"META",{name:!0,content:!0,class:!0}),s=_(d,"LINK",{rel:!0,href:!0,class:!0}),d.forEach(u),i=w(a),n=_(a,"DIV",{class:!0});var k=E(n);l=_(k,"HEADER",{class:!0,"data-svelte-h":!0}),H(l)!=="svelte-p3mjgl"&&(l.innerHTML=y),o=w(k),h=_(k,"MAIN",{class:!0});var T=E(h);c&&c.l(T),T.forEach(u),g=w(k),r=_(k,"FOOTER",{class:!0,"data-svelte-h":!0}),H(r)!=="svelte-13mdrmu"&&(r.innerHTML=A),k.forEach(u),S=w(a),X(v.$$.fragment,a),this.h()},h(){document.title="Sliver Complex",m(e,"name","description"),m(e,"content","The landing site of Sliver Complex."),m(e,"class","svelte-ie2j05"),m(s,"rel","icon"),m(s,"href","https://library.gxres.net/images/icons/favicon.webp"),m(s,"class","svelte-ie2j05"),m(l,"class","space-y-4 svelte-ie2j05"),m(h,"class","mx-auto max-w-4xl p-4 svelte-ie2j05"),m(r,"class","text-center svelte-ie2j05"),m(n,"class","flex flex-col items-center justify-center p-4 min-h-svh svelte-ie2j05")},m(a,d){f(document.head,e),f(document.head,s),M(a,i,d),M(a,n,d),f(n,l),f(n,o),f(n,h),c&&c.m(h,null),f(n,g),f(n,r),M(a,S,d),Y(v,a,d),p=!0},p(a,[d]){c&&c.p&&(!p||d&1)&&R(c,j,a,a[0],p?G(j,a[0],d,null):Q(a[0]),null)},i(a){p||(Z(c,a),Z(v.$$.fragment,a),p=!0)},o(a){F(c,a),F(v.$$.fragment,a),p=!1},d(a){a&&(u(i),u(n),u(S)),u(e),u(s),c&&c.d(a),ee(v,a)}}}function ve(t,e,s){let{$$slots:i={},$$scope:n}=e;return de(),t.$$set=l=>{"$$scope"in l&&s(0,n=l.$$scope)},[n,i]}class _e extends B{constructor(e){super(),D(this,e,ve,fe,I,{})}}export{_e as component,be as universal};

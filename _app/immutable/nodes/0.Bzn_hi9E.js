import{q as te,u as se,s as R,n as H,o as ae,v as le,w as ne,x as oe,y as ie}from"../chunks/scheduler.CzBjrY2S.js";import{S as Q,i as Y,H as G,n as O,z as J,A as U,d as m,k as h,e as p,s as j,t as K,v as re,c as k,f as $,h as C,g as V,j as q,w as ce,a as d,b as F,x as de,m as z,o as N,y as he}from"../chunks/index.BQncQoD1.js";import{w as me}from"../chunks/index.CsHgCZGu.js";const ue=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,fe=!0,Ce=Object.freeze(Object.defineProperty({__proto__:null,prerender:fe},Symbol.toStringTag,{value:"Module"})),W={selectLabel:"text-slate-700 dark:text-slate-500",selectButton:"ring-1 ring-slate-900/10 rounded-lg shadow-sm p-2 text-slate-700  bg-white dark:bg-slate-600 dark:ring-0 dark:highlight-white/5 dark:text-slate-200",selectIcon:"text-slate-400",dropdownList:"text-slate-700 bg-white ring-1 ring-black ring-opacity-5 dark:bg-slate-700 dark:ring-0 dark:highlight-white/5 dark:text-slate-300",dropdownHover:"hover:bg-slate-50 hover:dark:bg-slate-800/50",textActive:"text-sky-500",iconActiveStroke:"stroke-sky-500",iconActiveFill:"fill-sky-500",iconActiveShade:"fill-sky-400/20",iconStroke:"stroke-slate-400",iconFill:"fill-slate-400"},ve=t=>({dark:e=>`
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
</svg>`}),ge=ve(W),X={};function pe(){return se(X)}function ke(t){te(X,t)}const _e=["light","dark","system"],be={light:"Light",dark:"Dark",system:"System"};function xe(t){const{key:e,colors:s,icons:o,labels:l}={key:"theme",colors:W,icons:ge,labels:be,...t};let n="system";{const r=localStorage.theme;(r==="light"||r==="dark")&&(n=r)}const{subscribe:w,set:i}=me(n);function f(r){_e.includes(r)&&r!==n&&(n=r,i(n))}const b={subscribe:w,setTheme:f,colors:s,icons:o,labels:l};return ke(b),b}const{document:I}=ue;function ye(t){let e,s;return{c(){e=new G(!1),s=O(),this.h()},l(o){const l=J("svelte-1cgseeh",I.head);e=U(l,!1),s=O(),l.forEach(m),this.h()},h(){e.a=s},m(o,l){e.m(t[0],I.head),h(I.head,s)},p:H,i:H,o:H,d(o){o&&e.d(),m(s)}}}function Se(t){const e=pe(),s=()=>document.documentElement.classList.toggle("dark",localStorage.theme==="dark"||!localStorage.theme&&window.matchMedia("(prefers-color-scheme: dark)").matches);function o(){e.setTheme(localStorage.theme||"system")}function l(i){switch(i){case"light":case"dark":localStorage.setItem("theme",i);break;case"system":localStorage.removeItem("theme");break}s()}return ae(()=>{const i=matchMedia("(prefers-color-scheme: dark)");i.addEventListener?i.addEventListener("change",s):i.addListener(s),addEventListener("storage",o);const f=e.subscribe(l);return()=>{i.removeEventListener?i.removeEventListener("change",s):i.removeListener(s),removeEventListener("storage",o),f()}}),["<script>"+s.toString().substring(6)+"<\/script>"]}class we extends Q{constructor(e){super(),Y(this,e,Se,ye,R,{})}}function je(t){let e,s,o,l,n,w=`<div class="flex justify-center svelte-ie2j05"><img class="rounded-full svelte-ie2j05" width="128" height="128" src="https://library.gxres.net/images/icons/big-favicon.webp" alt="Sliver Complex logo"/></div> <hgroup class="text-center space-y-2 svelte-ie2j05"><h1 class="text-2xl svelte-ie2j05">Sliver Complex</h1> <p class="svelte-ie2j05">Personal lab of <a target="_blank" href="https://github.com/gxres042" class="svelte-ie2j05">@gxres042</a> and
				<a target="_blank" href="https://github.com/slivermoe" class="svelte-ie2j05">@slivermoe</a></p></hgroup> <div class="flex justify-center gap-4 svelte-ie2j05"><a class="button svelte-ie2j05" href="/">Index</a> <a class="button svelte-ie2j05" href="/project">Projects</a> <a class="button svelte-ie2j05" href="/about">About</a></div>`,i,f,b,r,v,E,M,ee=new Date().getFullYear()+"",A,g,P="Sliver Complex",T,L,_,x;const Z=t[1].default,c=le(Z,t,t[0],null);return _=new we({}),{c(){e=p("meta"),s=p("link"),o=j(),l=p("div"),n=p("header"),n.innerHTML=w,i=j(),f=p("main"),c&&c.c(),b=j(),r=p("footer"),v=p("p"),E=K("Copyright © 2022 - "),M=new G(!1),A=j(),g=p("a"),g.textContent=P,T=K(". Powered by SvelteKit."),L=j(),re(_.$$.fragment),this.h()},l(a){const u=J("svelte-160owll",document.head);e=k(u,"META",{name:!0,content:!0,class:!0}),s=k(u,"LINK",{rel:!0,href:!0,class:!0}),u.forEach(m),o=$(a),l=k(a,"DIV",{class:!0});var y=C(l);n=k(y,"HEADER",{class:!0,"data-svelte-h":!0}),V(n)!=="svelte-p3mjgl"&&(n.innerHTML=w),i=$(y),f=k(y,"MAIN",{class:!0});var D=C(f);c&&c.l(D),D.forEach(m),b=$(y),r=k(y,"FOOTER",{class:!0});var B=C(r);v=k(B,"P",{class:!0});var S=C(v);E=q(S,"Copyright © 2022 - "),M=U(S,!1),A=$(S),g=k(S,"A",{href:!0,class:!0,"data-svelte-h":!0}),V(g)!=="svelte-jex14o"&&(g.textContent=P),T=q(S,". Powered by SvelteKit."),S.forEach(m),B.forEach(m),y.forEach(m),L=$(a),ce(_.$$.fragment,a),this.h()},h(){document.title="Sliver Complex",d(e,"name","description"),d(e,"content","The landing site of Sliver Complex."),d(e,"class","svelte-ie2j05"),d(s,"rel","icon"),d(s,"href","https://library.gxres.net/images/icons/favicon.webp"),d(s,"class","svelte-ie2j05"),d(n,"class","space-y-4 svelte-ie2j05"),d(f,"class","mx-auto max-w-4xl p-4 svelte-ie2j05"),M.a=A,d(g,"href","/"),d(g,"class","svelte-ie2j05"),d(v,"class","svelte-ie2j05"),d(r,"class","text-center svelte-ie2j05"),d(l,"class","flex flex-col items-center justify-center p-4 min-h-svh svelte-ie2j05")},m(a,u){h(document.head,e),h(document.head,s),F(a,o,u),F(a,l,u),h(l,n),h(l,i),h(l,f),c&&c.m(f,null),h(l,b),h(l,r),h(r,v),h(v,E),M.m(ee,v),h(v,A),h(v,g),h(v,T),F(a,L,u),de(_,a,u),x=!0},p(a,[u]){c&&c.p&&(!x||u&1)&&ne(c,Z,a,a[0],x?ie(Z,a[0],u,null):oe(a[0]),null)},i(a){x||(z(c,a),z(_.$$.fragment,a),x=!0)},o(a){N(c,a),N(_.$$.fragment,a),x=!1},d(a){a&&(m(o),m(l),m(L)),m(e),m(s),c&&c.d(a),he(_,a)}}}function $e(t,e,s){let{$$slots:o={},$$scope:l}=e;return xe(),t.$$set=n=>{"$$scope"in n&&s(0,l=n.$$scope)},[l,o]}class Ee extends Q{constructor(e){super(),Y(this,e,$e,je,R,{})}}export{Ee as component,Ce as universal};

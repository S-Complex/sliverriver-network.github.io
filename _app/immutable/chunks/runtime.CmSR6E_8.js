var kn=Array.isArray,Nn=Array.from,Cn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,bn=Object.prototype,Pn=Array.prototype,Zt=Object.getPrototypeOf;const Fn=()=>{};function qn(t){return t()}function zt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,dt=4,K=8,st=16,m=32,Z=64,tt=128,O=256,U=512,E=1024,x=2048,z=4096,b=8192,P=16384,Wt=32768,Et=65536,Ln=1<<17,Xt=1<<19,yt=1<<20,ct=Symbol("$state"),Mn=Symbol("legacy props"),Yn=Symbol("");function wt(t){return t===this.v}function Jt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Tt(t){return!Jt(t,this.v)}function Qt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function tn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function nn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function rn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function jn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Hn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Bn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Un(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function ln(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let W=!1;function Vn(){W=!0}const Gn=1,$n=2,Kn=16,Zn=1,zn=2,Wn=4,Xn=8,Jn=16,Qn=1,tr=2,sn="[",an="[!",un="]",mt={},nr=Symbol();function at(t,n){var r={f:0,v:t,reactions:null,equals:wt,version:0};return r}function rr(t){return gt(at(t))}function on(t,n=!1){var e;const r=at(t);return n||(r.equals=Tt),W&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function er(t,n=!1){return gt(on(t,n))}function gt(t){return o!==null&&o.f&y&&(T===null?gn([t]):T.push(t)),t}function lr(t,n){return o!==null&&it()&&o.f&(y|st)&&(T===null||!T.includes(t))&&ln(),fn(t,n)}function fn(t,n){return t.equals(n)||(t.v,t.v=n,t.version=Ht(),At(t,x),it()&&u!==null&&u.f&E&&!(u.f&m)&&(h!==null&&h.includes(t)?(g(u,x),Q(u)):A===null?An([t]):A.push(t))),n}function At(t,n){var r=t.reactions;if(r!==null)for(var e=it(),l=r.length,s=0;s<l;s++){var a=r[s],i=a.f;i&x||!e&&a===u||(g(a,n),i&(E|O)&&(i&y?At(a,z):Q(a)))}}function Rt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let S=!1;function sr(t){S=t}let w;function F(t){if(t===null)throw Rt(),mt;return w=t}function ar(){return F(k(w))}function ur(t){if(S){if(k(w)!==null)throw Rt(),mt;w=t}}function or(t=1){if(S){for(var n=t,r=w;n--;)r=k(r);w=r}}function ir(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===un){if(t===0)return n;t-=1}else(r===sn||r===an)&&(t+=1)}var e=k(n);n.remove(),n=e}}var vt,_n,Dt,xt;function fr(){if(vt===void 0){vt=window,_n=document;var t=Element.prototype,n=Node.prototype;Dt=_t(n,"firstChild").get,xt=_t(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return Dt.call(t)}function k(t){return xt.call(t)}function _r(t,n){if(!S)return rt(t);var r=rt(w);if(r===null)r=w.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),F(e),e}return F(r),r}function cr(t,n){if(!S){var r=rt(t);return r instanceof Comment&&r.data===""?k(r):r}return w}function vr(t,n=1,r=!1){let e=S?w:t;for(var l;n--;)l=e,e=k(e);if(!S)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=nt();return e===null?l==null||l.after(a):e.before(a),F(a),a}return F(e),e}function pr(t){t.textContent=""}function cn(t){var n=y|x;u===null?n|=O:u.f|=yt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:wt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function hr(t){const n=cn(t);return n.equals=Tt,n}function St(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ut(e):I(e)}}}function vn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function It(t){var n,r=u;$(vn(t));try{St(t),n=Bt(t)}finally{$(r)}return n}function Ot(t){var n=It(t),r=(D||t.f&O)&&t.deps!==null?z:E;g(t,r),t.equals(n)||(t.v=n,t.version=Ht())}function ut(t){St(t),M(t,0),g(t,P),t.v=t.children=t.deps=t.ctx=t.reactions=null}function kt(t){u===null&&o===null&&nn(),o!==null&&o.f&O&&tn(),ot&&Qt()}function pn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function Y(t,n,r,e=!0){var l=(t&Z)!==0,s=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var i=N;try{pt(!0),J(a),a.f|=Wt}catch(c){throw I(a),c}finally{pt(i)}}else n!==null&&Q(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&yt)===0;if(!_&&!l&&e&&(s!==null&&pn(a,s),o!==null&&o.f&y)){var p=o;(p.children??(p.children=[])).push(a)}return a}function dr(t){kt();var n=u!==null&&(u.f&m)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Nt(t);return e}}function Er(t){return kt(),hn(t)}function yr(t){const n=Y(Z,t,!0);return(r={})=>new Promise(e=>{r.outro?yn(n,()=>{I(n),e(void 0)}):(I(n),e(void 0))})}function Nt(t){return Y(dt,t,!1)}function hn(t){return Y(K,t,!0)}function wr(t){return dn(t)}function dn(t,n=0){return Y(K|st|n,t,!0)}function Tr(t,n=!0){return Y(K|m,t,!0,n)}function Ct(t){var n=t.teardown;if(n!==null){const r=ot,e=o;ht(!0),G(null);try{n.call(null)}finally{ht(r),G(e)}}}function bt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ut(n[r])}}function Pt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;I(r,n),r=e}}function En(t){for(var n=t.first;n!==null;){var r=n.next;n.f&m||I(n),n=r}}function I(t,n=!0){var r=!1;if((n||t.f&Xt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:k(e);e.remove(),e=s}r=!0}Pt(t,n&&!r),bt(t),M(t,0),g(t,P);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Ct(t);var i=t.parent;i!==null&&i.first!==null&&Ft(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ft(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function yn(t,n){var r=[];qt(t,r,!0),wn(r,()=>{I(t),n&&n()})}function wn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function qt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&Et)!==0||(e.f&m)!==0;qt(e,n,s?r:!1),e=l}}}function mr(t){Lt(t,!0)}function Lt(t,n){if(t.f&b){j(t)&&J(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,l=(r.f&Et)!==0||(r.f&m)!==0;Lt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let V=!1,et=[];function Mt(){V=!1;const t=et.slice();et=[],zt(t)}function gr(t){V||(V=!0,queueMicrotask(Mt)),et.push(t)}function Tn(){V&&Mt()}const Yt=0,mn=1;let H=!1,B=Yt,q=!1,L=null,N=!1,ot=!1;function pt(t){N=t}function ht(t){ot=t}let R=[],C=0;let o=null;function G(t){o=t}let u=null;function $(t){u=t}let T=null;function gn(t){T=t}let h=null,d=0,A=null;function An(t){A=t}let jt=1,D=!1,f=null;function Ht(){return++jt}function it(){return!W||f!==null&&f.l===null}function j(t){var p;var n=t.f;if(n&x)return!0;if(n&z){var r=t.deps,e=(n&O)!==0;if(r!==null){var l,s,a=(n&U)!==0,i=e&&u!==null&&!D,_=r.length;if(a||i){for(l=0;l<_;l++)s=r[l],(a||!((p=s==null?void 0:s.reactions)!=null&&p.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=U)}for(l=0;l<_;l++)if(s=r[l],j(s)&&Ot(s),s.version>t.version)return!0}(!e||u!==null&&!D)&&g(t,E)}return!1}function Rn(t,n){for(var r=n;r!==null;){if(r.f&tt)try{r.fn(t);return}catch{r.f^=tt}r=r.parent}throw H=!1,t}function Dn(t){return(t.f&P)===0&&(t.parent===null||(t.parent.f&tt)===0)}function X(t,n,r,e){if(H){if(r===null&&(H=!1),Dn(n))throw t;return}r!==null&&(H=!0);{Rn(t,n);return}}function Bt(t){var ft;var n=h,r=d,e=A,l=o,s=D,a=T,i=f,_=t.f;h=null,d=0,A=null,o=_&(m|Z)?null:t,D=!N&&(_&O)!==0,T=null,f=t.ctx;try{var p=(0,t.fn)(),c=t.deps;if(h!==null){var v;if(M(t,d),c!==null&&d>0)for(c.length=d+h.length,v=0;v<h.length;v++)c[d+v]=h[v];else t.deps=c=h;if(!D)for(v=d;v<c.length;v++)((ft=c[v]).reactions??(ft.reactions=[])).push(t)}else c!==null&&d<c.length&&(M(t,d),c.length=d);return p}finally{h=n,d=r,A=e,o=l,D=s,T=a,f=i}}function xn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(g(n,z),n.f&(O|U)||(n.f^=U),M(n,0))}function M(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)xn(t,r[e])}function J(t){var n=t.f;if(!(n&P)){g(t,E);var r=u,e=f;u=t;try{n&st?En(t):Pt(t),bt(t),Ct(t);var l=Bt(t);t.teardown=typeof l=="function"?l:null,t.version=jt;var s=t.deps,a}catch(i){X(i,t,r,e||t.ctx)}finally{u=r}}}function Ut(){if(C>1e3){C=0;try{rn()}catch(t){if(L!==null)X(t,L,null);else throw t}}C++}function Vt(t){var n=t.length;if(n!==0){Ut();var r=N;N=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&E||(l.f^=E);var s=[];Gt(l,s),Sn(s)}}finally{N=r}}}function Sn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(P|b)))try{j(e)&&(J(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ft(e):e.fn=null))}catch(l){X(l,e,null,e.ctx)}}}function In(){if(q=!1,C>1001)return;const t=R;R=[],Vt(t),q||(C=0,L=null)}function Q(t){B===Yt&&(q||(q=!0,queueMicrotask(In))),L=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|m)){if(!(r&E))return;n.f^=E}}R.push(n)}function Gt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&m)!==0,a=s&&(l&E)!==0,i=r.next;if(!a&&!(l&b))if(l&K){if(s)r.f^=E;else try{j(r)&&J(r)}catch(v){X(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else l&dt&&e.push(r);if(i===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var p=v.next;if(p!==null){r=p;continue t}v=v.parent}}r=i}for(var c=0;c<e.length;c++)_=e[c],n.push(_),Gt(_,n)}function $t(t){var n=B,r=R;try{Ut();const l=[];B=mn,R=l,q=!1,Vt(r);var e=t==null?void 0:t();return Tn(),(R.length>0||l.length>0)&&$t(),C=0,L=null,e}finally{B=n,R=r}}async function Ar(){await Promise.resolve(),$t()}function Rr(t){var c;var n=t.f,r=(n&y)!==0;if(r&&n&P){var e=It(t);return ut(t),e}if(o!==null){T!==null&&T.includes(t)&&en();var l=o.deps;h===null&&l!==null&&l[d]===t?d++:h===null?h=[t]:h.push(t),A!==null&&u!==null&&u.f&E&&!(u.f&m)&&A.includes(t)&&(g(u,x),Q(u))}else if(r&&t.deps===null)for(var s=t,a=s.parent,i=s;a!==null;)if(a.f&y){var _=a;i=_,a=_.parent}else{var p=a;(c=p.deriveds)!=null&&c.includes(i)||(p.deriveds??(p.deriveds=[])).push(i);break}return r&&(s=t,j(s)&&Ot(s)),t.v}function Dr(t){const n=o;try{return o=null,t()}finally{o=n}}const On=-7169;function g(t,n){t.f=t.f&On|n}function xr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},W&&!n&&(f.l={s:null,u:null,r1:[],r2:at(!1)})}function Sr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];$(s.effect),G(s.reaction),Nt(s.fn)}}finally{$(r),G(e)}}f=n.p,n.m=!0}return{}}function Ir(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)lt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&lt(r)}}}function lt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],n)}catch{}const r=Zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{Zt as $,qn as A,Ir as B,cn as C,Vn as D,Et as E,nt as F,rt as G,an as H,kn as I,Nn as J,un as K,b as L,u as M,fn as N,qt as O,pr as P,wn as Q,I as R,o as S,on as T,nr as U,at as V,$n as W,Gn as X,Kn as Y,k as Z,Yn as _,Sr as a,Kt as a0,W as a1,Cn as a2,G as a3,$ as a4,Xt as a5,sn as a6,fr as a7,mt as a8,Rt as a9,$t as aA,Ar as aB,rr as aC,Fn as aD,Jt as aE,jn as aa,yr as ab,Qn as ac,tr as ad,_n as ae,ct as af,bn as ag,Pn as ah,Bn as ai,_t as aj,Un as ak,Nt as al,hn as am,gr as an,Hn as ao,Ln as ap,Wn as aq,Tt as ar,m as as,Z as at,Zn as au,zn as av,Xn as aw,Mn as ax,hr as ay,Jn as az,lr as b,_r as c,dn as d,ar as e,cr as f,Rr as g,S as h,ir as i,F as j,sr as k,mr as l,er as m,or as n,Tr as o,xr as p,yn as q,ur as r,vr as s,wr as t,w as u,Er as v,dr as w,f as x,Dr as y,zt as z};

import{s as B,n as H}from"../chunks/scheduler.BvLojk_z.js";import{S as G,i as J,e as m,s as N,c as g,g as I,a as A,b as P,d as x,h as _,p as K,j as k,k as C,l as y,m as p,n as z}from"../chunks/index.CnAN6RO0.js";import{e as L}from"../chunks/each.D6YF6ztN.js";function Q(c,t,r){const l=c.slice();return l[1]=t[r],l}function V(c){let t,r,l=c[1].containernumber+"",o,h,d,f=c[1].nameofship+"",s,e,n,a=c[1].containersize+"",v,D,S,b=c[1].datecontainershipped+"",E;return{c(){t=m("div"),r=m("span"),o=k(l),h=N(),d=m("span"),s=k(f),e=N(),n=m("span"),v=k(a),D=N(),S=m("span"),E=k(b),this.h()},l(u){t=g(u,"DIV",{});var i=C(t);r=g(i,"SPAN",{class:!0});var j=C(r);o=y(j,l),j.forEach(_),h=A(i),d=g(i,"SPAN",{class:!0});var q=C(d);s=y(q,f),q.forEach(_),e=A(i),n=g(i,"SPAN",{class:!0});var w=C(n);v=y(w,a),w.forEach(_),D=A(i),S=g(i,"SPAN",{class:!0});var F=C(S);E=y(F,b),F.forEach(_),i.forEach(_),this.h()},h(){P(r,"class","id svelte-1huuvy9"),P(d,"class","name svelte-1huuvy9"),P(n,"class","size"),P(S,"class","date")},m(u,i){x(u,t,i),p(t,r),p(r,o),p(t,h),p(t,d),p(d,s),p(t,e),p(t,n),p(n,v),p(t,D),p(t,S),p(S,E)},p(u,i){i&1&&l!==(l=u[1].containernumber+"")&&z(o,l),i&1&&f!==(f=u[1].nameofship+"")&&z(s,f),i&1&&a!==(a=u[1].containersize+"")&&z(v,a),i&1&&b!==(b=u[1].datecontainershipped+"")&&z(E,b)},d(u){u&&_(t)}}}function M(c){let t,r="Fetched from Database",l,o,h,d="(database lives in PostgreSQL)",f=L(c[0].containers),s=[];for(let e=0;e<f.length;e+=1)s[e]=V(Q(c,f,e));return{c(){t=m("h1"),t.textContent=r,l=N();for(let e=0;e<s.length;e+=1)s[e].c();o=N(),h=m("span"),h.textContent=d,this.h()},l(e){t=g(e,"H1",{"data-svelte-h":!0}),I(t)!=="svelte-1gxw4ca"&&(t.textContent=r),l=A(e);for(let n=0;n<s.length;n+=1)s[n].l(e);o=A(e),h=g(e,"SPAN",{class:!0,"data-svelte-h":!0}),I(h)!=="svelte-13gl9g8"&&(h.textContent=d),this.h()},h(){P(h,"class","i svelte-1huuvy9")},m(e,n){x(e,t,n),x(e,l,n);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,n);x(e,o,n),x(e,h,n)},p(e,[n]){if(n&1){f=L(e[0].containers);let a;for(a=0;a<f.length;a+=1){const v=Q(e,f,a);s[a]?s[a].p(v,n):(s[a]=V(v),s[a].c(),s[a].m(o.parentNode,o))}for(;a<s.length;a+=1)s[a].d(1);s.length=f.length}},i:H,o:H,d(e){e&&(_(t),_(l),_(o),_(h)),K(s,e)}}}function O(c,t,r){let{data:l}=t;return c.$$set=o=>{"data"in o&&r(0,l=o.data)},[l]}class W extends G{constructor(t){super(),J(this,t,O,M,B,{data:0})}}export{W as component};

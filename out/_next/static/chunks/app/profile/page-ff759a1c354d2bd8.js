(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{9691:function(e,t,a){Promise.resolve().then(a.bind(a,457))},457:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return L}});var s=a(7437),r=a(2265),n=a(6336),i=a(4041),l=a(3023),d=a(1908),o=a(9583),c=a(5744),u=a(2210),m=a(6989),f=a(3763),p=a(1708),x=a(4977),h=a(9381),b="Switch",[g,j]=(0,m.b)(b),[y,v]=g(b),N=r.forwardRef((e,t)=>{let{__scopeSwitch:a,name:n,checked:i,defaultChecked:l,required:d,disabled:o,value:m="on",onCheckedChange:p,form:x,...b}=e,[g,j]=r.useState(null),v=(0,u.e)(t,e=>j(e)),N=r.useRef(!1),w=!g||x||!!g.closest("form"),[k=!1,R]=(0,f.T)({prop:i,defaultProp:l,onChange:p});return(0,s.jsxs)(y,{scope:a,checked:k,disabled:o,children:[(0,s.jsx)(h.WV.button,{type:"button",role:"switch","aria-checked":k,"aria-required":d,"data-state":C(k),"data-disabled":o?"":void 0,disabled:o,value:m,...b,ref:v,onClick:(0,c.M)(e.onClick,e=>{R(e=>!e),w&&(N.current=e.isPropagationStopped(),N.current||e.stopPropagation())})}),w&&(0,s.jsx)(S,{control:g,bubbles:!N.current,name:n,value:m,checked:k,required:d,disabled:o,form:x,style:{transform:"translateX(-100%)"}})]})});N.displayName=b;var w="SwitchThumb",k=r.forwardRef((e,t)=>{let{__scopeSwitch:a,...r}=e,n=v(w,a);return(0,s.jsx)(h.WV.span,{"data-state":C(n.checked),"data-disabled":n.disabled?"":void 0,...r,ref:t})});k.displayName=w;var S=e=>{let{control:t,checked:a,bubbles:n=!0,...i}=e,l=r.useRef(null),d=(0,p.D)(a),o=(0,x.t)(t);return r.useEffect(()=>{let e=l.current,t=window.HTMLInputElement.prototype,s=Object.getOwnPropertyDescriptor(t,"checked"),r=s.set;if(d!==a&&r){let t=new Event("click",{bubbles:n});r.call(e,a),e.dispatchEvent(t)}},[d,a,n]),(0,s.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:a,...i,tabIndex:-1,ref:l,style:{...e.style,...o,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function C(e){return e?"checked":"unchecked"}var R=a(9311);let _=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(N,{className:(0,R.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",a),...r,ref:t,children:(0,s.jsx)(k,{className:(0,R.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})})});_.displayName=N.displayName;var E=a(8094),z=a(4861),M=a(9755),T=a(2621),Z=a(7972),D=a(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let I=(0,D.Z)("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]),O=(0,D.Z)("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),P=(0,D.Z)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);function L(){let[e,t]=(0,r.useState)({username:"",email:"",preferredSpread:"three-card",notifications:!0}),[a,c]=(0,r.useState)([]),[u,m]=(0,r.useState)(!1),f=(0,M.jl)(),{toast:p}=(0,T.p)();(0,r.useEffect)(()=>{let e=localStorage.getItem("tarotUserProfile");e?t(JSON.parse(e)):f&&t(e=>({...e,username:f.username||f.first_name||"Пользователь"}));try{let e=JSON.parse(localStorage.getItem("tarotReadings")||"[]");c(e)}catch(e){console.error("Error loading readings:",e)}},[f]);let x=e=>{let{name:a,value:s}=e.target;t(e=>({...e,[a]:s}))},h=(e,a)=>{t(t=>({...t,[e]:a}))},b=(e,a)=>{t(t=>({...t,[e]:a}))};return(0,s.jsxs)("main",{className:"min-h-screen flex flex-col",children:[(0,s.jsx)(n.Navbar,{}),(0,s.jsx)(i.StarsBackground,{}),(0,s.jsxs)("div",{className:"flex-1 container mx-auto px-4 py-8",children:[(0,s.jsx)("h1",{className:"text-3xl font-bold text-center mb-2",children:"Профиль"}),(0,s.jsx)("p",{className:"text-muted-foreground text-center mb-8",children:"Управляйте своими настройками и данными"}),(0,s.jsxs)("div",{className:"max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6",children:[(0,s.jsxs)("div",{className:"md:col-span-2 bg-card rounded-lg border border-border p-6",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,s.jsxs)("h2",{className:"text-xl font-semibold flex items-center",children:[(0,s.jsx)(Z.Z,{className:"h-5 w-5 mr-2"}),"Личные данные"]}),(0,s.jsx)(l.z,{variant:u?"secondary":"outline",size:"sm",onClick:()=>m(!u),children:u?"Отмена":"Редактировать"})]}),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(o._,{htmlFor:"username",children:"Имя пользователя"}),(0,s.jsx)(d.I,{id:"username",name:"username",value:e.username,onChange:x,disabled:!u})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(o._,{htmlFor:"email",children:"Email"}),(0,s.jsx)(d.I,{id:"email",name:"email",type:"email",value:e.email,onChange:x,disabled:!u})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(o._,{htmlFor:"preferredSpread",children:"Предпочитаемый расклад"}),(0,s.jsxs)(E.Ph,{disabled:!u,value:e.preferredSpread,onValueChange:e=>b("preferredSpread",e),children:[(0,s.jsx)(E.i4,{id:"preferredSpread",children:(0,s.jsx)(E.ki,{placeholder:"Выберите расклад"})}),(0,s.jsx)(E.Bw,{children:z.qL.map(e=>(0,s.jsx)(E.Ql,{value:e.id,children:e.name},e.id))})]})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)(I,{className:"h-4 w-4"}),(0,s.jsx)(o._,{htmlFor:"notifications",children:"Уведомления"})]}),(0,s.jsx)(_,{id:"notifications",checked:e.notifications,onCheckedChange:e=>h("notifications",e),disabled:!u})]}),u&&(0,s.jsx)(l.z,{className:"w-full mt-4",onClick:()=>{localStorage.setItem("tarotUserProfile",JSON.stringify(e)),m(!1),p({title:"Профиль сохранен",description:"Ваши настройки успешно обновлены."})},children:"Сохранить изменения"})]})]}),(0,s.jsxs)("div",{className:"bg-card rounded-lg border border-border p-6",children:[(0,s.jsx)("h2",{className:"text-xl font-semibold mb-6",children:"Статистика"}),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-muted-foreground text-sm",children:"Всего гаданий"}),(0,s.jsx)("p",{className:"text-3xl font-bold text-secondary",children:a.length})]}),a.length>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-muted-foreground text-sm",children:"Последнее гадание"}),(0,s.jsx)("p",{className:"font-medium",children:new Date(Math.max(...a.map(e=>new Date(e.date).getTime()))).toLocaleDateString("ru-RU")})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-muted-foreground text-sm",children:"Любимый расклад"}),(0,s.jsx)("p",{className:"font-medium",children:(e=>{let t=z.qL.find(t=>t.id===e);return t?t.name:e})(Object.entries(a.reduce((e,t)=>(e[t.spreadType]=(e[t.spreadType]||0)+1,e),{})).sort((e,t)=>t[1]-e[1])[0][0])})]})]}),(0,s.jsxs)("div",{className:"pt-4 space-y-2",children:[(0,s.jsxs)(l.z,{variant:"outline",size:"sm",className:"w-full",onClick:()=>{try{let e=[["Дата","Тип расклада","Вопрос","Карты"]];a.forEach(t=>{var a;let s=(null===(a=z.qL.find(e=>e.id===t.spreadType))||void 0===a?void 0:a.name)||t.spreadType,r=t.cards.map(e=>e.card.nameRu).join(", "),n=[new Date(t.date).toLocaleString("ru-RU"),s,t.question,r];e.push(n)});let t=e.map(e=>e.map(e=>'"'.concat(e,'"')).join(",")).join("\n"),s=new Blob([t],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(s),n=document.createElement("a");n.setAttribute("href",r),n.setAttribute("download","tarot-readings.csv"),n.style.visibility="hidden",document.body.appendChild(n),n.click(),document.body.removeChild(n),p({title:"Экспорт завершен",description:"История гаданий успешно экспортирована в CSV."})}catch(e){p({title:"Ошибка экспорта",description:"Не удалось экспортировать историю гаданий.",variant:"destructive"})}},disabled:0===a.length,children:[(0,s.jsx)(O,{className:"h-4 w-4 mr-2"}),"Экспорт истории"]}),(0,s.jsxs)(l.z,{variant:"outline",size:"sm",className:"w-full text-destructive hover:text-destructive",onClick:()=>{confirm("Вы уверены, что хотите удалить всю историю гаданий? Это действие нельзя отменить.")&&(localStorage.removeItem("tarotReadings"),c([]),p({title:"История очищена",description:"Вся история гаданий была удалена."}))},disabled:0===a.length,children:[(0,s.jsx)(P,{className:"h-4 w-4 mr-2"}),"Очистить историю"]})]})]})]})]})]})]})}},1908:function(e,t,a){"use strict";a.d(t,{I:function(){return i}});var s=a(7437),r=a(2265),n=a(9311);let i=r.forwardRef((e,t)=>{let{className:a,type:r,...i}=e;return(0,s.jsx)("input",{type:r,className:(0,n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...i})});i.displayName="Input"},9583:function(e,t,a){"use strict";a.d(t,{_:function(){return c}});var s=a(7437),r=a(2265),n=a(9381),i=r.forwardRef((e,t)=>(0,s.jsx)(n.WV.label,{...e,ref:t,onMouseDown:t=>{let a=t.target;a.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));i.displayName="Label";var l=a(9213),d=a(9311);let o=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(i,{ref:t,className:(0,d.cn)(o(),a),...r})});c.displayName=i.displayName},8094:function(e,t,a){"use strict";a.d(t,{Bw:function(){return x},Ph:function(){return c},Ql:function(){return b},i4:function(){return m},ki:function(){return u}});var s=a(7437),r=a(2265),n=a(6588),i=a(3523),l=a(9224),d=a(2442),o=a(9311);let c=n.fC;n.ZA;let u=n.B4,m=r.forwardRef((e,t)=>{let{className:a,children:r,...l}=e;return(0,s.jsxs)(n.xz,{ref:t,className:(0,o.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 select-trigger",a),...l,children:[r,(0,s.jsx)(n.JO,{asChild:!0,children:(0,s.jsx)(i.Z,{className:"h-4 w-4 opacity-50"})})]})});m.displayName=n.xz.displayName;let f=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.u_,{ref:t,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",a),...r,children:(0,s.jsx)(l.Z,{className:"h-4 w-4"})})});f.displayName=n.u_.displayName;let p=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.$G,{ref:t,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",a),...r,children:(0,s.jsx)(i.Z,{className:"h-4 w-4"})})});p.displayName=n.$G.displayName;let x=r.forwardRef((e,t)=>{let{className:a,children:r,position:i="popper",...l}=e;return(0,s.jsx)(n.h_,{children:(0,s.jsxs)(n.VY,{ref:t,className:(0,o.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===i&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",a),position:i,...l,children:[(0,s.jsx)(f,{}),(0,s.jsx)(n.l_,{className:(0,o.cn)("p-1","popper"===i&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r}),(0,s.jsx)(p,{})]})})});x.displayName=n.VY.displayName;let h=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.__,{ref:t,className:(0,o.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",a),...r})});h.displayName=n.__.displayName;let b=r.forwardRef((e,t)=>{let{className:a,children:r,...i}=e;return(0,s.jsxs)(n.ck,{ref:t,className:(0,o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...i,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(n.wU,{children:(0,s.jsx)(d.Z,{className:"h-4 w-4"})})}),(0,s.jsx)(n.eT,{children:r})]})});b.displayName=n.ck.displayName;let g=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.Z0,{ref:t,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",a),...r})});g.displayName=n.Z0.displayName},2621:function(e,t,a){"use strict";a.d(t,{p:function(){return r}});var s=a(2265);function r(){let[e,t]=(0,s.useState)([]),a=(0,s.useCallback)(e=>{let{title:a,description:s,variant:r="default",duration:n=5e3}=e,i=Math.random().toString(36).substring(2,9),l={id:i,title:a,description:s,variant:r,duration:n};return t(e=>[...e,l]),setTimeout(()=>{t(e=>e.filter(e=>e.id!==i))},n),i},[]),r=(0,s.useCallback)(e=>{t(t=>t.filter(t=>t.id!==e))},[]);return{toast:a,dismiss:r,toasts:e}}}},function(e){e.O(0,[395,284,863,282,971,864,744],function(){return e(e.s=9691)}),_N_E=e.O()}]);
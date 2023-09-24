import{k as ot,l as ut,T as ct,m as vt,o as N,f as U,b as g,t as et,u as S,g as st,c as dt,w as Z,a as A,d as rt,e as lt,i as ft,p as ht,F as it,Z as yt,q as Mt}from"./app-9b5050ba.js";import{_ as wt,a as xt,b as _t}from"./AuthenticatedLayout-53227024.js";import{_ as mt}from"./InputError-d4590dab.js";import{P as $t}from"./PrimaryButton-90eb6f03.js";import"./ApplicationLogo-6b231334.js";import"./_plugin-vue_export-helper-c27b6911.js";var gt={exports:{}};(function(M,C){(function(h,l){M.exports=l()})(ot,function(){var h=1e3,l=6e4,p=36e5,f="millisecond",w="second",Y="minute",j="hour",c="day",b="week",v="month",E="quarter",O="year",T="date",L="Invalid Date",J=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,P=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,q={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var r=["th","st","nd","rd"],t=s%100;return"["+s+(r[(t-20)%10]||r[t]||r[0])+"]"}},G=function(s,r,t){var n=String(s);return!n||n.length>=r?s:""+Array(r+1-n.length).join(t)+s},B={s:G,z:function(s){var r=-s.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),e=t%60;return(r<=0?"+":"-")+G(n,2,"0")+":"+G(e,2,"0")},m:function s(r,t){if(r.date()<t.date())return-s(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),e=r.clone().add(n,v),i=t-e<0,a=r.clone().add(n+(i?-1:1),v);return+(-(n+(t-e)/(i?e-a:a-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:v,y:O,w:b,d:c,D:T,h:j,m:Y,s:w,ms:f,Q:E}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},x="en",_={};_[x]=q;var F="$isDayjsObject",W=function(s){return s instanceof X||!(!s||!s[F])},R=function s(r,t,n){var e;if(!r)return x;if(typeof r=="string"){var i=r.toLowerCase();_[i]&&(e=i),t&&(_[i]=t,e=i);var a=r.split("-");if(!e&&a.length>1)return s(a[0])}else{var u=r.name;_[u]=r,e=u}return!n&&e&&(x=e),e||!n&&x},m=function(s,r){if(W(s))return s.clone();var t=typeof r=="object"?r:{};return t.date=s,t.args=arguments,new X(t)},o=B;o.l=R,o.i=W,o.w=function(s,r){return m(s,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var X=function(){function s(t){this.$L=R(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[F]=!0}var r=s.prototype;return r.parse=function(t){this.$d=function(n){var e=n.date,i=n.utc;if(e===null)return new Date(NaN);if(o.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var a=e.match(J);if(a){var u=a[2]-1||0,d=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],u,a[3]||1,a[4]||0,a[5]||0,a[6]||0,d)):new Date(a[1],u,a[3]||1,a[4]||0,a[5]||0,a[6]||0,d)}}return new Date(e)}(t),this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return o},r.isValid=function(){return this.$d.toString()!==L},r.isSame=function(t,n){var e=m(t);return this.startOf(n)<=e&&e<=this.endOf(n)},r.isAfter=function(t,n){return m(t)<this.startOf(n)},r.isBefore=function(t,n){return this.endOf(n)<m(t)},r.$g=function(t,n,e){return o.u(t)?this[n]:this.set(e,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,n){var e=this,i=!!o.u(n)||n,a=o.p(t),u=function(z,D){var H=o.w(e.$u?Date.UTC(e.$y,D,z):new Date(e.$y,D,z),e);return i?H:H.endOf(c)},d=function(z,D){return o.w(e.toDate()[z].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(D)),e)},$=this.$W,y=this.$M,k=this.$D,I="set"+(this.$u?"UTC":"");switch(a){case O:return i?u(1,0):u(31,11);case v:return i?u(1,y):u(0,y+1);case b:var V=this.$locale().weekStart||0,Q=($<V?$+7:$)-V;return u(i?k-Q:k+(6-Q),y);case c:case T:return d(I+"Hours",0);case j:return d(I+"Minutes",1);case Y:return d(I+"Seconds",2);case w:return d(I+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,n){var e,i=o.p(t),a="set"+(this.$u?"UTC":""),u=(e={},e[c]=a+"Date",e[T]=a+"Date",e[v]=a+"Month",e[O]=a+"FullYear",e[j]=a+"Hours",e[Y]=a+"Minutes",e[w]=a+"Seconds",e[f]=a+"Milliseconds",e)[i],d=i===c?this.$D+(n-this.$W):n;if(i===v||i===O){var $=this.clone().set(T,1);$.$d[u](d),$.init(),this.$d=$.set(T,Math.min(this.$D,$.daysInMonth())).$d}else u&&this.$d[u](d);return this.init(),this},r.set=function(t,n){return this.clone().$set(t,n)},r.get=function(t){return this[o.p(t)]()},r.add=function(t,n){var e,i=this;t=Number(t);var a=o.p(n),u=function(y){var k=m(i);return o.w(k.date(k.date()+Math.round(y*t)),i)};if(a===v)return this.set(v,this.$M+t);if(a===O)return this.set(O,this.$y+t);if(a===c)return u(1);if(a===b)return u(7);var d=(e={},e[Y]=l,e[j]=p,e[w]=h,e)[a]||1,$=this.$d.getTime()+t*d;return o.w($,this)},r.subtract=function(t,n){return this.add(-1*t,n)},r.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||L;var i=t||"YYYY-MM-DDTHH:mm:ssZ",a=o.z(this),u=this.$H,d=this.$m,$=this.$M,y=e.weekdays,k=e.months,I=e.meridiem,V=function(D,H,K,tt){return D&&(D[H]||D(n,i))||K[H].slice(0,tt)},Q=function(D){return o.s(u%12||12,D,"0")},z=I||function(D,H,K){var tt=D<12?"AM":"PM";return K?tt.toLowerCase():tt};return i.replace(P,function(D,H){return H||function(K){switch(K){case"YY":return String(n.$y).slice(-2);case"YYYY":return o.s(n.$y,4,"0");case"M":return $+1;case"MM":return o.s($+1,2,"0");case"MMM":return V(e.monthsShort,$,k,3);case"MMMM":return V(k,$);case"D":return n.$D;case"DD":return o.s(n.$D,2,"0");case"d":return String(n.$W);case"dd":return V(e.weekdaysMin,n.$W,y,2);case"ddd":return V(e.weekdaysShort,n.$W,y,3);case"dddd":return y[n.$W];case"H":return String(u);case"HH":return o.s(u,2,"0");case"h":return Q(1);case"hh":return Q(2);case"a":return z(u,d,!0);case"A":return z(u,d,!1);case"m":return String(d);case"mm":return o.s(d,2,"0");case"s":return String(n.$s);case"ss":return o.s(n.$s,2,"0");case"SSS":return o.s(n.$ms,3,"0");case"Z":return a}return null}(D)||a.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,n,e){var i,a=this,u=o.p(n),d=m(t),$=(d.utcOffset()-this.utcOffset())*l,y=this-d,k=function(){return o.m(a,d)};switch(u){case O:i=k()/12;break;case v:i=k();break;case E:i=k()/3;break;case b:i=(y-$)/6048e5;break;case c:i=(y-$)/864e5;break;case j:i=y/p;break;case Y:i=y/l;break;case w:i=y/h;break;default:i=y}return e?i:o.a(i)},r.daysInMonth=function(){return this.endOf(v).$D},r.$locale=function(){return _[this.$L]},r.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),i=R(t,n,!0);return i&&(e.$L=i),e},r.clone=function(){return o.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},s}(),nt=X.prototype;return m.prototype=nt,[["$ms",f],["$s",w],["$m",Y],["$H",j],["$W",c],["$M",v],["$y",O],["$D",T]].forEach(function(s){nt[s[1]]=function(r){return this.$g(r,s[0],s[1])}}),m.extend=function(s,r){return s.$i||(s(r,X,m),s.$i=!0),m},m.locale=R,m.isDayjs=W,m.unix=function(s){return m(1e3*s)},m.en=_[x],m.Ls=_,m.p={},m})})(gt);var Dt=gt.exports;const at=ut(Dt);var pt={exports:{}};(function(M,C){(function(h,l){M.exports=l()})(ot,function(){return function(h,l,p){h=h||{};var f=l.prototype,w={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Y(c,b,v,E){return f.fromToBase(c,b,v,E)}p.en.relativeTime=w,f.fromToBase=function(c,b,v,E,O){for(var T,L,J,P=v.$locale().relativeTime||w,q=h.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],G=q.length,B=0;B<G;B+=1){var x=q[B];x.d&&(T=E?p(c).diff(v,x.d,!0):v.diff(c,x.d,!0));var _=(h.rounding||Math.round)(Math.abs(T));if(J=T>0,_<=x.r||!x.r){_<=1&&B>0&&(x=q[B-1]);var F=P[x.l];O&&(_=O(""+_)),L=typeof F=="string"?F.replace("%d",_):F(_,b,x.l,J);break}}if(b)return L;var W=J?P.future:P.past;return typeof W=="function"?W(L):W.replace("%s",L)},f.to=function(c,b){return Y(c,b,this,!0)},f.from=function(c,b){return Y(c,b,this)};var j=function(c){return c.$u?p.utc():p()};f.toNow=function(c){return this.to(j(this),c)},f.fromNow=function(c){return this.from(j(this),c)}}})})(pt);var bt=pt.exports;const St=ut(bt),kt={class:"p-6 flex space-x-2"},Ot=g("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-gray-600 -scale-x-100",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})],-1),Tt={class:"flex-1"},Ct={class:"flex justify-between items-center"},Yt={class:"text-gray-800"},jt={class:"ml-2 text-sm text-gray-600"},Ht={key:0,class:"text-sm text-gray-600"},Nt=g("button",null,[g("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor"},[g("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})])],-1),Lt={class:"space-x-2"},Bt={key:1,class:"mt-4 text-lg text-gray-900"},Wt={__name:"Chirp",props:["chirp"],setup(M){const C=M;at.extend(St);const h=ct({message:C.chirp.message}),l=vt(!1);return(p,f)=>(N(),U("div",kt,[Ot,g("div",Tt,[g("div",Ct,[g("div",null,[g("span",Yt,et(M.chirp.user.name),1),g("small",jt,et(S(at)(M.chirp.created_at).fromNow()),1),M.chirp.created_at!==M.chirp.updated_at?(N(),U("small",Ht," · edited")):st("",!0)]),M.chirp.user.id===p.$page.props.auth.user.id?(N(),dt(xt,{key:0},{trigger:Z(()=>[Nt]),content:Z(()=>[g("button",{class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out",onClick:f[0]||(f[0]=w=>l.value=!0)}," Edit "),A(wt,{as:"button",href:p.route("chirps.destroy",M.chirp.id),method:"delete"},{default:Z(()=>[rt(" Delete ")]),_:1},8,["href"])]),_:1})):st("",!0)]),l.value?(N(),U("form",{key:0,onSubmit:f[3]||(f[3]=lt(w=>S(h).put(p.route("chirps.update",M.chirp.id),{onSuccess:()=>l.value=!1}),["prevent"]))},[ft(g("textarea",{"onUpdate:modelValue":f[1]||(f[1]=w=>S(h).message=w),class:"mt-4 w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"},null,512),[[ht,S(h).message]]),A(mt,{message:S(h).errors.message,class:"mt-2"},null,8,["message"]),g("div",Lt,[A($t,{class:"mt-4"},{default:Z(()=>[rt("Save")]),_:1}),g("button",{class:"mt-4",onClick:f[2]||(f[2]=w=>{l.value=!1,S(h).reset(),S(h).clearErrors()})},"Cancel")])],32)):(N(),U("p",Bt,et(M.chirp.message),1))])]))}},Vt={class:"max-w-2xl mx-auto p-4 sm:p-6 lg:p-8"},zt={class:"mt-6 bg-white shadow-sm rounded-lg divide-y"},Jt={__name:"Index",props:["chirps"],setup(M){const C=ct({message:""});return(h,l)=>(N(),U(it,null,[A(S(yt),{title:"Chirps"}),A(_t,null,{default:Z(()=>[g("div",Vt,[g("form",{onSubmit:l[1]||(l[1]=lt(p=>S(C).post(h.route("chirps.store"),{onSuccess:()=>S(C).reset()}),["prevent"]))},[ft(g("textarea",{"onUpdate:modelValue":l[0]||(l[0]=p=>S(C).message=p),placeholder:"What's on your mind?",class:"block w-full border-gray-300 focus:border-indigo focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"},`\r
                `,512),[[ht,S(C).message]]),A(mt,{message:S(C).errors.message,class:"mt-2"},null,8,["message"]),A($t,{class:"mt-4"},{default:Z(()=>[rt("Chirps")]),_:1})],32),g("div",zt,[(N(!0),U(it,null,Mt(M.chirps,p=>(N(),dt(Wt,{key:p.id,chirp:p},null,8,["chirp"]))),128))])])]),_:1})],64))}};export{Jt as default};

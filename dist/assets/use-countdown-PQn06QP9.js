import{r as a}from"./index-AyhP95hO.js";function m(s){const[t,n]=a.useState({days:"00",hours:"00",minutes:"00",seconds:"00"});a.useEffect(()=>{const c=setInterval(()=>r(),1e3);return()=>clearInterval(c)},[]);const r=()=>{const c=s,o=new Date,e=c.valueOf()-o.valueOf(),u=Math.floor(e/(1e3*60*60*24)),l=`0${Math.floor(e%(1e3*60*60*24)/(1e3*60*60))}`.slice(-2),d=`0${Math.floor(e%(1e3*60*60)/(1e3*60))}`.slice(-2),i=`0${Math.floor(e%(1e3*60)/1e3)}`.slice(-2);n({days:u.toString()||"000",hours:l||"000",minutes:d||"000",seconds:i||"000"})};return{days:t.days,hours:t.hours,minutes:t.minutes,seconds:t.seconds}}function g(s){const[t,n]=a.useState(s),r=a.useCallback(()=>{let o=t;const e=setInterval(()=>{o-=1,o===0?(clearInterval(e),n(s)):n(o)},1e3)},[s,t]);return{counting:s>t,countdown:t,setCountdown:n,startCountdown:r}}export{m as a,g as u};

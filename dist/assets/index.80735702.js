var p=Object.defineProperty;var m=(i,t,l)=>t in i?p(i,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[t]=l;var f=(i,t,l)=>(m(i,typeof t!="symbol"?t+"":t,l),l);const v=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}};v();class y{constructor(t){f(this,"salary",0);this.salary=t}sfs(){return this.salary*.0304}afp(){return this.salary*.0287}isr(){let l=(this.salary-(this.afp()+this.sfs()))*12,n,e;return l>=416220.01&&l<=624329?e=(l-416220.01)*.15/12:l>=624329.01&&l<=867123?(n=(l-624329.01)*.2,e=(n+31216)/12):l>=867123.01?(n=(l-867123.01)*.25,e=(n+79776)/12):e=0,e}}const b=document.querySelector("#app");b.innerHTML=`
  <h1 id="title">
    Dedu <i class="fa fa-calculator"/></i>
  </h1>

  <form id="form-container">
    <label id="salary-label">Your Salary</label>
    <input id="input"
      type="text" 
      placeholder="RD$22,000" 
      autofocus
      required
    />
    <i id="thrash-icon" class="fa fa-trash-o fa-lg" aria-hidden="true"></i>
    <button id="calc-btn" type="submit">Calculate</button>
  </form>

  <div id="deductions-container"></div>

  <i id="gear-icon" class="fa fa-cog fa-lg"></i>
`;const d=document.getElementById("input"),c=document.getElementById("thrash-icon"),u=document.getElementById("calc-btn"),r=document.getElementById("deductions-container"),a=document.getElementById("gear-icon");u==null||u.addEventListener("click",i=>{i.preventDefault();const t=new y(parseFloat(d==null?void 0:d.value));r&&(r.innerHTML=`
      <label>
        SFS: <span class="result">${t.sfs().toFixed(2)}</span>
      </label>
      <label>
        AFP: <span class="result">${t.afp().toFixed(2)}</span>
      </label>
      <label>
        ISR: <span class="result">${t.isr().toFixed(2)}</span>
      </label>
    `)});a==null||a.addEventListener("mouseenter",()=>{a.innerHTML=`
    <div id="details-container"> 
      <div class="section">
        <label class="deduction">Seguro Familiar de Salud (SFS)</label>    
        [salary] x 3.04%
      </div>
        <div class="section">
        <label class="deduction">Administradora de Fondos de Pensiones (AFP)</label>    
        [salary] x 2.87%
      </div>
      <div class="section">
        <label class="deduction">Impuesto Sobre la Renta (ISR)</label>    
          <div id="isr-details">
            <div>
              <label class="title">Rango</label>
              <div>
                <p>\u2265 RD$416.220,00</p>	
                <p>RD$416,220.01 - RD$624,329.00</p>
                <p>RD$624,329.01 - RD$867,123.00</p>
                <p>\u2264 RD$867,123.01</p>
              </div>
            </div>
            <div>
              <label class="title">Tasa</label>
              <div>
                <p>Exento</p>
                <p>15% del excedente de RD$416.220,01</p>
                <p>RD$31.216,00 m\xE1s 20% del excedente de RD$624.329,01</p>
                <p>RD$79.776 m\xE1s el 25% del excedente de RD$867.123,01</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  `});c==null||c.addEventListener("click",i=>{i.preventDefault(),d&&(d.value=""),r&&(r.innerHTML="")});a==null||a.addEventListener("mouseleave",()=>a.innerHTML="");

import { Deductions } from "./deductions";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1 id="title">
    Dedu <i class="fa fa-calculator"/></i>
  </h1>

  <form id="form-container">
    <label id="salary-label">Your Salary</label>
    <input id="input"
      type="text" 
      placeholder="RD$22,000" 
      autofocus
    />
    <i id="thrash-icon" class="fa fa-trash-o fa-lg" aria-hidden="true"></i>
    <button id="calc-btn" type="submit">Calculate</button>
  </form>

  <div id="deductions-container"></div>

  <i id="gear-icon" class="fa fa-cog fa-lg"></i>
`;

const input = document.getElementById("input") as HTMLInputElement;
const trashCan = document.getElementById("thrash-icon");
const calcBtn = document.getElementById("calc-btn");
const deductionsContainer = document.getElementById("deductions-container");
const gearIcon = document.getElementById("gear-icon");

trashCan?.addEventListener("click", (evt: MouseEvent) => {
  evt.preventDefault();
  if (input) input.value = "";
  if (deductionsContainer) deductionsContainer.innerHTML = "";
});

calcBtn?.addEventListener("click", (evt: MouseEvent) => {
  evt.preventDefault();
  const deductions = new Deductions(parseFloat(input.value));

  if (deductionsContainer) {
    deductionsContainer.innerHTML = `
      <label>
        SFS: <span class="result">${deductions.sfs().toFixed(2)}</span>
      </label>
      <label>
        AFP: <span class="result">${deductions.afp().toFixed(2)}</span>
      </label>
      <label>
        ISR: <span class="result">${deductions.isr().toFixed(2)}</span>
      </label>
      <label>
        Total: <span class="result">${deductions.deductedSalary()}</span>
      <label>
    `;
  }
});

gearIcon?.addEventListener("mouseenter", () => {
  gearIcon.innerHTML = `
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
                <p>≥ RD$416.220,00</p>	
                <p>RD$416,220.01 - RD$624,329.00</p>
                <p>RD$624,329.01 - RD$867,123.00</p>
                <p>≤ RD$867,123.01</p>
              </div>
            </div>
            <div>
              <label class="title">Tasa</label>
              <div>
                <p>Exento</p>
                <p>15% del excedente de RD$416.220,01</p>
                <p>RD$31.216,00 más 20% del excedente de RD$624.329,01</p>
                <p>RD$79.776 más el 25% del excedente de RD$867.123,01</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  `;
});

gearIcon?.addEventListener("mouseleave", () => gearIcon.innerHTML = "");


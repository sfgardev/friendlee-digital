import { useState } from "react";
import RangeInput from "./components/RangeInput";

function App() {
  return (
    <main>
      <form className="calculator">
        <h1 className="calculator__title">
          Рассчитайте стоимость автомобиля в лизинг
        </h1>
        <div className="calculator__credit-info">
          <RangeInput
            id="credit"
            label="Желаемая сумма кредита"
            value={3_000_000}
            type="currency"
            min={1_500_000}
            max={10_000_000}
          />
          <RangeInput
            id="credit"
            label="Первоначальный взнос"
            value={420000}
            type="percentage"
            min={0}
            max={100}
          />
          <RangeInput
            id="credit"
            label="Срок лизинга"
            value={60}
            type="period"
            min={0}
            max={100}
          />
        </div>
        <div className="calculator__footer">
          <div className="calculator__total-info">
            <p className="calculator__amount-title">Сумма договора лизинга</p>
            <p className="calculator__amount-value">4 467 313 ₽</p>
          </div>
          <div className="calculator__total-info">
            <p className="calculator__amount-title">Ежемесячный платеж от</p>
            <p className="calculator__amount-value">114 455 ₽</p>
          </div>
          <button className="button">
            Оставить заявку
          </button>
        </div>
      </form>
    </main>
  );
}

export default App;

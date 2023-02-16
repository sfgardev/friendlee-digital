import { ChangeEvent, useEffect, useState } from "react";
import { formatCurrency } from "../utils";
import "./RangeInput.scss";

type Props = {
  id: string;
  label: string;
  value: number;
  type: "currency" | "percentage" | "period";
  min: number;
  max: number;
};

function getNormalizedInputValue(rangeValue: number, min: number, max: number) {
  const result = (max / 100) * rangeValue;

  if (result < min) return min;

  return result;
}

export default function RangeInput({
  id,
  label,
  value,
  type,
  min,
  max,
}: Props) {
  const [rangeValue, setRangeValue] = useState(50);

  return (
    <div className="calculator__input-group">
      <label className="calculator__label" htmlFor={id}>
        {label}
      </label>
      <div className="calculator__inputs">
        <input
          id={id}
          type="text"
          onChange={() => {}}
          value={formatCurrency(value)}
        />
        <div className="progress-bar">
          <input
            onChange={(e) => setRangeValue(e.target.valueAsNumber)}
            id={id}
            type="range"
            value={rangeValue}
          />
          <div
            className="range-progress"
            style={{ width: rangeValue + "%" }}
          ></div>
        </div>
        {type === "currency" && <p>₽</p>}
        {type === "percentage" && <p className="percentage">10%</p>}
        {type === "period" && <p>мес.</p>}
      </div>
    </div>
  );
}

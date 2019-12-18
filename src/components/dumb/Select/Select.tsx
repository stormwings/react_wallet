import React, { useRef, FunctionComponent } from 'react';
import './Select.scss';
import arrowdown from './../../../assets/arrow-down-sign-to-navigate.svg';

interface IProps {
  icon: string;
  items: Array<any>;
  onSelect: Function;
}

const Select: FunctionComponent<IProps> = props => {
  const $select = useRef(null) as any;
  const { icon, items, onSelect } = props;

  const selectItem = () => {
    const newValue = $select.current.value;
    onSelect(newValue);
  };

  return (
    <div className="select--container">
      <div className="image--container">
        <img className="image" src={icon} alt="logo" />
      </div>
      <div className="select-style">
        <select ref={$select} className="currency" onChange={() => selectItem()}>
          {items.map((item, i) => (
            <option key={i} value={item.value}>
              Sell {item.title}
            </option>
          ))}
        </select>
      </div>
      <div className="icon--container">
        <img src={arrowdown} className="image" onClick={() => $select.current.click()} />
      </div>
    </div>
  );
};

export default Select;

import { useState } from 'react';

import './Form.scss';
import { Input } from '../Input/Input';
import { Radio } from '../Radio/Radio';
import { Checkbox } from '../Checkbox/Checkbox';

const defaultInputValues = {
  name: '',
  symbol: '',
  maxTokenSupply: ''
};

export const Form = () => {
  const [inputValue, setInputValue] = useState(defaultInputValues);

  const handleInputChange = ({ target: { value, name } }) => {
    setInputValue(state => ({
      ...state,
      [name]: value,
    }))
  };

  console.log(inputValue)
  return (
    <div className="main">
    <h1 className="main__title">
      Token
    </h1>
    <p className="main__subtitle">
      Create your own crypto token
    </p>
    <form className="main__form">
      <label className="main__form-label">
        <p className="main__form-text-select">
          Company
        </p>
        <select className="main__form-select">
          <option value="1">
            My company1
          </option>
          <option value="2">
            My company2
          </option>
          <option value="3">
            My company3
          </option>
          <option value="4">
            My company4
          </option>
        </select>
      </label>
      <Input
        type="text"
        labelText="Token name"
        inputValue={inputValue.name}
        onChange={handleInputChange}
        name="name"
        placeholder="Write your token name"
      />
      <Input
        type="text"
        labelText="Symbol"
        inputValue={inputValue.symbol}
        onChange={handleInputChange}
        name="symbol"
        placeholder="Specify a symbol of your tokens"
      />
      <Input
        type="number"
        labelText="Maximum token supply"
        inputValue={inputValue.maxTokenSupply}
        onChange={handleInputChange}
        name="maxTokenSupply"
        placeholder="Specify maximum token supply"
      />
      <label className="main__form-label">
        <p className="main__form-text-radio">
          Blockchain
        </p>
        <Radio
          id="ethereum"
          value="Ethereum"
          radioText="Ethereum"
        />
        <Radio
          id="bsc"
          value="Binance Smart Chain"
          radioText="Binance Smart Chain"
        />
      </label>
      <Checkbox
        labelText="Supply"
        checkboxText="Enabled"
      />
      <button className="main__form-button">
        Save Draft
      </button>
    </form>
    </div>
  );
};

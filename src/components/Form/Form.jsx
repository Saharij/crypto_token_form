import { useState } from 'react';

import './Form.scss';
import { Input } from '../Input/Input';
import { Radio } from '../Radio/Radio';
import { Select } from '../Select/Select';
import { Checkbox } from '../Checkbox/Checkbox';
import { addCryptoToken } from '../../redux/store';
import { useDispatch } from 'react-redux';

const initialToken = {
  company: 'My company1',
  name: '',
  symbol: '',
  maxTokenSupply: '',
  blockchain: 'Ethereum',
  supply: false,
};

export const Form = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [token, setToken] = useState(initialToken);
  const isSubmitDisabled = Object.values(token).some(item => (
    typeof item === "string" ? !item.trim() : !item
  ));

  const handleChangeSelect = ({ target: { value } }) => {
    setToken(state => ({
      ...state,
      company: value,
    }));
  };

  const handleInputChange = ({ target: { value, name } }) => {
    setToken(state => ({
      ...state,
      [name]: name === 'symbol' ? value.toUpperCase() : value,
    }))
  };

  const handleBlockchainChange = (value) => {
    setToken(state => ({
      ...state,
      blockchain: value,
    }));
  };

  const handleSupplyChange = () => {
    setToken(state => ({
      ...state,
      supply: !state.supply,
    }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isSubmitDisabled) {
      dispatch(addCryptoToken(token));
      setError('');
      setToken(initialToken);
    } else {
      setError('*This field is required')
    }
  };

  console.log(!isSubmitDisabled)

  console.log(token)

  return (
    <div className="main">
      <h1 className="main__title">
        Token
      </h1>
      <p className="main__subtitle">
        Create your own crypto token
      </p>
      <form
        className="main__form"
        onSubmit={handleSubmit}
      >
        <label className="main__form-label">
          <p className="main__form-text-select">
            Company
          </p>
          <Select
            value={token.company}
            onChange={handleChangeSelect}
          />
        </label>
        <div className="main__form-field">
          {!token.name && (
            <span className="main__form-error">
              {error}
            </span>
          )}
          <Input
            type="text"
            labelText="Token name"
            inputValue={token.name}
            onChange={handleInputChange}
            name="name"
            placeholder="Write your token name"
          />
        </div>
        <div className="main__form-field">
          {!token.symbol && (
            <span className="main__form-error">
              {error}
            </span>
          )}
          <Input
            type="text"
            labelText="Symbol"
            inputValue={token.symbol}
            onChange={handleInputChange}
            name="symbol"
            placeholder="Specify a symbol of your tokens"
          />
        </div>
        <div className="main__form-field">
          {!token.maxTokenSupply && (
            <span className="main__form-error">
              {error}
            </span>
          )}
          <Input
            type="number"
            labelText="Maximum token supply"
            inputValue={token.maxTokenSupply}
            onChange={handleInputChange}
            name="maxTokenSupply"
            placeholder="Specify maximum token supply"
          />
        </div>
        <label className="main__form-label">
          <p className="main__form-text-radio">
            Blockchain
          </p>
          <Radio
            id="Ethereum"
            value="Ethereum"
            onChange={handleBlockchainChange}
            radioText="Ethereum"
            checked={token.blockchain === "Ethereum"}
          />
          <Radio
            id="Binance Smart Chain"
            value="Binance Smart Chain"
            onChange={handleBlockchainChange}
            radioText="Binance Smart Chain"
            checked={token.blockchain === "Binance Smart Chain"}
          />
        </label>
        <div className="main__form-field">
          {!token.supply && (
            <span className="main__form-error main__form-error-checkbox">
              {error}
            </span>
          )}
          <Checkbox
            labelText="Supply"
            onChange={handleSupplyChange}
            checkboxText="Enabled"
            checked={token.supply}
          />
        </div>
        <button className="main__form-button">
          Save Draft
        </button>
      </form>
    </div>
  );
};

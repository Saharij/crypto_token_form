import './Form.scss';

export const Form = () => {
  return (
    <>
    <form className="form">
      <label>
        Company
        <select name="" id="">
          <option value="">My company</option>
        </select>
      </label>
      <label>
        Token name
        <input type="text" />
      </label>
      <label>
        Symbol
        <input type="text" />
      </label>
      <label>
        Maximum token supply
        <input type="" />
      </label>
      <label>
        Blockchain
        <label>
          <input
            type="radio"
            value="ethereum"
            name="blockhain"
            className="radio-button"
          />
          Ethereum
        </label>
        <label>
          <input
            type="radio"
            value="Binance Smart Chaim"
            name="blockhain"
          />
          Binance Smart Chain
        </label>
      </label>
      <label>
        Supply
        <input type="checkbox" />
        Enabled
      </label>
      <button className="form__button">
        Save Draft
      </button>
    </form>
    </>
  );
};

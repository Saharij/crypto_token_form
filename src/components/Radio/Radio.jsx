import './Radio.scss';

export const Radio = ({ value, radioText, id }) => {
  return (
    <>
      <input
        id={id}
        type="radio"
        name="blockchain"
        value={value}
        className="input"
      />
      <label
        htmlFor={id}
        className="radio"
      >
        {radioText}
      </label>
    </>
  )
}

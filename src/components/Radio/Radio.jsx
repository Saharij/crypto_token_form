import './Radio.scss';

export const Radio = ({ value, radioText, id, onChange, checked }) => {
  return (
    <>
      <input
        id={id}
        type="radio"
        name="blockchain"
        value={value}
        onChange={() => {
          onChange(value)
        }}
        className="input"
        checked={checked}
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

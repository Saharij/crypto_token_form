import './Input.scss';

export const Input = ({ type, labelText, inputValue, onChange, name, placeholder }) => {
  return (
    <label className="label">
      <p className="label-text">
        {labelText}
      </p>
      <input
        type={type}
        className="text-field"
        name={name}
        value={inputValue}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  )
}

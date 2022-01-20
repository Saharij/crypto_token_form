import './Checkbox.scss';

export const Checkbox = ({ checkboxText, labelText, onChange, checked }) => {
  return (
    <label className="checkbox">
      <p className="checkbox__title">
        {labelText}
      </p>
      <input
        type="checkbox"
        onChange={onChange}
        className="checkbox__input"
        checked={checked}
      />
      <span className="checkbox__fake"></span>
      <span className="checkbox__text">
        {checkboxText}
      </span>
    </label>
  )
}

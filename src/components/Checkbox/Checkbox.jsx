import './Checkbox.scss';

export const Checkbox = ({ checkboxText, labelText }) => {
  return (
    <label className="checkbox">
      <p className="checkbox__title">
        {labelText}
      </p>
      <input
        type="checkbox"
        className="checkbox__input"
        required
      />
      <span className="checkbox__fake"></span>
      <span className="checkbox__text">
        {checkboxText}
      </span>
    </label>
  )
}

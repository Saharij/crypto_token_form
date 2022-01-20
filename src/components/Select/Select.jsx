import './Select.scss';

const companies = ['My company1', 'My company2', 'My company3', 'My company4']

export const Select = ({ onChange, value }) => {
  return (
    <select
      className="select"
      value={value}
      onChange={onChange}
    >
      {companies.map(item => (
        <option
          value={item}
          key={item}
        >
          {item}
        </option>
      ))}
    </select>
  )
}

import './Dropdown.css'

const Dropdown = (props) => {

  const onChanged = (evento) => {
    props.onChange(evento.target.value);
  }

  return (
    <div className='dropdown'>
      <label>
        {props.label}
      </label>
      <select
        required={props.required}
        value={props.valor}
        onChange={onChanged}
      >
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default Dropdown;

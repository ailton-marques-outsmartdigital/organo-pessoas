import './InputText.css'

const InputText = (props) => {
  // const [valueField, setValueField] = useState('');

  const onChanged = (evento) => {
    // setValueField(evento.target.value);
    // console.log(valueField);
    props.onChange(evento.target.value);
  }

  return (
    <div className='input-text'>
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={onChanged}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default InputText;

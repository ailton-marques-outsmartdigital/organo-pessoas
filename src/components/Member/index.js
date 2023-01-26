import './Member.css'

const Member = (props) => {
  return (<div className='colaborador'>
    <div className='cabecalho' style={{ backgroundColor: props.BckgroundColor }}>
      <img src={props.Image} alt={props.Name} />
    </div>
    <div className='rodape'>
      <h4>{props.Name}</h4>
      <h5>{props.Job}</h5>
    </div>
  </div>)
}

export default Member;

import './Form.css'
import InputText from '../InputText/InputText';
import Dropdown from '../Dropdown/Dropdown';
import Buttom from '../Button/Buttom';
import { useState } from 'react';

const Form = (props) => {

  const [valueName, setValueName] = useState('');
  const [valueJob, setValueJob] = useState('');
  const [valueImage, setValueImage] = useState('');
  const [valueTeam, setValueTeam] = useState('');

  const teams =[
    'selecione um time',
    'Programação',
    'Front End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ];

  const onSave = (evento) => {
    evento.preventDefault();
    // console.log("Form submetido", valueName, valueJob, valueImage, valueTeam);
    props.onMemberAdded({
      Name: valueName,
      Job: valueJob,
      Image: valueImage,
      Team: valueTeam
    });
  }

  return (
    <section className='formulario'>
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <InputText
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={valueName}
          onChange={value => setValueName(value)}
        />
        <InputText
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={valueJob}
          onChange={value => setValueJob(value)}
        />
        <InputText
          label="Imagem"
          placeholder="informe o endereço da imagem"
          value={valueImage}
          onChange={value => setValueImage(value)}
        />
        <Dropdown
          obrigatorio={true}
          label="Time"
          itens={teams}
          value={valueTeam}
          onChange={value => setValueTeam(value)}
        />
        <Buttom>Criar card</Buttom>
      </form>
    </section>
  )
}

export default Form;

import './Form.css'
import InputText from '../InputText/InputText';

const Form = () => {
  return (
    <section className='formulario'>
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <InputText label="Nome" placeholder="Digite seu nome" />
        <InputText label="Cargo" placeholder="Digite seu cargo" />
        <InputText label="Imagem" placeholder="informe o endereço da imagem" />
      </form>
    </section>
  )
}

export default Form;

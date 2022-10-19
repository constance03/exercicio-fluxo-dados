import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {
  const onChangeTitulo = (event) => {
    props.setTitulo(event.target.value);
  };

  const onChangeImagem = (event) => {
    props.setImagem(event.target.value);
  };

  const onChangeDescricao = (event) => {
    props.setDescricao(event.target.value);
  };

  const enviarInfo = () => {
    const globalObject = {
      titulo: props.titulo,
      imagem: props.imagem,
      descricao: props.descricao
    };
    props.setObjeto2(globalObject);
  };

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" onChange={onChangeTitulo} />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" onChange={onChangeImagem} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" onChange={onChangeDescricao} />
        </StyledLabel>
        <SendButton onClick={enviarInfo}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;

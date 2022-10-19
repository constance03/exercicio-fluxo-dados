import { TitleHeader, Imagem, Nome } from "./styled";

export const Header = (props) => {
  console.log(props.objeto);

  return (
    <div>
      <TitleHeader>Insta4</TitleHeader>
      <Imagem src={props.objeto.foto} />
      <Nome>{props.objeto.nome}</Nome>
    </div>
  );
};

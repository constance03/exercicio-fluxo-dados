import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaPostagem/TelaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");
  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState("https://picsum.photos/536/354");
  const [descricao, setDescricao] = useState("");
  const [objeto, setObjeto] = useState("");
  const [objeto2, setObjeto2] = useState("");

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header objeto={objeto} />
          {pageFlow === 1 ? (
            <FormularioLogin
              setPageFlow={setPageFlow}
              nome={nome}
              foto={foto}
              setNome={setNome}
              setFoto={setFoto}
              setObjeto={setObjeto}
            />
          ) : (
            <FormularioPostagem
              titulo={titulo}
              imagem={imagem}
              descricao={descricao}
              setTitulo={setTitulo}
              setImagem={setImagem}
              setDescricao={setDescricao}
              setObjeto2={setObjeto2}
            />
          )}
        </aside>
        <TelaDaPostagem objeto2={objeto2} />
      </Container>
    </>
  );
}

export default App;

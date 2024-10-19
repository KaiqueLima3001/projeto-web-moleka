// Componentes
import HeaderFooter from './components/headerFooter';
import ButtonEstoque from './components/ButtonEstoque';
import GradeEstoque from './components/GradeEstoque';

// Styles / CSS
import './App.css'
import '/src/styles/ButtonEstoque.css';
import "/src/styles/GradeEstoque.css";
import '/src/styles/HeaderFooter.css';

function App() {

  return (
    <>
        <HeaderFooter/>
        <ButtonEstoque/>
        <GradeEstoque/>
    </>
  )
}

export default App

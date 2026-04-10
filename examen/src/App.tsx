import './App.css'
import {Card, Header, Search} from "./components/index";
import { useDigimon } from './hooks'


function App() {
  const {Digimon, setFiltro, setNivel} = useDigimon();
  return (
    <>
      <Header/>
      <Search alEscribir={setFiltro} alCambiarCat={setNivel}/>
        <div className="row m-4 justify-content-center">
          {
            Digimon.map((p)=>(
              <Card
              name={p.name}
              img={p.img}
              level={p.level}
              />
          ))
        }
        </div>
    </>
  )
}


export default App


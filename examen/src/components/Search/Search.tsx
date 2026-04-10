import "./Search.css";

interface Props{
    alEscribir:(valor:string)=>void
    alCambiarCat:(valor:string)=>void
}

const Search = ({alEscribir, alCambiarCat}:Props)=>{
  return (
    <div>
      <div className="search-container">
            <input type="text" className="search form-group m-3" placeholder="🔎 Buscar" onChange={(e)=>alEscribir(e.target.value)}/>
            <select onChange={(e)=>alCambiarCat(e.target.value)}>
                <option value="all">Todas</option>
                <option value="In Training">In Training</option>
                <option value="Rookie">Rookie</option>
                <option value="Champion">Champion</option>
                <option value="Ultimate">Ultimate</option>
                <option value="Mega">Mega</option>
            </select>
        <button className="search-button">Buscar</button>
      </div>
    </div>
  );
}

export default Search;
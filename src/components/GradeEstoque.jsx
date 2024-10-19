import "/src/styles/GradeEstoque.css"
import IconAlterar from "/src/assets/Vector.svg";
import IconExcluir from "/src/assets/Frame.svg";
import IconSearch from "/src/assets/search.svg";

function GradeEstoque() {
  return (
    <div className="div-grade-estoque">
       <table className="tabela-produtos">
    <thead>
      <tr>
        <th>Produto</th>
        <th>Empresa</th>
        <th>CNPJ</th>
        <th>Quantidade</th>
        <th>Excluir Estoque</th>
        <th>Editar Produto</th>
        <th>Excluir Produto</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Picolé de Uva</td>
        <td>Moleka</td>
        <td>02254787000819</td>
        <td>15</td>
        <td>-</td>
        <td><button className="editar-produto" onClick={() => console.log("CLICOU")}><img src={IconAlterar} alt="button-alterar"/></button></td>
        <td><button className="excluir-produto" onClick={() => console.log("CLICOU DNV")}><img src={IconExcluir} alt="button-remover"/></button></td>
      </tr>
      <tr>
        <td>Picolé de Maracujá</td>
        <td>Moleka</td>
        <td>02254787000819</td>
        <td>20</td>
        <td>-</td>
        <td><button className="editar-produto" ><img src={IconAlterar} alt="button-alterar"/></button></td>
        <td><button className="excluir-produto"><img src={IconExcluir} alt="button-remover"/></button></td>
      </tr>
      <tr>
        <td>Picolé de Morango</td>
        <td>Moleka</td>
        <td>02254787000819</td>
        <td>30</td>
        <td>-</td>
        <td><button className="editar-produto"><img src={IconAlterar} alt="button-alterar"/></button></td>
        <td><button className="excluir-produto"><img src={IconExcluir} alt="button-remover"/></button></td>
      </tr>
    </tbody>
  </table>
    </div>
  )
}

export default GradeEstoque;
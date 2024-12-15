import "./table.css";
function Table (){
    return(
        <div className="Table">
        <table>
           <tr>
            <th>name</th>
            <th>batch</th>
            <th>course</th>
           </tr>
           <tr>
           <td>divya</td>
           <td>14r</td>
           <td>b.tech</td>
          </tr>
          <tr>
            <td>raju</td>
            <td>13r</td>
            <td>b.tech</td>
          </tr>
        </table>
        </div>
    )
}
export default Table
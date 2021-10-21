import React from "react";
function Menu1() {
  let invoice_num = Date.now();
  return (
    <div className="menu1">
      <div style={{ fontSize: "25px", fontWeight: "bold" }}>IPhone6&#9416;</div>
      <div>
        <table id="menu12">
          <tr>
            <th className="MTH">DATE</th>
            <th className="MTH">INVOICE ID</th>
          </tr>
          <tr>
            <td className="td">{new Date().toLocaleDateString()}</td>
            <td className="td">{invoice_num}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Menu1;

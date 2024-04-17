import React from "react";
import "./Payment.css";

const Payments = () => {
  return (
    <div className="payments">
      <div className="dashHeader">PAYMENTS</div>
      <table>
        <thead>
          <th>id</th>
          <th>FROM</th>
          <th>AMOUNT</th>
          <th>DATE</th>
          <th>WORK TYPE</th>
          <th>WORK REFERENCE</th>
          <th>ACTION</th>
        </thead>
        
        <tbody>
        
          
        
          <tr>
            <td>1</td>
            <td>John Oloo</td>
            <td>50000</td>
            <td>1/2/2020</td>
            <td>WEB DESIGN</td>
            <td>SJZUX1</td>
            <td>VIEW</td>
          </tr>
          <tr>
            <td>1</td>
            <td>John Oloo</td>
            <td>50000</td>
            <td>1/2/2020</td>
            <td>WEB DESIGN</td>
            <td>SJZUX1</td>
            <td>VIEW</td>
          </tr>
          <tr>
            <td>1</td>
            <td>John Oloo</td>
            <td>50000</td>
            <td>1/2/2020</td>
            <td>WEB DESIGN</td>
            <td>SJZUX1</td>
            <td>VIEW</td>
          </tr>
          <tr>
            <td>1</td>
            <td>John Oloo</td>
            <td>50000</td>
            <td>1/2/2020</td>
            <td>WEB DESIGN</td>
            <td>SJZUX1</td>
            <td>VIEW</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Payments;

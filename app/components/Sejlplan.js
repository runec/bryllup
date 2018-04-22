import React from 'react';

import { Table } from 'react-bootstrap';

const Sejlplan = () => {
  return (
    <Table striped condensed bordered>
      <thead>
        <tr>
          <th colSpan="3" style={{textAlign: 'center'}}>Sejlpan</th>
        </tr>
        <tr>
          <th>Fra Kragenæs (fredag)</th>
          <th>Fra Kragenæs (lørdag)</th>
          <th>Fra Fejø (søndag)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>7.55</td><td>7.20</td><td>6.50</td>
        </tr>
        <tr>
          <td>9.00</td><td>8.30</td><td>8.00</td>
        </tr>
        <tr>
          <td>9.50</td><td>9.50</td><td>9.00</td>
        </tr>
        <tr>
          <td>10.50</td><td>10.40</td><td>10.10</td>
        </tr>
        <tr>
          <td>11.50</td><td>11.50</td><td>11.00</td>
        </tr>
        <tr>
          <td>12.50</td><td>12.40</td><td>12.10</td>
        </tr>
        <tr>
          <td>13.50</td><td>13.50</td><td>13.00</td>
        </tr>
        <tr>
          <td>14.50</td><td>14.40</td><td>14.20</td>
        </tr>
        <tr>
          <td>15.30</td><td> </td><td>15.20</td>
        </tr>
        <tr>
          <td>16.10</td><td>16.00</td><td>16.20</td>
        </tr>
        <tr>
          <td>17.00</td><td>16.40</td><td>17.00</td>
        </tr>
        <tr>
          <td>17.55</td><td>17.50</td><td>18.20</td>
        </tr>
        <tr>
          <td>19.05</td><td>19.00</td><td>19.20</td>
        </tr>
        <tr>
          <td>19.45</td><td>19.50</td><td> </td>
        </tr>
        <tr>
          <td>21.00</td><td>20.30</td><td>20.20</td>
        </tr>
        <tr>
          <td>22.00</td><td>22.00</td><td>21.45</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Sejlplan;

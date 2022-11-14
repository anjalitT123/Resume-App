import React from "react";

const DisplayAllProps = (props) => (
  <table>
    <tbody>
      {Array.from(Object.entries(props)).map(([key, name]) => (
        <tr key={key + Math.random()}>
          <td>{key}</td>
          <td>{name}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default DisplayAllProps;

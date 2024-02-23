import React from 'react';
import { User } from '../../Auth/type';

function TableRow({ user }: { user: User }): React.JSX.Element {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.score}</td>
    </tr>
  );
}
export default TableRow;

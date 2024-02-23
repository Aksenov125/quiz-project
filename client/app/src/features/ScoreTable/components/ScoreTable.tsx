import React, { useEffect } from 'react';
import TableRow from './TableRow';
import scoreFetch from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

function ScoreTable(): React.JSX.Element {
  const users = useSelector((store: RootState) => store.scoreState.users);
  const dispatch = useDispatch();

  useEffect(() => {
    scoreFetch()
      .then((data) => dispatch({ type: 'score/init', payload: data }))
      .catch(console.log);
  }, []);

  return (
    <>
      <h3 className="tableScore__title">ТОП-10</h3>
      <table className="tableScore">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <TableRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ScoreTable;

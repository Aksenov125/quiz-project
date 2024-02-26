import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableRow from './TableRow';
import scoreFetch from '../api';
import type { RootState } from '../../../store/store';
import './scoreTable.css';

function ScoreTable() {
  const users = useSelector((store: RootState) => store.scoreState.users);
  const dispatch = useDispatch();

  useEffect(() => {
    scoreFetch()
      .then((data) => dispatch({ type: 'score/initt', payload: data }))
      .catch(console.log);
  }, []);

  return (
    <>
      <h3 className="tableScore__title">ТОП-10</h3>
      <table className="tableScore">
        <thead>
          <tr>
            <th className="tableScore-name">Name</th>
            <th className="tableScore-score">Score</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users) => (
            <TableRow key={users.id} user={users.name} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ScoreTable;

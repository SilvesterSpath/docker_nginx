import React, { useState } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteLog, setCurrent } from '../../actions/logActions';
import Button from '../layout/Button';

import M from 'materialize-css/dist/js/materialize.min.js';
import Stopwatch from '../layout/StopWatch';

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const [counter, setCounter] = useState({ count: 0 });

  const updateCount = (value) => {
    setCounter((prev) => ({ count: prev.count + value }));
  };

  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: 'Time Deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        <span className='grey-text'>
          {/* <span className='black-text'>ID #{log.id}</span> */} Speaker:{' '}
          <span className='black-text'>{log.tech}</span> on{' '}
          <Moment format='MMMM Do YYYY'>{log.date}</Moment>
        </span>{' '}
        <div style={{ display: 'flex', justifyContent: 'right' }}>
          {/*           <span
            className='btn btn-floating red btn-large darken-1'
            style={{ fontWeight: 'bold' }}
          >
            {counter.count}
          </span>{' '} */}
          <Stopwatch />
          <div style={{ paddingTop: '10px', paddingLeft: '5px' }}>
            {/*             <Button sign='-' count={counter} updateCount={updateCount} />
            <Button sign='+' count={counter} updateCount={updateCount} /> */}
            <a href='#!' onClick={onDelete} className='secondary-content'>
              <i className='material-icons grey-text'>delete</i>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);

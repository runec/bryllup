import React from 'react';
import PropTypes from 'prop-types';

import { contentBox } from '../../styles/app.scss';

const ContentBox = ({children}) => {
  return (
    <div className={contentBox}>
      {children}
    </div>
  );
};

ContentBox.propTypes = {
  children: PropTypes.node,
};

export default ContentBox;

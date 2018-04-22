import React from 'react';
import PropTypes from 'prop-types';

import { contentBox } from '../../styles/app.scss';

const ContentBox = ({children, className, id}) => {
  return (
    <div id={id} className={className ? `${contentBox} ${className}` : contentBox}>
      {children}
    </div>
  );
};

ContentBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default ContentBox;

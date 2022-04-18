import React from 'react';
/**
 * hoc 高阶组件
 * @param {*} WrappedComponent inner组件
 * @returns wrapper组件
 */
const withProps = (WrappedComponent) => {
  const targetComponent = (props) => (
      <div className="wrapper-container">
          <WrappedComponent {...props} />
      </div>
  );
  return targetComponent;
};

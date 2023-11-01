import React, { FunctionComponent, ReactNode } from 'react';

interface FullWidthDecoratorProps {
  children: ReactNode;
}

const FullWidthDecorator: FunctionComponent<FullWidthDecoratorProps> = ({ children }) => {
  return (
    <div
      style={{
        width: '100%',
        paddingTop: '25px',
      }}
    >
      {children}
    </div>
  );
};

export default FullWidthDecorator;

import React, { FunctionComponent, ReactNode } from 'react';

interface DecoratorProps {
  children: ReactNode;
}

const Decorator: FunctionComponent<DecoratorProps> = ({ children }) => {
  return (
    <div
      style={{
        width: '600px',
        margin: '0 auto',
        paddingTop: '25px',
      }}
    >
      {children}
    </div>
  );
};

export default Decorator;

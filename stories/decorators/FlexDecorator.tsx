import React, { FunctionComponent, ReactNode } from 'react';

interface FlexDecoratorProps {
  children: ReactNode;
}

const FlexDecorator: FunctionComponent<FlexDecoratorProps> = ({ children }) => {
  return (
    <div
      style={{
        width: '500px',
        margin: '0 auto',
        paddingTop: '25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default FlexDecorator;

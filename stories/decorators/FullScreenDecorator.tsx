import React, { FunctionComponent, ReactNode } from 'react';

interface FullScreenDecoratorProps {
  children: ReactNode;
}

const FullScreenDecorator: FunctionComponent<FullScreenDecoratorProps> = ({ children }) => {
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      {children}
    </div>
  );
};

export default FullScreenDecorator;

import React, { FunctionComponent, ReactNode } from 'react';

import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';

import FlexDecorator from './FlexDecorator';

interface RoutingDecoratorProps {
  Component: ReactNode;
}

const RoutingDecorator: FunctionComponent<RoutingDecoratorProps> = ({ Component }) => {
  return (
    <Router>
      <FlexDecorator>
        <Routes>
          <Route path="/" element={Component}></Route>
        </Routes>
      </FlexDecorator>
    </Router>
  );
};

export default RoutingDecorator;

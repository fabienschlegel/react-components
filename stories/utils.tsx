import React from 'react';

import Decorator from './decorators/Decorator';
import FlexDecorator from './decorators/FlexDecorator';
import FullWidthDecorator from './decorators/FullWidthDecorator';
import FullScreenDecorator from './decorators/FullScreenDecorator';
import RoutingDecorator from './decorators/RoutingDecorator';

export function decorator(StoryComponent) {
  return <Decorator>{StoryComponent()}</Decorator>;
}

export function fullDecorator(StoryComponent) {
  return <FullWidthDecorator>{StoryComponent()}</FullWidthDecorator>;
}

export function fullScreenDecorator(StoryComponent) {
  return <FullScreenDecorator>{StoryComponent()}</FullScreenDecorator>;
}

export function flexDecorator(StoryComponent) {
  return <FlexDecorator>{StoryComponent()}</FlexDecorator>;
}

export function routingDecorator(StoryComponent) {
  return <RoutingDecorator Component={StoryComponent()} />;
}

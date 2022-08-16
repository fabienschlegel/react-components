import '../src/style/main.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Elements','Components','Form','Layout', '*'],
    },
  },
};

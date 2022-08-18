# Changelog

## [0.8.2] - 2022-08-18

### Added

- Add Changelog file to Storybook.
- Add categories to stories.

### Changed

- Move Bulma and react-router from peer dependencies to dependencies.

### Fixed

- Configure properly Husky and lint-staged to prettify staged files.

## [0.8.1] - 2022-08-16

### Added

- Add a changelog file to the project
- Add Husky to prettify files before commit
- Add a contributing file

### Changed

- Update Storybook version
- Fix code snippets styles in Storybook
- react-router is now a peer dependency
- Components which used Font Awesome icons are updated with HTML entities and
a prop for custom icon.
- Components which need `Link` from react-router can be used with an anchor tag instead.
- Update deprecated Prettier `jsxBracketSameLine` option to `bracketSameLine`

### Removed

- Git precommit and postcommit hooks are deleted
- Exclude React 18 from supported version
- Remove Font Awesome icons from dependencies

# CONTRIBUTING

We welcome contributions from everyone!

## Getting Started

Make sure you have Node.js 4.8 or higher and npm installed.

1. Fork this repository and clone your fork
1. Install dependencies: `yarn`
1. Run a development server: `yarn start`

### Making Changes

Refer to the [video.js plugin conventions][conventions] for more detail on best practices and tooling for video.js
plugin authorship.

When you've made your changes, push your commit(s) to your fork and issue a pull request against the original
repository.

### Running Tests

Testing is a crucial part of any software project. For all but the most trivial changes (typos, etc) test cases are
expected. Tests are run in actual browsers using [Karma][karma].

- In all available and supported browsers: `yarn test`
- In a specific browser: `yarn test:chrome`, `yarn test:firefox`, etc.
- While development server is running (`yarn start`), navigate to [`http://localhost:9999/test/`][local]

[karma]: http://karma-runner.github.io/

[local]: http://localhost:9999/test/

[conventions]: https://github.com/videojs/generator-videojs-plugin/blob/master/docs/conventions.md

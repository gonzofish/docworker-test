# Doc Worker Test

This is a test project for generating docs using
[Doc Worker](https://github.com/gonzofish/docworker).

## Usage

1. Clone the repository
  ```shell
  my-projects/> git clone https://github.com/gonzofish/docworker-test
  my-projects/> cd docworker-test
  docworker-test/>
  ```
2. Use any of the NPM scripts to generate docs:
  ```shell
  docworker-test/> npm run default
  docworker-test/> npm run with-config
  docworker-test/> npm run custom-config
  docworker-test/> npm run cli
  docworker-test/> npm run cli-custom
  ```

## While Developing Doc Worker

If you are working on Doc Worker and would like to see
how this project responds, do the following.

1. Link Doc Worker, from the Doc Worker directory:
  ```shell
  docworker/> npm link
  ```

2. Link Doc Worker, from the Doc Worker test project directory:
  ```shell
  docworker-test/> npm link docworker
  ```

And from then on, all `docworker` commands in this project
will point to your local Doc Worker directory.

### To Stop Using Your Local Doc Worker

To stop using your local Doc Worker, run:

```shell
docworker-test/> npm unlink docworker
```

And from the Doc Worker directory:

```shell
npm unlink
```

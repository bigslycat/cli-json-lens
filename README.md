# jlens [![Build Status][status-img]][status-url]

CLI for getting values from JSON files

## Install

- npm: `npm i -g jlens`
- yarn: `yarn global add jlens`

## Usage

```
$ jl <file> <path>
```

## Arguments

- `file` — Relative or absolute path to file
- `path` — Dot.notation to needle value

Options

- `--pretty`, `-p` — Pretty print
- `--version`, `-v` — Show version number
- `--help`, `-h` — Show help

## Example

```sh
jl package.json dependencies.express
# =>> ^4.16.3
```

[status-url]: https://travis-ci.org/bigslycat/jlens
[status-img]: https://travis-ci.org/bigslycat/jlens.svg?branch=master

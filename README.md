# auto-versioning-demo

auto-versioning-demo shows how to auto release a node package. 

## Installation

```bash
npx husky install

npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

npm install
```
# Setup
## Install npm
omit

## Install typescript and other required packages
### when cloned this repository
``` bash
git clone https://github.com/toshi-ara/simla-ts.git
cd simla-ts
cd src
npm install
npm run build
```

### command for build
``` bash
# for build
npm run build

# for development with webpack-dev-server
npm run start
```

### memo for this program
``` bash
cd (path to this repository)
cd src
npm install --save-dev typescript
./node_modules/.bin/tsc --init
npm install --save-dev webpack webpack-cli ts-loader css-loader style-loader webpack-dev-server
```

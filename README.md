# Project usage guide
## Dependency installation
To use this project without installation of everything by yourself just use
```bash

```
## npm scripts
### 🔨 build
Builds project into /public/ using webpack with SASS, Babel and HTMLplugin
```bash
npm run build
```
### ⚡ start
First builds project with build, then runs live-server on localhost:8080 with index.html file from /public
```bash
npm run start
```
## Project structure
```
📦iatp-dev-website
 ┣ 📂.git
 ┣ 📂.node_modules
 ┣ 📂public
 ┃ ┣ 📂img
 ┃ ┗ 📂fonts
 ┣ 📂public
 ┃ ┣ 📜about-us.html
 ┃ ┣ 📜bundle.js
 ┃ ┣ 📜index.html
 ┃ ┣ 📜members.html
 ┃ ┗ 📜projects.html
 ┣ 📂src
 ┃ ┣ 📂project-blocks
 ┃ ┃ ┣ 📂abstracts
 ┃ ┃ ┃ ┗ 📜__abstracts-dir.scss
 ┃ ┃ ┣ 📂base
 ┃ ┃ ┃ ┣ 📜__base-dir.scss
 ┃ ┃ ┃ ┗ 📜_reset.scss
 ┃ ┃ ┣ 📂blocks
 ┃ ┃ ┃ ┗ 📜__blocks-dir.scss
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📜__components-dir.scss
 ┃ ┃ ┣ 📂layout
 ┃ ┃ ┃ ┗ 📜__layout-dir.scss
 ┃ ┃ ┗ 📂page
 ┃ ┃ ┃ ┣ 📂about-us
 ┃ ┃ ┃ ┃ ┣ 📜about-us-index.js
 ┃ ┃ ┃ ┃ ┗ 📜about-us.html
 ┃ ┃ ┃ ┣ 📂members
 ┃ ┃ ┃ ┃ ┣ 📜members-index.js
 ┃ ┃ ┃ ┃ ┗ 📜members.html
 ┃ ┃ ┃ ┣ 📂projects
 ┃ ┃ ┃ ┃ ┣ 📜projects-index.js
 ┃ ┃ ┃ ┃ ┗ 📜projects.html
 ┃ ┃ ┃ ┣ 📜__page-dir.scss
 ┃ ┃ ┃ ┗ 📜projects.html
 ┃ ┣ 📜index.html
 ┃ ┣ 📜index.js
 ┃ ┗ 📜index.scss
 ┣ 📜LICENSE
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜webpack.config.js
 ```
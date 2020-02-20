# people-doc-exercise

Coding exercise for [PeopleDoc](https://www.people-doc.com/) recruitment.


## Thinking process

 - The documentation description first focus on reusability. I'll need to identify recurring component in the page.
 Also, this means building or using a CSS framework. I think I'll use [BootstrapCSS](https://getbootstrap.com/) as it will allow me to build faster at the cost of visual identity.
 - Secondly, CSS structure and naming are mentioned. In my opinion, it"s better to stick with what's already used in a project.
 But, starting from scratch, I'll use a component + modifier syntaxe (`.<component>-<modifier>`) to align with BootstrapCSS.
 - The last point is semantic and accessibility. This will force me to **not** use an existing component library or find one focused on accessibility.
 Doing it myself will be easier for this exercise, but will slow down the work process.


## Setup

 - First I create an new Github repository and `checkout` it.
 - Then, I init a new `NPM` project to access all the tools I know:
    - Webpack
    - BootstrapCSS
    - SASS
 - Next, I start to lay the directory structure of the project and the first files.


## Tooling

 - Webpack: Build and bundle all sources.
    - html-webpack-plugin: create a HTML file and inject build source into it.
    - mini-css-extract-plugin: create a separate file for all the CSS.
 - BootstrapCSS: CSS framework for easier component creation and page responsiveness.
    - SCSS: CSS preprocessor
 - Now: Quickly and easily deploy online without configuration.

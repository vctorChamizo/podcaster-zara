# Podcaster by VΓ­ctor Chamizo

![](https://img.shields.io/github/deployments/Silinde87/phone-catalog/production?label=Vercel&logo=Vercel&logoColor=white)
![](https://img.shields.io/w3c-validation/html?targetUrl=https://phone-catalog-sandy.vercel.app/)

## How it looks

π [Live Demo](https://podcaster-zara-five.vercel.app/)

This React application is a catalog where you can find a collection of 100 podcasts.
These podcasts can be visualized thanks to [Itunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1).

You can search for podcasts through the search engine.

## Quick Start

```
git clone https://github.com/Silinde87/podcaster.git
cd podcaster
yarn install
yarn dev
```

## Available scripts in the application

### yarn install

> **Install app dependencies**

### yarn dev

> **Runs the app** in the development mode. Open http://localhost:3000 to view it in the browser.

### yarn build

> **Generates a build version ready for deploy**.

### yarn preview

> **Runs the app** in the production mode. Open http://localhost:3000 to view it in the browser.

---

## Stack

| Package                         | Version |
| ------------------------------- | ------- |
| React & react-dom               | 18.2.0  |
| styled-components               | 5.3.5   |
| react-html-parser               | 2.0.2   |
| axios                           | 0.27.2  |
| eslint                          | 8.23.1  |
| prettier                        | 2.7.1   |
| typescript                      | 4.8.3   |

## Output

```
.
βββ README.md
βββ package.json
βββ .gitignore
βββ .eslintrc.json
βββ .prettierrc
βββ public                  # Assets
βββ src                     # React App folder
    βββ ui                  # All the components of the application
    β   βββ components
    β   
    βββ providers           # The React Providers for this app.
    βββ pages               # The pages components
    βββ services            # The controllers that manage the communication with API
    βββ theme               # Shared styles or colors
    βββ utils               # Shared utilites, constants and functions
    βββ App.tsx
    βββ main.tsx
```

---

## Author

π€ **VΓ­ctor Chamizo**

- [Github](https://github.com/vctorChamizo)
- [LinkedIn](https://www.linkedin.com/in/victorchamizo/)

## License

[GNU General Public License](https://opensource.org/licenses/gpl-license)

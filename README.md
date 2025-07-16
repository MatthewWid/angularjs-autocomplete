# Angular.JS Autocomplete

An autocomplete component implemented with Angular.JS.

See a [live demo](https://matthewwid.github.io/angularjs-autocomplete/) and [the source code](https://github.com/MatthewWid/angularjs-autocomplete/tree/master/src/app/autocomplete).

<p align="center">
    <img src="./docs/images/search.png" alt="Screenshot of searching with autocomplete results" width="75%" />
    <img src="./docs/images/shirt.png" alt="Screenshot of mens plad shirt product details" width="75%" />
</p>

Type-safe, accessible, mobile-friendly and keyboard navigable.

Use arrow keys to scroll through results, Enter to select and Escape to close.

## Technologies

* [Angular.JS](https://angularjs.org/) for user interface interactivity
* [TypeScript](https://www.typescriptlang.org/) for type safety
* [SASS](https://sass-lang.com/) for styling
* [DummyJSON](https://dummyjson.com/) for mock data
* [Vite](https://vitejs.dev/) for development and bundling
* [Biome](https://biomejs.dev/) for linting and formatting
* [pnpm](https://pnpm.io/) for dependency management
* [GitHub Actions](https://github.com/features/actions) for automated deployment
* [GitHub Pages](https://pages.github.com/) for hosting of live demo

## Development

Install Node, pnpm and dependencies:

```bash
curl -L https://git.io/n-install | bash
n auto
npm i -g pnpm
pnpm i
```

Run development server:

```bash
pnpm dev
```

Build for deployment:

```bash
pnpm build
```

## License

This project is licensed under the [MIT license](https://opensource.org/license/mit/).

---
title: "Generating source maps for PureScript bundles"
date: "2019-06-05"
---

If you're building a frontend app with PureScript, you might want to analyse the resulting JavaScript bundle to see which Purescript modules generated the most code. The tooling doesn't really advertise it, but it is possible to generate source maps for this purpose.

## With the PureScript [compiler](https://github.com/purescript/purescript) directly

The compiler has a `--source-maps` flag that can be used in conjunction with the `bundle` command.

Your workflow might look like this:

```bash
# Compile your project to the `output` directory
purs compile src/Main.purs bower_components/**/*.purs --output compiled

# Bundle your project and generate source maps
purs bundle compiled/**/*.js --output bundle.js --source-maps
```

In this example the bundle and its source map will be output as `bundle.js` and `bundle.js.map`.

The `--output` option is required in order for `--source-maps` to work.

## With Webpack and [purs-loader](https://github.com/ethul/purs-loader)

Pass the `bundle` and `pscBundleArgs` options in your Webpack configuration:

```js
...
  {
    test: /\.purs$/,
    loader: "purs-loader",
    options: {
      bundle: true,
      pscBundleArgs: { 'source-maps': true }
    }
  }
...
```

By default, the `bundle.js` and `bundle.js.map` will be placed in the `output` directory.

## With [Pulp](https://github.com/purescript-contrib/pulp)

```bash
pulp build --to bundle.js --source-maps
```

Note that the `--to` option is required for `--source-maps` to work.

## Analysing the source maps

The [`source-map-explorer`](https://github.com/danvk/source-map-explorer) tool will give you a nice treemap visualisation.

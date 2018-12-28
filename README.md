# elliotdavies.co.uk

This is the code for my personal website and blog at http://elliotdavies.co.uk. The site is built with [Hakyll](https://jaspervdj.be/hakyll/), a static site generator written in Haskell.

[Stack](https://docs.haskellstack.org/en/stable/README) is used to manage the Haskell code and binaries.


## Site development

To watch for changes and recompile the site while writing blog posts, CSS, etc:

```
stack exec site watch
```

To compile the site:

```
stack exec site build
```

The built files will be output to `_site`.


## Hakyll development

To watch for changes to the Hakyll configuration itself:

```
stack build --fast --file-watch
```

To rebuild the Hakyll `site` binary:

```
stack build
```

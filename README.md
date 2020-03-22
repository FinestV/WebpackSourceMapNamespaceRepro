# WebpackSourceMapNamespaceRepro

Steps to reproduce

```
yarn
yarn webpack
```

Notice output files are named correctly foo.bundle.js foo.bundle.js.map bar.bundle.js bar.bundle.js.map. Source map namespaces however contain [name] in both bundles and is not replaced.

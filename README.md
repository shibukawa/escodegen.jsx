escodegen.jsx
===========================================

Synopsis
---------------

[escodegen](https://github.com/Constellation/escodegen/) wrapper for JSX.

Code Example
---------------

```js
import "escodegen.jsx";
import "esprima.jsx";
import "console.jsx";
import "js/nodejs.jsx";

class _Main {
    static function main(argv : string[]) : void
    {
        var src = node.fs.readFileSync(argv[0]);
        console.log(escoegen.generate(esprima.parse(src)));
    }
}
```

Installation
---------------

If you want to use this library from other project, install like the following:

```sh
$ npm install escodegen.jsx esprima.jsx --save-dev
$ npm install escodegen --save
```

It needs esprima.jsx and escodegen to use.
or add like these lines to your parent project's `package.json`:

```js
   devDependencies: {
       "escodegen.jsx": "~0.1.0"
   },
   peerDepenencies: {
       "escodegen.jsx": "~0.1.0"
   }
```

API Reference
------------------

* `escodegen.generate(esprimatoken) : string`

  Dump source code in string. It doesn't support escodegen's option yet.

Development
-------------

## Repository

* Repository: git://github.com/shibukawa/escodegen.jsx.git
* Issues: https://github.com/shibukawa/escodegen.jsx/issues

## Run Test

```sh
$ grunt test
```

## Build Sample

```sh
$ grunt build
```

## Generate API reference

```sh
$ grunt doc
```

Author
---------

* shibukawa / yoshiki@shibu.jp

License
------------

BSD-2-Clause

Complete license is written in `LICENSE.md`.

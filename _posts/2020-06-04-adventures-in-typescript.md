---
title:  "Adventures in Typescript"
date:   2020-01-25 12:34:25
permalink: /blog/typescript
redirect_from: /blog/typescript/
tags:
- Security
categories:
- Blog
- Featured
- Hidden
image: /assets/article_images/2018-01-25-internet-gatekeepers/DSC_1784-2500c.png
image2: /assets/article_images/2018-01-25-internet-gatekeepers/DSC_1784-500c.png
excerpt: The elimination of Internet's gatekeepers has upended the world, here's how it happened.
seo_title: "No More Gatekeepers | Andrew Paradi Alexander"
---

- Part 1: What is Typescript
    - Definition
    - Benefits
    - Cons
    - How are types enforced?
    - How to declare types?
        - Inline variable/function parameter annotations
        - Typings files
    - Mitigating non-native TS packages

- Part 2: So you want to move your repo to Typescript
    - What is TS? Link back to part 1
    - General assumptions of a modern JS repo: Babel, Webpack, NPM packages, ES6/7 code
    - Preparing your build tools:
        - Necessary TS NPM packages
        - Updating Webpack config
    - Migrating your first JS file
        - Rename to `.ts` or `.tsx` respectively
        - Solve basic inline TS compiler errors
            - Most will be annotating your code with function parameter and variable formal types
            - Not everything is simply adding `: string` or `: number` as inline annotations to `.ts` code files, but this does solve a lot of them.
        - The fun types
            - Outside of inline annotations, Types can live in a few places and be of a few formats in Typescript.
            - Especially in React or with server endpoints, passing of complex objects into function parameters will require defining those objects. This can be done through declaring `interface`, `type`, or `class`.
            - If it is an object you produce and consume file-locally then using `declare type` will suffice
            - For package-local types, types should only be defined in a single location
        - This may lead to a dark place












Mind dump

- What is it
    - Superset of JS that adds types. Uses new JS compiler to enforce
- Why do we use it
    - Some studies show that 15% of production code errors have been because of type errors. TS prevents these and promotes a more rigorous code writing process
- What makes it different than JS (basic syntax)
    - All variables, class definitions, and function parameters now must have declared types (particularly if the "noImplicitAnys" compiler flag is on)
    - In practice, certainly a more conscious understanding of what types are used where
    - Compiler integration with VS Code and other IDEs much more powerful because they can provide intelligent auto-complete given the more detailed typings information
    - Issues: TS requires typings for packages that you use, not all are written in TS or have typings
    - Multiple ways to define types
        - Inline within `.ts` and `.tsx` files using `var name : type` syntax
        - Locally with local `type`, `interface`, or `class` definitions
        - Types can can also be defined in specific declaration files `filename.d.ts` which only include type definitions consumed by `filename.ts`.
- Moving an existing project to TS
    - Rename files to .ts and .jsx -> .tsx, now TS compiler will pick them up if your Webpack is properly setup
    - Perfectly valid .js code will often end up with 10+ errors, many are just adding types to function parameters and variables to satisfy "noImplicitAny"
- Dealing with external packages that are causing TS errors
    - See if it has a community provided library `@types/package` that provide the necessary typings
    - Check if updated version of package has the typings now added first-party
    - Use `include package = require('module');` instead of `import {} from ''` to override all TS checking
    - See if there is a similar package that can long term be transitioned to that uses TS more natively
- Lots still to learn
    - TS Compiler seems to sometimes need tweaking for which ECMAScript version code is being transpiled down to. For our purposes where cross-browser is not a priority, `es2017` is a possibility, others may need to still compile down to `es5` which is cross-compatible with most browsers including IE11.
    - Writing types in JS takes a bit of practice but becomes natural just as it is when writing Java or C code
    - Much easier to catch errors in consuming functions when parameters are formerly defined as a certain type. Complex types can be also be defined as interfaaces so that parameters like props into React Components







- ...

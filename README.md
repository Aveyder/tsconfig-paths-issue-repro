## How to reproduce

Run first
```console
npm run dev --workspace=packages/client
```

You will see `THE_ANSWER` constant imported from an `alised` project appears to be `undefined`

Comment/uncomment the following lines within `./packages/client/webpack.config.js`:
```javascript
        alias: {
            "@project/common": path.resolve(__dirname, "../common/src")
        }
        // plugins: [
        //     new TSConfigPathsPlugin()
        // ]
```

Run again
```console
npm run dev --workspace=packages/client
```

Everything works fine now! `THE_ANSWER` is `42`.

# 

Repro for this issue here: https://github.com/Tapico/tapico-msw-webarchive/issues/16


## Instructions 

Start server with `node server/server.js`

Start app with `yarn start` 

Observe behaviour. 

Run tests with `yarn test` 

Observe that tests fail 

Change this line in App.tsx

```diff
async function getData() {
-  const result = await fetch("/hello");  
+  const result = await fetch("http://localhost:3000/hello");  
    const json = await result.json(); 

  return json; 
}
```

Observe that this fixes the issue. However, it's not ideal


Alternative workaround 

Revert previous change, and add this to your test: 

```
traffic.log.entries.forEach((v) => {
  v.request.url = v.request.url.replace('http://localhost:3000/', 'http://localhost/');
})
```
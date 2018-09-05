# pup-face
Just a simple tool to save / load the localstorage with Puppeteer.

# save
```javascript
    await local.saveLocalStorage(page, `${__dirname}/local.json`);
```


# loade
```javascript
    await local.restoreLocalStorage(page, `${__dirname}/local.json`);
```



# what will it do?
It will save the localStorage from a site to local.json

# why?
you could export your localStorage after a login, and reload them at next visit.

# run
```
node index
```

# Inventory Microsite

express/typescript microsite. There's not really much here yet.

### MongoDB

I don't know if MongoDB is the best choice for a project like this, but almost all of the node/express books/examples
out there use it, so I figured why make things hard on myself. The Mongo documentation is pretty good, as well.

#### setting up MongoDB

You'll probably have to install/set up mongodb and modify db.ts according to your own installation.

### running the site
- clone this repo/fork and clone
- run `npm install`
- run `tsd install`
- run `tsc` to compile typescript
- run `node index.js` to run the server and database connection
- only urls right now are `localhost:8080/` and `localhost:8080/search`

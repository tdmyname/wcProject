module.exports = {
    entry   :{
        bundles :["./src/index.js"]
    },
    output:{
        path:"./path",
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {test: /\.jsx?$/, loader: "babel", exclude:"./node_modules"}
        ]
    }
}


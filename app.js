const fs = require("fs")
const formidable = require("formidable")
module.exports = function(req, res){
    if (req.url == '/'){
        fs.readFile("./public/index.html", function (err, data) {
            if (err) {
                console.log(err.message)
            }
            res.writeHead(200,{'Content-Type' : 'text/html'})
            res.write(data)
            res.end()
        })
    }
    else if (req.url == '/about') {
        fs.readFile("./public/about.html", function (err, data) {
            if (err) {
                console.log(err.message)
            }
            res.writeHead(200,{'Content-Type' : 'text/html'})
            res.write(data)
            res.end()
        })
    }

    else if (req.url == '/contact') {
        fs.readFile("./public/contacts.html", function (err, data) {
            if (err) {
                console.log(err.message)
            }
            res.writeHead(200,{'Content-Type' : 'text/html'})
            res.write(data)
            res.end()
        })
    }

    else if (req.url == '/upload'){
        fs.readFile("./public/upload.html", function (err, data) {
            if (err) {
                console.log(err.message)
            }
            res.writeHead(200,{'Content-Type' : 'text/html'})
            res.write(data)
            res.end()
        })
    }

    else if (req.url == '/file_upload'){
        fs.readFile("./public/upload.html", function (err, data) {
            if (err) {
                console.log(err.message)
            }
            let form = new formidable.IncomingForm()
            form.parse(req, (err, fields, files) => {
                const {file_upload} = files
                let {filepath} = file_upload
                filepath = "C:\Users\SAMSUNG SMART PC\Documents\Software Development\Web Development\Personal-projects\server-side-projects" + files.file_upload.originalFilename
                res.write("File Uploaded and Moved")
                res.end()   
            })   
        })
    }

     else {
        fs.readFile("./public/not-found.html", function (err, data) {
            if (err) {
                console.log(err.message)
            }
            res.writeHead(404,{'Content-Type' : 'text/html'})
            res.write(data)
            res.end()
        })
    }
}
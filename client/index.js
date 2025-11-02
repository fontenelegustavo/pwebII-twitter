import app from "./src/app.js";


function HOST(){
    console.log(`\napp listening in port 3001\nlocalhost:3001\n`)
}

app.listen(3001, HOST);
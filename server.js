let app  = require('./src/app')

require('dotenv').config()

let port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
    
})
const express = require('express')
const cors = require('cors')
require('./db/mongoose')
const userRouter = require('./routers/user')
const authRouter = require('./routers/auth')
const bookRouter = require('./routers/book')
const categoryRouter = require('./routers/category')
const purchaseARouter = require('./routers/purchase_a')
const purchaseBRouter = require('./routers/purchase_b')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors());
app.use(userRouter)
app.use(authRouter)
app.use(bookRouter)
app.use(categoryRouter)
app.use(purchaseARouter)
app.use(purchaseBRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
import mongoose from 'mongoose'
import app from './app'
import config from './config'
async function database() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('database is connected successfully')

    app.listen(config.port, () => {
      console.log(`Application app listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('failed to connect database', err)
  }
}

database()

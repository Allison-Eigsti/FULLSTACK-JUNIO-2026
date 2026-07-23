const bcrypt = require('bcryptjs')


console.log('Salt:', salt)

async function run() {
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash('mypasswprd', salt)

    const isMatch = await bcrypt.compare('mypassword', hashPassword)

    console.log('Salt:', salt)
}



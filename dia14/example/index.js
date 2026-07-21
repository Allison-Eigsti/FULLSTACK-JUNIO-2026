const bcrypt = require('bcryptjs')



console.log('Salt:', salt)

async function run() {
const salt = await bcrypt.genSalt(10)
const hashPassword = await bcrypt.hash('mypasswprd', salt)

console.log('Salt:', salt)
}
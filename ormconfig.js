module.exports = {
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
 "type":"postgres",
 "host":"localhost",
 "port":"5432",
 "username":"postgres",
 "password":"",
 "database":"ideas",
 "synchronize":"true",
 "logging":"true",
 "entities":["./src/**/*.entity.ts","./dist/**/*.entity.js"]
}
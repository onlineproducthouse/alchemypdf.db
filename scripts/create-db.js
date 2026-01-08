'use strict'

require("dotenv").config()

if (process.env.ENVIRONMENT_NAME === "local")
  require("child_process").exec("npm run db:schema:create", (err, stdout, stderr) => {
    if (err)
      console.log(err)

    if (stdout)
      console.log(stdout)

    if (stderr)
      console.log(stderr)
  })
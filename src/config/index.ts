require("dotenv").config()

import fs = require("fs")
import { Options } from "sequelize"

export type DatabaseConfig = {
  dialect: string
  username: string
  password: string
  host: string
  port: string
  database: string
  options: Options
}

export type EnvironmentNames = "local" | "test" | "qa" | "prod"

export type Environments = {
  [key in EnvironmentNames]: DatabaseConfig
}


let DBConfig: DatabaseConfig = {
  dialect: process.env.DB_PROTOCOL,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,

  options: {
    query: { raw: true, },

    define: {
      freezeTableName: true,
      timestamps: false,

      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
    }
  }
}

const config: Environments = {
  local: DBConfig,
  test: DBConfig,
  qa: DBConfig,
  prod: DBConfig,
}

export default config
module.exports = config
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
  dialect: process.env.ALCHEMYPDF_DB_PROTOCOL,
  username: process.env.ALCHEMYPDF_DB_USERNAME,
  password: process.env.ALCHEMYPDF_DB_PASSWORD,
  host: process.env.ALCHEMYPDF_DB_HOST,
  port: process.env.ALCHEMYPDF_DB_PORT,
  database: process.env.ALCHEMYPDF_DB_NAME,

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
'use strict';

const {
  RequestTableName,
  RequestStateTableName,
} = require("../lib/constants/TABLE_NAMES")
const {
  RequestTablePrimaryKey,
  RequestStateTablePrimaryKey,
} = require("../lib/constants/TABLE_PRIMARY_KEYS")
const {
  setPrimaryKey,
  setForeignKey,
  setUniqueColumn,
  createSchemaConstraints,
} = require("oph.sequelize.helpers")

const { RequestTableExternalKey } = require("../lib/constants/TABLE_EXTERNAL_KEYS")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const schema = {
      [RequestTablePrimaryKey]: createSchemaConstraints.primaryKey(Sequelize),
      [RequestTableExternalKey]: createSchemaConstraints.externalKey(Sequelize),
      [RequestStateTablePrimaryKey]: createSchemaConstraints.foreignKey(Sequelize),

      client_reference: { type: Sequelize.STRING(36), allowNull: false },

      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: true, defaultValue: null },

      content: { type: Sequelize.TEXT, allowNull: false },
      callback_url: { type: Sequelize.TEXT, allowNull: false },
      attempt_count: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
    }

    await queryInterface.createTable(RequestTableName, schema)
    await setPrimaryKey(queryInterface, RequestTableName, RequestTablePrimaryKey)
    await setUniqueColumn(queryInterface, RequestTableName, RequestTableExternalKey)
    await setForeignKey(queryInterface, RequestTableName, RequestStateTablePrimaryKey, RequestStateTableName)
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable(RequestTableName)
    await queryInterface.dropTable(`${RequestTableName}_audit`)
  }
};

'use strict'

const { RequestStateTableName } = require("../lib/constants/TABLE_NAMES")
const { RequestStateTablePrimaryKey } = require("../lib/constants/TABLE_PRIMARY_KEYS")
const { RequestStateTableReferenceKey } = require("../lib/constants/TABLE_REFERENCE_KEYS")
const { createReferenceTable } = require("oph.sequelize.helpers")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await createReferenceTable(
      queryInterface,
      Sequelize,
      RequestStateTableName,
      RequestStateTablePrimaryKey,
      RequestStateTableReferenceKey,
    )
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable(RequestStateTableName)
  }
};

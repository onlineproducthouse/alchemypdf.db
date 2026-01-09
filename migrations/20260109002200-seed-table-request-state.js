'use strict';

const { RequestStateTableName } = require("../lib/constants/TABLE_NAMES")
const { RequestStateTableReferenceKey } = require("../lib/constants/TABLE_REFERENCE_KEYS")

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(RequestStateTableName, [
      {
        [RequestStateTableReferenceKey]: "Pending",
        description: "Pending",
      },
      {
        [RequestStateTableReferenceKey]: "InProgress",
        description: "In Progress",
      },
      {
        [RequestStateTableReferenceKey]: "AttemptLimitReached",
        description: "Attempt Limit Reached",
      },
      {
        [RequestStateTableReferenceKey]: "Completed",
        description: "Completed",
      },
    ])
  },

  down: async (_queryInterface, _Sequelize) => { }
};
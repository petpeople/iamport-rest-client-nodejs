/*!
 * iamport
 * MIT Licensed
 */

'use strict';

var resource = require('../resource'),
    iamportMethod = resource.iamportMethod;

/**
 * Module exports.
 * @public
 */
module.exports = resource.extend({

  path: 'receipts',

  getByImpUid: iamportMethod({
    method: 'GET',
    command: null,
    urlParam: 'imp_uid'
  }),

  create: iamportMethod({
    method: 'POST',
    command: null,
    urlParam: 'imp_uid',
    require: ['identifier']
  }),

  delete: iamportMethod({
   method: 'DELETE',
   command: null,
   urlParam: 'imp_uid'
  })
  
});

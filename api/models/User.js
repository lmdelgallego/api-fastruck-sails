/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	  username:{
		  type: 'string',
		  unique: true
	  },
	  name: {
		  type: 'string'
	  },
	  lastName: {
		  type: 'string'
	  },
	  email:{
		  type: 'string',
		  email: true,
		  required: true,
		  unique: true
	  },
	  roles:{
		  collection: 'Role',
		  via: 'users'
	  }

  }
};

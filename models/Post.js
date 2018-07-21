const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const PostSchema = new Schema({
	user: {
		Type: Schema.Types.ObjectId,
		ref: 'users'
	},

	text: {
		type: String,
		required: true;
	},

	name: {
		type: String
	},
	avatar: {
		type: String
	},
	likes: [
		{
			user: {
				Type: Schema.Types.ObjectId,
				ref: 'users'
			}
		}
	],
	comments: [
		{
			user: {
				Type: Schema.Types.ObjectId,
				ref: 'users'
			},
			text: {
				type: String,
				required: true
			},
			name: {
				type: String
			},
			avatar: {
				type: String
			},
			date: {
				type: Date,
				default: Date.now
			}
		}
	],
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Post = mongoose.model('post', PostSchema);
const { UserInputError, AuthenticationError } = require('apollo-server');

const Post = require('../../models/Post');
const checkAuth = require('../../util/check-auth');
const { ValidateCommentInput } = require('../../util/validators');


module.exports = {
    Mutation: {
        createComment: async (_, { postId, body }, context) => {
            const { username } = checkAuth(context);
 
            const { valid, errors } = ValidateCommentInput(body);
            if(!valid){
                throw new UserInputError('Empty Comment!', { errors })
            }

            const post = await Post.findById(postId);
            if(post){
                post.comments.unshift({
                    body,
                    username,
                    createdAt: new Date().toISOString()
                })
                await post.save();
                return post;
            } else throw new UserInputError('Post not found!')
        },
        async deleteComment(_, { postId, commentId }, context){
            const { username } = checkAuth(context);
            
            const post = await Post.findById(postId);
            if(post){
                const commentIndex = post.comments.findIndex(c => c.id === commentId);

                if(post.comments[commentIndex].username === username){
                    post.comments.splice(commentId, 1);
                    await post.save();
                    return post;
                } else throw new AuthenticationError('Action not allowed')
            } else throw new UserInputError('Post not found!')
        }
    }
}
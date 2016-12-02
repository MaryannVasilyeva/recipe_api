module.exports = function( server ){

    var recipes = require( '../controllers/recipes' );
    server.get( '/recipes', recipes.index );
    // server.get( '/recipes', recipes.view );
    // server.post( '/recipes', recipes.create );
    // server.put( '/recipes', recipes.update );
    // server.del( '/recipes', recipes.delete );
};

exports.up = function(knex) {
  return knex.schema
    .createTable('users', users => {
        users.increments('user_id')
        users.string('username', 128).notNullable().unique()
        users.string('password', 128).notNullable()
    })
    .createTable('posts', posts => {
        posts.increments('post_id')
        posts.string('title', 128)
        posts.string('image_url', 5000)
        posts.string('recipe', 5000)
        posts.string('username', 128)
          .notNullable()
          .references('username')
          .inTable('users')
          .onUpdate('RESTRICT')
          .onDelete('RESTRICT')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('posts')
    .dropTableIfExists('users')
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {post_id: 123, title: 'Spaghetti', recipe: 'Put sauce on pasta', username: 'Boop', },
        {post_id: 234, title: 'Garlic Bread', recipe: 'Put garlic salt and butter on bread. Toast it.', username: 'Beep', },
        {post_id: 345, title: 'Lemonade', recipe: 'Squeeze lemons add sugar', username: 'Bop', }
      ]);
    });
};
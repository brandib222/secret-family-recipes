exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {post_id: 123, title: 'Spaghetti', image_url: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BhZ2hldHRpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',recipe: 'Put sauce on pasta', username: 'Boop', },
        {post_id: 234, title: 'Garlic Bread', image_url:'https://images.unsplash.com/photo-1598785244280-7a428600d053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FybGljJTIwYnJlYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', recipe: 'Put garlic salt and butter on bread. Toast it.', username: 'Beep', },
        {post_id: 345, title: 'Lemonade', image_url:'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVtb25hZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', recipe: 'Squeeze lemons add sugar', username: 'Bop', }
      ]);
    });
};
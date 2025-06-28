exports.seed = async function (knex) {
  await knex('images').del();
  await knex('images').insert([
    {
      title: 'Montanha',
      description: 'Paisagem de montanha ao pôr do sol.',
      url: 'https://picsum.photos/id/1015/400/300',
      likes: 0,
    },
    {
      title: 'Praia',
      description: 'Dia ensolarado na praia.',
      url: 'https://picsum.photos/id/1011/400/300',
      likes: 0,
    },
    {
      title: 'Floresta',
      description: 'Trilhas em meio à floresta verde.',
      url: 'https://picsum.photos/id/1020/400/300',
      likes: 0,
    }
  ]);
};
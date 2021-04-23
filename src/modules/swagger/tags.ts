const swaggerTags = [
  {
    name: 'auth',
    description: 'APIs de autenticação.',
  },
  {
    name: 'users',
    description: 'APIs de usuário (Protegia por JWT retornado no login).',
  },
  {
    name: 'levels',
    description: 'APIs de levels. (Protegida pelo token padrão)',
  },
  {
    name: 'questions',
    description: 'APIs de perguntas. (Protegida pelo token padrão)',
  },

  {
    name: 'answers',
    description: 'APIs de respostas. (Protegida pelo token padrão)',
  },
];

export default swaggerTags;

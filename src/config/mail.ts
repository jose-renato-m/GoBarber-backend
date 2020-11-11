interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'jrenato78@joserenatomontagnana.dev.br',
      name: 'José Renato do Grupo Memorial',
    },
  },
} as IMailConfig;

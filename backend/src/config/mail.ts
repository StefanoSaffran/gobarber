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
      email: 'stefanosaffran@zohomail.eu',
      name: 'Stefano da equipe GoBarber',
    },
  },
} as IMailConfig;

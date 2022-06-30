export class MainMenu {
  fontAwesomeClass = '';
  Title = '';
  href = '';
  minAccessRole = 0;

  static mainMenu: Array<MainMenu> = [
    {
      minAccessRole: 1,
      Title: 'מנהלים',
      fontAwesomeClass: 'fas fa-user-shield',
      href: 'Admin',
    },
    {
      minAccessRole: 1,
      Title: 'סטודנטים',
      fontAwesomeClass: 'fas fa-user-graduate',
      href: 'Student',
    },
    {
      minAccessRole: 1,
      Title: 'מרצים',
      fontAwesomeClass: 'fas fa-chalkboard-teacher',
      href: 'Teacher',
    },

    {
      minAccessRole: 1,
      Title: 'קורסים',
      fontAwesomeClass: 'fas fa-book',
      href: 'Course',
    },

    {
      minAccessRole: 1,
      Title: 'קבוצות',
      fontAwesomeClass: 'fas fa-users',
      href: 'Group',
    },

    {
      minAccessRole: 3,
      Title: 'הודעות',
      fontAwesomeClass: 'fas fa-comments',
      href: 'Message',
    },

    // {
    //   minAccessRole: 3,
    //   Title: 'קבוצות',
    //   fontAwesomeClass: 'fas fa-users',
    //   href: 'MyGroup',
    // },

  ];
}

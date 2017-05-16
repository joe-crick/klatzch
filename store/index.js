export const state = {
  messages: [
    {user: 'mangold', message: 'Hi there!'},
    {user: 'baby-face', message: 'Hello!'},
    {user: 'mangold', message: '\'sup?'}
  ],
  messenger: {
    displayIndicator: '-',
    display: 'collapsed',
    draggable: {}
  }
};

export const mutations = {
  initMessenger (state) {
    import('draggabilly').then(Drag => {
      state.messenger.draggable = new Drag('.klatzch-messenger', {});
    });
  },
  toggleMessenger (state) {
    const mess = state.messenger;
    if (mess.display === 'collapsed') {
      mess.display = 'expanded';
      mess.displayIndicator = '-';
    } else {
      mess.display = 'collapsed';
      mess.displayIndicator = '+';
    }
  }
};

export const state = {
  messages: [
    {user: 'mangold', message: 'Hi there!'},
    {user: 'baby-face', message: 'Hello!'},
    {user: 'mangold', message: '\'sup?'}
  ],
  client: {
    displayIndicator: '+',
    display: 'collapsed',
    draggable: {}
  }
};

export const mutations = {
  initMessenger (state) {
    import('draggabilly').then(Drag => {
      state.client.draggable = new Drag('.klatzch-messenger', {});
      state.client.draggable.disable();
    });
  },
  toggleMessenger (state) {
    const mess = state.client;
    if (mess.display === 'collapsed') {
      mess.display = 'expanded';
      mess.displayIndicator = '-';
      mess.draggable.enable();
    } else {
      mess.display = 'collapsed';
      mess.displayIndicator = '+';
      mess.draggable.disable();
      // TODO: Find better way to do this that doesn't directly touch DOM
      document.querySelector('.klatzch-messenger').removeAttribute('style');
    }
  }
};

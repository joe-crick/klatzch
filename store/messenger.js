import {Lokka} from 'lokka';
import {Transport} from 'lokka-transport-http';

const headers = {
  Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0OTUwMjY2MjAsImNsaWVudElkIjoiY2oxeGF6ODU2a3IxbTAxMzd2N3B1NzQydiIsInByb2plY3RJZCI6ImNqMXhhejg1NmtyMWwwMTM3ODVlNWh3YzUiLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNqMnQwOHowZGdoMjMwMTYwbDZ1d2IzYmwifQ.KT92nTe5SYkjWWq7igw1JDC69zy5mDMSNvcKC_Y4vN8'
};

const client = new Lokka({
  transport: new Transport('https://api.graph.cool/simple/v1/cj1xaz856kr1l013785e5hwc5', {headers})
});

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
  },
  loadMessages (state, messages) {
    state.messages = messages;
  }
};

export const actions = {
  async loadMessages ({commit}, conversationId) {
    const res = await client.query(`
      query {
      allProfiles {
        first,
        last,
        age
      }
    }
  `);
    commit('loadMessages', res);
  }
};

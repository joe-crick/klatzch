<!-- messenger-form.vue -->
<template>
  <div class="klatzch-chat-form">
    <div class="container">
      <form class="basic-content-form">
        <div class="form-group">
          <div class="row">
            <div class="message-input-column col">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Message" aria-describedby="basic-addon"/>
                <span class="input-group-addon send-message"><span
                  class="send-message fa fa-share-square"></span></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col send-silent">
              <button class="btn btn-klatzch-secondary">
                Silent Send
              </button>
              <tool-tip>
                When you send a message in "silent mode" it's like sending an email. The recipient gets a notification
                in their action center that they've received a message, but their chat window does not open.
              </tool-tip>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import ToolTip from '../tooltip.vue';
  export default {
    name: 'messenger-form',
    components: {ToolTip},
    data () {
      return {
        message: ''
      };
    }
  };
</script>

<style lang="scss">
  .klatzch-chat-form {
    .message-input-column {
      margin-left: -20 px
    }
    .send-message {
      color: snow;
      background-color: #df744a;
      cursor: pointer;
    }
    .send-silent {
      text-align: center;
      margin-top: 5px;
    }
    .input-group {
      width: 90%;
    }
  }

</style>

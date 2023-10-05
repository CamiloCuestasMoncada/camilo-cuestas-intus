<template>
    <div class="game-modal" v-if="showModal">
      <div class="modal-content">
        <button class="close-button" @click="closeModal">X</button>
        <h2>{{ game.title }}</h2>
        <slot name="description"></slot>
        <slot name="publisher"></slot>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, watch } from 'vue';
  
  export default {
    props: {
      showModal: Boolean,
      game: Object,
    },
    setup(props, { emit }) {
      const showModalInternal = ref(false);
  
      watch(() => props.showModal, (newVal) => {
        showModalInternal.value = newVal;
      });
  
      const closeModal = () => {
        showModalInternal.value = false;
        emit('update:showModal', false);
      };
  
      return {
        showModal: showModalInternal,
        closeModal,
      };
    },
  };
  </script>
  
  <style scoped>
  
  .game-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.833);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  .modal-content {
    margin: 20px;
    background-color: #2c65bc8c;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(181, 31, 166, 0.456);
    position: relative;
    width: 50%;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    outline: none;
  }
  </style>
  
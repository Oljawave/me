<template>
    <div class="photo-album">
      <div class="header">
        <Icon icon="lets-icons:expand-left-light" width="24" height="24" class="back-icon" @click="goBack" />
        <h1>{{ albumTitle }}</h1>
      </div>
      
      <div class="photo-grid">
        <div v-for="(photo, index) in photos" :key="index" class="photo-item" @click="openPhoto(photo.src)">
          <img :src="photo.src" :alt="photo.title" />
        </div>
      </div>
  
      <!-- Модальное окно для увеличенного изображения -->
      <div v-if="selectedPhoto" class="modal" @click="selectedPhoto = null">
        <img :src="selectedPhoto" class="modal-img" />
      </div>
    </div>
  </template>
  
  <script>
  import { Icon } from "@iconify/vue";
  
  export default {
    components: { Icon },
    data() {
      return {
        albumTitle: "Kuala Lumpur",
        photos: [
          { src: "/src/assets/malaysia/malaysia1.jpg", title: "Photo 1" },
          { src: "/src/assets/malaysia/malaysia2.jpg", title: "Photo 2" },
          { src: "/src/assets/malaysia/malaysia3.jpg", title: "Photo 3" },
          { src: "/src/assets/malaysia/malaysia4.jpg", title: "Photo 4" },
          { src: "/src/assets/malaysia/malaysia5.jpg", title: "Photo 5" }
        ],
        selectedPhoto: null
      };
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      openPhoto(src) {
        this.selectedPhoto = src;
      }
    }
  };
  </script>
  
  <style>
  .photo-album {
    text-align: center;
    background: black;
    color: white;
    min-height: 100vh;
    padding: 20px;
  }
  
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    max-width: 400px;
    margin: 0 auto 20px auto;
  }
  
  h1 {
    font-size: 20px;
    font-weight: 400;
    margin: 0;
  }
  
  .back-icon {
    position: absolute;
    left: 0;
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  
  .back-icon:hover {
    transform: scale(1.2);
  }
  
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .photo-item img {
    width: 100%;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .photo-item img:hover {
    transform: scale(1.05);
  }
  
  /* --- Модальное окно --- */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .modal-img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 12px;
    transition: transform 0.3s ease;
  }
  
  .modal:hover .modal-img {
    transform: scale(1.05);
  }
  </style>
  
<template>
  <div class="grid" :data-length="images.length">
    <q-img
      class="grid_item cursor-pointer"
      v-for="(url, index) in images"
      :key="index"
      :src="url"
      spinner-color="white"
      @click="showBigPic(index)"
    />
    <q-dialog
      v-model="dialog"
      @keyup.37="$refs.carousel.previous()"
      @keyup.39="$refs.carousel.next()"
    >
      <q-carousel
        class="slide"
        ref="carousel"
        swipeable
        animated
        v-model="slide"
        arrows
        navigation
        infinite
      >
        <q-carousel-slide
          v-for="(url, index) in images"
          :name="index"
          :key="index"
          style="padding:0;"
        >
          <img :src="url" class="slideImg shadow-12" />
        </q-carousel-slide>
      </q-carousel>
    </q-dialog>
  </div>
</template>

<script>
export default {
  props: {
    images: { required: true, type: Array },
  },
  data() {
    return {
      slide: 0,
      dialog: false,
    };
  },
  methods: {
    showBigPic(index) {
      this.slide = index;
      this.dialog = true;
    },
  },
};
</script>

<style scoped="true" lang="scss">
@import '@/components/publish/_imageGrid.scss';
.slide {
  // min-width: 10vw;
  height: 80vh;
  min-height: 20vh;
  max-height: 90vh;
  max-width: 95vw;
  @media only screen and (max-width: 768px) {
    height: auto;
    width: 80vw;
  }
  background-color: transparent;
  box-shadow: none;
  overflow: visible;
  /deep/ .q-carousel__slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /deep/ .q-carousel__arrow button {
    background-color: rgba(black, 0.7);
  }
  /deep/ .q-panel {
    overflow: visible;
  }
}
.slideImg {
  display: block;
  max-width: 100%;
  max-height: 100%;
}
</style>

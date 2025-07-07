<template>
  <section class="event">
    <div class="copy">
      <h2 v-html="'—' + info.title" />
      <p v-if="expanded" v-html="info.description" />
      <p v-if="!expanded">
        {{ info.summary }} 
        <button v-if="info.description" @click="expanded = true">Read more</button>
      </p>
    </div>
    <div class="meta">
      <p v-html="info.date" />
      <div class="options">
        <a :href="info.button.url" class="-button">{{ info.button.label }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>

const props = defineProps([
  'index',
  'info'
])

const expanded = ref(false)

</script>

<style lang="scss" scoped>

@use "@/assets/css/animations.scss";
@use "@/assets/css/mixins.scss";
@use "@/assets/css/variables.scss";

.event {
  .copy {
    h2 {
      font-family: 'Playfair Display Variable Italic', serif;
      font-style: italic;
      font-weight: 400;
      @include mixins.r('font-size', 33, 48);
    }

    p {
      margin-top: 20px;
      line-height: 1.5;
      @include mixins.r('font-size', 19, 19);

      button {
        appearance: none;
        padding: 0;
        background: none;
        border: none;
        font-family: variables.$sansSerifFont;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  .meta {
    p {
      font-family: 'Playfair Display Variable Italic', serif;
      font-style: italic;
      margin-top: 20px;
      line-height: 1.2;
      @include mixins.r('font-size', 24, 30);
    }

    .options {
      @include mixins.r('margin-top', 20, 20);

      a {
        display: inline-block;
        text-decoration: none;
        background-color: var(--back);
        color: white;
        padding: 9px 25px;
        font-size: 21px;
        font-weight: 500;
        line-height: 1.2;
        color: var(--front);
        @include mixins.rs(
          ('font-size', 17, 21),
          ('padding-left', 18, 18),
          ('padding-right', 18, 18),
          ('padding-top', 12, 12),
          ('padding-bottom', 12, 12)
        );
      }
    }
  }

  @include mixins.media-query(small) {
    padding: 0 15px;

    .copy {
      
    }

    .meta {
      // width: 100%;
      // height: auto;
    }
  }

  @include mixins.media-query(medium-up) {
    display: flex;
    gap: 50px;

    .copy {
      flex-basis: 70%;
    }

    .meta {
      flex-basis: 30%;
    }
  }
}

</style>

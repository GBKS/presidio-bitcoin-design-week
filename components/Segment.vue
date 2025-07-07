<template>
  <section :class="classObject">
    <img
      :src="`/images/${content.image.file}.png`"
      :srcset="`/images/${content.image.file}.png 1x, /images//${content.image.file}@2x.png 2x`"
      :alt="content.image.alt"
      :width="content.image.width"
      :height="content.image.height"
    >
    <div class="copy">
      <h2 v-html="content.title" />
      <p v-html="content.description" />
    </div>
  </section>
</template>

<script setup>

const props = defineProps([
  'index',
  'contentId'
])

const classObject = computed(() => {
  return [
    'segment',
    '-'+props.contentId,
    '-layout-'+(props.index % 2 === 0 ? 'left' : 'right'),
  ]
})

const copy = {
  future: {
    title: "Bitcoin can be <br />thought of <br />as money <br />of the future.",
    description: "Except it’s already here.<br />It is internet-native.<br />It is consequential.<br />It is resilient.<br/>But it needs more Design love.<br />More of a Design lens.",
    image: {
      file: "coin",
      alt: "Bitcoin coin",
      width: 400,
      height: 400
    }
  },
  simpler: {
    title: "Bitcoin needs to <wbr>be far simpler.",
    description: "It needs more beauty.<br/>It needs to be made human.<br/><br/>Without better Design, bitcoin simply won’t become the everyday-money-of-the-future-for-the-whole-world it can become. <br/><br/>Yet, great Design is so much harder in the trust-minimized, decentralized, adversarial world of bitcoin. Everything is harder, more nuanced, more annoying. ",
    image: {
      file: "note",
      alt: "Bitcoin coin",
      width: 400,
      height: 400
    }
  },
  tension: {
    title: "Design thrives in <wbr>resolving tensions.",
    description: "We can and must find ways to balance security, privacy, trustlessness with the kind of simple, beautiful digital product experience the world has become accustomed to. The kind of experience we know is possible. <br/><br/>It’s time to bring Design craft to shaping bitcoin.<br/><br/>And bring bitcoin to the product designs we know and love so much. ",
    image: {
      file: "fabric",
      alt: "Bitcoin coin",
      width: 400,
      height: 400
    }
  }
}

const content = computed(() => {
  return copy[props.contentId]
})

</script>

<style lang="scss" scoped>

@use "@/assets/css/animations.scss";
@use "@/assets/css/mixins.scss";

.segment {
  max-width: 1440px;
  width: 100%;
  
  .copy {
    h2 {
      font-family: 'Playfair Display Variable Italic', serif;
      font-style: italic;
      font-weight: 400;
      @include mixins.r('font-size', 40, 48);
    }

    p {
      line-height: 1.5;
      @include mixins.rs(
        ('font-size', 21, 24),
        ('margin-top', 25, 50)
      );
    }
  }

  @include mixins.media-query(small) {
    img {
      width: 100%;
      height: auto;
    }

    .copy {
      padding: 50px 10px;
    }
  }

  @include mixins.media-query(medium-up) {
    display: flex;
    align-items: center;

    img {
      flex-basis: 50%;
      height: auto;
    }

    .copy {
      flex-basis: 50%;
      padding: 50px 120px;
      box-sizing: border-box;
      text-align: center;
    }

    &.-layout-left {
      flex-direction: row-reverse;
    }
  }
}

</style>

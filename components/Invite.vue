<template>
  <div class="invite">
    <h2>An invitation to leading <wbr>Silicon Valley designers</h2>
    <p><strong>Join us for one or more days of learning, thinking and workshopping on Designing Future Money at Presidio Bitcoin from Sept 15-19.</strong><br/><br/>We’ll dig into the biggest design challenges in bitcoin today, see how to build creative new experiences that use bitcoin, look at bitcoin-powered payments, come together to helpfully critique some real bitcoin products and explore the opportunities for remixing bitcoin with big tech.<br/><br/>Participation is free but application-only. Do you want to be part of a group of selected individuals who will together shape the future of money? This is going to be a small, high-calibre affair. RSVP and/or Apply to attend the event of your choice below.</p>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

@use "@/assets/css/animations.scss";
@use "@/assets/css/mixins.scss";

.invite {
  max-width: 840px;
  padding-left: 10px;
  padding-right: 10px;
  @include mixins.rs(
    ('padding-top', 50, 100),
    ('padding-bottom', 50, 100)
  );

  h2 {
    font-family: 'Playfair Display Variable Italic', serif;
    font-style: italic;
    font-weight: 400;
    @include mixins.r('font-size', 27, 48);
  }

  p {
    line-height: 1.5;
    @include mixins.rs(
      ('font-size', 19, 21),
      ('margin-top', 25, 50)
    );
    
    strong {
      @include mixins.r('font-size', 22, 27);
      font-weight: 400;
    }

    & + p {
      @include mixins.r('margin-top', 15, 20);
    }
  }
}

</style>

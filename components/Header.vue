<template>
  <section class="header">
    <div class="title">
      <h1>
        <img
          src="/images/title.png"
          srcset="/images/title.png 1x, /images/title@2x.png 2x"
          alt="Design Future Money"
          width="800"
          height="711"
        >
      </h1>
    </div>
    <div class="copy">
      <p>Presidio Bitcoin Design Week</p>
      <p>September 15-19, 2025</p>
      <h2>Bitcoin is the future of money.<wbr>It needs more Design.</h2>
      <p>We’re bringing together designers from the bitcoin community and designers from across Silicon Valley’s tech community to tackle how to beautify, simplify, amplify and human-ify bitcoin—our everyday money of the future.</p>
      <div class="options">
        <a href="#agenda" class="-button">View agenda</a>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

@use "@/assets/css/animations.scss";
@use "@/assets/css/mixins.scss";

.header {
  max-width: 1440px;
  @include mixins.rs(
    ('padding-top', 25, 50),
    ('padding-bottom', 25, 100)
  );

  .copy {
    @include mixins.rs(
      ('padding-left', 15, 50),
      ('padding-right', 15, 50),
      ('padding-top', 25, 50),
      ('padding-bottom', 25, 50)
    );

    h2 {
      margin-top: 55px;
      font-style: italic;
      @include mixins.r('font-size', 27, 34);
    }

    p {
      margin-top: 20px;
      @include mixins.r('font-size', 19, 21);

      &:nth-child(1),
      &:nth-child(2) {
        font-family: 'Playfair Display Variable Italic', serif;
        font-style: italic;
        font-weight: 400;
        line-height: 1.2;
        @include mixins.r('font-size', 21, 27);
      }

      &:nth-child(2) {
        margin-top: 5px;
      }

      &:nth-child(4) {
        
      }
    }

    .options {
      margin-top: 30px;

      a {
        display: inline-block;
        text-decoration: none;
        background-color: #CEE07D;
        color: white;
        padding: 9px 25px;
        font-size: 27px;
        font-weight: 500;
        color: var(--front);

        @include mixins.rs(
          ('font-size', 21, 27),
          ('padding-left', 25, 25),
          ('padding-right', 25, 25),
          ('padding-top', 9, 9),
          ('padding-bottom', 9, 9)
        );
      }
    }
  }

  @include mixins.media-query(small) {
    .title {
      text-align: center;

      img {
        width: calc(100% - 30px);
        height: auto;
      }
    }
  }

  @include mixins.media-query(medium-up) {
    display: flex;
    align-items: center;

    .title {
      flex-basis: 50%;

      img {
        width: 100%;
        height: auto;
      }
    }

    .copy {
      flex-basis: 50%;
      max-width:600px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
}

</style>

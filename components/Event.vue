<template>
  <section class="event">
    <div class="copy">
      <h3 v-html="info.title" />
      <p
        v-if="expanded" 
        class="-description"
        v-html="info.description"
      />
      <p
        v-if="!expanded"
        class="-description"
      >
        <span v-html="info.summary" /><br/> 
        <button 
          v-if="info.description" 
          @click="expanded = true"
        >Read more</button>
      </p>
      <p
        v-if="info.disclaimer"
        class="-disclaimer"
        v-html="info.disclaimer"
      />
      <div class="options">
        <a 
          :href="info.button.url" 
          class="-button"
          target="_blank"
          rel="noopener noreferrer"
        >{{ info.button.label }}</a>
      </div>
    </div>
    <div class="meta -desktop">
      <p v-html="info.date.weekday" />
      <div class="center">
        <p v-html="info.date.day" />
        <p v-html="info.date.month" />
      </div>
      <p v-html="info.date.time" />
    </div>
    <div class="meta -mobile">
      <p v-html="info.date.month + ' ' + info.date.day" />
      <p v-html="info.date.weekday + ', ' + info.date.time" />
      <div class="options">
        <a 
          :href="info.button.url" 
          class="-button"
          target="_blank"
          rel="noopener noreferrer"
        >{{ info.button.label }}</a>
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
    h3 {
      // font-family: 'Playfair Display Variable Italic', serif;
      // font-style: italic;
      font-weight: 500;
      @include mixins.r('font-size', 33, 24);
    }

    p {
      margin-top: 15px;
      line-height: 1.6;
      
      @include mixins.r('font-size', 17, 17);

      button {
        appearance: none;
        padding: 0;
        background: none;
        border: none;
        font-family: variables.$sansSerifFont;
        text-decoration: underline;
        cursor: pointer;
        color: var(--front);
      }

      &.-disclaimer {
        font-style: italic;
      }
    }
  }

  .options {
    @include mixins.r('margin-top', 15, 15);

    a {
      position: relative;
      display: inline-block;
      text-decoration: none;
      background-color: var(--front);
      color: white;
      padding: 9px 25px;
      font-size: 21px;
      font-weight: 500;
      line-height: 1.2;
      color: var(--back);
      @include mixins.rs(
        ('font-size', 17, 17),
        ('padding-left', 18, 15),
        ('padding-right', 18, 15),
        ('padding-top', 12, 8),
        ('padding-bottom', 12, 8)
      );

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0;
        transition: opacity 150ms animations.$ease;
        pointer-events: none;
      }

      &:hover {
        &:after {
          opacity: 0.05;
        }
      }
    }
  }

  .meta {
    background-color: var(--back);
  }

  @include mixins.media-query(small) {
    padding: 0 20px;
    margin-top: 50px;

    .copy {
      .options {
        display: none;
      }
    }

    .meta {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0;
      margin-top: 25px;
      box-sizing: border-box;
      padding: 20px 20px;

      p {
        &:first-child {
          font-size: 21px;
          font-weight: 500;
          line-height: 1.2;
        }

        &:nth-child(2) {
          font-size: 17px;
        }
      }

      .right {
        p {
          line-height: 1;
          text-align: right;
          font-family: 'Playfair Display Variable Italic', serif;
          font-style: italic;
          font-size: 17px;

          &:last-child {
            margin-top: 5px;
          }
        }
      }

      &.-desktop {
        display: none;
      }
    }

    & + .event {
      padding-top: 50px;
      border-top: 1px solid rgba(var(--frontRGB), 0.1);
    }
  }

  @include mixins.media-query(medium-up) {
    display: flex;
    gap: 50px;
    align-items: flex-start;
    margin-top: 50px;

    .copy {
      flex-basis: 50%;
      flex-grow: 1;
    }

    .meta {
      flex-basis: 24%;
      box-sizing: border-box;
      padding: 30px 20px;

      > p {
        line-height: 1;
        text-align: center;

        &:first-child,
        &:last-child {
          // font-family: 'Playfair Display Variable Italic', serif;
          font-style: italic;
          font-size: 17px;
          opacity: 0.65;
        }

        &:last-child {
          margin-top: 25px;
        }
      }

      .center {
        p {
          text-align: center;

          &:nth-child(1) {
            line-height: 0.8;
            font-size: 48px;
            margin-top: 25px;
          }

          &:nth-child(2) {
            line-height: 1;
            font-size: 21px;
            margin-top: 5px;
          }
        }
      }

      &.-mobile {
        display: none;
      }
    }

    & + .event {
      padding-top: 50px;
      border-top: 1px solid rgba(var(--frontRGB), 0.1);
    }
  }
}

</style>

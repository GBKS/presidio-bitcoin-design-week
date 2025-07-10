<template>
  <section class="event">
    <h3 v-html="'—' + info.title" />
    <div class="columns">
      <div class="copy">
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
      </div>
      <div class="meta">
        <p v-html="info.date" />
        <div class="options">
          <a 
            :href="info.button.url" 
            class="-button"
            target="_blank"
            rel="noopener noreferrer"
          >{{ info.button.label }}</a>
        </div>
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
  h3 {
    font-family: 'Playfair Display Variable Italic', serif;
    font-style: italic;
    font-weight: 400;
    @include mixins.r('font-size', 33, 48);
  }

  .columns {
    .copy {
      p {
        margin-top: 20px;
        line-height: 1.6;
        
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

        &.-disclaimer {
          font-style: italic;
        }
      }
    }

    .meta {
      p {
        font-family: 'Playfair Display Variable Italic', serif;
        font-style: italic;
        line-height: 1.2;
        @include mixins.r('font-size', 24, 30);
      }

      .options {
        @include mixins.r('margin-top', 30, 30);

        a {
          position: relative;
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
    }
  }

  @include mixins.media-query(small) {
    padding: 0 15px;

    .copy {
      
    }

    .meta {
      p {
        margin-top: 25px;
      }
    }
  }

  @include mixins.media-query(medium-up) {
    .columns {
      display: flex;
      gap: 50px;

      .copy {
        flex-basis: 70%;
      }

      .meta {
        flex-basis: 30%;

        p {
          margin-top: 15px;
        }
      }
    }
  }
}

</style>

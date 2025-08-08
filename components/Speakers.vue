<template>
  <div class="speakers" id="speakers">
    <h2>Speakers</h2>
    <p>Meet some of the first speakers. More coming soon.</p>

    <div class="items">
      <div 
        v-for="speaker in speakers" 
        :key="speaker.name" 
      >
        <img 
          :src="`/images/speakers/${speaker.image}.jpg`" 
          :srcset="`/images/speakers/${speaker.image}.jpg 1x, /images/speakers/${speaker.image}@2x.jpg 2x`" 
          :alt="speaker.name"
        />
        <h3>{{ speaker.name }}</h3>
        <div class="links">
          <a
            v-if="speaker.x" 
            :href="speaker.x" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.2334 0.314819H19.3001L12.5668 7.98149L20.4334 18.3815H14.2601L9.42676 12.0615L3.89342 18.3815H0.826758L7.96009 10.1815L0.426758 0.314819H6.75342L11.1201 6.08815L16.2334 0.314819ZM15.1601 16.5815H16.8601L5.86009 2.04815H4.03342L15.1601 16.5815Z" fill="currentColor"/>
            </svg>
          </a>
          <a 
              v-if="speaker.li"
            :href="speaker.li" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_287_1441)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.72222 20.3481H18.2778C19.5051 20.3481 20.5 19.3532 20.5 18.1259V2.57037C20.5 1.34307 19.5051 0.348145 18.2778 0.348145H2.72222C1.49492 0.348145 0.5 1.34307 0.5 2.57037V18.1259C0.5 19.3532 1.49492 20.3481 2.72222 20.3481Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7228 17.5703H14.7549V12.5153C14.7549 11.1294 14.2283 10.3549 13.1313 10.3549C11.9379 10.3549 11.3145 11.1609 11.3145 12.5153V17.5703H8.45425V7.94067H11.3145V9.23778C11.3145 9.23778 12.1744 7.64647 14.2179 7.64647C16.2605 7.64647 17.7228 8.89376 17.7228 11.4734V17.5703ZM5.04203 6.67975C4.06778 6.67975 3.27832 5.88409 3.27832 4.9028C3.27832 3.92151 4.06778 3.12585 5.04203 3.12585C6.01628 3.12585 6.80527 3.92151 6.80527 4.9028C6.80527 5.88409 6.01628 6.67975 5.04203 6.67975ZM3.56514 17.5703H6.5476V7.94067H3.56514V17.5703Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_287_1441">
                  <rect width="20" height="20" fill="white" transform="translate(0.5 0.348145)"/>
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const speakers = [
  {
    name: 'Mogashni Naidoo',
    image: 'mn',
    x: 'https://x.com/MouxDesign',
    li: 'https://www.linkedin.com/in/mogashninaidoo/'
  },
  {
    name: 'Kyle Fletcher',
    image: 'kf',
    x: 'https://x.com/kyleluvsew',
    li: 'https://www.linkedin.com/in/kylefletcher/'
  },
  {
    name: 'Christoph Ono',
    image: 'co',
    x: 'https://x.com/GBKS',
    li: 'https://www.linkedin.com/in/germanysbestkeptsecret/'
  },
  {
    name: 'Mat Balez',
    image: 'mb',
    x: 'https://x.com/matbalez',
    li: 'https://www.linkedin.com/in/matbalez/'
  },
  {
    name: 'Nick Slaney',
    image: 'ns',
    x: 'https://x.com/nick_slaney',
    li: 'https://www.linkedin.com/in/nickslaney/'
  },
  {
    name: 'Steve Lee',
    image: 'sl',
    x: 'https://x.com/moneyball',
    li: 'https://www.linkedin.com/in/stevenjlee/'
  }
]

</script>

<style lang="scss" scoped>

@use "@/assets/css/animations.scss";
@use "@/assets/css/mixins.scss";

.speakers {
  max-width: 840px;
  padding-left: 20px;
  padding-right: 20px;
  
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
      ('margin-top', 15, 20)
    );
  }

  .items {
    margin-top: 60px;
    display: flex;
    gap: 40px;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;

      img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }

      h3 {
        font-size: 21px;
        text-align: center;
      }

      .links {
        margin-top: 0px;
        display: flex;
        align-items: center;
        gap: 10px;

        a {
          color: var(--front);

          svg {
            width: 20px;
            height: 20px;
          }

          &:hover {
            color: var(--primary);
          }
        }
      }
    }
  }

  @include mixins.media-query(small) {
    .items {
      flex-wrap: wrap;

      > div {
        flex-basis: 34%;
        flex-grow: 1;

        h3 {
          font-size: 19px;
        }
      }
    }
  }

  @include mixins.media-query(medium-up) {
    .items {
      flex-wrap: wrap;

      > div {
        flex-basis: 30%;
        flex-grow: 1;

        img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
        }
      }

      > div {
        // flex-basis: 17%;
      }
    }
  }
}

</style>

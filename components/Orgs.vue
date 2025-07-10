<template>
  <section class="orgs">
    <h2>Organized by</h2>
    <div class="content">
      <div class="item -presidio-bitcoin">
        <a href="https://www.presidiobitcoin.org" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/presidio-bitcoin.png"
            alt="Bitcoin Presidio logo"
            width="300"
            height="300"
          />
        </a>
        <h3>
          <a
            href="https://www.presidiobitcoin.org"
            target="_blank"
            rel="noopener noreferrer"
          >Presidio Bitcoin</a>
        </h3>
        <p>
          <a
            href="https://www.presidiobitcoin.org"
            target="_blank"
            rel="noopener noreferrer"
          >Visit website</a>
        </p>
        <p>
          <a
            href="https://twitter.com/PresidioBitcoin"
            target="_blank"
            rel="noopener noreferrer"
          >Social media</a>
        </p>
      </div>
      <div class="item -bitcoin-design">
        <a href="https://bitcoin.design" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/bitcoin-design-community.png"
            alt="Bitcoin Design Community logo"
            width="300"
            height="300"
          />
        </a>
        <h3>
          <a
            href="https://bitcoin.design"
            target="_blank"
            rel="noopener noreferrer"
          >Bitcoin Design Community</a>
        </h3>
        <p>
          <a
            href="https://bitcoin.design"
            target="_blank"
            rel="noopener noreferrer"
          >Visit website</a>
        </p>
        <p>
          <a
            href="https://twitter.com/bitcoin_design"
            target="_blank"
            rel="noopener noreferrer"
          >Social media</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

@use "@/assets/css/animations.scss";
@use "@/assets/css/mixins.scss";
@use "@/assets/css/variables.scss";

.orgs {
  width: 100%;
  max-width: 1000px;
  box-sizing: border-box;
  @include mixins.rs(
    ('padding-left', 15, 30),
    ('padding-right', 15, 30),
    ('padding-top', 50, 50),
    ('padding-bottom', 100, 100)
  );
  
  h2 {
    font-family: variables.$serifFontItalic;
    text-align: center;
  }

  .content {
    display: flex;
    @include mixins.r('margin-top', 50, 50);

    .item {
      flex-basis: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;

      > a {
        text-decoration: none;

        img {
          max-width: 200px;
          height: auto;
        }
      }

      h3 {
        text-align: center;
        white-space: nowrap;
        @include mixins.r('margin-top', 10, 20);

        a {
          color: var(--front);
          text-decoration: none;
          font-weight: 500;
          @include mixins.r('font-size', 24, 27);

          &:hover {
            transition: color 100ms animations.$ease;
            color: var(--primary);
          }
        }

        & + p {
          @include mixins.r('margin-top', 5, 10);
        }
      }

      p {
        text-align: center;

        a {
          color: var(--front);
          text-decoration: underline;
          text-decoration-color: rgba(var(--frontRGB), 0.2);
          @include mixins.r('font-size', 21, 24);

          &:hover {
            transition: color 100ms animations.$ease;
            color: var(--primary);
            text-decoration-color: var(--primary);
          }
        }
      }
    }
  }
  
  @include mixins.media-query(small) {
    .content {
      flex-direction: column;
      gap: 50px;
    }
  }
}

</style>

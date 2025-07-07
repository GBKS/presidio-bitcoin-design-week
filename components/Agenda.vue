<template>
  <section class="agenda" :style="styleObject">
    <div class="all-day">
      <div class="content">
        <h2>{{ title }}</h2>
        <Event
          v-for="(info, index) in eventData"
          :key="index"
          :index="index"
          :info="info"
        />
      </div>
    </div>
  </section>
</template>

<script setup>

const props = defineProps([
  'title',
  'color',
  'events',
  'pattern'
])

const styleObject = computed(() => {
  return {
    backgroundColor: props.color || '#F2EA9B',
    backgroundImage: props.pattern ? `url('/images/${props.pattern}.jpg')` : ''
  }
})

const eventData = computed(() => {
  return props.events === 'evening' ? eventCopy.slice(0, 3) : eventCopy.slice(3)
})

const eventCopy = [
  {
    title: "Who uses Bitcoin & Why",
    summary: "While we design payment flows for coffee purchases, billions of people need financial tools just to survive—and tonight you'll meet the users whose freedom depends on the technology we build. From journalists in authoritarian regimes who need censorship-resistant payments to families in hyperinflationary economies protecting their life savings, you'll discover how your design decisions can literally change lives. ",
    description: "While we design payment flows for coffee purchases, billions of people need financial tools just to survive—and tonight you'll meet the users whose freedom depends on the technology we build. From journalists in authoritarian regimes who need censorship-resistant payments to families in hyperinflationary economies protecting their life savings, you'll discover how your design decisions can literally change lives.<br/><br/>This is your chance to understand how you as Silicon Valley designers can use your skills to build freedom technology for the world's most vulnerable users.<br/><br/>The evening will wrap by understanding how even in the relative political & economic stability of the USA, the money system upon which the economy is constructed is deeply flawed. We will screen an illustrated narration of macroeconomic analyst and author Lyn Alden’s book, Broken Money, to take you into the heart of what makes money work and how it might be fixed.",
    date: "September 15 <wbr>6:30pm to 9pm",
    button: {
      label: "Reserve your spot",
      url: "#"
    }
  },
  {
    title: "Designing Future Payments: Stablecoins vs Bitcoin",
    summary: "We’re entering a period of global financial infrastructure upheaval. Stablecoins promise to bring the relative stability and trustworthiness of the US dollar to the whole world with greater accessibility speed and low cost. Yet, Bitcoin (and its related layer 2 scaling technologies) bring an entirely different and decentralized approach to becoming everyday for the whole world. ",
    description: "We’re entering a period of global financial infrastructure upheaval. Stablecoins promise to bring the relative stability and trustworthiness of the US dollar to the whole world with greater accessibility speed and low cost. Yet, Bitcoin (and its related layer 2 scaling technologies) bring an entirely different and decentralized approach to becoming everyday for the whole world. Both have their benefits and challenges. We’ve invited SPEAKER1 to make the case for stablecoins and SPEAKER2 to make the case for Bitcoin. We’ll then break off into small groups to discuss and design together to see if we can answer the question of which payments technology of the future is best for which users and why.",
    date: "September 16 <wbr>6:30pm to 9pm",
    button: {
      label: "Reserve your spot",
      url: "#"
    }
  },
  {
    title: "Vibe Coding with Bitcoin",
    summary: "Vibe coding has changed everything. Suddenly it is possible for anyone to build anything, with nothing more than natural language. And now that includes building with a new primitive for instant borderless value transfer: Bitcoin. In this practical session aimed at Designers who want to build with bitcoin, we’ll cover some vibe coding tools and best practices, and some easy ways to get started with integrating bitcoin payments into the experiences you want to bring to life. ",
    description: "Vibe coding has changed everything. Suddenly it is possible for anyone to build anything, with nothing more than natural language. And now that includes building with a new primitive for instant borderless value transfer: Bitcoin. In this practical session aimed at Designers who want to build with bitcoin, we’ll cover some vibe coding tools and best practices, and some easy ways to get started with integrating bitcoin payments into the experiences you want to bring to life. We’ll then build together and showcase our creations.",
    date: "September 17 <wbr>6:30pm to 9pm",
    button: {
      label: "Reserve your spot",
      url: "#"
    }
  },
  {
    title: "Deep Dive: The Grand Challenges of Bitcoin Design",
    summary: "Designing in Bitcoin is notoriously hard. Decentralization. Self-sovereignty. Designing for decades / centuries. Adversarial mindset. Presents all kinds of issues both big and small, but all important. If we want to onboard the next billion users we need to overcome these design challenges. Silicon Valley designers - we need your help to get there. Bring your good ideas. We will design and prototype solutions together all day long. ",
    date: "September 18 <wbr>9:30am to 5pm",
    button: {
      label: "Apply to attend",
      url: "#"
    }
  },
  {
    title: "Deep Dive: Redesigning Silicon Valley with Bitcoin",
    summary: "What if the tech products of Silicon Valley had bitcoin deeply integrated into them? What would that look like? How would they behave? Let’s help them catch up! Let’s do the design exploration and heavy lifting and bring to life all kinds of new experiences that bitcoin could provide inside the products we are so familiar with. Vibe-coding encouraged!",
    date: "September 19 <wbr>9:30am to 5pm",
    button: {
      label: "Apply to attend",
      url: "#"
    }
  }
]

</script>

<style lang="scss" scoped>

@use "@/assets/css/animations.scss";
@use "@/assets/css/mixins.scss";

.agenda {
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 100px;

    .content {
      max-width: 940px;
      display: flex;
      flex-direction: column;
      align-items: center;
      @include mixins.r('gap', 50, 100);

      h2 {
        font-family: 'Playfair Display Variable', serif;
        font-weight: 700;
        text-align: center;
        color: var(--back);
        text-transform: uppercase;
        line-height: 1;
        @include mixins.r('font-size', 48, 72);
      }
    }
  }
}

</style>

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
    summary: "While we design payment flows for coffee purchases, billions of people need financial tools just to survive—and tonight you'll meet the users whose freedom depends on the technology we build. From journalists in authoritarian regimes who need censorship-resistant payments to families in hyperinflationary economies protecting their life savings, you'll discover how your design decisions can literally change lives. ",
    description: "While we design payment flows for coffee purchases, billions of people need financial tools just to survive—and tonight you'll meet the users whose freedom depends on the technology we build. From journalists in authoritarian regimes who need censorship-resistant payments to families in hyperinflationary economies protecting their life savings, you'll discover how your design decisions can literally change lives.<br/><br/>This is your chance to understand how you as Silicon Valley designers can use your skills to build freedom technology for the world's most vulnerable users.<br/><br/>The evening will wrap by understanding how even in the relative political & economic stability of the USA, the money system upon which the economy is constructed is deeply flawed. We will screen an illustrated narration of macroeconomic analyst and author Lyn Alden’s book, Broken Money, to take you into the heart of what makes money work and how it might be fixed.",
    date: "September 16 <wbr>6:30pm to 9pm",
    button: {
      label: "Reserve your spot",
      url: "#"
    }
  },
  {
    title: "Vibe Coding with Bitcoin",
    summary: "While we design payment flows for coffee purchases, billions of people need financial tools just to survive—and tonight you'll meet the users whose freedom depends on the technology we build. From journalists in authoritarian regimes who need censorship-resistant payments to families in hyperinflationary economies protecting their life savings, you'll discover how your design decisions can literally change lives. ",
    description: "While we design payment flows for coffee purchases, billions of people need financial tools just to survive—and tonight you'll meet the users whose freedom depends on the technology we build. From journalists in authoritarian regimes who need censorship-resistant payments to families in hyperinflationary economies protecting their life savings, you'll discover how your design decisions can literally change lives.<br/><br/>This is your chance to understand how you as Silicon Valley designers can use your skills to build freedom technology for the world's most vulnerable users.<br/><br/>The evening will wrap by understanding how even in the relative political & economic stability of the USA, the money system upon which the economy is constructed is deeply flawed. We will screen an illustrated narration of macroeconomic analyst and author Lyn Alden’s book, Broken Money, to take you into the heart of what makes money work and how it might be fixed.",
    date: "September 17 <wbr>6:30pm to 9pm",
    button: {
      label: "Reserve your spot",
      url: "#"
    }
  },
  {
    title: "Deep Dive: The Grand Challenges of Bitcoin Design",
    summary: "While we design payment flows for coffee purchases, billions of people need financial tools just to survive—and tonight you'll meet the users whose freedom depends on the technology we build. From journalists in authoritarian regimes who need censorship-resistant payments to families in hyperinflationary economies protecting their life savings, you'll discover how your design decisions can literally change lives. ",
    description: "While we design payment flows for coffee purchases, billions of people need financial tools just to survive—and tonight you'll meet the users whose freedom depends on the technology we build. From journalists in authoritarian regimes who need censorship-resistant payments to families in hyperinflationary economies protecting their life savings, you'll discover how your design decisions can literally change lives.<br/><br/>This is your chance to understand how you as Silicon Valley designers can use your skills to build freedom technology for the world's most vulnerable users.<br/><br/>The evening will wrap by understanding how even in the relative political & economic stability of the USA, the money system upon which the economy is constructed is deeply flawed. We will screen an illustrated narration of macroeconomic analyst and author Lyn Alden’s book, Broken Money, to take you into the heart of what makes money work and how it might be fixed.",
    date: "September 18 <wbr>9:30am to 5pm",
    button: {
      label: "Apply to attend",
      url: "#"
    }
  },
  {
    title: "Deep Dive: Redesigning Silicon Valley with Bitcoin",
    summary: "While we design payment flows for coffee purchases, billions of people need financial tools just to survive—and tonight you'll meet the users whose freedom depends on the technology we build. From journalists in authoritarian regimes who need censorship-resistant payments to families in hyperinflationary economies protecting their life savings, you'll discover how your design decisions can literally change lives. ",
    description: "While we design payment flows for coffee purchases, billions of people need financial tools just to survive—and tonight you'll meet the users whose freedom depends on the technology we build. From journalists in authoritarian regimes who need censorship-resistant payments to families in hyperinflationary economies protecting their life savings, you'll discover how your design decisions can literally change lives.<br/><br/>This is your chance to understand how you as Silicon Valley designers can use your skills to build freedom technology for the world's most vulnerable users.<br/><br/>The evening will wrap by understanding how even in the relative political & economic stability of the USA, the money system upon which the economy is constructed is deeply flawed. We will screen an illustrated narration of macroeconomic analyst and author Lyn Alden’s book, Broken Money, to take you into the heart of what makes money work and how it might be fixed.",
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

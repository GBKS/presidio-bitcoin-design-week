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
    title: "The People We Build For",
    summary: "The foundations of money are broken—in some parts of the world more than others.<br/><br/>​For billions of people, a new money system that is neutral, permissionless and predictable represents an order of magnitude improvement in their ability to survive let alone get ahead.",
    description: "The foundations of money are broken—in some parts of the world more than others.<br/><br/>​For billions of people, a new money system that is neutral, permissionless and predictable represents an order of magnitude improvement in their ability to survive let alone get ahead.<br/><br/>​If the future of money is bitcoin, we should first start by understanding the diverse set of users it will serve and the use cases it will solve.<br/><br/>​In this first evening session kicking off Design Week you will be introduced to the people being left behind by the existing money system, you will learn how how bitcoin is already being actively used in empowering and surprising ways around the world today, and you will have an opportunity to get hands on and see and feel the design gaps that still exist with these freedom-enabling products that operate at a frontier that may seem far from home but points the way towards the type of financial system we all want to see.",
    date: {
      weekday: "Monday",
      day: "15",
      month: "September",
      time: "6:30pm to 9pm"
    },
    disclaimer: "Admission is free.",
    button: {
      label: "Reserve your spot",
      url: "https://lu.ma/qc1qpby0"
    }
  },
  {
    title: "Designing Future Payments: Stablecoins vs Bitcoin",
    summary: "The future of money is inextricably tied to the future of payments.<br/><br/>So will the future of payments be bitcoin? Or will it be stablecoins? Two divergent futures present themselves.<br/><br/>How do each improve upon fiat payment rails? What are their relative trust assumptions? Fee considerations? User experience implications?",
    description: "The future of money is inextricably tied to the future of payments.<br/><br/>So will the future of payments be bitcoin? Or will it be stablecoins? Two divergent futures present themselves.<br/><br/>How do each improve upon fiat payment rails? What are their relative trust assumptions? Fee considerations? User experience implications?<br/><br/>In this evening session, we will hear both sides of the story from industry experts. And then we’ll break up into small groups to weigh up both visions for the path ahead to see if and how design thinking can help us identify weaknesses, make improvements and ultimately decide which version of the future we should want to help bring to life.",
    date: {
      weekday: "Tuesday",
      day: "16",
      month: "September",
      time: "6:30pm to 9pm"
    },
    disclaimer: "Admission is free.",
    button: {
      label: "Reserve your spot",
      url: "https://lu.ma/knpgd19x"
    }
  },
  {
    title: "Vibe Coding with Bitcoin",
    summary: "Vibe coding has changed everything. Including design.<br/><br/>Suddenly it’s now possible for anyone to build anything using nothing more than natural language.<br/><br/>And now that includes building with bitcoin—future money that is permissionless, borderless and programmable.",
    description: "Vibe coding has changed everything. Including design.<br/><br/>Suddenly it’s now possible for anyone to build anything using nothing more than natural language.<br/><br/>And now that includes building with bitcoin—future money that is permissionless, borderless and programmable.<br/><br/>In this practical session aimed at designer-builders who want to use bitcoin to explore what is now possible, Mat Balez will cover his favorite vibe coding tools and the most accessible ways to integrate bitcoin. We’ll then have some hands-on time together and see how many prototypes we can ship together in 90 minutes.<br/><br/>It’ll be an evening of experimentation and shipping fun.",
    date: {
      weekday: "Wednesday",
      day: "17",
      month: "September",
      time: "6:30pm to 9pm"
    },
    disclaimer: "Admission is free.",
    button: {
      label: "Reserve your spot",
      url: "https://lu.ma/pl2haukv"
    }
  },
  {
    title: "Deep Dive: The Grand Challenges of Bitcoin Design",
    summary: "Designing for bitcoin is notoriously hard.<br/><br/>Decentralization. Self-sovereignty. Resilience. Adversarial thinking. Trust minimization.<br/><br/>These features, deeply embedded into bitcoin’s technical architecture as well as its ethos, form the central design constraints we work within.",
    description: "Designing for bitcoin is notoriously hard.<br/><br/>Decentralization. Self-sovereignty. Resilience. Adversarial thinking. Trust minimization.<br/><br/>These features, deeply embedded into bitcoin’s technical architecture as well as its ethos, form the central design constraints we work within. Can we design products and experiences that bring bitcoin to billions of users: while staying true to these values? while delivering on the promise of what this future money can be? while remaining as simple as possible?<br/><br/>This full-day Deep Dive invites Silicon Valley designers to spend a day with bitcoin designers to examine these questions through the lens of the Grand Challenges of Bitcoin Design—a handful of the most impactful and deceptively tricky design problems in bitcoin like: bitcoin’s branding, on-ramps and off-ramps, self-custody, identity & addressing schemes, units and quantities and privacy. We’ll study these problems together and work in small groups to bring design solutions to light.<br/><br/>There will also be an opportunity to hear from the bitcoin startups working out of Presidio Bitcoin that are pushing the frontier of bitcoin product development forward.<br/><br/>Join us for a day of collaborative problem solving.",
    date: {
      weekday: "Thursday",
      day: "18",
      month: "September",
      time: "9am to 5pm"
    },
    disclaimer: "Admission is free. Space is limited.",
    button: {
      label: "Apply to attend",
      url: "https://tally.so/r/wapdNZ"
    }
  },
  {
    title: "Deep Dive: Redesigning Silicon Valley with Bitcoin",
    summary: "The big tech products of Silicon Valley largely shape our modern digital lives at massive scale.<br/><br/>Now let’s hit the fast-forward button.<br/><br/>What happens when we add bitcoin to the mix?",
    description: "The big tech products of Silicon Valley largely shape our modern digital lives at massive scale.<br/><br/>Now let’s hit the fast-forward button.<br/><br/>What happens when we add bitcoin to the mix?<br/><br/>How might these products change? How would they look and feel? How would they behave? What new possibilities present themselves when borderless, permission-less value transfer is at every user’s fingertips? At every AI agent's fingertips?<br/><br/>This full-day Deep Dive is an opportunity to jump in, get creative and imagine this future together.<br/><br/>We’ll spend the day working in small teams inventing, sketching and vibe-coding to life prototypes of the wild future that will emerge when Future Money collides with the Silicon Valley products we all know and love.",
    date: {
      weekday: "Friday",
      day: "19",
      month: "September",
      time: "9am to 5pm"
    },
    disclaimer: "Admission is free. Space is limited.",
    button: {
      label: "Apply to attend",
      url: "https://tally.so/r/megRMk"
    }
  }
]

</script>

<style lang="scss" scoped>

@use "@/assets/css/animations.scss";
@use "@/assets/css/mixins.scss";

.agenda {
  width: 100%;
  background-position: top center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;

    .content {
      max-width: 840px;
      display: flex;
      flex-direction: column;
      align-items: center;
      // @include mixins.r('gap', 0, 50);

      h2 {
        // font-family: 'Playfair Display Variable', serif;
        // font-weight: 700;
        text-align: center;
        color: var(--front);
        text-transform: uppercase;
        line-height: 1;
        @include mixins.r('font-size', 24, 30);
      }
    }
  }
}

</style>

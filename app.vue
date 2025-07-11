<template>
  <!--
  _     _ _            _             _           _
  | |__ (_) |_ ___ ___ (_)_ __     __| | ___  ___(_) __ _ _ __
  | '_ \| | __/ __/ _ \| | '_ \   / _` |/ _ \/ __| |/ _` | '_ \
  | |_) | | || (_| (_) | | | | | | (_| |  __/\__ \ | (_| | | | |
  |_.__/|_|\__\___\___/|_|_| |_|  \__,_|\___||___/_|\__, |_| |_|
                                                    |___/
  -->
  <main>
    <Header />
    <div class="sentinel" ref="sentinel" />
    <a href="#agenda" :class="buttonClass">View agenda</a>
    <Segment index="0" contentId="future" />
    <Segment index="1" contentId="simpler" />
    <Segment index="2" contentId="tension" />
    <hr />
    <Invite />
    <Agenda
      id="agenda"
      title="All-day events"
      color="#F2EA9B"
      pattern="waves-green"
      events="allday"
    />
    <Agenda
      title="Evening events"
      color="#CEE07D"
      pattern="waves-yellow"
      events="evening"
    />
    <Orgs />
  </main>
</template>

<script setup>

const sentinel = ref(null);
let observer = null;
const isSticky = ref(false);

function setupObserver() {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const position = window.scrollY || document.documentElement.scrollTop;

        isSticky.value = position > 100 && !entry.isIntersecting;
      });
    },
    {
      threshold: 0
    }
  );
}

const buttonClass = computed(() => {
  const c = ['agenda-button'];
  if (isSticky.value) {
    c.push('-sticky');
  }
  return c;
});

onMounted(() => {
  if(import.meta.client && sentinel.value) {
    setupObserver()
    observer.observe(sentinel.value);
  }

  console.log('Join Bitcoin Design: https://bitcoin.design/');
});

</script>

<style lang="scss" scoped>

@use "@/assets/css/animations.scss";
@use "@/assets/css/mixins.scss";

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  hr {
    border: none;
    border-top: 1px solid rgba(var(--frontRGB), 0.1);
    width: 100%;
  }

  .sentinel {
    width: 1px;
    height: 1px;
    pointer-events: none;
    visibility: hidden;
  }
  
  > .agenda-button {
    position: fixed;
    top: -80px;
    right: 20px;
    display: block;
    text-decoration: none;
    background-color: #CEE07D;
    background-image: url('/images/button-back.png');
    background-size: cover;
    padding: 9px 25px;
    font-size: 21px;
    font-weight: 500;
    line-height: 1.2;
    color: var(--front);
    transition: top 250ms animations.$ease;

    @include mixins.rs(
      ('font-size', 19, 21),
      ('padding-left', 20, 20),
      ('padding-right', 20, 20),
      ('padding-top', 9, 9),
      ('padding-bottom', 9, 9)
    );

    &:hover {
      color: rgba(var(--frontRGB), 0.5);
      // transition: color 100ms animations.$ease;
    }

    &.-sticky {
      top: 20px;
    }
  }
}

</style>
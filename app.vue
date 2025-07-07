<template>
  <main>
    <Header />
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
    <Footer v-if="false" />
  </main>
</template>

<style lang="scss" scoped>

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
}

</style>
const app = document.querySelector('#app');

app.innerHTML = `
  <section class="hero">
    <div class="hero__content">
      <p class="hero__tag">Tattoo artist</p>
      <h1 class="hero__title">Авторские татуировки и уникальные эскизы</h1>
      <p class="hero__text">
        Индивидуальные проекты, аккуратная работа и запись через Telegram.
      </p>

      <div class="hero__actions">
        <a class="button" href="https://t.me/username" target="_blank">Написать в Telegram</a>
        <a class="button button--ghost" href="https://t.me/channelname" target="_blank">Telegram-канал</a>
      </div>
    </div>
  </section>
`;
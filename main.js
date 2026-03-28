const app = document.querySelector('#app');

app.innerHTML = `
  <section class="hero" id="top">
    <div class="hero__overlay"></div>

    <div class="hero__content">
      <p class="hero__tag">Tattoo artist</p>

      <h1 class="hero__title">
        Авторские татуировки<br />
        и уникальные эскизы
      </h1>

      <p class="hero__text">
        Работаю в индивидуальном стиле, подбираю эскиз под тебя.
        Запись и консультация — в Telegram.
      </p>

      <div class="hero__actions">
        <a class="button" href="https://t.me/username" target="_blank">
          Записаться
        </a>
        <a class="button button--ghost" href="#sketches">
          Эскизы
        </a>
      </div>
    </div>
  </section>

  <section class="sketches" id="sketches">
    <div class="sketches__container">
      <p class="section-tag">Sketches</p>
      <h2 class="section-title">Эскизы</h2>
      <p class="section-text">
        Здесь будут размещены авторские эскизы. Часть работ будет доступна для
        просмотра, а полный доступ откроется после оплаты.
      </p>
    </div>
  </section>
`;
const scrollBtn = document.querySelector('a[href="#sketches"]');

scrollBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const target = document.querySelector('#sketches');
  const start = window.scrollY;
  const end = target.offsetTop;

  const duration = 1200; // время (чем больше — тем плавнее)
  let startTime = null;

  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;

    const time = currentTime - startTime;
    const progress = Math.min(time / duration, 1);

    const ease = easeInOutCubic(progress);

    window.scrollTo(0, start + (end - start) * ease);

    if (time < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
});
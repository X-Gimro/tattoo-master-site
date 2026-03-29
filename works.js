const app = document.querySelector("#app");

app.innerHTML = `
  <div class="page">
    <header class="header">
      <div class="header__logo">loraxultrasound.tatt</div>

      <nav class="header__nav">
        <a href="./index.html" class="header__link">главная</a>
        <a href="./works.html" class="header__link">работы</a>
        <a href="./works.html" class="header__link">эскизы</a>
        <a href="./works.html" class="header__link">контакты</a>
      </nav>
    </header>

    <main class="layout">
      <section class="works-page">
        <div class="works-page__top">
          <p class="works-page__label">portfolio</p>
          <h1 class="works-page__title">работы</h1>
          <p class="works-page__subtitle">
            подборка татуировок и эскизов в авторском стиле
          </p>
        </div>

        <div class="works-grid">
          <article class="work-card">
            <img class="work-card__image" src="./work-1.png" alt="Работа 1" />
          </article>

          <article class="work-card">
            <img class="work-card__image" src="./work-2.png" alt="Работа 2" />
          </article>

          <article class="work-card">
            <img class="work-card__image" src="./work-3.png" alt="Работа 3" />
          </article>

          <article class="work-card">
            <img class="work-card__image" src="./work-4.png" alt="Работа 4" />
          </article>

          <article class="work-card">
            <img class="work-card__image" src="./work-5.png" alt="Работа 5" />
          </article>

          <article class="work-card">
            <img class="work-card__image" src="./work-6.png" alt="Работа 6" />
          </article>
        </div>
      </section>
    </main>
  </div>
`;
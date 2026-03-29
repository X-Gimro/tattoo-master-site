const app = document.querySelector('#app');

app.innerHTML = `
  <div class="page">
    <header class="header">
      <div class="header__logo">loraxultrasound.tatt</div>

      <nav class="header__nav">
        <a href="#home" class="header__link">главная</a>
        <a href="#works" class="header__link">работы</a>
        <a href="#sketches" class="header__link">эскизы</a>
        <a href="#socials" class="header__link">соцсети</a>
      </nav>
    </header>

    <main class="layout">
      <section class="hero-card" id="home">
        <div class="hero-card__image-wrap">
          <img
            class="hero-card__image"
            src="./one.png"
            alt="Тату эскиз"
          />

          <h1 class="hero-card__title">
            МОДЕЛЬНЫЕ ПРАЙСЫ
          </h1>

          <div class="hero-card__star"></div>
        </div>
      </section>

      <section class="logo-section">
        <img
          class="logo-section__image"
          src="./logo.png"
          alt="Logo"
        />
      </section>
    </main>
  </div>
`;
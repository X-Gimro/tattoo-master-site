const app = document.querySelector('#app');

app.innerHTML = `
  <div class="page">

    <!-- ШАПКА -->
    <header class="header">
      <div class="header__logo">loraxultrasound.tatt</div>

      <nav class="header__nav">
        <a href="#home" class="header__link">главная</a>
        <a href="#works" class="header__link">работы</a>
        <a href="#sketches" class="header__link">эскизы</a>
        <a href="social.html" class="header__link">соцсети</a>
      </nav>
    </header>

    <!-- ГЛАВНЫЙ БЛОК -->
    <section class="hero-card" id="home">
   <div class="hero-card__image-wrap">

  <a href="details.html">
    <img src="./one.png" alt="" class="hero-card__image">
  </a>

  <div class="hero-card__star"></div>

  <div class="hero-card__title">
  эскизы для реализации
  </div>

</div>
    </section>

    <!-- ЛОГО -->
    <section class="logo-section">
      <img src="./logo.png" alt="" class="logo-section__image">
    </section>

    <!-- РАБОТЫ -->
    <section id="works">

      <div class="works-header">
        <h2 class="works-header__title">примеры работ</h2>
      </div>

      <div class="works-content">

        <!-- БОЛЬШАЯ -->
        <div class="works-big">
            <img src="./work-big.png" alt="">

          <div class="works-big-text">
            <h2>Название работы</h2>
            <p>Краткое описание работы</p>
          </div>
        </div>

        <!-- СПИСОК -->
        <div class="works-small-list">

          <div class="works-small-item">
            <img src="./work-small-1.png" alt="">
            <div class="works-small-text">
              <h3>Название</h3>
              <p>Описание</p>
            </div>
          </div>

          <div class="works-small-item">
            <img src="./work-small-2.png" alt="">
            <div class="works-small-text">
              <h3>Название</h3>
              <p>Описание</p>
            </div>
          </div>

          <div class="works-small-item">
            <img src="./work-small-3.png" alt="">
            <div class="works-small-text">
              <h3>Название</h3>
              <p>Описание</p>
            </div>
          </div>

        </div>

      </div>
    </section>

  </div>
`;
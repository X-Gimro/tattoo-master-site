const app = document.querySelector('#app');

app.innerHTML = `
  <div class="page">

    <header class="header">
      <div class="header__logo">loraxultrasound.tatt</div>

     <nav class="header__nav">
  <a href="#home" class="header__link">главная</a>
  <a href="#works" class="header__link">работы</a>
  <a href="#sketches" class="header__link">эскизы</a>
  <a href="social.html" class="header__link">соцсети</a>
</nav>
    </header>

    <main class="layout">
    <section class="hero-card" id="home">
  <a href="details.html" class="hero-card__link">
    <div class="hero-card__image-wrap">
      <img 
        src="./one.png" 
        alt="Тату работа" 
        class="hero-card__image"
      />

      <div class="hero-card__star"></div>

      <h1 class="hero-card__title">
        модельные прайсы
      </h1>
    </div>
  </a>
</section>

      <section class="logo-section">
        <img 
          class="logo-section__image" 
          src="./logo.png" 
          alt="Logo"
        />
      </section>
      <section class="works-header" id="works">
  <h2 class="works-header__title">примеры работ</h2>
</section>
<div class="works-content">

  <!-- БОЛЬШАЯ КАРТИНКА -->
  <div class="works-big">
    <img src="./work-big.png" alt="Большая работа" />
    <div class="works-big-text">
    <h2>жопа тату</h2>
    <p>тут кароче описание жопы надо и тату ялялялялял</p>
  </div>
  </div>

  <!-- ПРАВАЯ КОЛОНКА -->
  <div class="works-small-list">

    <div class="works-small-item">
      <img src="./work-small-1.png" alt="Работа 1" />
      <div class="works-small-text">
        <h3>тату жени</h3>
        <p>описание</p>
      </div>
    </div>

    <div class="works-small-item">
      <img src="./work-small-2.png" alt="Работа 2" />
      <div class="works-small-text">
        <h3>тату рука</h3>
        <p>описание</p>
      </div>
    </div>

    <div class="works-small-item">
      <img src="./work-small-3.png" alt="Работа 3" />
      <div class="works-small-text">
        <h3>тату нога</h3>
        <p>описание</p>
      </div>
    </div>

  </div>

</div>
    </main>

  </div>
`;
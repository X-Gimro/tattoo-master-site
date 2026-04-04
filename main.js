const app = document.querySelector('#app');

app.innerHTML = `
  <div class="page">

    <!-- ШАПКА -->
    <header class="header">
      <div class="header__logo">loraxultrasound.tatt</div>

      <nav class="header__nav">
        <a href="#home" class="header__link">главная</a>
        <a href="sketches.html" class="header__link">эскизы</a>
        <a href="social.html" class="header__link">соцсети</a>
      </nav>
    </header>

    <!-- ЛОГО -->
    <section class="logo-section" id="home">
      <img src="./logo.png" alt="" class="logo-section__image">
    </section>

    <!-- РАБОТЫ -->
    <section id="works">

      <div class="works-header">
        <h2 class="works-header__title">примеры работ*</h2>
      </div>

      <div class="works-content">

        <!-- БОЛЬШАЯ -->
        <div class="works-big">
          <img src="./work-big.JPG" alt="SPIKEs & CROSSEs">

          <div class="works-big-text">
            <h2>SPIKEs & CROSSEs</h2>
            <p>[home freehand ://]</p>
          </div>
        </div>

        <!-- СПИСОК -->
        <div class="works-small-list">

          <div class="works-small-item">
            <img src="./work-small-1.JPG" alt="STARs BRITHMARK">
            <div class="works-small-text">
              <h3>STARs BRITHMARK</h3>
              <p>[freehand]</p>
            </div>
          </div>

          <div class="works-small-item">
            <img src="./work-small-2.JPG" alt="TRIBAL BIT S">
            <div class="works-small-text">
              <h3>TRIBAL BIT S</h3>
              <p>[according to the sketch]</p>
            </div>
          </div>

          <div class="works-small-item">
            <img src="./work-small-3.JPG" alt="METADARK PEAKs">
            <div class="works-small-text">
              <h3>METADARK PEAKs</h3>
              <p>[freehand]</p>
            </div>
          </div>

        </div>

      </div>
    </section>

  </div>
`;
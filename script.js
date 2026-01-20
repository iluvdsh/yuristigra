:root {
  --red: #b11217;
}

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  overflow: hidden;
}

.topbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 16px 40px;
  z-index: 10;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
}

.logo img {
  height: 42px;
}

.slider {
  width: 100vw;
  height: 100vh;
}

.slide {
  position: absolute;
  inset: 0;
  padding: 120px 80px;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity .6s ease;
}

.slide.active {
  opacity: 1;
}

.slide-1 { background-image: url("slide1.jpg"); }
.slide-2 { background-image: url("slide2.jpg"); }
.slide-3 { background-image: url("slide3.jpg"); }
.slide-4 { background-image: url("slide4.jpg"); }
.slide-5 { background-image: url("slide5.jpg"); }

.content {
  max-width: 900px;
}

.light-text {
  color: #111;
}

.framed {
  background: rgba(255,255,255,0.9);
  padding: 40px;
  border-radius: 16px;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-size: 60px;
}

.subtitle {
  font-size: 24px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 30px;
}

.card {
  background: rgba(255,255,255,0.9);
  padding: 20px;
  border-radius: 12px;
}

.nav {
  position: fixed;
  bottom: 30px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background: var(--red);
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}

.prev { left: 30px; }
.next { right: 30px; }

@media (max-width: 768px) {
  .slide {
    padding: 100px 24px;
  }

  h1 {
    font-size: 36px;
  }

  .cards {
    grid-template-columns: 1fr;
  }
}

class MyHeader extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
      <header>
<a href="Index.html" class="logo"></a>

<nav class="navbar">
<ul>
<li><a href="/Html/Index.html">Hjem</a></li>
<li><a href="/Html/Om.html">Om</a></li>
<li><a href="/Html/Kunnskaper.html">Kunnskaper</a>
<li><a href="/Html/Prosjekter.html">Prosjekter</a></li>
<li><a href="/Html/Hobbyer.html">Hobbyer</a></li>
<li><a href="/Html/Utdanning.html">Utdanning +</a>
<ul>
  <li><a href="/Html/Skole.html">Skole</a></li>
  <li><a href="/Html/Jobber.html">Jobber</a></li>
</ul>
</nav>
</header>
      `
  }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
connectedCallback() {
    this.innerHTML = `
    <footer>
    <div class="row">
      <div class="col">
        <a href="/Html/Om.html" class="logo">Om meg</a>
        <p>Mitt navn er er Eivind, og jeg kommer fra Gol. Jeg lærer innenfor it delen, så drømmen min er å bli en Ikt-Koordinator. Hobbyene mine er å game, og å se på serier. </p>
      </div>
      <div class="col">
        <h3>Links</h3>
        <ul>
          <li><a href="Index.html">Hjem</a></li>
          <li><a href="tilbakemelding.html">Tilbakemelding</a></li>
          <li><a href="Kontakt.html">Kontakt</a></li>
  
        </ul>
      </div>
      <div class="col">
        <h3>Kontakt meg</h3>
        <p>TLF: 947 96 460</p>
        <p><li><a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDXXwDkSvZpttNRdBJHRnkfDssNkxnZWNqmkxJRljzpDFmmvTbWxmDPRvKSCPsxlPHGPmJG">eivindvenhaug@gmail.com</a></li></p>
        <p><p><li><a href="https://www.google.no/maps/place/Storgata+17,+3510+H%C3%B8nefoss/@60.163004,10.2540239,17z/data=!3m1!4b1!4m6!3m5!1s0x46410740bce0c0c1:0x67a9e9f7696a7066!8m2!3d60.163004!4d10.2565988!16s%2Fg%2F11c1d3zs8b ">Storgata 17</a></li></p></p>
      </div>
      <div class="col">
        <h3>Medier</h3>
        <!-- Kodene under blir brukt til å kunne få inn ikoner fra nettsiden jeg bruker -->
        <a href="https://t.snapchat.com/UYkX6QjI"> <i class="fa-brands fa-square-snapchat"></i></a>
        <a href="https://twitter.com/FanMonsen85707"><i class="fa-brands fa-twitter"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100026166278415"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://www.instagram.com/eivindvenhaug/"><i class="fa-brands fa-square-instagram"></i></a>
        <a href="https://github.com/Spinky100"><i class="fa-brands fa-github"></i></a>
  
      </div>
      
  
    </div>
  </footer>
    `
}
}

customElements.define('my-footer', MyFooter)
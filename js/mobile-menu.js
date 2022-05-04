const mobile_menu = () => {
  // selecao
  const mobileMenuOverlay = document.getElementById("mobile-overlay");
  const mobileMenuOverlayLinks = document.querySelectorAll(
    ".header__container-mobileMenu ul li a"
  );
  const mobileMenuOverlayCloseBtn = document.getElementById("close-ico");
  const desktopMenuOpenBtn = document.getElementById("bars-menu-btn");

  // exibicao
  const exibirMobileMenuOverlay = () => {
    mobileMenuOverlay.style.display = "block";
    setTimeout(() => {
      mobileMenuOverlay.style.opacity = 1;
    });
  };

  const esconderMobileMenuOverlay = () => {
    setTimeout(() => {
      mobileMenuOverlay.style.opacity = 0;
      setTimeout(() => {
        mobileMenuOverlay.style.display = "none";
      }, 500);
    });
  };

  // eventos
  desktopMenuOpenBtn.addEventListener("click", exibirMobileMenuOverlay);
  mobileMenuOverlayCloseBtn.addEventListener(
    "click",
    esconderMobileMenuOverlay
  );

  for (let links of mobileMenuOverlayLinks) {
    links.addEventListener("click", esconderMobileMenuOverlay);
  }
};

mobile_menu();

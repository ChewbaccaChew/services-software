export function linkActivation() {
  linkActivityManager('burger-menu__navigation-list', 'burger-menu__navigation-link',
    'burger-menu__navigation-link--active');
  linkActivityManager('main__navigation-list', 'main__navigation-link',
    'main__navigation-link--active');

  function linkActivityManager(linkContainer, link, activeClass) {
    const Container = document.querySelector(`.${linkContainer}`);
    const links = Container.querySelectorAll(`.${link}`);
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function linkHandler() {
        var current = document.querySelectorAll(`.${activeClass}`);

        if (current.length > 0) {
          current[0].className = current[0].className.replace(` ${activeClass}`, '');
        }

        this.className += ` ${activeClass}`;
      });
    }
  }
}

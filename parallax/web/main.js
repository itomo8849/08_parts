document.addEventListener('DOMContentLoaded', function () {
  var headerHeight = 80;
  var links = document.querySelectorAll('a[href^="#"]');
  var scrollContainer = document.querySelector('.ly_cont'); // スクロールを管理する要素

  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var href = this.getAttribute('href');
      var target = document.querySelector(href === '#' || href === '' ? 'html' : href);

      if (!target || !scrollContainer) return;

      var rect = target.getBoundingClientRect();
      var position = scrollContainer.scrollTop + rect.top - headerHeight;

      scrollContainer.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    });
  });
});
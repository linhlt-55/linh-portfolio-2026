// Mobile nav toggle — shows/hides the main nav links on small screens.
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});

// Execution accordion (case study "Chi tiết thực thi" block)
document.addEventListener('DOMContentLoaded', function () {
  var accordion = document.querySelector('.exec-accordion');
  if (!accordion) return;

  var header = accordion.querySelector('.exec-header');
  header.addEventListener('click', function () {
    accordion.classList.toggle('collapsed');
  });

  var rows = accordion.querySelectorAll('.exec-row');
  rows.forEach(function (row) {
    row.addEventListener('click', function () {
      var wasOpen = row.classList.contains('open');
      rows.forEach(function (r) { r.classList.remove('open'); });
      if (!wasOpen) row.classList.add('open');
    });
  });
});

// Expand toggle (case study "Xem chi tiết thực thi" link)
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.expand-toggle');
  if (!toggle) return;
  var targetId = toggle.getAttribute('data-target');
  var target = document.getElementById(targetId);
  if (!target) return;

  var labelEl = toggle.querySelector('.toggle-label');
  var originalLabel = labelEl.textContent;

  toggle.addEventListener('click', function () {
    var isOpen = target.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    labelEl.textContent = isOpen ? 'Thu gọn' : originalLabel;
  });
});

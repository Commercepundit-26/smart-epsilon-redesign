jQuery(document).ready(function($) {
  $(document).on('click touchend', '.play-button', function (e) {
    e.preventDefault();
    e.stopPropagation();

    var $thumbnail = $(this).closest('.video-thumbnail');
    var videoUrl = $thumbnail.data('video-url');
    var youtubeEmbedUrl = convertToYouTubeEmbed(videoUrl);

    $('#youtube-iframe').attr('src', youtubeEmbedUrl + '?autoplay=1');
    $('.testimonial-video-popup').fadeIn();
  });
  $('.testimonial-video-popup .close-popup, .testimonial-video-popup .video-popup-overlay').on('click touchend', function (e) {
    e.preventDefault();
    e.stopPropagation(); // ✅ Prevent slider from changing
    $('#youtube-iframe').attr('src', '');
    $('.testimonial-video-popup').fadeOut();
  });
  function convertToYouTubeEmbed(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11)
      ? 'https://www.youtube.com/embed/' + match[2]
      : '';
  }

  var $slidesContainer = $('.slides-container');
  var $slides = $('.slide');
  var $prevButton = $('.prev-button');
  var $nextButton = $('.next-button');
  var $slash = $('.nav-divider');
  var currentIndex = 1;
  var isDragging = false;
  var startPos = 0;
  var currentTranslate = 0;
  var prevTranslate = 0;
  var slideWidth = 0;
  var allowShift = true;

if ($slides.length <= 1) {
  $prevButton.hide();
  $nextButton.hide();
  $slash.hide();
  return;
}
  var $firstClone = $slides.first().clone();
  var $lastClone = $slides.last().clone();
  $slidesContainer.prepend($lastClone);
  $slidesContainer.append($firstClone);
  $slides = $('.slide');

  function setSlideWidth() {
    slideWidth = $slidesContainer.width();
    $slides.each(function () {
      $(this).width(slideWidth);
    });
    $slidesContainer.css({
      'transform': `translateX(-${slideWidth * currentIndex}px)`,
      'transition': 'none'
    });
    prevTranslate = -slideWidth * currentIndex;
  }

  $(window).on('resize', setSlideWidth);
  setSlideWidth();

  function goToSlide(index) {
    if (!allowShift) return;
    allowShift = false;

    $slidesContainer.css({
      'transform': `translateX(-${slideWidth * index}px)`,
      'transition': 'transform 0.4s ease'
    });

    currentIndex = index;
    prevTranslate = -slideWidth * index;

    setTimeout(() => {
      if (currentIndex === 0) {
        currentIndex = $slides.length - 2;
        $slidesContainer.css({
          'transform': `translateX(-${slideWidth * currentIndex}px)`,
          'transition': 'none'
        });
        prevTranslate = -slideWidth * currentIndex;
      } else if (currentIndex === $slides.length - 1) {
        currentIndex = 1;
        $slidesContainer.css({
          'transform': `translateX(-${slideWidth * currentIndex}px)`,
          'transition': 'none'
        });
        prevTranslate = -slideWidth * currentIndex;
      }
      allowShift = true;
    }, 400);
  }

  $prevButton.on('click', function () {
    goToSlide(currentIndex - 1);
  });

  $nextButton.on('click', function () {
    goToSlide(currentIndex + 1);
  });

  $slidesContainer.on('mousedown touchstart', function (e) {
    if (!allowShift) return;
    isDragging = true;
    startPos = getPositionX(e);
    $slidesContainer.addClass('grabbing');
    if (e.type === 'touchstart') e.preventDefault();
  });

  $(document).on('mousemove touchmove', function (e) {
    if (!isDragging) return;
    var currentPosition = getPositionX(e);
    var movedBy = currentPosition - startPos;
    currentTranslate = prevTranslate + movedBy;
    $slidesContainer.css({
      'transform': `translateX(${currentTranslate}px)`,
      'transition': 'none'
    });
    if (e.type === 'touchmove') e.preventDefault();
  });

  $(document).on('mouseup touchend', function (e) {
    if (!isDragging || !allowShift) return;
    isDragging = false;
    $slidesContainer.removeClass('grabbing');
    var endX = e.type === 'touchend'
      ? e.originalEvent.changedTouches[0].clientX
      : e.pageX;
    var movedBy = endX - startPos;
    var threshold = slideWidth / 4;
    if (movedBy < -threshold) {
      goToSlide(currentIndex + 1);
    } else if (movedBy > threshold) {
      goToSlide(currentIndex - 1);
    } else {
      goToSlide(currentIndex);
    }
  });

  function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.originalEvent.touches[0].clientX;
  }
  function animateCounters() {
    $('.stat-number').each(function () {
      var $counter = $(this);
      var targetValue = parseInt($counter.data('value'));
      var startValue = parseInt($counter.data('start')) || 0;
      var symbol = $counter.data('symbol') || '';
      var duration = 2000;
      var startTime = performance.now();

      function updateCounter(timestamp) {
        var runtime = timestamp - startTime;
        var progress = runtime / duration;

        if (progress < 1) {
          var currentValue = Math.round(startValue + (targetValue - startValue) * progress);
          $counter.text(currentValue + symbol);
          requestAnimationFrame(updateCounter);
        } else {
          $counter.text(targetValue + symbol);
        }
      }
      requestAnimationFrame(updateCounter);
    });
  }
  animateCounters();
});

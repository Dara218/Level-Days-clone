"use strict";

$(document).ready(function () {
  var popUpEl = $('.pop-up-div');
  var hamburgerBtn = $('.right ul .fa-bars');
  var popUpTopEl = $('.pop-up-top');
  var popUpTopBtnX = $('.fa-x');
  hamburgerBtn.on('click', function () {
    popUpEl.addClass('pop-up-show');
    popUpTopEl.addClass('pop-up-show');
  });
  popUpTopBtnX.on('click', function () {
    popUpEl.removeClass('pop-up-show');
    popUpTopEl.removeClass('pop-up-show');
  });
  var popUpTitle = $('.inside-pop div h3');
  popUpTitle.on('click', function (e) {
    if ($(this).attr('id') === 'music-pop') {
      $('#music-id').toggleClass('divShow');
    }

    if ($(this).attr('id') === 'about-pop') {
      $('#about-id').toggleClass('divShow');
    }

    if ($(this).attr('id') === 'events-pop') {
      $('#events-id').toggleClass('divShow');
    }

    if ($(this).attr('id') === 'programming-pop') {
      $('#programming-id').toggleClass('divShow');
    }
  });
  var mainNavMenuBtn = $('.main-nav .fa-bars');
  var mainNavExitBtn = $('.pop-up-top .fa-x');
  mainNavMenuBtn.on('click', function () {
    popUpEl.addClass('pop-up-show-media');
    popUpTopEl.addClass('pop-up-show-media');
  });
  mainNavExitBtn.on('click', function () {
    popUpEl.removeClass('pop-up-show-media');
    popUpTopEl.removeClass('pop-up-show-media');
  });
  var shareBtn = $('.share-btn');
  shareBtn.on('click', function (e) {
    var currentShare = $(this).parentsUntil()[1].id;
    shareLink(currentShare);
  });

  function shareLink(currentShare) {
    if (navigator.share) {
      if (currentShare === 'track1') {
        navigator.share({
          title: 'Level Days - Monstercat',
          url: 'https://www.monstercat.com/release/MCLP017#track-1'
        }).then(function () {
          console.log('Thanks for sharing!');
        });
      }

      if (currentShare === 'track2') {
        navigator.share({
          title: 'Level Days - Monstercat',
          url: 'https://www.monstercat.com/release/MCLP017#track-2'
        }).then(function () {
          console.log('Thanks for sharing!');
        });
      }

      if (currentShare === 'track3') {
        navigator.share({
          title: 'Level Days - Monstercat',
          url: 'https://www.monstercat.com/release/MCLP017#track-3'
        }).then(function () {
          console.log('Thanks for sharing!');
        });
      }

      if (currentShare === 'track4') {
        navigator.share({
          title: 'Level Days - Monstercat',
          url: 'https://www.monstercat.com/release/MCLP017#track-4'
        }).then(function () {
          console.log('Thanks for sharing!');
        });
      }

      if (currentShare === 'track5') {
        navigator.share({
          title: 'Level Days - Monstercat',
          url: 'https://www.monstercat.com/release/MCLP017#track-5'
        }).then(function () {
          console.log('Thanks for sharing!');
        });
      }

      if (currentShare === 'track6') {
        navigator.share({
          title: 'Level Days - Monstercat',
          url: 'https://www.monstercat.com/release/MCLP017#track-6'
        }).then(function () {
          console.log('Thanks for sharing!');
        });
      }

      if (currentShare === 'track7') {
        navigator.share({
          title: 'Level Days - Monstercat',
          url: 'https://www.monstercat.com/release/MCLP017#track-7'
        }).then(function () {
          console.log('Thanks for sharing!');
        });
      }

      if (currentShare === 'track8') {
        navigator.share({
          title: 'Level Days - Monstercat',
          url: 'https://www.monstercat.com/release/MCLP017#track-8'
        }).then(function () {
          console.log('Thanks for sharing!');
        });
      }

      if (currentShare === 'track9') {
        navigator.share({
          title: 'Level Days - Monstercat',
          url: 'https://www.monstercat.com/release/MCLP017#track-9'
        }).then(function () {
          console.log('Thanks for sharing!');
        });
      }

      if (currentShare === 'track10') {
        navigator.share({
          title: 'Level Days - Monstercat',
          url: 'https://www.monstercat.com/release/MCLP017#track-10'
        }).then(function () {
          console.log('Thanks for sharing!');
        });
      }

      if (currentShare === 'track11') {
        navigator.share({
          title: 'Level Days - Monstercat',
          url: 'https://www.monstercat.com/release/MCLP017#track-11'
        }).then(function () {
          console.log('Thanks for sharing!');
        });
      }

      if (currentShare === 'track12') {
        navigator.share({
          title: 'Level Days - Monstercat',
          url: 'https://www.monstercat.com/release/MCLP017#track-12'
        }).then(function () {
          console.log('Thanks for sharing!');
        });
      }
    }
  }
});
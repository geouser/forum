// Global parameters
window.params = {
  widthFull: 750,
  maxRowHeight: 0,
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};




/*
#############################
#   Main JS for ____________   #
#############################
*/

jQuery(document).ready(function($) {


$('.menu-button').on('click', function(event) {
  event.preventDefault();
  $(this).toggleClass('active');
  $(this).siblings('.headerInfo').toggleClass('active');
});


$(function() { // add class on scroll
  var $document = $(document),
      $element = $('.menu-button'),
      $element2 = $('header'),
      className = 'hasScrolled';

  $document.scroll(function() {
    $element.toggleClass(className, $document.scrollTop() >= 20);
    $element2.toggleClass(className, $document.scrollTop() >= 1);
  });
});


/*-----------------------------------------------------------------*/  
  $('.magnific').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',
    modal: true,

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  $('nav a').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top + 20
    }, 800);
    return false;
  });

  /*google map*/
  function googleMap_initialize() {

    var mapCenterCoord = new google.maps.LatLng(51.662259, 39.198121);
    var mapMarkerCoord = new google.maps.LatLng(51.662259, 39.198121);

    var mapOptions = {
      center: mapCenterCoord,
      zoom: 17,
      //draggable: false,
      disableDefaultUI: true,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var styles = [
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
        { "color": "#1f2732" }
      ]
    },{
      "featureType": "landscape.natural",
      "stylers": [
        { "visibility": "on" }
      ]
    },{
      "featureType": "administrative",
      "elementType": "labels",
      "stylers": [
        { "color": "#ffffff" },
        { "visibility": "simplified" }
      ]
    },{
      "featureType": "landscape",
      "elementType": "labels.text",
      "stylers": [
        { "color": "#ffffff" },
        { "visibility": "simplified" }
      ]
    },{
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        { "color": "#ffffff" }
      ]
    },{
      "featureType": "transit",
      "elementType": "labels.text",
      "stylers": [
        { "color": "#ffffff" },
        { "visibility": "simplified" }
      ]
    },{
      "featureType": "water",
      "elementType": "labels",
      "stylers": [
        { "visibility": "simplified" },
        { "color": "#ffffff" }
      ]
    },{
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
        { "visibility": "simplified" },
        { "color": "#2a3441" }
      ]
    },{
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        { "visibility": "simplified" },
        { "color": "#3b4553" }
      ]
    },{
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        { "color": "#4c5869" },
        { "visibility": "on" }
      ]
    },{
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        { "color": "#8ea2bd" }
      ]
    },{
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        { "color": "#313c4a" },
        { "visibility": "simplified" }
      ]
    },{
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        { "color": "#485566" }
      ]
    },{
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
        { "color": "#ffffff" },
        { "visibility": "simplified" }
      ]
    },{
      "featureType": "road",
      "elementType": "labels.text",
      "stylers": [
        { "visibility": "simplified" },
        { "color": "#ffffff" }
      ]
    },{
      "featureType": "landscape",
      "elementType": "labels.text",
      "stylers": [
        { "visibility": "simplified" },
        { "color": "#ffffff" }
      ]
    },{
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
        { "visibility": "simplified" },
        { "color": "#a7b5c9" }
      ]
    },{
      "featureType": "transit",
      "elementType": "labels.icon",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "featureType": "poi",
      "elementType": "labels.icon",
      "stylers": [
        { "visibility": "simplified" }
      ]
    }
  ];

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var styledMapType = new google.maps.StyledMapType(styles, {name: 'Styled'});
    map.mapTypes.set('Styled', styledMapType);
    map.setMapTypeId('Styled');


    var marker = new google.maps.Marker({
      position: mapMarkerCoord,
      map: map,
      icon: {
        url: 'images/pin.svg',
      },
      title: 'ЮФЧ'
    });

    $(window).resize(function (){
      map.setCenter(mapCenterCoord);
      //googleMap_initialize();
    });
  };
  googleMap_initialize();
  /*end google map*/



$('.gallery').each(function () {
    $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true
        },
        fixedContentPos: false,
        titleSrc: 'title'
    });
});


});





var typedText = document.querySelector('.typed-text-output');
var textToType = 'Java Developer';
var index = 0;

function typeText() {
    if (index < textToType.length) {
        typedText.textContent += textToType[index];
        index++;
        setTimeout(typeText, 100); // Adjust the timeout as needed
    }
}

typeText();









/*
$(document).ready(function(){
  // При нажатии на кнопку "Подробнее"
  $('.portfolio-container').on('click', '.btn-details', function() {
      var description = $(this).data('description'); // Получаем описание проекта
      var githubLink = $(this).data('github'); // Получаем ссылку на GitHub

      // Обновляем содержимое модального окна
      $('#projectDescription').text(description);
      $('#githubLink').attr('href', githubLink);

      // Открываем модальное окно
      $('#portfolioModal').modal('show');
  });
});


*/












// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});


// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


// google maps
function initMap() {
// Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat:  50.8467, lng: 4.3525},
        zoom: 1,
        scrollwheel:  false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
}

/*
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var form = this;
  
  // Здесь можно добавить код для отправки данных формы на сервер
  // Например, использовать AJAX для отправки данных на сервер
  
  // После успешной отправки формы, показываем сообщение "Your message has been sent. Thank you!"
  document.getElementById("sent-message").style.display = "block";
  
  // Затем скрываем сообщение через 5 секунд
  setTimeout(function() {
      document.getElementById("sent-message").style.display = "none";
  }, 5000); // 5000 миллисекунд = 5 секунд
});

*/

/*
function sendMessage() {
  var name = encodeURIComponent(document.getElementById("name").value);
  var email = encodeURIComponent(document.getElementById("email").value);
  var message = encodeURIComponent(document.getElementById("message").value);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "send_email.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          // Действия при успешной отправке
          alert("Your message has been sent successfully!");
      } else {
          // Действия при ошибке отправки
          alert("Sorry, something went wrong. Please try again later.");
      }
  };
  var data = "name=" + name + "&email=" + email + "&message=" + message;
  xhr.send(data);
   */


/*
  let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();*/

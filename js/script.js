		var feedbackLink = document .querySelector(".feedback");

        var formPopup = document .querySelector(".write-to-us");

        var feedbackClose = document .querySelector(".feedback-close");

        feedbackLink.addEventListener("click", function (evt) {
          evt.preventDefault();
          formPopup.classList.add("modal-show");
        });

        feedbackClose.addEventListener("click", function (evt) {
          evt.preventDefault();
          formPopup.classList.remove("modal-show");
        });

        var mapLink = document .querySelector(".contacts-button-map");

        var mapPopup = document .querySelector(".popup-map");

        var mapClose = document .querySelector(".map-close");

        mapLink.addEventListener("click", function (evt) {
          evt.preventDefault();
          mapPopup.classList.add("modal-show");
        });

        mapClose.addEventListener("click", function (evt) {
          evt.preventDefault();
          mapPopup.classList.remove("modal-show");
        });

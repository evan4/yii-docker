jQuery(function ($) {

  let dragged = null;
  /* Event fired on the drag target */
  document.addEventListener("dragstart", function (event) {
    // store a ref. on the dragged elem
    dragged = event.target;
  });
  const target = document.getElementById("cards-container");
  /* Events fired on the drop target */
  document.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  document.addEventListener("drop", function (event) {
    event.preventDefault();

    event.target.appendChild(dragged);
  });

  $('#cards-container').on('click', 'img', function (event) {
    event.stopPropagation();
    const id = +event.target.getAttribute('data-id');

    if (
      !Number.isInteger(id)
      || id < 1
    ) {
      return;
    }

    $(event.target).fadeOut("normal", function () {
      const image = cards.find(image => +image.id === id);

      if (!image) return;

      $(this).remove();
      const image_element = `<img src="/img/${image.img}" alt="${image.name}" class="img-fluid cards__image" 
      data-id="${id}" draggable="true"/>`;
      const images = $('#cards').find('img');

      if (
        images.length === 0
        || id === 1
      ) {
        $("#cards").append(image_element);
      } else if (cards.length === id) {
        $("#cards").append(image_element);
      } else {

        let first_image_element_id = images.first().data('id');

        if (images.length === 1) {
          if (first_image_element_id > id) {
            $("#cards").prepend(image_element);
          } else {
            $("#cards").append(image_element);
          }
        } else {
          images.each(function () {

            const element_id = +$(this).data('id');

            if (
              element_id > id
              && first_image_element_id < id
            ) {
              console.log(element_id)
              $(image_element).insertBefore(this);
              return false;
            }

            first_image_element_id = element_id;
          });
        }

      }

    });

  });
});

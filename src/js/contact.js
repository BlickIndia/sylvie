// (function () {
//   $.extend($.validator.messages, {
//     required: "Este campo es obligatorio",
//     remote: "Please fix this field",
//     email: "Ingresa una dirección de correo válida",
//     url: "Ingresa una URL válida",
//     date: "Ingresa una fecha válida",
//     dateISO: "Ingresa una fecha válida (ISO)",
//     number: "Ingresa un número válido",
//     digits: "Solo se permiten números dígitos",
//     creditcard: "Ingresa un número de tarjeta válido",
//     equalTo: "Los valores deben coincidir",
//     accept: "Please enter a value with a valid extension",
//     maxlength: $.validator.format("No ingreses más de {0} caracteres"),
//     minlength: $.validator.format("Ingresa al menos {0} caracteres"),
//     rangelength: $.validator.format("El texto debe tener entre {0} y {1} caracteres"),
//     range: $.validator.format("Ingresa un valor entre {0} y {1}"),
//     max: $.validator.format("Ingresa un valor menor o igual que {0}"),
//     min: $.validator.format("Ingresa un valor mayor o igual que {0}")
//   });

//   $('#contact-form').validate({
//     invalidHandler: function (event, validator) {
//       $('#contact-form').find('.form-message')
//       .removeClass($('#contact-form').hasClass('success') ? 'success' : 'error')
//       .html('');
//     },
//     submitHandler: function (form) {
//       var fields = $(form).find('select, input, textarea, button'),
//         formMessage = $(form).find('.form-message'),
//         successMessage = $('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),
//         errorMessage = $('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),
//         setMessage = function (success) {
//           var message = success ? successMessage : errorMessage;
//           fields.removeAttr('disabled');
//           formMessage.removeClass(success ? 'error' : 'success');
//           formMessage.addClass(success ? 'success' : 'error');
//           formMessage.html(message);
//         };

//       fields.attr('disabled', 'disabled');
//       formMessage.html('');
//       $.post('http://mailchimp.blick.mx/email/sylvie/', $(form).serialize())
//         .done(function (data) {
//           if (parseInt(data) === 1) {
//             setMessage(true);
//           } else {
//             setMessage(false);
//           }
//         })
//         .fail(function () {
//           setMessage(false);
//         })
//         .always(function () {
//           fields.removeAttr('disabled');
//         });
//     },
//     rules: {
//       name: {
//         required: true
//       },
//       email: {
//         required: true,
//         email: true
//       },
//       message: {
//         required: true
//       }
//     }
//   });
// })(jQuery);

$('form[name="contact-form"]').validate({
  name: 'required',
  email: 'required',
  message: 'required',
  messages: {
    name: "Por favor, introduce tu nombre",
    email: "Por favor introduce tu correo electrónico",
    message: "Por favor, introduce tu mensaje"
  },
  submitHandler: function(form) {
    var formData = new FormData(document.getElementById('contact-form'));

    $.ajax({
      type: 'POST',
      url: 'https://getmore.mx/sylvie/contacto.php',
      data: formData,
      processData: false,
      contentType: false,
      cache: false
    }).done(function() {
      document.getElementById('contact-form').reset();
      alertify.success('Se ha enviado el email. Gracias por contactarnos!');
    });
  },
  invalidHandler: function(event, validator) {
    var errors = validator.numberOfInvalids();
    alertify.error("Verifica la información. Tienes " + errors + " errores.");
  }
});
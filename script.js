document.getElementById("tipo-seguro").addEventListener("change", function () {
    let tipoSeguro = this.value;
    let valor = 0;

    if (tipoSeguro === "basico") {
        valor = 500;
    } else if (tipoSeguro === "intermedio") {
        valor = 1000;
    } else if (tipoSeguro === "premium") {
        valor = 1500;
    }

    document.getElementById("valor").textContent = "$" + valor;
});



document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const modal = document.getElementById("myModal");
    const errorMessage = document.getElementById("errorMessage");
    let modalShown = false; // Variable para hacer seguimiento del modal

    // Validación del formulario
    form.addEventListener("submit", function (event) {
        let valid = true;

        // Validación del campo Nombre
        const nombreInput = document.getElementById("nombre");
        if (!nombreInput.value.trim()) {
            showErrorInModal("Por favor, complete el campo Nombre.");
            valid = false;
        }

        // Validación del campo Apellido
        const apellidoInput = document.getElementById("apellido");
        if (!apellidoInput.value.trim()) {
            showErrorInModal("Por favor, complete el campo Apellido.");
            valid = false;
        }

        // Validación del campo DNI
        const dniInput = document.getElementById("dni");
        if (!dniInput.value.trim() || !/^\d+$/.test(dniInput.value)) {
            showErrorInModal("Por favor, ingrese un DNI válido (solo números).");
            valid = false;
        }

        // Validación del campo Teléfono
        const telefonoInput = document.getElementById("telefono");
        if (!telefonoInput.value.trim() || !/^\d+$/.test(telefonoInput.value)) {
            showErrorInModal("Por favor, ingrese un número de teléfono válido (solo números).");
            valid = false;
        }

        // Validación del campo Email
        const emailInput = document.getElementById("email");
        if (!emailInput.value.trim() || !/^\S+@\S+\.\S+$/.test(emailInput.value)) {
            showErrorInModal("Por favor, ingrese un correo electrónico válido.");
            valid = false;
        }

        // Validación del campo Tipo de seguro
        const tipoSeguroInput = document.getElementById("tipo-seguro");
        if (tipoSeguroInput.value === "") {
            showErrorInModal("Por favor, seleccione un tipo de seguro.");
            valid = false;
        }

        // Si alguna validación falla, evita que el formulario se envíe
        if (!valid) {
            event.preventDefault();
        }
    });

    // Función para mostrar un mensaje de error en el modal
    function showErrorInModal(message) {
        if (!modalShown) {
            errorMessage.textContent = message;
            modal.style.display = "block";
            modalShown = true; // Marcar el modal como mostrado
        }
    }

    // Función para ocultar el modal
    function hideModal() {
        modal.style.display = "none";
        modalShown = false; // Restablecer la variable modalShown
    }

    // Cierra el modal cuando se hace clic en la "X"
    document.getElementById("closeModal").addEventListener("click", hideModal);

    // Cierra el modal si se hace clic fuera del contenido del modal
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            hideModal();
        }
    });
});

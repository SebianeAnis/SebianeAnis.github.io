$('body').on('submit', '#devis_formulaire2', (e) => {
    e.preventDefault(); // Empêche la soumission traditionnelle du formulaire

    var formData = $(e.target).serializeArray();
    var dataToSend = {};

    $.each(formData, function() {
        dataToSend[this.name] = this.value;
    });


    console.log(dataToSend);

    $.ajax({
        type: "POST",
        url: "http://localhost:8888/az_serrurerie/devis.php",
        data: dataToSend,
        success: function (e) {
            console.log("devis php response");
            console.log(e);
        },
        error: function () {
            alert('Erreur lors de la mise à jour');
        }
    });
});

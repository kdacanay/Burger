$(document).ready(function () {


    $('.devour').on('submit', function (event) {
        event.preventDefault();

        var burger_id = $(this).children('.devoured').val();
        console.log(burger_id);
        $.ajax({
            type: 'PUT',
            url: '/burgers/update/' + burger_id
        }).then(function (data) {
            console.log(data);
            location.reload();
        })
    })

    $('.create-form').on('submit', function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $('#createBurger').val().trim(),
            devoured: 0
        };
        $.ajax('/burgers/create', {
            type: 'POST',
            data: newBurger
        }).then(
            function () {
                console.log('Created Burger');
                location.reload();
            }
        )
    })




});
$(document).ready(function () {


    $('.devour').on('click', function (event) {
        event.preventDefault();

        var burger_id = $(this).children('.devoured').val();
        console.log(burger_id);

        newDevour = {
            devoured: true,
        }

        $.ajax('/burgers/update/' + burger_id, {
            type: 'PUT',
            data: newDevour
        }).then(function () {
            console.log('Changed devoured State to', newDevour);
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
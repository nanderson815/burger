$(function () {

    $(".change-status").click(function () {
        var id = $(this).data("id")
        var newDevoured = $(this).data("newdevoured");
        console.log("ID: ", id);
        console.log("NewD: ", newDevoured);

        var newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("Ate the burger");
                location.reload();
            }
        );

    });



});
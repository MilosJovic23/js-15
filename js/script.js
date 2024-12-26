

$(document).ready(function () {
	// POST GET

	$.ajax({
		url: "https://reqres.in/api/users?page=2",
		success: function (response) {
			for (let user in response.data) {
				var email = response.data[user].email;
				var ime = response.data[user].first_name;
				$("#imeLista").append("<p>" + ime + ":" + email + "</p>");
			}
		},
	});

	$.ajax({
		url: "https://reqres.in/api/users",
		type: "POST",
		data: {
			name: "Toma",
			job: "programer",
		},
		success: function (response) {
			console.log(response);
		},
	});

	$("#delete").click(function () {
		$.ajax({
			url: "https://reqres.in/api/users/2",
			type: "DELETE",
			success: function (response) {
				console.log(response);
			},
		});
	});

	$("#registracija").click(function () {
		var ime = $("#name").val();
		var imejl = $("#email").val();
		$.ajax({
			url: "https://reqres.in/api/users",
			type: "POST",
            data:{
                name:ime,
                email: imejl
            },
            success: function (response){
                console.log(response)
            }
			
		});
	});
});


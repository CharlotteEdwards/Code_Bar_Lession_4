function getGithubInfo(username) {
	var xhr = new XMLHttpRequest ();
	xhr.open("GET", ("https://api.github.com/users/" + username), false);
	xhr.send();
	return xhr;
}
function noSuchUser(username) {
	$("#profile h2").replaceWith("No such user ", username)
}

function showUser(username,jason) {
	$("#profile h2").replaceWith (username + " is GitHub user #" + jason.id);
	$("#profile .information").replaceWith ("<a href="+jason.html_url+">"+jason.html_url+"</a>");
	$("#profile .avatar").replaceWith ("<img src="+jason.avatar_url+">");
}

$(document).ready(function(){
	$(document).on('keypress', '#username', function(e) {
		if (e.which === 13) {
			var username = $('#username').val();
			var response = getGithubInfo(username);

			if (response.status === 200) {
				var jason = JSON.parse(response.response); 
				showUser(username,jason);}
			else {noSuchUser(username);
			}
		}
	});
});


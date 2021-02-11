function getGithubInfo(user) {
    //1. Create an instance of Ajax request and send a URL using it.
    // The function should finally return the object(it now contains the Response!)
    $.ajax({
        url: "https://api.github.com/users/" + user,
        type: 'GET',
        success: function (response, status, statusCode) {
            if (statusCode.status === 200) {
                showUser(response);
            } else {
                noSuchUser(user);
            }
        },
        error: function (response, status, statusCode) {
            noSuchUser(user);
        }
    })
}

function showUser(user) {
    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
    //setting visibility condition of the user details table
    document.getElementById("noUser").style.visibility = "hidden";
    document.getElementById("profile").style.visibility = "visible";
    //hiding the Invalid user message
    //display the username of the user
    $("#heading").text(user.login);
    //setting ID to display user id
    $("#userid").text(user.id);
    //display profile pic
    $("#proPic").attr("src", user.avatar_url);

    $('#proPic').click(function () {
        window.open($(this)[0].src, '_blank')
    });

    //display the number of public repos
    $('#repos').text(user.public_repos);
    //Providing the link to user's profile
    const proLink = $("#proLink");
    proLink.text("Link to Profile");
    proLink.attr("href", user.html_url);
    $('#name').text(user.name);
}

//invalid username or no such user function
function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
    //set visibility for the user details table
    document.getElementById("noUser").style.visibility = "visible";
    //set visibility for the Invalid Username message
    document.getElementById("profile").style.visibility = "hidden";


}

//jQuery to manipulate the response and display required information
$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        if (e.which === 13) {
            //get what the user enters
            let username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            getGithubInfo(username);
        }
    })
})

function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it.
    // The function should finally return the object(it now contains the Response!)
    const xhReq = new XMLHttpRequest();

    const reqURL = `https://api.github.com/users/${user}`;
    //sending API request
    xhReq.open('GET', reqURL, false);

    xhReq.onload = function () {
        return this;
    }
    //returning the response to the parent function
    xhReq.send();
    return xhReq.onload();
}

function showUser(user) {
    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
    //setting visibility condition of the user details table
    document.getElementById("profile").style.visibility = "visible";
    //hiding the Invalid user message
    document.getElementById("noUser").style.visibility = "hidden";
    //display the username of the user
    document.getElementById("heading").innerHTML = user.login;
    //setting ID to display user id
    document.getElementById("userid").innerHTML = user.id;
    //display profile pic
    document.getElementById("proPic").src = user.avatar_url;
    //display the number of public repos
    document.getElementById("repos").innerHTML = user.public_repos;
    //Providing the link to user's profile
    document.getElementById("proLink").innerText = "Link to profile";
    document.getElementById("proLink").href = user.html_url;
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
            //get the user's information and store the Respsonse
            const obj = getGithubInfo(username);
            const response = obj.response;
            const statusCode = obj.status;
            //if the Response is successful show the user's details

            if (statusCode === 200) {

                showUser(JSON.parse(response));
            } else {
                noSuchUser(username);
            }
        }
    })
});

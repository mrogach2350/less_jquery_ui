$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'http://api.steampowered.com/ISteamApps/GetAppList/v0001/?format=json',
        contentType: 'text/plain',
        xhrFields: {
            withCredentials: false
        },
        success: function() {
            console.log('Success');
        },
        error: function() {
            console.log('Error');
        }
    });
});
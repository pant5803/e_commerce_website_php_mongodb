// google_signin.js

// Function called when Google sign-in is successful
function onSignIn(googleUser) {
  // Retrieve user profile information
  var profile = googleUser.getBasicProfile();
  // You can now use the profile information to sign the user in or create an account
  // For example, you can send an AJAX request to a PHP script to handle the authentication
  var email = profile.getEmail();
  // Call a function to send the email to your PHP script for authentication
  // Example: sendEmailForAuthentication(email);
}

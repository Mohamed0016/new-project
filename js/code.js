$(document).ready(function() {
  
  $('#loginButton').click(function() {
    var email = $('#email').val();
    var password = $('#password').val();

   
    if (email === 'mohamed@gmail.com' && password === '123456789') {
      alert('Login successful!');
    } else {
      alert('Login failed. Please try again.');
    }
  });
  $('#searchButton').click(function() {
    var searchTerm = $('#searchInput').val();
    if (searchTerm === 'music1') {
      $('#musicContainer').html('<audio controls><source src="Desktop/music1.mp3" type="audio/mpeg"></audio>');
    } else if (searchTerm === 'music2') {
      $('#musicContainer').html('<audio controls><source src="Desktop/music2.mp3" type="audio/mpeg"></audio>');
    } else if (searchTerm === 'music3') {
      $('#musicContainer').html('<audio controls><source src="Desktop/music3.mp3" type="audio/mpeg"></audio>');
    } else {
      $('#musicContainer').html('<p>No music found.</p>');
    }
  });
});                                                                                                                      
                                                                                            

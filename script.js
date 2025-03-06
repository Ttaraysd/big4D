document.getElementById("search-btn").addEventListener("click", function() {
    // Get the selected search engine URL from the dropdown
    const searchEngine = document.getElementById("search-engine").value;
    
    // Get the search query entered by the user
    const query = document.getElementById("search-query").value;
  
    // Check if the query is not empty
    if (query.trim() !== "") {
      // Redirect the user to the selected search engine with the query as a parameter
      window.location.href = searchEngine + encodeURIComponent(query);
    } else {
      // Alert the user if no search query is entered
      alert("Please enter a search query.");
    }
  });
  

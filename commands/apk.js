const fetch = require('node-fetch'); // Ensure you have node-fetch installed

// Function to search for apps using the API
async function searchApps(searchQuery) {
    const apiUrl = https://api.siputzx.my.id/api/apk/apkmody?search=${encodeURIComponent(searchQuery)};

    try {
        // Fetching data from the API
        const response = await fetch(apiUrl);
        
        // Check if response is ok (status code 200)
        if (!response.ok) {
            throw new Error(HTTP error! status: ${response.status});
        }

        const data = await response.json();
        
        // Check if data is returned
        if (data && data.length > 0) {
            console.log('Fetched Apps:');
            data.forEach(app => {
                console.log(Name: ${app.name}, Link: ${app.link});
            });
        } else {
            console.log('No apps found for the search query.');
        }
    } catch (error) {
        console.error('Error fetching apps:', error);
    }
}

// Example usage
const searchQuery = 'free fire'; // Replace with your search term
searchApps(searchQuery);

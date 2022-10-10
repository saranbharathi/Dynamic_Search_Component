# Dynamic_Search_Component

### Primary Key of the Task is Optimal Search & Rendering

##### 1. Create one text box in web app ui 
2. Create API call to server that fetch search word results from start index
    pass { start index, count, search keyword } to fetch result from server
3. On focus or on typing
    if data not exists 
        Fetch first 100 results from server
        show a dropdown with fetched results below text box
        on scrolling up to 50% of dropdown results, fetch 100 more results and append to dropdown list
    if data exists
        filter from existing results , lets say filtered results = 60
        and make api call to get remaining from server (100 - fetchedResults) from server
        and again on scrolling after 50% fetch 100 more from server

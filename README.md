# University-Group-Website

This website was created to ease the process of getting the courses that we are supposed to study for this semestre. (link : https://group11.netlify.app ).

The main reason for creating it was because many students in my group didn't have access to the university website to get their courses ( they must have an account that can only be provided by the administration ), and many students had no account.

Fortunately I had one, and the first step was to downloaded all courses then stored them in Uploadfiles.io to provide the links and easely download the courses.

After creating the website, it was hosted on netlify as a static website that contains all courses. The next problem was that in order to add a new course, I had to take down my website and edit the source code.

My next idea was to make my website get the courses from an external source. And since I had no knowledge about how the backend or api work at that time, the only option left was Google and Stack Overflow !

After searching for how to make it happen, I finally found that the easiest way that I could work with is to have my courses data (Course title, link to download the course file, teacher and module name ) as a JSON file and upload it on github and then send a request to access that data and use it.( link to the JSON file will be provided down below )

The next step is I learned about AJAX, Http requests, APIs and Modules. And I finally managed to retrieve the courses data from my JSON file in my github repository. Now whenever a new object is added to the JSON file, The website will be updated automatically without me having to take it down and modifie the source code every time.

Now thanks to technology all my classmates and students from other groups that shares the same teacher have access to the courses without having to wait till they get their Moodle account. And the website will be updated every time I edit the JSON file.

Link to the JSON file: https://github.com/Meykiio/courses_data/blob/master/data.json

#Credit : -github -Uploadfiles.io -unsplash -fontawsome


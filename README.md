
# Exercise Part 1: Building a Basic Resume Directory with HTML and CSS

## Objective

Create a simple website that lists directories of resumes for different roles:
	- Software Engineers
	- Product Managers
	- Customer Success Representatives

Each directory will link to individual resumes.

## Instructions

1. Set Up the Project Structure

	- Create a Main Project Folder
	    - Name it resume-directory or any preferred name.
	- Inside the Project Folder, Create Subfolders
	    - css (to store CSS files)
	    - software-engineers (for software engineer resumes)
	    - product-managers (for product manager resumes)
	    - customer-success (for customer success resumes)

2. Create the Main Page (index.html)

	- File Location: Place index.html in the root of the project folder.
	- Basic HTML Structure

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Company Resume Directory</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- Content will go here -->
</body>
</html>


	- Add Content to the Body

<h1>Company Resume Directory</h1>
<nav>
    <ul>
        <li><a href="software-engineers/index.html">Software Engineers</a></li>
        <li><a href="product-managers/index.html">Product Managers</a></li>
        <li><a href="customer-success/index.html">Customer Success</a></li>
    </ul>
</nav>
```


3. Create Department Pages

For each department, create an index.html inside its respective folder.
	- Example: software-engineers/index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Software Engineers</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    <h1>Software Engineers</h1>
    <nav>
        <ul>
            <li><a href="../index.html">Home</a></li>
        </ul>
    </nav>
    <ul>
        <li><a href="jane-doe.html">Jane Doe</a></li>
        <li><a href="john-smith.html">John Smith</a></li>
        <!-- Add more resumes as needed -->
    </ul>
</body>
</html>


	- Repeat for product-managers/index.html and customer-success/index.html, adjusting the titles and links accordingly.

4. Create Individual Resume Pages

For each person, create an HTML file in their department folder.
	- Example: software-engineers/jane-doe.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Jane Doe's Resume</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    <header>
        <h1>Jane Doe</h1>
        <nav>
            <ul>
                <li><a href="index.html">Software Engineers</a></li>
                <li><a href="../index.html">Home</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section>
            <h2>Profile</h2>
            <p>Brief introduction or summary about Jane Doe.</p>
        </section>
        <section>
            <h2>Experience</h2>
            <p>Details about work experience.</p>
        </section>
        <section>
            <h2>Education</h2>
            <p>Educational background.</p>
        </section>
    </main>
</body>
</html>
```

	- Repeat for other individuals, adjusting content accordingly.

5. Create a Basic CSS File

	- File Location: css/styles.css
	- Basic Styling

```
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

h1, h2 {
    color: #333;
}

nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 15px;
}

nav ul li a {
    text-decoration: none;
    color: #007BFF;
}

nav ul li a:hover {
    text-decoration: underline;
}

main {
    padding: 20px;
}

section {
    margin-bottom: 20px;
}
```



6. Ensure Semantic HTML and Best Practices

	- Use appropriate tags like `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` to structure the content.
	- Make sure to include alt attributes for images (if any).
	- Keep file and folder names in lowercase and use hyphens (-) instead of spaces.
	- Validate HTML and CSS using online tools like W3C Validator.

## Summary of Deliverables

	- Project Folder Structure


```
resume-directory/
├── index.html
├── css/
│   └── styles.css
├── software-engineers/
│   ├── index.html
│   ├── jane-doe.html
│   └── john-smith.html
├── product-managers/
│   └── index.html
└── customer-success/
    └── index.html
```

- Functional Requirements
- Main page links to each department.
- Department pages list individuals with links to their resumes.
- Resume pages contain at least three sections: Profile, Experience, Education.
- Navigation allows users to return to the department page or home page.


## Additional Tips

- Testing: Open index.html in a web browser to test navigation between pages.
- Content: Feel free to add more content or individuals to practice.
- Comments: Add HTML comments (<!-- Comment here -->) to explain sections if needed.

## Learning Outcomes

By completing this exercise, you will learn:
- How to structure a basic website with multiple pages.
- The use of semantic HTML elements for better accessibility and SEO.
- Linking between pages using relative URLs.
- Applying basic CSS to style elements.
- Best practices in organizing files and code readability.

## What's next
- We will crawl this website and add Algolia to it to help find the resumes faster.
- Then we will rebuild it in ReactJS / VueJS (depending on what you prefer) to learn frameworks.
- Then Astro/Next or Nuxt (depending on your choice), to learn SSR and SSG
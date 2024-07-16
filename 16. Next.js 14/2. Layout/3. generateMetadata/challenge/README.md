### Exercise: Generating Metadata in a Next.js Application

#### Goal:

The goal of this exercise is to practice generating metadata for pages in a Next.js application. Metadata can be used for SEO (Search Engine Optimization) and to enhance the presentation of content when sharing links on social media.

#### Instructions:

1. In the "app" directory of your project, create a few routes, such as "about.js," and "contact.js."

2. For each page, implement the following:

- Define a unique title for the page. For example, the "page.js" page might have the title "Home," and the "about.js" page might have the title "About Us."
- Create a description for each page, which should be a short summary of the content.
- Specify image URLs for social media sharing (e.g., Open Graph images).

3. Create a custom `generateMetadata` function or module that generates metadata for each page based on the defined title, description, and image URL.

4. On each page, use the `generateMetadata` function to set the appropriate metadata, including the `<title>`, `<meta name="description">`, and Open Graph (OG) tags in the `<head>` section of the HTML.

5. Test the application.

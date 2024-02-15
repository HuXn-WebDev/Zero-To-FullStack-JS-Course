### Exercise: Handling URL Segments in Next.js

#### Goal:

The goal of this exercise is to practice working with URL segments to create dynamic routes and access data from the URL in a Next.js application.

#### Instructions:

1. Create a route named "products."

2. Inside the "products" folder, create a folder named "[id]" This square bracket notation "[id]" indicates that this route will handle dynamic URL segments.

3. In the "[id]" file, create a page that displays information about a product based on the value of the "id" segment in the URL.

4. Use the Next.js `useRouter` hook to access the "id" segment from the URL.

5. When a user accesses a URL like "/products/123" (where "123" is a dynamic product ID), the page should display information about the product with the corresponding ID.

6. Verify that you can access dynamic product pages with different IDs in the URL, and the page displays information based on the ID from the URL segment.

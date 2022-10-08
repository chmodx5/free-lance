This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

##Small project
The purpose of this app is to provide a platform for Kenyan freelance workers and also clients who want these services done.

So the site users can be divided into three:

1. The worker
   The worker can login to the site and bid or request for a job which will subsequently be approved by the client after which the user gets some cash for their work
2. The client
   The client can also login but will instead post a job plus the funds to pay the worker. This user can verify if the worker did the job to their specifications after which the money will be deducted from their account
3. Root/admin
   This is the mother of all accounts. This user can approve the worker’s application and also delete a worker if they violate any of the company policies or con a worker and the same applies for client accounts

What will it be built on.
Nextjs – for the whole app, it just makes things a lot easier including deployment on vercel so ..
Tailwindcss – for the styling

okay so lets get started
first the components

---

so the components are divided based on the components type. Like take for example

1. they layouts folder contains the layouts for the site
2. the blocks folder contains whole functional sections of the site e.g. navbar, footer, hero etc
3. the elements folder contains single element containers e.g the buttons

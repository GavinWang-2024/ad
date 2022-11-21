# NGM Company project

* A React/Next.js landing SPA that I designed and built from the ground up for a real local business.

* Website: [https://www.ngmcompany.ru/](https://www.ngmcompany.ru/)
* Stack: React, Next.js, Material UI, HTML, CSS, Framer Motion, Node.js, Nodemailer, Typewriter, React-tsparticles

![image](https://github.com/i-sviridov/i-sviridov/blob/ab9822671649636e326c3bcabe8fb45799ce4bd6/ngmcompany-files/first-load.gif)


## Description


The SPA is highly animated and includes different visual effects and features, such as a typewriter effect and an image carousel. It uses Material UI components to keep the design consistent throughout the whole application. Moreover, I used different libraries, like Typewriter, React-tsparticles for additional visual effects. The application embraces the getStaticProps() function from Next.js to generate static pages from data in a json file.

![image](https://github.com/i-sviridov/i-sviridov/blob/e3f24ad89397c8d05c93b979bb01f8a3ffd331fe/ngmcompany-files/write-carousel.gif)

Components have a nice animation effect when they appear on screen. Besides, they have a nice hover effect, as shown below.

![image](https://github.com/i-sviridov/i-sviridov/blob/e88cdb3d969514bf476428de5134ac3ffc5cdc16/ngmcompany-files/whileinview-hover-effect.gif)

Each individual item is presented on its own page using dynamic routes. I also used the getStaticPaths() function from Next.js to pre-populate the page with information according to the url params entered.

![image](https://github.com/i-sviridov/i-sviridov/blob/99af6ca19391391ecfa74162dcbd2ff6b9123ba8/ngmcompany-files/individual-item.gif)

Finally, the application also provides the opportunity to send an email to the company's address right from the page. For this, I made a form API route backend with a Nodemailer, which is responsible for sending mails. I used a small math test for a simple anti-spam check.

![image](https://github.com/i-sviridov/i-sviridov/blob/99af6ca19391391ecfa74162dcbd2ff6b9123ba8/ngmcompany-files/form-submission.gif)


The application supports the following API route:
| /api/form                                                                                                                   |
|-----------------------------------------------------------------------------------------------------------------------------|
| `{` <br /> ` method: 'POST', `<br />` headers: { 'Content-Type': 'application/json' }, `<br /> ` body: JSON.stringify({data})` <br />`}` |




## How to install

1. Download the zip file or clone the repo
2. Install and run

```sh
npm install
npm run dev
```

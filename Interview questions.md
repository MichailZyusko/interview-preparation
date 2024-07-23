- BACKEND ☑️
    - Node.js
        1. Explain how node.js eventloop is working
        2. What tasks should be performed async in node.js?
        3. How does Node handle asynchronous operations?
        4. What are environment variables in Node.js?
        5. What is a cluster module in Node?
        6. What are streams in Node.js, and what types are there?
        7. Have you heard of the cluster module in Node.js?
        8. How is an asynchronous call executed? Does it go through the event loop, does it use the heap?
        9. What happens if the promise is not resolved, does Node.js keep it in memory
        10. PostgreSQL has a limited amount of connections. We’re making the maximum amount of connections, the query is complex and is not resolving in time. The timeout of connection is 5 minutes. What happens to our Node.js instance? Will the Node.js process die or run out of memory?
        11. Tell us about Node.js.
        12. How do you handle blocking I/O operations in Node.js?
        13. How can you optimize the performance of a Node.js app?
        14. How do you track the performance of a Node.js application?
    - Express.js
        1. Express vs nest.js
        2. What is middleware in express
    - Nest.js
        1. How to combine several independent database queries into a transaction in Nest so that either all queries succeed or none (typeorm-transactional)?
        2. If the data volume between the client and backend is large (e.g., a single request returns a 1 MB JSON), how can you optimize it (compression in Nest)?
        3. What is the concept called by which we can get class objects in the constructor in Nest?
        4. What is Nest.js? Explain basic concepts: controllers, modules, etc.
        5. How does dependency injection work in Nest.js, and what are the benefits of using it?
        6. How do you manage configuration for different environments, such as development, staging, and production, in Nest.js?
        7. How would you implement exception filters in Nest.js?
        8. What did you use for handling events in Nest.js?
        9. How convenient was it to work with Nest.js?
        10. NestJS request lifecycle.
    - General
        1. How do you handle special characters in user input on the backend?
        2. How can backend tasks, like analytics, be automated to run without requiring a request?
    - NPM
        1. Are you familiar with private libraries in npm?
        2. How do you work with npm libraries locally?
        3. What do you know about package managers (yarn, npm)?
        4. Have you developed npm packages and published them publicly or privately?
        5. What is the npmrc file?
        6. What are scoped libraries?
- FRONTEND ☑️
    - Frameworks
        - React.js
            1. What is the lifecycle of React component?
            2. For example, I have logic that should be executed once and right after the component has been rendered. What should I use?
            3. You said useEffect so what dependencies should we use?
            4. And if there is a logic that should be executed after the component is unmounted. What would you use in this case?
            5. In the sense of useEffect, what lifecycle methods can it cover?
            6. Why the elements must have key prop in React?
            7. How can we pass data from a child component to a parent?
            8. Do you know about React Fragment?
            9. How can I count the number of rerenders of component?
            10. A component has a child to which we don’t pass any values. In case parent rerenders would the child be rerendered too? How to prevent rerendering of child component?
            11. Have you ever used useCallback?
            12. Describe the cases in which we would use useMemo and useCallback
            13. Why do we use lazy loading in React?
            14. If something is happening outside of React lifecycle how would you update the React state?
            15. Why don’t use state instead of ref?
            16. I have a component and child component within if. The parent component has some state, this state has been changed. Will child component be rerendered?
            17. How can we prevent rerendering?
            18. What’s a virtual DOM in React?
            19. Does React update the whole real DOM?
            20. How can we use ref in React?
            21. What about use cases of useRef?
            22. How can you define that a component has been written well? How many code lines should a component consist of?
            23. What tools or techniques have you used to figure out why your frontend is working slowly?
            24. We have a parent component that passes some props to a child component, and then this child component passes these props to its children. How can we avoid this?
            25. What are the things we should be careful with when using React context? And what about other solutions excepting context?
            26. What methods do you know to optimize performance in React?
            27. At what point relative to rendering does useEffect work?
            28. What issues arise from using setInterval in useEffect?
            29. What triggers a re-render of a component in React?
            30. How would you optimize heavy computations (2-3 seconds) during each render?
            31. Can you remember a challenge you faced using React and how you solved it?
            32. What React hooks do you know? What is a hook?
            33. Tell us about useMemo.
            34. How do controlled components differ from uncontrolled ones?
            35. How to force re-render a component?
            36. We have a product list, and you need to display this product list (name, category) and a button to add more items to this list. Write React code.
            37. What is useLayoutEffect?
            38. What happens if we do not pass a dependency array in useEffect?
            39. When is the cleanup function called?
            40. What’s the difference between useEffect and useLayoutEffect?
            41. You have useEffect which contains setInterval that renders something. What do you need to consider when implementing it?
            42. React Fragment, Portal, HOC.
            43. How do you handle error handling in a React application?
        - Vue.js
            1. What do u think about Vue and version of Vue u have managed to work with
            2. v-model in Vue
            3. When am I going to use v-model and when am I going to use regular property and why
            4. What’s the problem with v-model
            5. When are u going to use Vuex and why (what is it in general)
            6. We have some form with inputs, we wrote some data and then moved to another component. What will happen with data? How can we save this data?
            7. What’s the difference between Vue 2 and Vue 3?
            8. What’s the difference between these two components? One is used with v-model and the other one with :list.
            9. When should we use v-model and when should we use :list?
            10. What is the problem when I pass a list with v-model? (Answer: v-model ignores the initial value)
        - Next.js
            1. What can you tell me about Next.js apart from SSR & SEO?
            2. What happens when we use getServerSideProps in comparison to SSG?
            3. Have you worked with Next 13 (App router)?
            4. Compare SSR provided by App router and one provided by Pages router
            5. Imagine a situation where a Next.js app that heavily relies on SSR experiences slow page load. How would you approach identifying and resolving the issue? Consider tools, methodologies, and areas where you would investigate.
            6. Did you face any problems using SSR in Next.js? What is the difference between SSR and IRS?
            7. What’s the difference between Next.js and React?
            8. Why did you choose Next.js for your last project?
            9. What is dynamic routing and how is it implemented in Next.js?
            10. What is the purpose of getInitialProps in Next.js?
            11. Types of rendering in Next.js.
        - Angular
            1. What are observables in Angular and how do they differ from promises?
            2. Does Angular handle cross-site scripting or cross-site request forgery?
            3. What is the Angular change detection mechanism?
            4. What is the change detection strategy in Angular and what are the two types of strategies we have in Angular?
            5. What is the best change detection strategy, default or onpush? Why?
            6. You have communication from child to parent and parent to child, when do you use onpush?
            7. What is the Angular lifecycle hook? What lifecycle hooks are there in Angular?
            8. What is markForCheck in Angular?
            9. What are the RxJS operators?
            10. How do you use interceptors?
            11. Let’s say on the frontend you want to pass an authorization token, which interceptors will you be using?
            12. Difference between AOT and JIT compiler in Angular?
            13. What is an observable in Angular?
            14. What happens if you don’t unsubscribe from an observable?
            15. How do you generally unsubscribe from observables?
            16. How do you use async pipe?
            17. What advantage does async pipe have over observable?
            18. How do you use ng-template and ng-content in Angular?
            19. How do you know if a component is dynamic in Angular?
            20. What are the RxJS operators?
            21. Let’s say I have 3 API calls that need to be executed sequentially. Which RxJS operators would you use?
            22. Write an example of the forkJoin operator.
            23. What is proxy.conf.json in Angular?
            24. How do you create modular and reusable components in Angular?
            25. How do you implement communication between different types of Angular components: independent, parent-child?
            26. What’s the difference between observables and promises when making an HTTP request?
            27. What are dynamic components in Angular? What for and how do you use them?
            28. Name the RxJs operators you have worked with most often.
            29. What is a directive in Angular?
        - React Native
            1. Have you worked with mobile development and React Native in particular?
    - SEO
        1. You need to build a website, it’s emphasising SEO and has a lot of customers and CMS. What would be your stack, how would you approach it?
        2. Google is still not scoring us high enough. We need to cheat the search engines by serving different content to bots. How would you do that?
    - CSS
        1. What’s the difference between fixed and absolute position in CSS?
        2. Can u list values of position property in CSS
        3. Explain CSS specificity.
        4. What’s the difference between “fixed” and “sticky”?
    - GSM (Global State Managers)
        1. Suppose you have 3 actions that involve server requests, and you need to execute them sequentially. How would you implement this in Redux?
        2. How do you manage state in React?
        3. Why do we need Redux?
        4. Redux Saga vs. Redux Thunk, what are they used for?
    - General
        1. Which frontend technologies (libraries, frameworks) did you work with?
        2. If debounce didn’t help, how can I be sure that exactly the last sent request will be processed? (Answer: by timestamp – the request with the latest timestamp will be the last sent)
        3. Have you worked with PWA’s?
        4. How would you implement drag & drop?
        5. Let’s say I have a problem: I want to decode and encode a certain type of URL or text and I have a key to encode and decode as well on the frontend. Should I use React or Next.js not to expose the key?
        6. Have you ever worked on projects with localization based on the region? How do you handle that? Where should we store the translation of the content?
        7. How do you optimize rendering of components on the frontend?
        8. If you have some complex calculation on the frontend, how can you optimize it?
        9. What is SSG (Static Site Generation) and how is it different from SSR?
        10. What do you use for styling HTML?
        11. Do you work with SSR (Server-Side Rendering)?
        12. When wouldn’t you recommend using SSR?
        13. What do you use for state management, routing, styling?
        14. Let’s say you built the application, the end user needs to have the best experience possible. What kind of metrics would you track and how do you track them? Let’s focus on performance while improving UX.
        15. Let’s say content is loaded from CMS, but the pages are loading slow and there are many of them. How do you debug it, where do you start? How do you find the thing that’s causing performance issues?
        16. Have you used any component libraries?
        17. If you’re given a custom design that can’t be used in MUI, how would you restyle it? What do you do when a component from the component library you use is not customizable enough?
        18. In the old days, some websites were designed in Photoshop and extracted in large, let’s say, PDFs. And then developers sliced this PDF into smaller usable pieces that can be used. So if we hire you, you’d have to be doing slicing by converting Figma designs into reusable React components. Is it something you’ve experienced with? So when you do that, how do you make sure you’re not reinventing the wheel?
        19. Do you know something about design systems, for example, when you have to support themes in an app?
        20. How do you handle accessibility features using JavaScript, so people could use the website only with a keyboard?
        21. Let’s say I have an input and a search button. I’m typing some text, every time I change the input I want my previous request to be canceled. What is the best operator you can apply in this scenario?
- PROGRAMMING LANGUAGES ☑️
    - TypeScript (TS)
        1. Can you describe a scenario where you’d use interfaces over classes? And how does this choice impact the design of the system?
        2. Tell me about advantages of TS
        3. Do you know building types in TS?
        4. When do we use Awaited type? And what happens?
        5. When do we use Omit and Partial?
        6. Do you know about Generics in TS?
        7. Give an example or common use of Generics.
        8. What is an interface in TypeScript?
        9. Declare a variable that contains an array which elements can be strings and numbers
        10. You’ve mentioned TS. How proficient are you with TS?
        11. Explain the concept of decorators in TypeScript and how they are used in Nest.js.
        12. What is TypeScript?
        13. What are interfaces used for in TS?
        14. What is the latest version of TypeScript you worked with?
        15. When do we use `unknown` in TypeScript?
        16. What is an intersection type in TypeScript?
        17. What is a type guard in TypeScript?
        18. Have you had experience writing complex types?
        19. What are conditional types? Write a conditional type.
        20. Name the most popular utility types.
        21. Have you encountered the type `Satisfied`?
        22. Do you know about type casting?
        23. What is better, interfaces or types in TypeScript?
        24. How is inheritance done in TypeScript?
        25. How do interfaces and classes work in TypeScript?
        26. What is `infer` means in TS?
        27. Let’s say I have an interface, and I want to extract from that interface a type with all properties optional. How would you do that?
        28. What are the most useful features of TypeScript?
    - JavaScript (JS)
        1. What are the different data types in JavaScript?
        2. What’s the difference between mutable and immutable objects in JavaScript?
        3. Explain “var b = […a];”
        4. Does JS mutithreaded or singlethreaded?
        5. How do we handle a non-blocking operations?
        6. What can you tell me about promises?
        7. What kind of troubles can promises give us?
        8. About promise chaining
        9. What is variable hoisting?
        10. What’s the behavior of let and const?
        11. Array methods: map and filter. Will a new array be created as a result of executing these methods?
        12. What can you say about Node.js and what’s the difference between it and browser environments?
        13. What is the Event Loop in the most basic words?
        14. What are closures in JavaScript and what problems do they solve?
        15. Difference between arrow function and regular functions in JS?
        16. What is Hoisting in JS?
        17. What’s the best: async/await, callback, or promise?
        18. In terms of error handling, which is the best: async/await or promise?
        19. What are the states of a promise?
        20. Why are callbacks not used so widely anymore?
        21. If I use async-await, how do I make 2 promises at the same time?
        22. I have a pure function and add some asynchronous operation. Does it make the function impure? What if I’m accessing the Window object?
        23. Tell us about memory leaks.
        24. Disadvantages of garbage collector?
        25. Tell us about callback hell.
    - Python
        1. Describe your experience with Python and NumPy.
        2. How do you handle data consistency problems when working with Pandas?
        3. Have you worked on improving performance when working with Pandas?
        4. Have you used decorators or metaclasses in Python?
        5. How do you deal with asynchronous operations in Python?
        6. Do you know NumPy capabilities in vectorization?
        7. Have you had any challenges working with multidimensional arrays?
- DATABASE  ☑️
    - SQL
        1. How would you optimize a SQL query with many joins?
        2. Tell about SQL injections.
        3. What is a transaction in SQL databases?
        4. How would you approach the problem of a slow SQL query?
        5. Can you recall SQL transaction isolation levels and the problems they have?
        6. Tell me about your experience with Prisma.
        7. Assume you’ve given a small function to write to your dev team. The developer has 1 year of experience. When you query data with his solution, the data is not unique. You’re coming in and telling him to find IDs that are not unique. How do you do that in SQL? He’s trying to solve the problem but fails and asks for help. How do you help him? If the developer repeatedly does not find the right solution, how do you help?
        8. I need you to write a query that’s going to look for all the employees from the engineering department. What JOIN strategy would you use here? How would you ensure that a deletion of the department removes all the employees of the department from the database? Would you add anything to this CREATE statement here? Let’s say you want to expand the Employee so they can belong to 2 different departments, how would you design it? You need to return results alphabetically, how would you improve the performance of such a request?
        9. What is multi-version concurrency control in PostgreSQL?
        10. Composite index.
        11. How to improve the performance of SQL queries.
        12. CAP theorem.
        13. Types of joins in SQL.
    - NoSQL
        1. How did you use MongoDB on your last project? Did you write complex queries?
        2. Did you keep the relations in the schema or embed documents in MongoDB?
        3. Join in NoSQL.
        4. Relations in MongoDB.
        5. Base NoSQL.
        6. When not to use indexes in NoSQL.
        7. What is your experience with transactions in MongoDB?
    - General
        1. When to use SQL and when NoSQL?
        2. How to keep personal info secure in DB?
        3. How did you do backups and connected security stuff?
        4. Have you ever designed DBs and what approach for connection do you use? maybe some ORMs?
        5. Within a transaction, describe optimistic and pessimistic concurrency control?
        6. What was the way to ensure that all data was migrated? What kind of validation was done?
        7. How did u know that all data you need in the new system?
        8. We have 10 purchases within our legacy system and each has different amount of money. What kind of validations can we do to ensure that all data migrated properly?
        9. What databases did you work with and what were your responsibilities?
        10. What are the ways to implement multi-tenant architecture in terms of databases?
        11. What are the disadvantages of schema separation in implementing multi-tenant architecture?
        12. How do you choose which database to use in a project?
        13. How would you implement a transfer between accounts within the same system? What level of transaction isolation would you use?
        14. In a complex project with a large database and many tables and joins, how would you optimize the number of joins?
        15. How would you organize multi-tenancy? How would you store the data in the database?
        16. Which ORM would you choose for a new project and why?
        17. In a relational database with many tables and relations, how can you reduce the number of joins? What approaches do you know to optimize read queries?
        18. What is the n+1 problem?
        19. Have you faced any problems with database performance? How did you solve it?
        20. Let’s imagine you see that database performance is low. What would you do?
        21. Why do we use indexes in a database? What types of indexes do you know?
        22. When would you choose to work with NoSQL databases and when would you stick to SQL databases?
        23. What was the biggest challenge while working with databases?
        24. How do you handle migrations in TypeORM?
        25. You have a table of books and a table of authors. How would you implement a database for this data in SQL and NoSQL?
        26. What is the difference between MySQL and PostgreSQL?
        27. Explain transaction isolation levels.
        28. Replication types (database).
        29. How do you handle transaction rollbacks?
- DevSecOps  ☑️
    - DevOps and Deployment
        1. What are multi-stage builds in Docker and when should you use them? Why are they efficient?
        2. What were your DevOps responsibilities?
        3. What were you using for CI/CD pipelines?
        4. What is Kubernetes? What is autoscaling? On what basis do you scale it? On which criteria would you go for scaling?
        5. What's the difference between a Docker Image and a Container?
        6. You have an API written using Node.js, what should your Dockerfile contain to run it?
        7. If you're deploying your API to production, do you think you need package.json included in the production build? It's not good to give end-users this file, how do you prevent it? Should only the production build be exposed?
        8. Have u worked with bash and linux commands
        9. Have u used some kind of proxies
        10. We have FE app and we wanna dockerize it, app makes multiple requests to backend and base URL is changing from environment to environment, we store this base URL in env var and we wanna change it’s value dynamically after image has been built. How can we achieve it
        11. Describe your experience with Docker.
        12. What network drivers does Docker have?
        13. Write a Dockerfile for a Node.js application. Explain what it consists of.
        14. What is Nginx, how do we use it?
        15. What is a reverse proxy?
        16. Do you have experience using Traefik/Nginx as a reverse proxy?
        17. CDN, reverse proxy, load balancing.
    - Security
        1. What is a web app firewall?
        2. What is CORS and how does it work under the hood?  And why do we have it? And who will block a cross-origin request?
        3. What is CSRF? Can you tell me how to implement a CSRF attack in detail?
        4. Can you explain how cross-site scripting works? How to implement an XSS attack?
        5. What is a digital signature? (In the context of application security)
        6. Can you tell me about encryption? What are the two main classes? (symmetrical and asymmetrical)
        7. Tell me about the best security practices to protect the backend from attacks?
        8. How do you handle any sensitive information when designing an API: username, password, connection strings?
        9. How to write a token as HTTP-only in cookies?
        10. If we call a lambda in the browser, how do you ensure that no one gets access to other users' data? What will you send with the request and then decrypt inside the cloud function to verify that a particular user has access to some data?
        11. How do you prevent vulnerabilities in Angular or Node.js? Have you faced any problems? Do you know what a licensing vulnerability is?
        12. How do we store passwords securely?
        13. How do you ensure security and scalability when creating Docker containers for MongoDB and Node.js?
        14. Tell about your experience of working with security and vulnerabilities, and how you solved any problems with that.
        15. What do you know about security in the web world? Maybe about some vulnerabilities and other stuff.
        16. Frontend communicates with a third party by some secret key. The key has been stolen and your backend regenerates this secret key, but the frontend still uses the old key (with which the frontend app was deployed). How does the frontend app know that the secret key has been regenerated? How to notify the frontend and make it use the new key?
    - Cloud
        1. What is a layer, versioning of a layer, and how do you manage dependencies in Lambda?
        2. What is hot state in Lambda?
        3. What would you choose, Terraform or CloudFormation?
        4. Did you use Cloudflare, and if so, for what?
        5. How have you used Google Cloud on the project?
        6. What cloud functions have you used?
        7. List AWS services you have been managed to worked with
        8. What cloud services have you worked with?
        9. Explain how Cognito works, and how you used it.
        10. What is the use case for lambdas? Can they be used by default in every project?
        11. What issues might a serverless application face?
        12. If you have an API part that handles products, would you organize each endpoint with its own lambda or handle routing within a single lambda?
        13. What are you proud of regarding your work?
        14. What is Lambda, why do we use it, and when shouldn’t we use it? What are the cons of Lambda?
        15. What was the use case for using Lambda functions in your project?
        16. Have you ever worked with serverless technologies and how would you describe your experience?
        17. For what purpose did you use cloud storage?
        18. How do you know when you need to scale AWS service? What metrics would you use? (load of CPU, RAM)
        19. Describe the architecture of the AWS environment on your projects.
        20. What is Lambda layer?
    - General
        1. Can you tell me about your experience as a DevOps?
- TECHNIQUES  ☑️
    - Authentication and Authorization
        1. You have a CRM with an API that requires JWT token authorization, and the token expires every 3 minutes. When a client updates their profile, the data needs to be updated in both the CRM and your database. How would you handle this request and address token expiration (interceptors)?
        2. Where to store JWT and session tokens on the client?
        3. Name the authentication and authorization methods you have worked with.
        4. Describe the implementation of authentication.
        5. What approaches exist for implementing roles and access rights?
        6. How do you handle authentication in apps? Do you handle any authorization based on JWT token on the frontend part?
        7. What is OAuth and how does it work?
        8. Tell us about JWT.
    - Validation
        1. How do you validate payload or request data?
        2. You have an input that’s used to paste a number bigger than bigint can store. How would you validate it? Let’s say you’re using React.
        3. Share your screen and write validation to check if the input is an email.
    - Caching
        1. Tell us about Redis. What is the complexity of using Redis for caching?
        2. For example, you have a user stored in the cache. They updated their passport data, you need to change it both in the cache and in the main database. How would you do it?
    - Logging
        1. How would you implement exceptions logging in microservices? Where do you store logs?
    - Application monitoring
        1. Was it a production environment? If yes, did you need to monitor it? What exactly did you monitor, and how did you understand that everything was working? What kind of alerts did you use in the system?
        2. How do you monitor the performance of a containerized application?
- Kafka ☑️
    1. How did you configure Kafka using JS?
    2. Are you comfortable working with Kafka?
    3. Can you please explain about the architecture of Kafka?
    4. Do you familiar to Kafka
    5. How do you set up master selection in Kafka when you configure it?
    6. What’s your experience working with Prisma ORM? Kafka has its own persistent layer, so how do you compare both of them?
- Web Technologies and Protocols ☑️
    - GraphQL
        1. Did you have GraphQL gateway connected to different microservices or did you have a GraphQL federation?
        2. Could you please describe some pros and cons of your solution (Apollo Federation for GraphQL)?
        3. So tell me about your experience working with Apollo server?
        4. Pros and cons of graphql + federation
        5. Did you implement "supergraph" or "federated graph”, or was it just 1 service with GraphQL?
        6. What’s the difference between REST and GraphQL?
        7. What is the limitation of GraphQL?
        8. How do you design a GraphQL schema, and can you explain your process, ideally with an example?
        9. How is error handling in GraphQL different from REST API?
        10. What’s the main transport layer GraphQL uses?
        11. What are some security concerns specific to GraphQL, and how do you address them?
        12. Why would you choose GraphQL over REST API? Does GraphQL speed an application up?
        13. How do you handle performance issues in GraphQL related to overfetching or underfetching?
        14. How do resolvers work in GraphQL and how are they different from REST API?
        15. What are some security concerns specific to GraphQL and how would you address them?
        16. DataLoader in GraphQL.
    - gRPC
        1. What is the idea behind gRPC?
    - General
        1. Imagine you open web browser and typing some URL in the input and click to enter. Describe the following process.
        2. List me the transfer protocols that can be used.
        3. Tell me the difference between HTTP and WebSockets.
        4. Could you tell me the difference between TCP and UDP?
        5. What are the things that are happening between the client and server? One I want to fetch data and get from the API of the access service?
        6. With which protocol are you talking with the server?
        7. What needs to be done in order to make HTTP request?
        8. What are the steps to download the data? What is input and output of this step?
        9. What is DNS?
        10. Which type of connection should be established with the server?
        11. Regarding the HTTP request, do you know how would the HTTP request text that you sent over the TCP connection will be formatted?
        12. What is the difference between POST and PUT requests?
        13. HTTP request lifecycle.
        14. Data transfer protocols.
- Microservices ☑️
    1. Monolithic vs microservices architecture.
    2. When do you need microservices and when not?
    3. How to organize interaction between microservices?
    4. How to organize microservices so they are decoupled (so there are no dependencies of one microservice on another) (хотел услышать про очереди сообщений)?
    5. Have you heard of CQRS?
    6. In a multi-tenant architecture using schema implementation, how can we dynamically create a new tenant and ensure each schema has its own connection passed as a dependency injection token?
    7. How do you convert a REST API to microservices?
    8. What are the main trade-offs of using microservices instead of monolithic architecture?
    9. When would you choose a microservices architecture?
    10. Did you do any scaling of microservices?
    11. How would you implement synchronous communication between microservices?
    12. Describe types of communication between microservices.
    13. Distributed transactions.
    14. How do you approach the challenge of data management in microservices?
- Testing ☑️
    1. What tests do you know? Which ones do you write?
    2. What was the testing culture within your projects? Did you work with tests?
    3. What do you use for unit testing?
    4. How proficient are you with testing? What types of tests do you write and what libraries and tools do you use?
    5. Can you describe the difference between unit, integration, and e2e tests? How do basic integration tests look and do they work with databases or mocks?
    6. What about microservices, do integration tests need to test the whole system and interaction between services?
    7. What about performance testing, have you used performance testing tools? High load testing?
    8. What are the pros and cons of using Puppeteer and Jest for testing? What’s the difference between mocks and stubs?
    9. What’s the difference between unit and integration tests?
- Web scrapping ☑️
    1. What about ur experience with Puppeteer
    2. What’s about scrolling in puppeteer
    3. Where have u deployed ur scrapers (Linux or Windows)
    4. Do you have experience with Chromium and Puppeteer?
    5. How many years of experience with Chromium do you have? It’s not mentioned in your CV.
    6. Tell about your web scraping experience.
- General Programming ☑️
    1. Are you familiar with Domain-Driven Design (DDD)?
    2. What’s the difference between a compiler and a transpiler?
    3. What is a pure function?
    4. What is immutability? Which option follows the principles of immutability?
    5. What are side effects in functional programming?
    6. Encoding vs. encryption vs. hashing.
    7. What is idempotence?
- Architecture & System design ☑️
    1. Explain SOLID principles.
    2. If you are creating a system from scratch, tell us what technologies you will use, what database, what programming language, and why?
    3. What are your major concerns and priorities while developing and designing backend systems? Give me the list.
    4. Do you have any experience with streaming applications?
    5. Describe your experience starting a project from scratch. What principles should you rely on to establish a correct architecture from the beginning?
    6. Imagine you have two developers on a project with a monolithic architecture. What architecture would you propose?
    7. What architectures do you know? (Questions about MVC, Hexagonal, Onion, Clean, Layered, Component-based)
    8. Your task is to design a REST API using Node.js. It should handle a large number of requests. The app has a large database with a complex schema, user data, and sessions. How would you approach this task? Consider things like API endpoint structure, interaction with the database, security, and performance.
    9. Do you have experience setting up the whole infrastructure?
    10. Can you describe a scenario where you’d use interfaces over classes and how this choice impacts the system's design?
    11. Can you give an example of a design pattern you used in an application and explain why you used this particular pattern?
    12. Can you describe a web app architecture you’ve worked on and how you ensured it followed SOLID design principles?
    13. If you had a chance to design a system, how would you ensure that sensitive data is protected? What measures would you take?
    14. We have a banking application. You need to implement a report feature so that users can view transaction history for a specified period. Design such a feature. What endpoints would you write (path, naming)? Suppose a year has passed, the database has grown, and the request takes 20 seconds, considering you have added indexes and scaled both vertically and horizontally. What would you propose? (Answer - change business logic, such as sending the report by email)
    15. How do SOLID principles influence error handling and logging?
    16. If you had a chance to design a system, how do you ensure that sensitive data is protected? What measures would you take for that?
    17. How do you ensure that the application you design is scalable and maintainable?
    18. What types of service architectures do you know?
    19. Have you worked with event-driven architecture?
    20. Differences between microservices and service-oriented architecture.
    21. What is dependency injection?
    22. What are the options for notification delivery? How would you design a system with guaranteed notification delivery?
    23. Let’s imagine you have some API gateway. The frontend is connected to the API Gateway using Websockets. How would you scale it?
    24. Principles of OOP.
    25. DI principle.
    26. Serverless vs. event-driven.
    27. Architectural patterns.
    28. What is flux architecture?
- Optimisations  ☑️
    1. Did you have any performance-related problems on the frontend or backend?
- Coding challenge  ☑️
    1. You have a string that contains characters, and you need to implement the function that takes that string and returns the amount of repetitive characters, meaning how many characters repeated themselves.
    2. Write a JavaScript function reverse that takes an array and returns it in reverse order. (After seeing the answer) → Suppose this array occupies 4GB, how would you optimize your solution?
    3. TASK: I give you an array of numbers, you need to find Pythagorean triples. Input: [3,1,4,6,5]. Output: 3,4,5 (3^2 + 4^2 = 5^2)
    4. We take an array of digits that represents a whole number. Increment the number represented in the array by one. Write in TypeScript.
    5. Understanding Prefix Trees (Tries). Describe what a Prefix Tree (Trie) is and its efficiency.
- Best Practise  ☑️
    1. How to reduce the costs for MVP?
    2. What principles and best practices do you use to achieve higher code quality and scaleability?
    3. Is there anything you want to do in the code in order to improve the performance?
    4. What about application optimization?
    5. Did you use some special utility to make sure that everything related to CSS (colors, fonts) is consistent throughout the application? (Means: CSS Variables (Custom Properties); SASS/SCSS; CSS Frameworks; Component Libraries; Style Guide or Pattern Library)
    6. What’s about Contentful?
    7. What is the stoplight?
    8. Can you explain in simple words what is the JSON Schema and what is the OpenAPI?
    9. Is there any point in adding /api before endpoints, or is it just for understanding?
    10. Your CV says that you've written clean, efficient, and maintainable code using best practices. What are some of those best practices?
    11. How do you ensure that an app design is scalable and maintainable?
    12. Were you using analysis tools for finding vulnerabilities or problems with the code? Were you using any scans?
    13. Are you aware of static analysis and dynamic analysis tools?
    14. How do you handle errors in production? What are the best practices to deal with them?
    15. Tell me more about your approach to ensuring code quality and how you validate what you are doing before it goes to production.
- Project Experience ☑️
    1. Could you quickly introduce yourself?
    2. Tell us about your experience and what you recently did.
    3. How many people were there in the biggest team that you have worked with?
    4. How many people were in your latest project, who have been working with you?
    5. Tell me about the project you are most proud of (in your career)? And why?
    6. Tell me about something that you developed on your latest project and about challenging tasks
    7. How did u start ur investigation of WebRTC in term of the fact that u haven’t worked with it before?
    8. Have u worked on project where not all requirements were clear?
    9. Have you worked with securing sensitive info?
    10. How much exp do you have with backend and how much with frontend?
    11. What happens in API Gateway? Like I make a request and it goes through it and what functionality it does?
    12. Give me an example how did you use it (API Gateway) for what purpose?
    13. I see a lot of projects here. How long have you been contracting for? (Innowise)
    14. What team sizes did you work with?
    15. Are you on Windows or Mac?
    16. Tell me about the full lifecycle of a ticket in scrum.
    17. What were you doing on this project? How many team members did you have? Where were they located? Tell me everything!
    18. What are you looking for in your next position?
    19. Can you tell me in percentage how much back end and how much front end did you do on the project?
    20. What cloud hosting have you had experience with? Azure, AWS? And how much work have you done with that?
    21. Which is the most cost-effective way of doing that? (cloud hosting) How to reduce the costs for MVP?
    22. What did you do in your latest project? What were your responsibilities?
    23. You are working in a cross-functional team. You work with designers, testers, and devopses. How do you feel about that?
    24. What were you doing on this project? How many team members did you have? Where were they located? Tell me everything!
    25. Do you have any experience with streaming applications?
    26. What have you been doing on your recent project?
    27. Have you had any experience working with financial applications? Describe what it was about. (In the context of a project that is a financial platform)
    28. Tell us about the payment system that you used.
    29. Do you have experience with web3, what was it?
    30. Give an overview of your career.
    31. Have you ever used Jira and Confluence?
    32. One of your projects was… what country was this app developed for, and what was the main idea?
    33. What was the tech stack you’ve been using on the project?
    34. What was the team on your last project, and what was your role?
    35. What architecture did you use on the recent project?
    36. Have you worked with serverless?
    37. Was it a legacy project or did you develop it from scratch?
- Specific Scenarios and Problems ☑️
    1. Let’s say we want to develop an API and we wanted to be very fast with the showing response. What would be the action items that we can do in order to make sure the API is fast?
    2. I am a customer, I wanna press some button and it will launch some process of scanning my area and I wanna get information about antennas that are around me. How are u going to design it? Maybe u wanna ask some questions to me or to some other people?
    3. If the R&D manager found that they didn’t finish some functionality, but u can develop it urself. Do u think that it’s something u wanna do?
    4. Have u ever been in situation when u have some requirements and u should do almost everything (FE / BE Architecture)
    5. We are making an API that can be accessed on the frontend and I’ll do a cloud function that gets some info from Big Commerce about a customer orders and returns it to FE. What measures can you take for the case when someone who understands developer tools accesses the website and attempts to get someone else’s orders info?
    6. If we wanna build platform that allows recruiter to do things related to recruiting. Can u think about challenges related to it?
    7. Situation: There is an Ubuntu server you accessed daily without issues, but today it's not accessible. What would you do? The server runs a backend accessible via a domain name and uses Nginx.
- Team Lead ☑️
    1. If you have a team of 10 people, how will you build processes, what will be the basic rules of work, and so on?
    2. How do you usually distribute tasks to your team?
    3. What do you usually prefer, letting the team distribute tasks on their own, or carefully distributing tasks yourself?
    4. What if any conflicts happen in that team or with clients? How would you react?
    5. How do you organize the work of the team and what tools do you use?
    6. How did you onboard new team members on the project?
    7. Tell about your mentoring experience.
    8. Are you up to leading a team or are you also flexible to implement features?
    9. What do you do if you see that someone continuously writes bad code?
    10. What do you do if you see that your colleague is not efficient?
    11. Tell us about your lead experience.
    12. Have you had any conflicts or arguments in your team? How would you solve them?
    13. If one of the team members comes to you and says he’s stuck with some technical problem, how will you help him?
    14. What was your experience in teams and how do you approach team management?
    15. Have you faced conflicts and arguments within the team? How did you resolve them?
    16. Have you experienced arguments with other developers? How did you deal with situations like this?
    17. Have you had experience where you were the only developer or had a team lead role?
    18. Did you lead the team? Were you a kind of the team leader or it wasn’t an option for you?
- Soft questions ☑️
    1. Did you have any experience with English-speaking teams?
    2. Have you had any experience working as a tech lead?
    3. Tell us about your education, where did you study? Was it difficult learning programming?
    4. What are your major principles when you are working with the team?
    5. What is your favorite part of the work? What types of tasks are most enjoyable for you?
    6. Can you describe a situation when you faced an issue or challenge during a project, how was that for you, and how did you handle it?
    7. How would you like to develop further as a professional? What would be your next professional challenge or domain you would like to master or something like that?
    8. Are you good at working with teams?
    9. Do you prefer working in a team or alone?
    10. What about meeting deadlines? Are you good at meeting deadlines? How do you manage your schedule usually?
    11. What about handling challenges during your working time, how do you usually handle the challenges?
    12. Have you ever faced conflicts at your workplace, with coworkers or clients? If you have any specific example from your experience, I would like to hear that, how you solved that problem and how the situation turned around?
    13. What motivates you?
    14. What about meeting the deadlines? Are you good at meeting deadlines? It’s not always up to you, what will happen if you encounter something like this?
    15. What was the most interesting project in your career, and what specifically did you do? What was your significant contribution to this project?
    16. What was your biggest mistake in your career? What was the funniest bug?
    17. What’s interesting for you?
    18. Tell about yourself, what you’re up to, what’s your morning routine?
    19. What is your level of English?
    20. Do you have experience with time trackers? Have you faced any problems with them?
    21. What’s your communication strategy with the project team?
    22. What’s your perfect work day?
    23. What’s your bad work day?
    24. What’s your strength as a developer?
    25. What do you need to work with to become a better developer?
    26. Have you worked in international teams?
    27. What’s your perfect workday?
    28. What did you study at university?
    29. What languages are you most experienced with?
    30. What do you do in your free time?
    31. Do you prefer to work alone or in a team? What are pros and cons?
    32. What’s your favorite project domain?
    33. Let’s say you start, what would be your first step to get familiar with our project, how do you see onboarding? What will be important for you to do in your first days?
    34. Did you work in an office or remotely? What do you prefer, and what’s better?
    35. How do you measure if something is successful or not?
    36. What do you like about the job? What’s your favorite thing to do?
- Miscellaneous ☑️
    1. What side would u like to work on at your next project?
    2. Have you had any experience where you were a single developer on a project?
    3. How long have you been working at Innowise?
    4. What do you do in your free time?
    5. Where are you from?
    6. How long have you lived in Warsaw?
    7. From where did you move to Warsaw?
    8. Why did you move?
    9. What new technologies would you like to learn or work with?
    10. What are your activities while you are on the bench?
    11. Do you think there will be difficulties in working because of the time zone difference? (Client from the USA)
    12. Have you worked with code support? How do you understand the existing code? Have you ever been involved in troubleshooting?
    13. Do you prefer imperative or declarative code?
    14. What’s the ideal project for you?
    15. Do you prefer frontend or backend development?
    16. Where did you study, at which university/college?
    17. Do you prefer working from home or office?
    18. When working remotely, do you work from home or an office?
    19. When working remotely, what do you think is extra-important? What’s your strategy for integrating yourself into a remote team?
    20. What about synchronous communication versus asynchronous communication? Calls vs chats?
    21. Do you have any preferences, like technologies, methodologies, etc.?
    22. How did you sync up with international remote teams?
    23. How do you keep yourself updated with the new technologies?
    24. How would you score your experience to our requirement from 1 to 10?
    25. What would you do if the documentation is not extensive yet?
    26. What kind of resources do you use to keep up to date with changes in your specialization?
    27. How do you manage tight deadlines?
    28. Is time overlap okay with you? Won’t it be a problem that your day finishes when ours starts?
    29. Were there any business pressures or missed deadlines on your last project? How did you deal with that?
    30. Have you worked as a tech lead on some projects?
    31. Did you choose the stack of technologies or someone else?
    32. How long have you been working at Innovise?
    33. Is Innovise your first company?
    34. Where are you located? Do you work remotely or from an office?
    35. What technologies do you want to learn or work with?
    36. What new technologies would you like to learn or work with?
- Business process & Methodologies  ☑️
    1. Describe your experience of communication with managers, product owners, etc.
    2. Walk me through the lifecycle of a ticket that’s not yet been refined in Scrum. What stages would you expect it to go through?
    3. Who made decisions about code architecture, who did code reviews, etc.?
    4. Describe your experience with pull requests and reviewing code.
    5. What pros do you see in Agile?
    6. What methodologies have you worked with: waterfall, Kanban, Scrum? What was the process? Your opinion on Agile?
    7. Let’s say someone makes a pull request, and you need to review it. What would be your thought process, and what things would you pay attention to?
    8. What was the length of sprints on your recent project?
    9. How do you generally work with your team in terms of methodology and communication?
    10. What development methodologies are you experienced with?
    11. What are your views on test-driven development? Have you tried it?
    12. How do you work in a team-oriented environment? How do you work with the project team towards completion?
    13. Describe your work in teams. How was communication, did you have daily meetings, weekly meetings? Did you have planned deadlines? Did you manage to meet the deadlines? How did you deal with missed deadlines?
    14. Working in a team with different time zones, how do you handle conflicts after pulling down the branch from GitHub?
    15. Describe the processes on your latest project, the methodology, how tickets were created, branching, git-systems, etc.
    16. How were the processes built on the last project? What did the work week and sprints look like?
    17. How was the team structured? Location, size?
- AI & LLM ☑️
    1. What issues did you encounter while working with LLMs, and how did you resolve them?
    2. How did you enforce the format of the received data? 
    3. What is embedding?
    4. How are similar embeddings found? (formula)
    5. What metrics were used to evaluate the effectiveness of the developed model? 
    6. Did you use user feedback to improve the neural network, and how specifically? 
    7. Project - assistant for communication in Tinder and other dating apps. The user sends a screenshot of the conversation, and the service should suggest a response option. The chain is approximately as follows: identify the application by the screenshot, recognize the conversation, find previous messages in the chat, generate a response, use an agent. There's an issue with latency (data is processed in the chain), tens of seconds, what can be done about this?
    8. Where does latency come from when working with LLMs and in the chain?
    9. There is an idea to split the chain into smaller prompts and use smaller models. What do you think?
    10. Sometimes the model does not respond as we want, how can we make it? (guidance
    11. What is log props in LLM? What is this tool for?
    12. There's a task to create a mobile app that will suggest a response option to a message in a conversation. How would you implement it, what should you pay attention to? For example, if we start doing it tomorrow, what do we do?
    13. You have mentioned that you participated in LM (language model) training. How much time it has taken to make u be a part of this process?
    14. Can u tell me in few words what was the integration that u did? (it’s about LM integration)
- Data structures & Algorithms ☑️
    1. What is a hash table?
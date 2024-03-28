- Common questions ☑️
    1. Tell me about yourself, about your experience?
    2. What did you study at university?
    3. Tell me about you the most challenging situation for you in your work experience?
    4. How do you do code reviews on your projects?
    5. Did you use static analyzing and dynamic analysis tools?
    6. How you stay up to date with new technologies?
    7. How you improve your knowledge?

---

- Refactoring ☑️
    - flip if
    - replace a lot of condition w/ array includes
    - replace switch case/a lot of if’s with object
    - What is a Short circuit condition
        
        ```jsx
        if (authenticate) {
          loginToPorta();
        }
        
        VS
        
        authenticate && loginToPorta();
        ```
        
    - Flip switch (true) …
    - Dynamically add prop to object

---

- Coding questions
    - Sum of a number series in a range
        
        <aside>
        💡 1. Using for loop
        2. Using recursion
        3. Using [formula](https://obzorposudy.ru/polezno/cto-oznacaet-naxozdenie-summy-ryada#:~:text=%D0%B2%20%D0%B2%D0%B8%D0%B4%D0%B5%20%D1%80%D1%8F%D0%B4%D0%B0.-,%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B9%20%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%20%D1%81%D1%83%D0%BC%D0%BC%D1%8B%20%D1%80%D1%8F%D0%B4%D0%B0%3A,-%D0%A0%D0%B0%D1%81%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B8%D0%BC%20%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%20%D1%81%D1%83%D0%BC%D0%BC%D1%8B)
        
        </aside>
        
    - Sum of Fibonnachi series

---

- Logical task ☑️
    - Find the relationship between the light bulb and the switch
        
        Q: We have two rooms that are separated by an non-transparent wall. There are 3 light bulbs in one room and 3 switches in the other. They are connected by wires, but we don't know which bulb is connected to which switch. It means that 1st bulb can be connected to 1st, 2nd or 3d switches respectively. Our task is to find the relationship between the bulb and the switch. Constraints: we are in a room with switches, we have to do some manipulations with switches and then move to another room and tell which light bulb is connected to which switch. 
        
        <aside>
        💡
        
        </aside>
        
    - Bad pills & good pills
        
        Q: We have 5 containers with the same amount of pills and an electronic scale. There are 10 pills in each container. There are 2 types of pills: poisoned and normal. They look identical, the only difference is the weight: the poisoned one weighs 9 grams and the normal one 10 grams. Your task is to determine which container contains only the good pills? Constraints: you can only use the scales once.
        
        <aside>
        💡
        
        </aside>
        
    - Monty Hall parodox

---

- JS ☑️
    
    ## Common questions
    
    - What is programming language? Which programming paradigm's you know? DIff between compilation vs transpiration vs interpretation?
    - What’s new in JS?
    - Props & cons of JS
    - Is JavaScript a compiled or interpreted language
    
    ## Junior
    
    - What would be the result of 1+2+'3’
    - What is closure?
    - What is 'this' ?
    - What is the difference between == and === operators
    - What is a higher order function
    - What is the difference between let and var
    - What is IIFE(Immediately Invoked Function Expression)
    - What is a callback function? What is a callback hell?
    - What is the difference between null and undefined
    - What is NaN
    - How do you check if a key exists in an object
    - What is flags in object (Readeblem enumerateble and so on)
    - What are wrapper objects
    
    ## Middle
    
    - What is a pure function
    - What is the currying function
    - What is EventLoop? How it works? What is diff between FE & BE?
    - What is Promise? Tell me more about static methods of Promise
    - How do you decode or encode a URL in JavaScript?
    - What are the differences between cookie, local storage and session storage
    - What is the difference between Call, Apply and Bind
    - What is setTimeout, setInterval, setImmideate
    - How to made object readonly
    - What is a polyfill
    - What is tree shaking
    - What is the difference between proto and prototype
    - What are WeakMap and WeakSet in JS? What is diff between Map & Set
    - How perform deepCopy object?
    - How to swap to variables in one line?
    - What is the purpose of double tilde operator
    - What is minimum timeout throttling
    - What is the purpose of queueMicrotask
    - What is debouncing?
    - What is throttling?
    
    ## Senior
    
    - What is Proxy & Reflect? What is diff?
    - What is symbols in JS?
    - What is JS generators?
    - How to cancel a fetch request
    - What is a service worker
    - What are the bitwise operators available in javascript
    - What Is Obfuscation in javaScript
    - What is V8 JavaScript engine
    - What is Mixin in JS?
    - What is the difference between isNaN and Number.isNaN?

---

- TS ☑️
    
    ## Common questions
    
    - JS vs TS. Where and why will use in next project?
    - What’s new in TS?
    - Props & cons of TS
    - TS are compilable or interpreted language?
    
    ## Junior
    
    - What is ts.config?
    - Build in types in typescript?
    - Diff between `any` VS `unknown` VS `never` VS `void`? Gimme example of use case when you are using each of type.
    - What is conditional type?
    - What is generic types? Why it’s useful?
    - What is declare keyword?
    - What is type casting? What is diff between type declaration and type casting?
    - If you are wanna create an object. Which type you will use?
    - How can you make read-only Arrays in TypeScript?
    
    ## Middle
    
    - Do you know any utility types (`Pick` & `Omit`)?
    - What is type guards in TS?
    - What is `infer` keyword?
    - Diff `const enum` VS `enum`
    - What means satisfied keyword?
    - Explain Tuples in Typescript With Example?
    - Explain main OOP principle on TS. Which one is most non-important & important (just POV)?
    - What is decorators?
    - What is function owerloading? Does it supported in TS?
    - How do the extensions .ts and .tsx differ in TypeScript?
    - Differentiate between extends and implements in TypeScript?
    - Difference between interface VS types vs Class vs abstract class?
    
    ## Senior
    
    - Explain assertion functions?
    

---

- Databases ☑️
    
    ## Common questions
    
    - What is DB?
    - Tell me about DB? What pradigms do you know?
    - What is diff between SQL & NoSQL?
    
    ## Junior
    
    - What is ORM/ODM? Why it’s important? Did you used in you programmer life?
    
    ## Middle
    
    - How to handle fast-growing databases? Do you know what is scaling/sharding?
    - How to speed up your query?
        - Using SSD instead of HDD
        - Using indexing
        - Write more efficient queries
        - Using denormalizations
    - What is migration? Why we are need this?
    - How to make sure that we don’t loose our date accidently? (backup’s)
    - SQL
        - What is SQL? What parts does it consist of?
        - What is ACID?
            - A -
            - C -
            - I -
            - D -
        - What is transactions? How it works?
        - What is CQRS?
        - What is SQL-injection? How to avoid it? What you can tell about normalization & denormalization?
        - What diff between left, right, inner, cross(full) join?
        - What is VIEW in PostgresSQL? Why we are using it?
        - Diff between DELETE vs TRUNCATE
        - Diff between WHERE vs HAVING
        - What is primary key & foreign key? What is diff and why we are using it?
        - What is index? Why we are using it?
        - CAP theorem
    - NoSQL
        - What do you understand by NoSQL?
            
            <aside>
            💡 NoSQL = Not Only SQL
            
            </aside>
            
        - What you know about BASE?
        - What do u know about database sharding in the NoSQL database?
        - Why Redis is so fast? Where it stores data?
    
    ## Senior
    
    - How to replicate your DB?
    - How to design databases? Try to design `chat` app

---

- Design patterns ☑️
    - Do you know what means SOLID abbr?
    - Do you know what means DRY abbr?
    - Do you know what means KISS abbr?
    - What is dependency inversion?
    - What is dependency injection?
    - Which design patterns are you know?
    - What means Singletone? Use case?
    - What means Strategy? Use case?
    - What means fabric? Use case?
    - What means Builder? Use case?
    - What means Decorator? Use case?
    - What is MVC, MVP, MVVM, MVVM-c, VIPER?

---

- System architect ☑️
    - Microservice VS monolith
    - What is proxy/reverse proxy server?
    - What is CDN?
    - How to setting up autoscaling?
    - What is message broker? Use case?
    - What is RAID?
    - What is distributed systems?
    - What is caching? Why it’s useful?
    - 

---

- DevOps
    - What is DevOps?
    - What is Docker? How that works under the hood?  Why it useful? Which problem resolves?
    - What is Docker-compose? Use case?
    - What is Kubernetes? How architecture of kubernetes look's like?
    - What is CI/CD?

---

- Cybersecurity

---

- Node JS ☑️
    
    ## Common questions
    
    - Why NodeJS is good/bad
    - Is Node.js completely single threaded
    
    ## Junior
    
    - What is EventEmmiter?
    - How to get secrets to run your app? How add types for it in TS?
    - What is package.json & package-lock.json?
    
    ## Middle
    
    - What is NodeJS streams. Where and why it's used?
    - What are libuv & V8?  Where and why it's used?
    - How to measure performance of you app?
    - What is Event Driven Programming? How it’s related to Node?
    - How to limit endpoint throughput (number of requests per unit time)?
    - Why do I need to add the node: prefix when loading inline modules?
    - What is cycle deps and how to avoid it?
    - When I should use sync method of module fs?
    
    ## Senior
    
    - How accurate Node JS, in terms of time. (ms, µs, ns)
    - What is npm audit?
    - What if you need different versions of npm dependencies in two parts of the same application?
    - What is C/C++ add-ons?
    - Is it possible to run NodeJS w/o V8?
    

---

- Testing ☑️
    - What is testing. Why it's necessary?
    - Can you tell me about pyramid of testing?
    - What is unit tests. Where and why it's used?
    - What is integration tests. Where and why it's used?
    - What is e2e tests. Where and why it's used?
    - How much test we should have in our app (% of each type)
    - What is mock, spy, stub? Where and why it's used?
    - How do you testing FE? What is screenshot testing and where & why it’s used?
    - Which testing libs do you know?
    - How you can test insert into DB? (using docker)

---

- Cloud technologies

---

- Algorithms

---

- Network
    - What is CORS?
    - What is HTTP? Which versions do you know?
    - What is WebSocket?
    - What is gRCP?
    - Whit is GraphQL?
    - What is TCP/IP?
    - What is DNS?

---

- Web

---
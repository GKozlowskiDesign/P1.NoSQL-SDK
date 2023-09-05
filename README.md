# MongoDB Backend CMS SDK
The motivation for the NoSQL SDK project was to help me write code more efficiently and with fewer errors using TypeScript. The secondary motivation was to get more proficient with NoSQL Backends using NodeJs and ExpressJS.


# Table of Contents
<ul>
  <li>Featured</li>
  <li>Technologies</li>
  <li>More Info</li>
  <li>Models</li>
  <li>Contributions</li>
  <li>License</li>
  <li>Acknowledgments</li>
</ul>


# Featured
<ol>
  <li>I learned about creating SDKs using TypeScript</li>
  <li>I learned more of the standardized processes of using MongoDB or NoSQL databases tools</li>
  <li>I learned more about use NodeJS with a NoSQL database</li>
</ol>

# Technologies
<ul>
  <li><b>JavaScript: </b>The primary programming language for implementing dynamic and interactive elements of the website.</li>
  <br>
  <li><b>ExpressJS: </b>Express.js is a minimalistic and flexible Node.js web application framework. It simplifies building robust APIs and web applications by providing a set of features for routing, middleware, and handling HTTP requests and responses.</li>
    <br>
  <li><b>AWS MongoDB Cluster: </b> An AWS MongoDB Cluster refers to a managed MongoDB database service offered by Amazon Web Services (AWS). It provides scalable, high-performance MongoDB databases in a cloud environment, allowing users to offload the operational aspects of database management while focusing on application development.</li>
    <br>
  <li><b>Mongoose: </b>Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a convenient way to interact with MongoDB databases, defining schemas, models, and performing operations on data using a higher-level abstraction.</li>
    <br>
  <li><b>Nodemon: </b>Nodemon is a tool used during Node.js development. It monitors for changes in your source code and automatically restarts your server, saving you from manually stopping and restarting the server after each code modification.</li>
</ul>

# More Info
<h3>Why Typescript?</h3>
JavaScript has been widely used for web app development, both frontend and backend via Node.js. Yet, it lacks static typing, causing compile-time issues and runtime errors. As projects grow, code readability and maintainability decline. This is where TypeScript comes in. It adds static types as a layer over JavaScript, utilizing a transpiler to convert TypeScript to JavaScript during build. This maintains compatibility with JavaScript libraries. Developers benefit from type-checking, preventing unexpected data type changes and catching errors at coding or build stages. TypeScript's type safety boosts productivity, allowing focus on coding.


<h3>ExpressJS and NodeJS BackEnd</h3>
The next level down is the Express.js server-side framework, running inside a Node.js server. Express.js bills itself as a “fast, unopinionated, minimalist web framework for Node.js,” and that is indeed exactly what it is. Express.js has powerful models for URL routing (matching an incoming URL with a server function), and handling HTTP requests and responses.

By making XML HTTP Requests (XHRs) or GETs or POSTs from your React.js front end, you can connect to Express.js functions that power your application. Those functions, in turn, use MongoDB’s Node.js drivers, either via callbacks or using promises, to access and update data in your MongoDB database.


<h3>MongoDB Database Tier</h3>
If your application stores any data (user profiles, content, comments, uploads, events, etc.), then you’re going to want a database that’s just as easy to work with as React, Express, and Node.

That’s where MongoDB comes in: JSON documents created in your React.js front end can be sent to the Express.js server, where they can be processed and (assuming they’re valid) stored directly in MongoDB for later retrieval. Again, if you’re building in the cloud, you’ll want to look at Atlas. If you’re looking to set up your own MERN stack, read on!


<h3>Prequistes</h3>
You will need to have installed in order to follow along with this tutorial. It has access to npm out of the box for package management in your projects.

You will also need to create a MongoDB database. The easiest way to get started with MongoDB is to create a free cluster in , MongoDB's fully-managed, multi-cloud document database service.

# Models
![mern-stack-b9q1kbudz0](https://github.com/GKozlowskiDesign/Project_SDKBackendMongoDB/assets/82541715/cba214e6-74a2-4189-a44f-a076267b9d0b)
<h3>Model Actions</h3>
<ol>
  <li>GetPostByID</li>
  <li>GetPosts</li>
  <li>CreatePost</li>
</ol>


# Release Checklist
<ol>
  <li>Deploying is consistent across all environments.</li>
  <li>Environments have distinct, defined names for reference.</li>
  <li>Uniform software stack across all environments.</li>
  <li>Configuration is version-controlled (web, CI, etc.).</li>
  <li>Tested on target networks and devices.</li>
  <li>Simplicity in tracking code across environments.</li>
  <li>A clear versioning scheme was established.</li>
  <li>Versions easily linked to code state.</li>
  <li>Feasible rollback after deployment</li>
  <li>Functional backups in operation.</li>
  <li>Tested restoration from backups.</li>
  <li>No secrets in version control.</li>
  <li>Active logging is in place.</li>
  <li>Defined process for log access/search.</li>
  <li>Logs include exceptions and traces.</li>
  <li>Errors mapped to stack traces.</li>
  <li>Comprehensive release notes were written.</li>
  <li>Current server environments are maintained.</li>
  <li>Updates plan for server environments.</li>
  <li>The product was subjected to load testing.</li>
  <li>Replicating environments via a method.</li>
  <li>Automation for repeating releases.</li>
</ol>

# General Considerations
<ol>
  <li>What is the expected/required lifespan of the project?</li>
  <li>Is the project one-off, or will there be continuous development?</li>
  <li>What is the release cycle for a version of the service?</li>
  <li>What environments (dev, test, staging, prod, ...) are going to be set up?</li>
  <li>How will downtime of the production service impact the value of the service?</li>
  <li>How mature is the technology?</li>
  <li>Are major changes that break backward compatibility to be expected?</li>
</ol>

# Contributing
<p>Contributions to the Website are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.</p>

# License
<p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>

# Acknowledgments
<p>The Website was developed by Gary Kozlowski.</p>

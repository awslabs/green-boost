# Recommended Code Architecture

Code architecture when clean and simple can increase developer productivity. This architecture is a _recommendation_, you do not have to follow it. However, keep in mind the less decisions you have to make as a developer, the faster you can build. Enforcing the right restrictions on your code can actually free you to focus on adding business value.

> Freedom is not the absence of restrictions but the presence of the right restrictions
- Timothy Keller

## File Structure Overview:
- core/
  - adapters/
  - domain/
    - events/
    - errors/
    - models/
    - schemas/
  - entrypoints/
    - api/
    - job/
  - services/
- db/
  - migrations/
  - seed/
- infra/
  - api-stack/
  - db-stack/
  - job-stack/
  - ui-stack/
- packages/
- ui/
  - components/
  - context/
  - hooks/
  - pages/

## Core
- Center of your application.
- Subfolder structure inspired by hexagonal architecture and domain driven design principles.
- Primarily includes backend functionality.
- Additionally includes common code shared between db, infra, and ui folders.
### Adapters
- Translate communication between the domain and the outside world.
- Based on hexagonal architecture, these are only secondary adapters as primary adapters live in entrypoints.
- Examples include a database repository, cache client, or email client.
- Don't contain business logic.
- Driven by domain.
- Implement ports which are interfaces which can be defined at the top of the adapter file.
- Don't depend upon domain or services.
### Domain
- Business logic layer of the application.
- Don't depend upon adapters or services.
- Oblivous to infrastructure.
#### Events
- Classes of events passed throughout the app.
- Events should be emitted by domain models and consumed by event handlers via a message bus.
#### Errors
- Classes of errors that can be thrown.
- Can be referenced in frontend and backend for user messages.
- Recommend extending backend framework error classes (like tRPC) and not throwing them directly. This offers greater customization of the error.
- Within error constructor, can CloudWatch metrics (EMF) can be added so high profile errors can be quickly addressed by administrators
#### Models
- Classes of the entites or business objects within your app.
- Home of business logic.
- Differentiate between *entities* which change over time and need to be uniquely referenced (like a UUID) and *value objects* which are immutable and defined by their attributes.
- Don't create [anemic domain models](https://www.martinfowler.com/bliki/AnemicDomainModel.html) which only consist of properties/attributes.
#### Schemas
- Data validation for your models.
### Entrypoints
- Bootstrap scripts that serve as the starting point of the program.
- Considered primary adapters based on hexagonal architecture.
- Drive your application.
- Depend upon services.
- Examples includes Lambda handlers proxied by API Gateway or invoked by EventBridge.
### Services
- Thin layer responsible for orchestrating collaboration between domain and adapters.
- Implement use cases from business requirements.
- Depend upon domain.
### Recommended Resources
- [Cosmic Python](https://www.cosmicpython.com/book/introduction.html)
- [Serverless Clean Architecture & Code with Domain-Driven Design](https://leejamesgilmore.medium.com/serverless-clean-architecture-code-with-domain-driven-design-852796846d28)
- [AWS Prescriptive Guidance: Building hexagonal achitectures on AWS](https://docs.aws.amazon.com/pdfs/prescriptive-guidance/latest/hexagonal-architectures/hexagonal-architectures.pdf)
## DB
- Utility scripts which aid in development with your database.
### Migrations
- Scripts responsible for updating the schemas of your database. More frequently used within SQL DB's, but can be needed within noSQL DB's to update entities based on changing requirements.
### Seed
- Scripts to fill databases with required information for the application to run or setup a test environment.
## Infra
- AWS Cloud Development Kit (CDK) source code for defining [stacks](https://docs.aws.amazon.com/cdk/v2/guide/stacks.html).
- Examples include API, DB, Job, and UI stacks.
- Don't define all your infrastructure within class construtors, use methods to make your constructs easier to follow.
## Packages
- Reusable modules across workspaces.
- Examples include TypeScript configuration and ESLint configuration.
## UI
- Web user interface code including components and pages.
### Components
- Reusable components found across pages.
- Don't add components here that are only used within a single page.
### Context
- Application wide shared state that doesn't require prop-drilling.
- Examples include user information or preferences.
### Hooks
- Custom hooks which extract state from components allowing for reuse.
- Use when you find yourself copying and pasting ui code logic between components.
### Pages
- Core of your UI code representing pages users navigate to and from.
- Do align folder structure with routes.
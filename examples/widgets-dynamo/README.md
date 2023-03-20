# Example Widgets App with DynamoDB

This example app's purpose is to showcase a production grade app built with Green Boost. You are encourage to review the source code and deploy it yourself following the deployment guide below. Green Boost example apps are built using best practices to teach inspire other developers. Feel free to copy techniques and strategies found within this app.

## Deployment Guide
1. `cd infra`
2. Local deployment: `pnpm deploy:local`
3. Pipeline deployment: `pnpm deploy:pipeline`

## Requirements
### Overview
Widgets Inc. is a manufacturer of... well, you guessed it: widgets! Widgets Inc. has asked you to build a web app on AWS that allows them to manage their widgets. Widgets are made up of components. Components have an id, name, description, price, rating, number in stock, and quality assurance check expiration date. Rating is 1-5. Widgets, in addition to having components, have an id, name, description, price, total component's cost, status, and number sold and in stock. Status can be "Enabled" or "Disabled". Total component's cost cannot exceed price. Widgets can be manually set to a "Disabled" status at any time and then enabled again. However, widgets must be automatically set to disabled if a quality assurance check is overdue or there is no more stock (number in stock = 0) for any components. If these conditions are met, widgets cannot be manually enabled.

### Management
Widgets Inc. would like to be able to list, create, update, and delete widgets and components. Components cannot be deleted if in use by widgets. Widgets Inc. should be able to list all components a widget is made up of and list all widgets a component is associated to.

### Notifications
Widgets Inc. would like to recieve notifications a week before component's quality assurance checks are due. If a component is overdue, notifications should be sent daily. Notifications shold be sent whenever the number in stock of a component drops below 50. Additionally, notifications should be sent whenever widges are automatically disabled.

### Dashboard
Widgets Inc. also wants a dashboard. First chart will display the number of widgets sold daily that can be aggregated monthly or yearly. Second and third chart will display the number of each component and widget in stock daily that can be aggregated monthly or yearly. Fourth chart will display the number of each widget that are disabled. Clicking on each slice of widget that are disabled will show components and the reason they're disabled.

## DB Scripts
TODO: add scripts to seed DB with fake data
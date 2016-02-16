# Cypress Kitchen Sink App [![Circle CI](https://circleci.com/gh/cypress-io/examples-kitchen-sink.svg?style=svg)](https://circleci.com/gh/cypress-io/examples-kitchen-sink)

This is an example app used to showcase [Cypress.io](https://www.cypress.io/) testing. The application utilizes every command available in Cypress for demonstration purposes. Additionally this example app is configured to run tests in Travis CI and CircleCI. The [tests](https://github.com/cypress-io/examples-kitchen-sink/blob/master/tests/example_spec.js) are also heavily commented. For a full reference of our documentation, go to [docs.cypress.io](https://docs.cypress.io/).

To see the kitchen sink application, visit [example.cypress.io](https://example.cypress.io/).

## Features:

- Querying
- Traversal
- Actions
- Viewport
- Navigation
- Aliasing
- Waiting
- Network Requests
- Fixtures
- Local Storage
- Cookies

## Help + Testing

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

**If you get stuck, here is more help:**

* [Gitter Channel](https://gitter.im/cypress-io/cypress)
* [Cypress Docs](https://github.com/cypress-io/cypress/wiki)
* [Cypress CLI Tool Docs](https://github.com/cypress-io/cypress-cli)

### 1. Install Cypress

#### From the command line

```bash
## install the Cypress CLI tool
npm install -g cypress

## install the Desktop Cypress app
cypress install
```

![cypress-install](https://cloud.githubusercontent.com/assets/1268976/9279271/5c3826ba-4284-11e5-969b-91b0c27a8dee.gif)

#### Alternative direct download

Instead of using the CLI: [you can download Cypress directly here.](http://download.cypress.io/latest)

### 2. Fork this repo

If you want to experiment with running this project in Travis CI, you'll need to [fork](https://github.com/cypress-io/examples-kitchen-sink#fork-destination-box) it first.

After forking this project in `Github`, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/examples-kitchen-sink.git

## cd into the cloned repo
cd examples-kitchen-sink

## install the node_modules
npm install

## start the local webserver
npm start
```

The `npm start` script will spawn a webserver on port `8080` which hosts the Kitchen Sink App.

You can verify this by opening your browser and navigating to: [`http://localhost:8080`](http://localhost:8080)

You should see the Kitchen Sink App up and running. We are now ready to run Cypress tests.

### 3. Add the project to Cypress

- Open the Cypress App -- just double click the app from you OS application's folder.
- Authorize GitHub access to your account **(Note: this requires direct authorization from the Cypress team during Beta to allow your account email.)**
- Add the project directory to Cypress by clicking .
- Click on the project. You should see a Server Running message.
- Click on the http://localhost:2020 link.

### 4. Run in Travis CI

It is very simple to get Cypress up and running in Travis CI.

There are two things you'll need to do:

1. Add your repo to Travis CI
2. Add your project's `secret key` to Travis CI

This secret key is how Cypress verifies your project is allowed to run in CI. This key can only be obtained from the CLI Tool (currently).

#### Add your repo to Travis CI

* Log into www.travis-ci.org
* Switch `ON` your `examples-kitchen-sink` fork

![add-to-travis](https://cloud.githubusercontent.com/assets/1268976/9291524/8e97f74c-4393-11e5-82af-ec1a52cf2c65.gif)

#### Obtaining your secret key

You must install the Cypress CLI tool (mentioned in Step 1).

Run this command from your terminal:

```bash
## this will return your secret key
cypress get:key
```

```bash
## you'll see a key that looks like this
703b33d9-a00e-4c66-90c2-40efc1fee2c6
```

![get-key](https://cloud.githubusercontent.com/assets/1268976/9291525/8ea13f28-4393-11e5-955e-1a41fee12f5f.gif)

**Note:**
> `cypress get:key` expects your `pwd` to be that of your project.

#### Provide this secret key to Travis CI

You have a few different ways to provide the secret to travis, but you only have to do one of these:

* Simply add it directly in your `.travis.yml` file
* Or configure Environment Variables on Travis CI's site
* Or use Travis CI's encrypt tool to encrypt your key

#### Adding your key in `.travis.yml` file

This is the simplest way to provide your `secret key`.

However if your `.travis.yml` file is committed to a public project (like this one), anyone will be able see your project's secret key.

But if you're committing to a private github project this may not matter to you.

To add this to your `.travis.yml` file:

* Edit the `examples-react-travis-ci/.travis.yml` file
* Paste your secret project key as an argument to the `cypress ci` command.

The command should look like:

```
cypress ci 703b33d9-a00e-4c66-90c2-40efc0fee2c6
```

Commit this change and you are done, your tests should run in Travis CI.

**Note:**
> Passing a specific secret key will override the CYPRESS_CI_KEY environment variable you may have configured.

#### Configuring Environment Variables

Instead of writing your secret key directly into your `.travis.yml`, you can configure this key as an `environment variable`.

* Log into www.travis-ci.org
* Go to your repo's `Settings`
* Under `Environment Variables`
* Set `Name` to: `CYPRESS_CI_KEY`
* Set `Value` to whatever your secret key is.

![travis-env](https://cloud.githubusercontent.com/assets/1268976/9291526/8ea17e84-4393-11e5-84bf-a167c2f1fedf.gif)

The name of the key must match `CYPRESS_CI_KEY`.

You are now done. The next time you commit anything to this repo, Travis CI should run your tests.

#### Securing your secret project key

One last way Travis CI offers to secure secret keys is their own `encrypt` tool.

[Read the docs here](http://docs.travis-ci.com/user/encryption-keys/) to learn how.

### Travis Build Logs

You should now be running in Travis CI and the build logs should look something like this:

![travis-logs](https://cloud.githubusercontent.com/assets/1268976/9291527/8ea21024-4393-11e5-86b7-80e3b5d1047e.gif)







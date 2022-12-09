# Contributing Guidelines

Thank you for your interest in contributing to our project. Whether it's a bug report, new feature, correction, or additional
documentation, we greatly value feedback and contributions from our community.

Please read through this document before submitting any issues or pull requests to ensure we have all the necessary
information to effectively respond to your bug report or contribution.

## Package Guidelines/Rules:
- When building a React component or CDK/SST construct that depends on a 3rd party library outside of the core 3rd party dependencies, make those dependencies optional peer dependencies and do not export the component or construct from the index/root of the package. Export the component or construct from a subpath of the module via package.json#exports so that only consumers of the package who want to use that functionality have to install the 3rd party dependency. Core dependencies include libraries already included in the `"dependencies"` key of the package.json. Each component/construct should include any additional libraries that need to be installed in the docs.

## Pull Requests
When creating a pull request (PR) that includes functionality that should be documented in the changelog and/or update the version of a package (most changes) be sure to create a [changeset](https://github.com/changesets/changesets). Changesets are files that live within the .changeset folder and are created with `pnpm changeset` at the root of the green boost repository. You'll be asked what packages the changes were made in and what [semantic version](https://docs.npmjs.com/about-semantic-versioning) level (patch, minor, major) to apply. After you create these files via `pnpm changeset`, you can edit the generated markdown (within .changeset folder) however you'd like.

When a PR is created, several continuous integration (CI) checks are run based on the [ci.yml](https://github.com/awslabs/green-boost/blob/main/.github/workflows/ci.yml) GitHub workflow. It should be required, but please make sure these pass before merging.

## Releases
[Changesets](https://github.com/changesets/changesets) is used to create releases. A release includes a [git tag](https://git-scm.com/book/en/v2/Git-Basics-Tagging) and entry in the GitHub [releases page](https://github.com/awslabs/green-boost/releases) of Green Boost. After merging changes into main, the changesets GitHub bot will automatically create a changeset-release/main branch and a PR titled, "Version Packages", for the packages that were updated into the main branch. When this PR is merged, the GitHub Workflow [publish.yml](https://github.com/awslabs/green-boost/blob/main/.github/workflows/publish.yml) releasing changes to NPM.

## Reporting Bugs/Feature Requests

We welcome you to use the GitHub issue tracker to report bugs or suggest features.

When filing an issue, please check existing open, or recently closed, issues to make sure somebody else hasn't already
reported the issue. Please try to include as much information as you can. Details like these are incredibly useful:

* A reproducible test case or series of steps
* The version of our code being used
* Any modifications you've made relevant to the bug
* Anything unusual about your environment or deployment


## Contributing via Pull Requests
Contributions via pull requests are much appreciated. Before sending us a pull request, please ensure that:

1. You are working against the latest source on the *main* branch.
2. You check existing open, and recently merged, pull requests to make sure someone else hasn't addressed the problem already.
3. You open an issue to discuss any significant work - we would hate for your time to be wasted.

To send us a pull request, please:

1. Fork the repository.
2. Modify the source; please focus on the specific change you are contributing. If you also reformat all the code, it will be hard for us to focus on your change.
3. Ensure local tests pass.
4. Commit to your fork using clear commit messages.
5. Send us a pull request, answering any default questions in the pull request interface.
6. Pay attention to any automated CI failures reported in the pull request, and stay involved in the conversation.

GitHub provides additional document on [forking a repository](https://help.github.com/articles/fork-a-repo/) and
[creating a pull request](https://help.github.com/articles/creating-a-pull-request/).


## Finding contributions to work on
Looking at the existing issues is a great way to find something to contribute on. As our projects, by default, use the default GitHub issue labels (enhancement/bug/duplicate/help wanted/invalid/question/wontfix), looking at any 'help wanted' issues is a great place to start.


## Code of Conduct
This project has adopted the [Amazon Open Source Code of Conduct](https://aws.github.io/code-of-conduct).
For more information see the [Code of Conduct FAQ](https://aws.github.io/code-of-conduct-faq) or contact
opensource-codeofconduct@amazon.com with any additional questions or comments.


## Security issue notifications
If you discover a potential security issue in this project we ask that you notify AWS/Amazon Security via our [vulnerability reporting page](http://aws.amazon.com/security/vulnerability-reporting/). Please do **not** create a public github issue.


## Licensing

See the [LICENSE](LICENSE) file for our project's licensing. We will ask you to confirm the licensing of your contribution.

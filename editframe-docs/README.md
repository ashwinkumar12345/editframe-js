# Editframe Documentation

This repository contains the documentation for Editframe. You can find the rendered documentation at [editframe.github.io/editframe-docs/](https://editframe.github.io/editframe-docs/).

Developer and community contributions remain essential in keeping this documentation comprehensive, useful, organized, and up-to-date.


## How we build the website

After each commit to this repository, GitHub Pages automatically uses [Jekyll](https://jekyllrb.com) to rebuild the [website](https://editframe.github.io/editframe-docs/). The whole process takes around 20 seconds.

This repository contains many [Markdown](https://guides.github.com/features/mastering-markdown/) files in the `/docs` directory. Each Markdown file correlates with one page on the website. 

Using plain text on GitHub has many advantages:

- Everything is free, open source, and works on every operating system. Use your favorite text editor, Ruby, Jekyll, and Git.
- Markdown is easy to learn and looks good in side-by-side diffs.
- The workflow is no different than contributing code. Make your changes, build locally to check your work, and submit a pull request. Reviewers check the PR before merging.
- Alternatives like wikis and WordPress are full web applications that require databases and ongoing maintenance. They also have inferior versioning and content review processes compared to Git. Static websites, such as the ones Jekyll produces, are faster, more secure, and more stable.

In addition to the content for a given page, each Markdown file contains some Jekyll [front matter](https://jekyllrb.com/docs/front-matter/). Front matter looks like this:

```
---
layout: default
title: Alerting Security
nav_order: 10
parent: Alerting
has_children: false
---
```

If you're making [trivial changes](#trivial-changes), you don't have to worry about front matter.

If you want to reorganize content or add new pages, keep an eye on `has_children`, `parent`, and `nav_order`, which define the hierarchy and order of pages in the lefthand navigation. For more information, see the documentation for [our upstream Jekyll theme](https://pmarsceill.github.io/just-the-docs/docs/navigation-structure/).


## Contribute content

There are three ways to contribute content, depending on the magnitude of the change.

- [Trivial changes](#trivial-changes)
- [Minor changes](#minor-changes)
- [Major changes](#major-changes)


### Trivial changes

If you just need to fix a typo or add a sentence, this web-based method works well:

1. On any page in the documentation, click the **Edit this page** link in the lower-left.

1. Make your changes.

1. Choose **Create a new branch for this commit and start a pull request** and **Commit changes**.


### Minor changes

If you want to add a few paragraphs across multiple files and are comfortable with Git, try this approach:

1. Fork this repository.

1. Download [GitHub Desktop](https://desktop.github.com), install it, and clone your fork.

1. Navigate to the repository root.

1. Create a new branch.

1. Edit the Markdown files in `/docs`.

1. Commit, push your changes to your fork, and submit a pull request.


### Major changes

If you're making major changes to the documentation and need to see the rendered HTML before submitting a pull request, here's how to build locally:

1. Fork this repository.

1. Download [GitHub Desktop](https://desktop.github.com), install it, and clone your fork.

1. Navigate to the repository root.

1. Install [Ruby](https://www.ruby-lang.org/en/) if you don't already have it. We recommend [RVM](https://rvm.io/), but use whatever method you prefer:

   ```
   curl -sSL https://get.rvm.io | bash -s stable
   rvm install 2.6
   ruby -v
   ```

1. Install [Jekyll](https://jekyllrb.com/) if you don't already have it:

   ```
   gem install bundler jekyll
   ```

1. Install dependencies:

   ```
   bundle install
   ```

1. Build:

   ```
   sh build.sh
   ```

1. If the build script doesn't automatically open your web browser (it should), open [http://localhost:4000/editframe-docs/](http://localhost:4000/editframe-docs/).

1. Create a new branch.

1. Edit the Markdown files in `/docs`.

   If you're a web developer, you can customize `_layouts/default.html` and `_sass/custom/custom.scss`.

1. When you save a file, marvel as Jekyll automatically rebuilds the site and refreshes your web browser. This process takes roughly 20 seconds.

1. When you're happy with how everything looks, commit, push your changes to your fork, and submit a pull request.


## Classes within Markdown

This documentation uses a modified version of the [just-the-docs](https://github.com/pmarsceill/just-the-docs) Jekyll theme, which has some useful classes for labels and buttons:

```
[Get started](#get-started){: .btn .btn-blue }

## Get started
New
{: .label .label-green :}
```

* Labels come in default (blue), green, purple, yellow, and red.
* Buttons come in default, purple, blue, green, and outline.
* Warning, tip, and note blocks are available (`{: .warning }`, etc.).
* If an image has a white background, you can use `{: .img-border }` to add a one pixel border to the image.

These classes can help with readability, but should be used *sparingly*. Each addition of a class damages the portability of the Markdown files and makes moving to a different Jekyll theme (or a different static site generator) more difficult.

Besides, standard Markdown elements suffice for most documentation.


## Code of conduct

This project has adopted an [Open Source Code of Conduct](https://opendistro.github.io/for-elasticsearch/codeofconduct.html).


## Security issue notifications

If you discover a potential security issue in this project we ask that you notify AWS/Amazon Security via our [vulnerability reporting page](http://aws.amazon.com/security/vulnerability-reporting/). Please do **not** create a public GitHub issue.


## Licensing

See the [LICENSE](./LICENSE) file for our project's licensing. We will ask you to confirm the licensing of your contribution.


## Copyright

Copyright Amazon.com, Inc. or its affiliates. All rights reserved.

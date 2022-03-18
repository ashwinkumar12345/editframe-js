# Editframe Documentation

This repository contains the documentation for Editframe. You can find the rendered documentation at [editframe.github.io/editframe-docs/](https://editframe.github.io/editframe-docs/).

Developer and community contributions remain essential in keeping this documentation comprehensive, useful, organized, and up-to-date.


## How we build the website

After each commit to this repository, GitHub Pages automatically uses [Jekyll](https://jekyllrb.com) to rebuild the [website](https://editframe.github.io/editframe-docs/). The whole process takes around 20 seconds.

This repository contains many [Markdown](https://guides.github.com/features/mastering-markdown/) files in the `/docs` directory. Each Markdown file correlates with one page on the website. 

The workflow is no different than contributing code. Make your changes, build locally to check your work, and submit a pull request. Reviewers check the PR before merging.


## Contribute content

Here's how to build locally:

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

1. When you save a file, marvel as Jekyll automatically rebuilds the site and refreshes your web browser. This process takes roughly 20 seconds.

1. When you're happy with how everything looks, commit, push your changes to your fork, and submit a pull request.
# Unsupported BeardedSpice Strategies

Since adding new ones or updating strategies in the release requires a comprehensive check, which sometimes cannot be performed due to technical reasons (for example, a paid account or the country in which the site does not work), we cannot fully satisfy the desire of a users to expand supported sites. 

For this reason, it was decided to create this section, which is filled with strategies in the form of files that can be easily imported into the BeardedSpice. 

These files were provided by contributors and placed without a full check of their functionality. Therefore, **use these strategies at your own risk**.

## Usage

This folder contains unsupported strategies in form of a `bsstrategy` files. Download the desirable file or all repository (using _"Clone or download"_ green button), and import what you want into BeardedSpice. 

File type `bsstrategy` can be imported to BeadredSpice by double click on it, simply.

## To Contribute

You can easily add a file with the BeardedSpice strategy to this repository using standard pull-request practice. The file will be merged with minimal checks: duplicates, a suitable name, an increase in the version number.

A `bsstrategy` file is a plain text file that contains `javascript` code describing BeardedSpice strategy for a particular site.

For example, you can export strategy from the BeardedSpice app, and use it as a template for making changes or creating a new one (in the _"Preferences..."_ , section _"Controllers"_, _"Export..."_ button).

The **[Developer How-To Guide](docs/developers-guide-web.md)** has the information how to create (or update) strategy, especially **[Writing a Media Strategy](https://github.com/beardedspice/beardedspice/blob/master/docs/developers-guide-web.md#writing-a-media-strategy)**  section.

## Main Repository

**[BeardedSpice application repository](https://github.com/beardedspice/beardedspice)**

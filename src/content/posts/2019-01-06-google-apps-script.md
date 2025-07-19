---
title: "Reacting to Google Form submissions with Apps Script"
date: "2019-01-06"
---

Each year the [Student Publication Association](http://spajournalism.com) hosts an annual conference, SPANC, which includes an awards ceremony for prizes such as Best Publication, Best Journalist, and so on. In previous years students have entered the awards by emailing in PDFs, requiring the organisers to manually download thousands of files and sort them into Google Drive folders to be shared with the judges. I was asked to see if we could automate this process.

To replace the email system with something more structured, a Google Form was the obvious choice: it allows file uploads, and will automatically populate a spreadsheet with all the responses. However, it can only lump all of the uploaded files into a single Drive folder, meaning they would still need to be sorted manually.

## Apps Script to the rescue

It's not particularly well advertised, but Google has a solution to this kind of problem: [Apps Script](https://developers.google.com/apps-script), which lets you programmatically access Google apps such as Docs, Sheets, and Drive by writing JavaScript that runs in Google's cloud. (As far as I can tell, the language available is a subset of ES5 plus some globally available API objects, such as `DriveApp` and `DocumentApp`, which are supplied by Google.)

To control when your code runs, you can choose from a set of [triggers](https://developers.google.com/apps-script/guides/triggers). By default you can choose from simple triggers, such as a spreadsheet value being changed, but Google will also let you 'install' more advanced triggers. Code that uses an installable trigger might require authorisation to access your Drive via an OAuth-style loop before it can be run.

The full list of possible events is available [here](https://developers.google.com/apps-script/guides/triggers/events). In my case I assumed I'd want the `Form submit` event for a Google Form, but after looking at the API reference for a [`FormResponse`](https://developers.google.com/apps-script/reference/forms/form-response) object I couldn't see any mention of file uploads. I probably missed something, but in the interests of time I opted for the Google Sheets `Form submit` event instead. (Both of these events are installable triggers.)

The Sheets `Form submit` event fires when the spreadsheet is automatically populated by the form, and will call your function with an object as described [here](https://developers.google.com/apps-script/guides/triggers/events#form-submit). I made use of the `namedValues` field, which is a key-value mapping of the questions and answers the user submitted. Note that all the values here are arrays for some reason! In the case of file uploads this means you will receive an array containing a single, comma-separated string of Google Drive URLs, like so:

```js
{
  'Files': ['https://drive.google.com/open?id=123, https://drive.google.com/open?id=456, https://drive.google.com/open?id=789']
}
```

The format isn't exactly intuitive, but at least it's easy to parse once you've wrapped your head around it.

Once I had the IDs and awards category from the `namedValues`, I needed to sort the files into a folder with that name. This was mostly a case of reading the Google Drive [API reference ](https://developers.google.com/apps-script/reference/drive) and stringing the right methods together. I could get `File` objects using `DriveApp.getFileById(...)`, and create folders with `DriveApp.createFolder(...)`. (I also do some checks to make sure the folder doesn't already exist.)

Once everything's lined up, `myFolderName.addFile(...)` will add the file to the folder. It turns out a file can have multiple parent folders, like symlinks, so you don't have to remove the file from the old folder if you don't need to.

That's about it! You can see the full code on GitHub [here](https://github.com/spajournalism/spanc-submissions).

## Debugging

The most annoying thing about the development process was having to repeatedly complete the form (including the file uploads) to trigger the script. I'd be interested to know if there's an easier way to do this, though the [docs](https://developers.google.com/apps-script/guides/triggers/installable#restrictions) say that API requests and scripts won't cause triggers to run so it may not be possible to automate.

I did find my way to [https://script.google.com](https://script.google.com), which provides a neat overview of your scripts, the triggers you have installed, and execution logs. Calling `console.log` in your script code will show up here, and this is the easiest way I found to debug my code.

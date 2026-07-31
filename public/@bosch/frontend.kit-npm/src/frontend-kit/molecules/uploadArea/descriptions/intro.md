---
path: "/molecules/uploadArea/guide"
type: "intro"
level: "molecules"
title: "upload area"
---

An upload area is an alternative for the input file upload button. 
The upload area let the user choose one or more files from their device storage - either via the browse link (that works similar to the input file upload), or via drag and drop into the upload area.
These selected files can be uploaded to a server through form submission or be manipulated using the Javascript File API.

The variant [Upload area with items](/molecules/uploadArea/guide/#id-upload-area-with-items) shows all states, a file item can have: `upload`, `uploading`, `uploaded` and `error`. 

When selecting / drag and drop files, a custom event called `filesAdded` is dispatched to the input element.
To handle the files, you have to add an event listener to the input element for the event `filesAdded`.

The demonstrator [Upload area demonstrator with custom event example](/molecules/uploadArea/guide/#id-upload-area-demonstrator-with-custom-event-example) is showing an example and logs the added files to the console.

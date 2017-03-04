# jqmTemplate
Provides a mechanism for creating jqModal dialogs using templates.

Written by Jason den Dulk.

### Requires

**jQuery** (http://jquery.com/)  
**jqModal** (http://jquery.iceburg.net/jqModal/)

## Documentation

`jqmtMakeButton(label,id,className)`

Creates a button element and returns a jQuery object containing it. If `id` or
`className` are defined they are added to the button as 'id' and 'class'
attributes respectively.

`jqmTemplate(htmlTemplate)`

Constructs an instance of the jqmTemplate class containing the template HTML.

`jqmTemplate.dialog(dlgId, parms)`

Creates a jqModal dialog using the template. `dlgId` is the ID
attribute. `parms` are parameters passed to `jqm()`.

The dialog is added to the DOM and any existing element of the same ID is
removed.

`jqmTemplate.messageBox(title, text, icon, buttons)`

Create and show a message dialog. Title, text and icon are added if provided.
Buttons are added if provided. Otherwise a a single "OK" button is added.

`jqmTemplate.inputBox(title, text, widget, callback, validate = null)`

Creates and shows a dialog for receiving a single value of input. Title and text are
added if provided. The widget is displayed and the user can input the value.

Two buttons, OK and Cancel, are added.

If the callback `validate` is provided, it will be called upon if OK is pressed. `validate` of the format `function(value)`.
If `validate` returns a non empty string it will be displayed in a message and the dialog will remain open. If validate
returns `false`, the validation is considered passed and the dialog will succeed.

Upon closing, `callback` will be called. (format `function(success, value)`). `success` is `true` if OK was pressed,
`false` is Cancel was pressed. `value` is the value of the widget.

## License

Copyright (C) 2016-17 Jaypha.  
Distributed under the Boost Software License, Version 1.0.  
See http://www.boost.org/LICENSE_1_0.txt


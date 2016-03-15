# jqmTemplate
Provides a mechanism for creating jqModal dialogs using templates.


Requires
--------

jQuery (http://jquery.com/) and jqModal (http://jquery.iceburg.net/jqModal/)

jqmxMakeButton(label,id,className)

Creates a button element and returns a jQuery object containing it. If 'id' or
'className' are defined they are added to the button.

jqmTemplate(htmlTemplate)

Constructs a class containing the template HTML.

jqmTemplate.dialog(dlgId, parms)

Creates a jqModal dialog using it's template HTML. 'dlgId' is the ID
attribute. 'parms' are parameters passed to jqm().

The dialog is added to the DOM and any existing element of the same ID is
removed.

jqmTemplate.messageBox(title, text, icon, buttons)

Create and show a message dialog. Title, text and icon are added is provided.
Buttons are added if provided, or a single "OK" button added if not.


jqmTemplate.inputBox(title, text, widget, callback, validate = null)

Creates and shows a dialog for recieving a single value if input. Title and text are
added if provided. The widget is displayed and the user input the value.

Two buttons, OK and Cancel, are added.

If validate is provided, it will be called upon if OK is pressed. validate is 'validate(value)'.
If validate returns a non empty string it will be displayed in a message and the dialog will remain open. If validate
returns 'false', the validation is considered passed and the dialog will succeed.

Upon closing, 'callback' will be called  - callback(success, value). success is true if OK was pressed,
false is Cancel was pressed. Value is the value of the widget.


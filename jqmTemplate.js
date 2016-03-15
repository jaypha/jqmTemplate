/*
 * Copyright 2015 Jaypha
 *
 * Distributed under the Boost Software License, Version 1.0.
 * (See http://www.boost.org/LICENSE_1_0.txt)
 *
 * Authors: Jason den Dulk
 */

/*
 * Dialog template for jqModal
 */

//*******************************************************************************************************
// Simple button maker

function jqmtMakeButton(label,id,className)
{
  var o = $("<button type='button'></button>");
  if (id) o.attr("id",id);
  if (className) o.addClass(className);
  o.append(label);
  return o;
}

//*******************************************************************************************************
// jqModalTemplate Class.

function jqmTemplate(htmlTemplate)
{
  this.dialogHtml = htmlTemplate;
  this.okText = "OK";
  this.cancelText = "Cancel";
  this.width = 600;
}

// Create a fairly standard dialog box.

jqmTemplate.prototype.dialog = function(dlgId, parms)
{
  if (typeof parms == "undefined") parms = {};
  $('#'+dlgId).remove();
  var o = $(this.dialogHtml);
  o.attr("id",dlgId);
  o.css("width",this.width+"px");
  o.css("margin-left",-(this.width/2)+"px");
  o.jqm(parms);
  o.appendTo("body");
  return o;
};

// Create and show a message box.

jqmTemplate.prototype.messageBox = function(title, text, icon, buttons)
{
  var o = this.dialog("jqmtMsgBox", {modal:true});
  if (title) $(".jqmtHeader",o).append(title);
  var dc = $(".jqmtContent", o);
  if (icon)
  {
    if (icon instanceof string)
      dc.append("<img style='vertical-align: middle' src='"+icon+"'/>")
    else
      dc.append(icon);
  } 
  if (text) dc.append(text);

  var bBox = $(".jqmtButtons",o);
  if (!buttons)
    bBox.append(jqmtMakeButton(this.okText, null, 'jqmClose'));
  else
    bBox.append(buttons);

  o.jqmShow();
};

// Create and show a single widget input box.

jqmTemplate.prototype.inputBox = function(title, text, widget, callback, validate)
{
  if (typeof validate == "undefined") validate = null;
  var self = this;
  var w = $(widget);
  var okPressed = false;
  var o = this.dialog("jqmtInputBox", {modal:true,onHide: function(hash) { callback(okPressed, w.val()); hash.w.hide() && hash.o && hash.o.remove(); return true; }});
  if (title) $(".jqmtHeader",o).append(title);
  var dc = $(".jqmtContent", o);
  if (text) dc.append(text);
  dc.append(w);

  var bBox = $(".jqmtButtons",o);
  var b = jqmtMakeButton(this.okText, null, "jqmtOk");
  b.on
  (
    "click",
    function()
    {
      if (validate)
      {
         var s = validate(w.val());
         if (s)
         {
           self.messageBox(null,s);
           return;
         }
      }
      okPressed = true;
      o.jqmHide();
    }
  );
  bBox.append(b);
  b = jqmtMakeButton(this.cancelText, null, "jqmClose");
  bBox.append(b);
  o.jqmShow();
};

//*******************************************************************************************************

// Create a default/prototype.

var jqmTemplateDefault = new jqmTemplate("<div class='jqmWindow'><div class='jqmtInnerBorder'><div class='jqmtHeader'></div><div class='jqmtContent'></div><div class='jqmtButtons'></div></div></div>");


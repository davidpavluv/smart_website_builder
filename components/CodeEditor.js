import { useEffect } from "react";

function CodeEditor() {
  useEffect(() => {
    setupEditor();
  });

  function setupEditor() {
    window.editor = ace.edit("code");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/html");

    editor.focus();

    editor.setOptions({
      fontSize: "16pt",
      showLineNumbers: false,
      showGutter: false,
      vScrollBarAlwaysVisible: true,
    });

    editor.setShowPrintMargin(false);
    editor.setBehavioursEnabled(false);
  }

  return <div id="code" className="tab"></div>;
}
export default CodeEditor;

import { useEffect } from "react";
import defaultHTML from "../templates/defaultHTML";

function TabManager({ tab, setTab }) {
  useEffect(() => {
    let code = document.getElementById("code");
    let preview = document.getElementById("preview");

    if (code && preview) {
      if (tab === 0) {
        code.classList.add("active");
        preview.classList.remove("active");
        transferToCode(preview);
      } else {
        code.classList.remove("active");
        preview.classList.add("active");
        transferToIframe(preview);
      }
    }
  }, [tab]);

  function transferToIframe(preview) {
    console.log("to frame");

    let editorValue =
      (window.editor && window.editor.getSession().getValue()) || defaultHTML;
    let idoc = preview.contentWindow.document;
    if (idoc) {
      idoc.open();
      idoc.write(editorValue);
      idoc.close();
    }
  }
  function transferToCode(preview) {
    if (window.editor) {
      console.log("to code");
      let iframeValue =
        preview.contentWindow.document.documentElement.innerHTML;
      window.editor.setValue(iframeValue, 1);
    }
  }

  return (
    <div id="tab-options">
      <a className={tab === 0 ? "active" : ""} onClick={() => setTab(0)}>
        Code
      </a>
      <a className={tab === 1 ? "active" : ""} onClick={() => setTab(1)}>
        Preview
      </a>
    </div>
  );
}
export default TabManager;
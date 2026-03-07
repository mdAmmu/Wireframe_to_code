import React from "react";
import {
  Sandpack,
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import { Constants } from "@/data/Constants";
import { sandpackDark } from "@codesandbox/sandpack-themes";


const CodeEditor = ({ codeResp, isReady }: any) => {


  return (
    
    <div>
      
      {isReady ? (
        <Sandpack
          
          theme={sandpackDark}
          template="react"
          customSetup={{
            dependencies: {
              ...Constants.DEPENDANCY,
            },
          }}
          options={{
            externalResources: ["https://cdn.tailwindcss.com"],
            showNavigator: true,
            showTabs: true,
            editorHeight: 600,
          }}
          files={{
            "/App.js": {
              code: codeResp,
              active: true,
            },
          }}
        />
      ) : (
        <SandpackProvider
          template="react"
          theme={sandpackDark}
          customSetup={{
            dependencies: {
              ...Constants.DEPENDANCY,
            },
          }}
          files={{
            "/app.js": {
              code: `${codeResp}`,
              active: true,
            },
          }}
          options={{
            externalResources: ["https://cdn.tailwindcss.com"],
          }}
        >
          <SandpackLayout>
            <SandpackCodeEditor showTabs={true} style={{ height: "70vh" }} />
          </SandpackLayout>
        </SandpackProvider>
      )}
    </div>
  );
};

export default CodeEditor;

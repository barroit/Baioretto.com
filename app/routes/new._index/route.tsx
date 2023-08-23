// import type AceEditorClass from "react-ace";
import type { LinksFunction } from "@remix-run/node";

import { useEffect, useState } from "react";

import editor_stylesheet from "~/css/editor.css";
import viewer_stylesheet from "~/css/viewer.css";
import { marked } from "marked";

const renderer = {
  heading: (text: string, level: number) => `<h${ level } class="code-line">${ text }</h${ level }>`,
  paragraph: (text: string) => `<p class="has-line-data">${ text }</p>`,
  table: (header: string, body: string) => `<table class="table table-striped table-bordered"><thead>${ header }</thead>${ body }</table>`,
};

marked.use({ mangle: false, headerIds: false }, { renderer });

// dynamic import to prevent window undefined
// let AceEditor: typeof AceEditorClass;
// if (typeof window !== "undefined") {
//   AceEditor = require("react-ace").default;
//   require("ace-builds/src-noconflict/mode-markdown");
//   require("ace-builds/src-noconflict/theme-twilight");
// }

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: editor_stylesheet,
    },
    {
      rel: "stylesheet",
      href: viewer_stylesheet,
    },
  ];
};

export default function New() {
  // region
  const [ text, setText ] = useState("# Dillinger\n" +
    "## _The Last Markdown Editor, Ever_\n" +
    "\n" +
    "[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)\n" +
    "\n" +
    "[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)\n" +
    "\n" +
    "Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible,\n" +
    "AngularJS-powered HTML5 Markdown editor.\n" +
    "\n" +
    "- Type some Markdown on the left\n" +
    "- See HTML in the right\n" +
    "- ✨Magic ✨\n" +
    "\n" +
    "## Features\n" +
    "\n" +
    "- Import a HTML file and watch it magically convert to Markdown\n" +
    "- Drag and drop images (requires your Dropbox account be linked)\n" +
    "- Import and save files from GitHub, Dropbox, Google Drive and One Drive\n" +
    "- Drag and drop markdown and HTML files into Dillinger\n" +
    "- Export documents as Markdown, HTML and PDF\n" +
    "\n" +
    "Markdown is a lightweight markup language based on the formatting conventions\n" +
    "that people naturally use in email.\n" +
    "As [John Gruber] writes on the [Markdown site][df1]\n" +
    "\n" +
    "> The overriding design goal for Markdown's\n" +
    "> formatting syntax is to make it as readable\n" +
    "> as possible. The idea is that a\n" +
    "> Markdown-formatted document should be\n" +
    "> publishable as-is, as plain text, without\n" +
    "> looking like it's been marked up with tags\n" +
    "> or formatting instructions.\n" +
    "\n" +
    "This text you see here is *actually- written in Markdown! To get a feel\n" +
    "for Markdown's syntax, type some text into the left window and\n" +
    "watch the results in the right.\n" +
    "\n" +
    "## Tech\n" +
    "\n" +
    "Dillinger uses a number of open source projects to work properly:\n" +
    "\n" +
    "- [AngularJS] - HTML enhanced for web apps!\n" +
    "- [Ace Editor] - awesome web-based text editor\n" +
    "- [markdown-it] - Markdown parser done right. Fast and easy to extend.\n" +
    "- [Twitter Bootstrap] - great UI boilerplate for modern web apps\n" +
    "- [node.js] - evented I/O for the backend\n" +
    "- [Express] - fast node.js network app framework [@tjholowaychuk]\n" +
    "- [Gulp] - the streaming build system\n" +
    "- [Breakdance](https://breakdance.github.io/breakdance/) - HTML\n" +
    "to Markdown converter\n" +
    "- [jQuery] - duh\n" +
    "\n" +
    "And of course Dillinger itself is open source with a [public repository][dill]\n" +
    " on GitHub.\n" +
    "\n" +
    "## Installation\n" +
    "\n" +
    "Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.\n" +
    "\n" +
    "Install the dependencies and devDependencies and start the server.\n" +
    "\n" +
    "```sh\n" +
    "cd dillinger\n" +
    "npm i\n" +
    "node app\n" +
    "```\n" +
    "\n" +
    "For production environments...\n" +
    "\n" +
    "```sh\n" +
    "npm install --production\n" +
    "NODE_ENV=production node app\n" +
    "```\n" +
    "\n" +
    "## Plugins\n" +
    "\n" +
    "Dillinger is currently extended with the following plugins.\n" +
    "Instructions on how to use them in your own application are linked below.\n" +
    "\n" +
    "| Plugin | README |\n" +
    "| ------ | ------ |\n" +
    "| Dropbox | [plugins/dropbox/README.md][PlDb] |\n" +
    "| GitHub | [plugins/github/README.md][PlGh] |\n" +
    "| Google Drive | [plugins/googledrive/README.md][PlGd] |\n" +
    "| OneDrive | [plugins/onedrive/README.md][PlOd] |\n" +
    "| Medium | [plugins/medium/README.md][PlMe] |\n" +
    "| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |\n" +
    "\n" +
    "## Development\n" +
    "\n" +
    "Want to contribute? Great!\n" +
    "\n" +
    "Dillinger uses Gulp + Webpack for fast developing.\n" +
    "Make a change in your file and instantaneously see your updates!\n" +
    "\n" +
    "Open your favorite Terminal and run these commands.\n" +
    "\n" +
    "First Tab:\n" +
    "\n" +
    "```sh\n" +
    "node app\n" +
    "```\n" +
    "\n" +
    "Second Tab:\n" +
    "\n" +
    "```sh\n" +
    "gulp watch\n" +
    "```\n" +
    "\n" +
    "(optional) Third:\n" +
    "\n" +
    "```sh\n" +
    "karma test\n" +
    "```\n" +
    "\n" +
    "#### Building for source\n" +
    "\n" +
    "For production release:\n" +
    "\n" +
    "```sh\n" +
    "gulp build --prod\n" +
    "```\n" +
    "\n" +
    "Generating pre-built zip archives for distribution:\n" +
    "\n" +
    "```sh\n" +
    "gulp build dist --prod\n" +
    "```\n" +
    "\n" +
    "## Docker\n" +
    "\n" +
    "Dillinger is very easy to install and deploy in a Docker container.\n" +
    "\n" +
    "By default, the Docker will expose port 8080, so change this within the\n" +
    "Dockerfile if necessary. When ready, simply use the Dockerfile to\n" +
    "build the image.\n" +
    "\n" +
    "```sh\n" +
    "cd dillinger\n" +
    "docker build -t <youruser>/dillinger:${package.json.version} .\n" +
    "```\n" +
    "\n" +
    "This will create the dillinger image and pull in the necessary dependencies.\n" +
    "Be sure to swap out `${package.json.version}` with the actual\n" +
    "version of Dillinger.\n" +
    "\n" +
    "Once done, run the Docker image and map the port to whatever you wish on\n" +
    "your host. In this example, we simply map port 8000 of the host to\n" +
    "port 8080 of the Docker (or whatever port was exposed in the Dockerfile):\n" +
    "\n" +
    "```sh\n" +
    "docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=dillinger <youruser>/dillinger:${package.json.version}\n" +
    "```\n" +
    "\n" +
    "> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.\n" +
    "\n" +
    "Verify the deployment by navigating to your server address in\n" +
    "your preferred browser.\n" +
    "\n" +
    "```sh\n" +
    "127.0.0.1:8000\n" +
    "```\n" +
    "\n" +
    "## License\n" +
    "\n" +
    "MIT\n" +
    "\n" +
    "**Free Software, Hell Yeah!**\n" +
    "\n" +
    "[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)\n" +
    "\n" +
    "   [dill]: <https://github.com/joemccann/dillinger>\n" +
    "   [git-repo-url]: <https://github.com/joemccann/dillinger.git>\n" +
    "   [john gruber]: <http://daringfireball.net>\n" +
    "   [df1]: <http://daringfireball.net/projects/markdown/>\n" +
    "   [markdown-it]: <https://github.com/markdown-it/markdown-it>\n" +
    "   [Ace Editor]: <http://ace.ajax.org>\n" +
    "   [node.js]: <http://nodejs.org>\n" +
    "   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>\n" +
    "   [jQuery]: <http://jquery.com>\n" +
    "   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>\n" +
    "   [express]: <http://expressjs.com>\n" +
    "   [AngularJS]: <http://angularjs.org>\n" +
    "   [Gulp]: <http://gulpjs.com>\n" +
    "\n" +
    "   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>\n" +
    "   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>\n" +
    "   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>\n" +
    "   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>\n" +
    "   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>\n" +
    "   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>\n");
  // endregion
  const [ initialized, setInitialized ] = useState(false);

  useEffect(() => {
    setInitialized(true);
  }, []);

  const onChange = (v: string) => {
    setText(v);
  };

  return initialized && (
    <main className="pt-28 grid grid-cols-[1fr_3fr_3fr_1fr] [&>*]:border">
      {/*<AceEditor*/}
      {/*  mode="markdown"*/}
      {/*  theme="twilight"*/}
      {/*  onChange={ onChange }*/}
      {/*  name="markdown-editor"*/}
      {/*  editorProps={ { $blockScrolling: true } }*/}
      {/*  value={ text }*/}
      {/*/>*/}
      <div className="bg-[#141414] max-h-[calc(100vh-7rem)] overflow-auto p-5 col-start-3">
        <section className="viewer" dangerouslySetInnerHTML={ { __html: marked.parse(text) } } />
      </div>
    </main>
  );
}
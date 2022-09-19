import Home from "./pages/Home.svelte";
import Editor from "./pages/Editor.svelte";
import E404 from "./pages/E404.svelte";
import Settings from "./pages/Settings.svelte";
import { readTextFile, BaseDirectory } from '@tauri-apps/api/fs';
import { file as g_file, settings } from './ts/store';
import { File, find_lang_by_ext } from './ts/type';

//route
//get the route
const route = window.location.pathname;
readTextFile('zap/settings.json', {dir: BaseDirectory.Config}).then((data)=>{
  settings.update((value)=>{
    value = JSON.parse(data);
    return value;
  })
}).catch((err)=>{
  console.log(err);
});

//if the route is /, then render the home page
let app: any;
if (route === "/") {
  app = new Home({
    target: document.getElementById("app"),
  });
}else if(route === "/editor"){
  //get query string
  const query = new URLSearchParams(window.location.search);
  //get the file
  const file = query.get("file");
  console.log(file);
  if(file !== null){
    //get extension and name
    const split = file.split("/");
    const raw_file = split.pop();
    const path = split.join("/");
    const split2 = raw_file.split(".");
    const ext = split2.pop();
    const name = split2.join(".");
    const lang = find_lang_by_ext(ext);
    //get content
    readTextFile(file)
      .then((content) => {
        console.log("Path: ",path, "\nName:", name, "\nContent: ", content, "\nLang:", lang);
        g_file.set(new File(path, name, content, lang));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  app = new Editor({
    target: document.getElementById("app"),
  }); 
}else if(route === "/settings"){
  app = new Settings({
    target: document.getElementById("app"),
  });
}else{
  app = new E404({
    target: document.getElementById("app"),
  });
}

export default app;

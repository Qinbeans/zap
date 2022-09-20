import Home from "./pages/Home.svelte";
import Editor from "./pages/Editor.svelte";
import E404 from "./pages/E404.svelte";
import Settings from "./pages/Settings.svelte";
import { exists, createDir, readTextFile, BaseDirectory, writeFile } from '@tauri-apps/api/fs';
import { file as g_file, settings } from './ts/store';
import { File, find_lang_by_ext, find_ext_lang } from './ts/type';

//route
//get the route
exists("zap",{
  dir: BaseDirectory.Config
}).then(async(val) => {
  if(!(val)){
    await createDir("zap",{
      dir: BaseDirectory.Config
    });
  }
}).catch(async (err) => {
  console.log(err)
});
const route = window.location.pathname;
readTextFile('zap/settings.json', {dir: BaseDirectory.Config}).then((data)=>{
  settings.update((value)=>{
    value = JSON.parse(data);
    return value;
  })
  g_file.update((value)=>{
    value = JSON.parse(data).default_file;
    return value;
  })
}).catch((err)=>{
  console.log(err);
  settings.subscribe((value)=>{
    writeFile('zap/settings.json', JSON.stringify(value), {dir: BaseDirectory.Config})
      .catch((err)=>{
        console.log(err);
      })
  })
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
    let split = file.split("/");
    if(split.length < 2){
      split = file.split("\\");
    }
    const raw_file = split.pop();
    const path = split.join("/");
    const split2 = raw_file.split(".");
    const ext = split2.pop();
    const name = split2.join(".");
    const lang = find_lang_by_ext(ext);
    //get content
    readTextFile(file)
      .then((content) => {
        g_file.set(new File(path, name, find_ext_lang(ext), content, lang));
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

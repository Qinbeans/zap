import Home from "./pages/Home.svelte";
import Editor from "./pages/Editor.svelte";
import E404 from "./pages/E404.svelte";

//route
//get the route
const route = window.location.pathname;
//if the route is /, then render the home page
let app: any;
if (route === "/") {
  app = new Home({
    target: document.getElementById("app"),
  });
}else if(route === "/editor"){
  app = new Editor({
    target: document.getElementById("app"),
  }); 
}else{
  app = new E404({
    target: document.getElementById("app"),
  });
}

export default app;

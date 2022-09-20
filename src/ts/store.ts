import { writable } from "svelte/store";
import { Settings, File, find_lang_by_ext } from "./type";

let default_settings = new Settings(16, 4, "monokai", "./", new File("","Untitled",0, "// Let's start coding", find_lang_by_ext("c")))
export let settings = writable(default_settings);
export let file = writable(default_settings.default_file);

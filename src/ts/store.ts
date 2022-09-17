import { writable } from "svelte/store";
import { default_settings } from "./type";

export let settings = writable(default_settings);

export class File {
    name: string;
    content: string;
    language: string;
    //constructor
    constructor(name: string, content: string, language: string) {
        this.name = name;
        this.content = content;
        this.language = language;
    }
}

export class Settings {
    font_size: number;
    tab_size: number;
    theme: string;
    location: string;
    default_file: File;
    //constructor
    constructor(font_size: number,tab_size: number, theme: string, location: string, default_file: File) {
        this.font_size = font_size;
        this.tab_size = tab_size;
        this.theme = theme;
        this.location = location;
        this.default_file = default_file;
    }
}

export const default_settings = new Settings(16, 4, "monokai", "./", new File("Untitled", "// Let's start coding", "c_cpp"));

export const themes = [
    "ambiance",
    "chaos",
    "chrome",
    "clouds",
    "clouds_midnight",
    "cobalt",
    "crimson_editor",
    "dawn",
    "dracula",
    "dreamweaver",
    "eclipse",
    "github",
    "gob",
    "gruvbox",
    "idle_fingers",
    "iplastic",
    "katzenmilch",
    "kr_theme",
    "kuroir",
    "merbivore",
    "merbivore_soft",
    "mono_industrial",
    "monokai",
    "pastel_on_dark",
    "solarized_dark",
    "solarized_light",
    "sqlserver",
    "terminal",
    "textmate",
    "tomorrow",
    "tomorrow_night",
    "tomorrow_night_blue",
    "tomorrow_night_bright",
    "tomorrow_night_eighties",
    "twilight",
    "vibrant_ink",
    "xcode"
];
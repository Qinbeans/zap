export class File {
    path: string;
    name: string;
    content: string;
    language: Language
    //constructor
    constructor(path: string, name: string, content: string, language: Language) {
        this.path = path;
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

export interface Language {
    id: string;
    name: string;
    extension: string[];
}


export const languages = [
    {
        id: "c_cpp",
        name: "C",
        extension: ["c", "h"]
    },
    {
        id: "c_cpp",
        name: "C++",
        extension: ["cpp","cc", "cxx", "h", "hpp", "hxx"]
    },
    {
        id: "java",
        name: "Java",
        extension: ["java"]
    },
    {
        id: "ruby",
        name: "Ruby",
        extension: ["rb"]
    },
    {
        id: "sh",
        name: "Shell",
        extension: ["sh", "bash"]
    },
    {
        id: "yaml",
        name: "YAML",
        extension: ["yml", "yaml"]
    },
    {
        id: "toml",
        name: "TOML",
        extension: ["toml"]
    },
    {
        id: "xml",
        name: "XML",
        extension: ["xml"]
    },
    {
        id: "sql",
        name: "SQL",
        extension: ["sql"]
    },
    {
        id: "php",
        name: "PHP",
        extension: ["php"]
    },
    {
        id: "dart",
        name: "Dart",
        extension: ["dart"]
    },
    {
        id: "kotlin",
        name: "Kotlin",
        extension: ["kt"]
    },
    {
        id: "dockerfile",
        name: "Dockerfile",
        extension: ["dockerfile"]
    },
    {
        id: "txt",
        name: "Text",
        extension: ["txt"]
    },
    {
        id: "json",
        name: "JSON",
        extension: ["json"]
    },
    {
        id: "html",
        name: "HTML",
        extension: ["html"]
    },
    {
        id: "css",
        name: "CSS",
        extension: ["css"]
    },
    {
        id: "javascript",
        name: "JavaScript",
        extension: ["js"]
    },
    {
        id: "typescript",
        name: "TypeScript",
        extension: ["ts"]
    },
    {
        id: "python",
        name: "Python",
        extension: ["py"]
    },
    {
        id: "markdown",
        name: "Markdown",
        extension: ["md"]
    },
    {
        id: "rust",
        name: "Rust",
        extension: ["rs"]
    },
    {
        id: "golang",
        name: "Go",
        extension: ["go"]
    },
    {
        id: "swift",
        name: "Swift",
        extension: ["swift"]
    },
    {
        id: "csharp",
        name: "C#",
        extension: ["cs"]
    },
    {
        id: "haskell",
        name: "Haskell",
        extension: ["hs"]
    },
    {
        id: "perl",
        name: "Perl",
        extension: ["pl"]
    },
    {
        id: "lua",
        name: "Lua",
        extension: ["lua"]
    },
    {
        id: "r",
        name: "R",
        extension: ["r"]
    },
    {
        id: "scala",
        name: "Scala",
        extension: ["scala"]
    },
    {
        id: "clojure",
        name: "Clojure",
        extension: ["clj"]
    },
    {
        id: "elixir",
        name: "Elixir",
        extension: ["ex"]
    },
    {
        id: "erlang",
        name: "Erlang",
        extension: ["erl"]
    },
    {
        id: "fortran",
        name: "Fortran",
        extension: ["f"]
    },
    {
        id: "groovy",
        name: "Groovy",
        extension: ["groovy"]
    },
    {
        id: "haxe",
        name: "Haxe",
        extension: ["hx"]
    },
    {
        id: "julia",
        name: "Julia",
        extension: ["jl"]
    },
    {
        id: "lisp",
        name: "Lisp",
        extension: ["lisp"]
    },
    {
        id: "matlab",
        name: "Matlab",
        extension: ["m"]
    },
    {
        id: "ocaml",
        name: "OCaml",
        extension: ["ml"]
    },
    {
        id: "pascal",
        name: "Pascal",
        extension: ["pas"]
    },
    {
        id: "powershell",
        name: "PowerShell",
        extension: ["ps1"]
    },
    {
        id: "prolog",
        name: "Prolog",
        extension: ["pl"]
    },
    {
        id: "racket",
        name: "Racket",
        extension: ["rkt"]
    },
    {
        id: "scheme",
        name: "Scheme",
        extension: ["scm"]
    },
    {
        id: "vhdl",
        name: "VHDL",
        extension: ["vhdl"]
    },
    {
        id: "verilog",
        name: "Verilog",
        extension: ["v"]
    },
    {
        id: "visualbasic",
        name: "Visual Basic",
        extension: ["vb"]
    },
    {
        id: "assembly_x86",
        name: "Assembly x86",
        extension: ["asm"]
    },
    {
        id: "sql",
        name: "SQL",
        extension: ["sql"]
    },
    {
        id: "diff",
        name: "Diff",
        extension: ["diff"]
    },
    {
        id: "ini",
        name: "INI",
        extension: ["ini"]
    },
    {
        id: "makefile",
        name: "Makefile",
        extension: ["makefile"]
    },
    {
        id: "batchfile",
        name: "Batchfile",
        extension: ["bat"]
    },
    {
        id: "c9search",
        name: "C9Search",
        extension: ["c9search_results"]
    },
    {
        id: "d",
        name: "D",
        extension: ["d"]
    },
    {
        id: "django",
        name: "Django",
        extension: ["django"]
    },
    {
        id: "dot",
        name: "Dot",
        extension: ["dot"]
    },
    {
        id: "ejs",
        name: "EJS",
        extension: ["ejs"]
    },
    {
        id: "forth",
        name: "Forth",
        extension: ["forth"]
    },
    {
        id: "ftl",
        name: "FreeMarker",
        extension: ["ftl"]
    },
    {
        id: "gcode",
        name: "Gcode",
        extension: ["gcode"]
    },
    {
        id: "gitignore",
        name: "Gitignore",
        extension: ["gitignore"]
    },
    {
        id: "glsl",
        name: "Glsl",
        extension: ["glsl"]
    },
    {
        id: "gobstones",
        name: "Gobstones",
        extension: ["gbs"]
    },
    {
        id: "graphqlschema",
        name: "GraphQLSchema",
        extension: ["graphql"]
    },
    {
        id: "handlebars",
        name: "Handlebars",
        extension: ["hbs"]
    },
    {
        id: "hjson",
        name: "Hjson",
        extension: ["hjson"]
    },
    {
        id: "html_elixir",
        name: "HTML (Elixir)",
        extension: ["eex"]
    },
    {
        id: "html_ruby",
        name: "HTML (Ruby)",
        extension: ["erb"]
    },
    {
        id: "io",
        name: "Io",
        extension: ["io"]
    },
    {
        id: "jade",
        name: "Jade",
        extension: ["jade"]
    },
    {
        id: "javascript",
        name: "JavaScript",
        extension: ["js"]
    },
    {
        id: "jsoniq",
        name: "JSONiq",
        extension: ["jq"]
    },
    {
        id: "jsp",
        name: "JSP",
        extension: ["jsp"]
    },
    {
        id: "jsx",
        name: "JSX",
        extension: ["jsx"]
    },
    {
        id: "latex",
        name: "LaTeX",
        extension: ["tex"]
    },
    {
        id: "lean",
        name: "Lean",
        extension: ["lean"]
    },
    {
        id: "less",
        name: "LESS",
        extension: ["less"]
    },
    {
        id: "liquid",
        name: "Liquid",
        extension: ["liquid"]
    },
    {
        id: "livescript",
        name: "LiveScript",
        extension: ["ls"]
    },
    {
        id: "logiql",
        name: "LogiQL",
        extension: ["logic"]
    },
    {
        id: "lsl",
        name: "LSL",
        extension: ["lsl"]
    },
    {
        id: "luapage",
        name: "LuaPage",
        extension: ["lp"]
    },
    {
        id: "markdown",
        name: "Markdown",
        extension: ["md"]
    },
    {
        id: "mask",
        name: "Mask",
        extension: ["mask"]
    },
    {
        id: "mushcode",
        name: "MUSHCode",
        extension: ["mc"]
    },
    {
        id: "mysql",
        name: "MySQL",
        extension: ["mysql"]
    },
    {
        id: "nix",
        name: "Nix",
        extension: ["nix"]
    },
    {
        id: "nsis",
        name: "NSIS",
        extension: ["nsi"]
    },
    {
        id: "objectivec",
        name: "Objective-C",
        extension: ["m"]
    },
    {
        id: "pascal",
        name: "Pascal",
        extension: ["pas"]
    },
    {
        id: "pgsql",
        name: "PostGreSQL",
        extension: ["pgsql"]
    },
    {
        id: "powershell",
        name: "PowerShell",
        extension: ["ps1"]
    },
    {
        id: "puppet",
        name: "Puppet",
        extension: ["pp"]
    },
    {
        id: "praat",
        name: "Praat",
        extension: ["praat"]
    },
    {
        id: "prolog",
        name: "Prolog",
        extension: ["pl"]
    },
    {
        id: "properties",
        name: "Properties",
        extension: ["properties"]
    },
    {
        id: "protobuf",
        name: "Protobuf",
        extension: ["proto"]
    },
    {
        id: "razor",
        name: "Razor",
        extension: ["cshtml"]
    },
    {
        id: "rdoc",
        name: "RDoc",
        extension: ["rdoc"]
    },
    {
        id: "rhtml",
        name: "RHTML",
        extension: ["rhtml"]
    },
    {
        id: "rst",
        name: "RST",
        extension: ["rst"]
    },
    {
        id: "sass",
        name: "SASS",
        extension: ["sass"]
    },
    {
        id: "scad",
        name: "SCAD",
        extension: ["scad"]
    },
    {
        id: "scss",
        name: "SCSS",
        extension: ["scss"]
    },
    {
        id: "sjs",
        name: "SJS",
        extension: ["sjs"]
    },
    {
        id: "snippets",
        name: "snippets",
        extension: ["snippets"]
    },
    {
        id: "soy_template",
        name: "Soy Template",
        extension: ["soy"]
    },
    {
        id: "space",
        name: "Space",
        extension: ["space"]
    },
    {
        id: "sparql",
        name: "SPARQL",
        extension: ["sparql"]
    },
    {
        id: "sqlserver",
        name: "SQLServer",
        extension: ["sqlserver"]
    },
    {
        id: "stylus",
        name: "Stylus",
        extension: ["styl"]
    },
    {
        id: "svg",
        name: "SVG",
        extension: ["svg"]
    },
    {
        id: "tcl",
        name: "Tcl",
        extension: ["tcl"]
    },
    {
        id: "tex",
        name: "Tex",
        extension: ["tex"]
    },
    {
        id: "text",
        name: "Text",
        extension: ["txt"]
    },
    {
        id: "textile",
        name: "Textile",
        extension: ["textile"]
    },
    {
        id: "tsx",
        name: "TSX",
        extension: ["tsx"]
    },
    {
        id: "twig",
        name: "Twig",
        extension: ["twig"]
    },
    {
        id: "typescript",
        name: "Typescript",
        extension: ["ts"]
    },
    {
        id: "vala",
        name: "Vala",
        extension: ["vala"]
    },
    {
        id: "vbscript",
        name: "VBScript",
        extension: ["vbs"]
    },
    {
        id: "velocity",
        name: "Velocity",
        extension: ["vm"]
    },
    {
        id: "xquery",
        name: "XQuery",
        extension: ["xq"]
    },
    {
        id: "cobol",
        name: "Cobol",
        extension: ["cobol"]
    },
    {
        id: "coffee",
        name: "CoffeeScript",
        extension: ["coffee"]
    },
    {
        id: "coldfusion",
        name: "ColdFusion",
        extension: ["cfm"]
    },
    {
        id: "actionscript",
        name: "ActionScript",
        extension: ["as"]
    },
    {
        id: "batchfile",
        name: "BatchFile",
        extension: ["bat"]
    }
] as Language[];

export const find_lang_by_ext = (ext: string) => {
    const lang = languages.find(lang => lang.extension.includes(ext));
    if (lang != undefined) {
        return lang;
    }
    return languages.find(lang => lang.id == "text");

}

export const find_lang_by_id = (id: string) => {
    const lang = languages.find((lang) => lang.id === id);
    if (lang != undefined) {
        return lang;
    }
    return languages.find((lang) => lang.id === "text");
}

export const find_lang_by_name = (name: string) => {
    const lang = languages.find((lang) => lang.name === name);
    if (lang != undefined) {
        return lang;
    }
    return languages.find((lang) => lang.id === "text");
}

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


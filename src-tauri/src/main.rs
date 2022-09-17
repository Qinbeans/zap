#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::{io::Write};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn save_file(name: &str, lang: &str, content: &str) -> String {
    match lang{
        "c_cpp" => {
            let mut file = std::fs::File::create(format!("{}.cpp", name)).unwrap();
            file.write_all(content.as_bytes()).unwrap();
        },
        "rust" => {
            let mut file = std::fs::File::create(format!("{}.rs", name)).unwrap();
            file.write_all(content.as_bytes()).unwrap();
        },
        "python" => {
            let mut file = std::fs::File::create(format!("{}.py", name)).unwrap();
            file.write_all(content.as_bytes()).unwrap();
        },
        "dart" => {
            let mut file = std::fs::File::create(format!("{}.dart", name)).unwrap();
            file.write_all(content.as_bytes()).unwrap();
        },
        _ => {
            let mut file = std::fs::File::create(format!("{}.txt", name)).unwrap();
            file.write_all(content.as_bytes()).unwrap();
        }
    }
    format!("success")
}



fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .invoke_handler(tauri::generate_handler![save_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

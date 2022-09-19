#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]


// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

// #[tauri::command]
// fn save_file(path: &str, name: &str, lang: &str, content: &str) -> String {
//     //turn path into PathBuf
//     let mut pathname = std::path::PathBuf::from(path);
//     if path.is_empty() {
//         pathname = dirs::home_dir().unwrap();
//     }
//     println!("{:?}/{}.cpp",pathname, name);
//     match lang{
//         "c_cpp" => {
//             let mut file = std::fs::File::create(format!("{}/{}.cpp",pathname.to_str().unwrap(), name)).unwrap();
//             if file.write_all(content.as_bytes()).is_err() {
//                 return "Error".to_string();
//             }
//         },
//         "rust" => {
//             let mut file = std::fs::File::create(format!("{}/{}.cpp",pathname.to_str().unwrap(), name)).unwrap();
//             if file.write_all(content.as_bytes()).is_err() {
//                 return "Error".to_string();
//             }
//         },
//         "python" => {
//             let mut file = std::fs::File::create(format!("{}/{}.cpp",pathname.to_str().unwrap(), name)).unwrap();
//             if file.write_all(content.as_bytes()).is_err() {
//                 return "Error".to_string();
//             }
//         },
//         "dart" => {
//             let mut file = std::fs::File::create(format!("{}/{}.cpp",pathname.to_str().unwrap(), name)).unwrap();
//             file.write_all(content.as_bytes()).unwrap();
//         },
//         _ => {
//             let mut file = std::fs::File::create(format!("{}/{}.cpp",pathname.to_str().unwrap(), name)).unwrap();
//             if file.write_all(content.as_bytes()).is_err() {
//                 return "Error".to_string();
//             }
//         }
//     }
//     format!("success")
// }



fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        // .invoke_handler(tauri::generate_handler![save_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

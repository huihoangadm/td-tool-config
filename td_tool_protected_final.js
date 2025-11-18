/* -------------------------
   TD TOOL FINAL - AUTO UPDATE
--------------------------*/

const LOCAL_VERSION = "1.0";  // Version hiện tại của file JS

async function checkUpdate() {
  const configUrl = "https://raw.githubusercontent.com/huihoangadm/td-tool-config/main/config.json";
  const jsUrl = "https://cdn.jsdelivr.net/gh/huihoangadm/td-tool-config@main/td_tool_protected_final.js";

  try {
    const res = await fetch(configUrl);
    const config = await res.json();

    // Lấy version từ config
    const remoteVersion = config.version;

    if (remoteVersion !== LOCAL_VERSION) {
      console.log(
        "%c🔄 Đang cập nhật tool mới (v" + remoteVersion + ")...",
        "color: yellow; font-size: 18px;"
      );

      // Tải file JS mới
      const newCode = await fetch(jsUrl).then(r => r.text());

      // Chạy file mới
      eval(newCode);
      return false;
    }

    return true;
  } catch (err) {
    console.error("❌ Lỗi kiểm tra update:", err);
    return true; // vẫn chạy bản cũ
  }
}

(async () => {
  const canRun = await checkUpdate();
  if (!canRun) return; // có update → dừng bản cũ

  // -------------------------------------
  // TOOL THẬT SỰ BẮT ĐẦU TỪ ĐÂY
  // -------------------------------------

  console.log("%c✔ Tool đang chạy bản mới nhất (v" + LOCAL_VERSION + ")",
              "color: lightgreen; font-size: 16px;");

  // ----- CODE TOOL CỦA BẠN ĐẶT VÀO ĐÂY -----

})();

// darkmode.js
// 🌙 사이트 전체 공통 다크모드 스크립트

(function () {
    const STORAGE_KEY = "darkMode";
    const DARK_CLASS = "dark-mode";

    // ⭐ 1. 저장된 다크모드 상태를 body에 반영
    function applySavedMode() {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (saved === "on") {
            document.body.classList.add(DARK_CLASS);
        } else {
            document.body.classList.remove(DARK_CLASS);
        }
    }

    // ⭐ 2. 다크모드 on/off 토글 + 저장
    function toggleDarkMode() {
        const isOn = document.body.classList.toggle(DARK_CLASS);
        localStorage.setItem(STORAGE_KEY, isOn ? "on" : "off");
    }

    // DOM 준비되면 실행
    document.addEventListener("DOMContentLoaded", function () {
        // (1) 페이지 열리면 저장된 모드 적용
        applySavedMode();

        // (2) 다크모드 스위치(전등 버튼)가 있으면 클릭 이벤트 연결
        const switchEl = document.getElementById("darkmode-switch");
        if (switchEl) {
            switchEl.addEventListener("click", toggleDarkMode);
        }
    });
})();

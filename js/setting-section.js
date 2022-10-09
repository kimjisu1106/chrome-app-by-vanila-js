const setting = document.querySelector("div#setting");
const settingBtn = document.querySelector("#setting-btn i");
const INCOMING_CLASSNAME = "incoming-setting";
const OUTGOING_CLASSNAME = "outgoing-setting";

function onClickSettingBtn() {
    if (setting.classList.contains(INCOMING_CLASSNAME) === true) {
        setting.classList.add(OUTGOING_CLASSNAME);
        setting.classList.remove(INCOMING_CLASSNAME);
    } else {
        setting.classList.add(INCOMING_CLASSNAME);
        setting.classList.remove(OUTGOING_CLASSNAME);
    }
}

settingBtn.addEventListener("click",onClickSettingBtn);



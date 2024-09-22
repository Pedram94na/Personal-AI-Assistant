import { openPopup } from "./popup";

export const submitAPI = (apiKey, setPopupState, setButtonEnabled) => {
    if (!apiKey)
    {
        openPopup(setPopupState, 'noApi')

        return;
    }
    
    setButtonEnabled(true);
}
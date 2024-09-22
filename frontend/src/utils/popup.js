export const openPopup = (setPopupState, type) => {
    setPopupState({ visible: true, type }); // Set the visibility and type of the popup
};

export const exit = (setIsPopupVisible) => {
    setIsPopupVisible(true);
};

export const handlePopupChoice = (choice, setPopupState) => {
    if (choice === "yes") {
        if (setPopupState.type === 'exit')
            window.close();
    }

    setPopupState({ visible: false, type: null });
};
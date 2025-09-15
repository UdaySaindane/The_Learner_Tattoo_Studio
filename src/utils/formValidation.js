export const validateForm = (form) => {
    for (const key in form) {
        if (!form[key]) return false;
    }
    return true;
};
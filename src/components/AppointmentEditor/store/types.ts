const prefix = (text: string) => `APPOINTMENT_EDITOR.${text}`;

export const APPOINTMENT_EDITOR_CLOSE = prefix('CLOSE');
export const APPOINTMENT_EDITOR_UPDATE_START = prefix('UPDATE_START');
export const APPOINTMENT_EDITOR_UPDATE_END = prefix('UPDATE_END');
export const APPOINTMENT_EDITOR_UPDATE_TITLE = prefix('UPDATE_TITLE');
export const APPOINTMENT_EDITOR_SAVE = prefix('SAVE');
export const APPOINTMENT_EDITOR_DELETE = prefix('DELETE');
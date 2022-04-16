import { createContext } from "react";

const context: { songId: null | string, setSongId: any } = {
    songId: null,
    setSongId: () => { },
}

export const AppContext = createContext(context);

import { createContext, ReactNode, useState } from "react";


type InputMessageContextType =  {
    message: string;
    setMessage: (message: string) => void;
}

export const InputMessageContext = createContext({} as InputMessageContextType);

export default function InputMessageContextProvider({ children }: { children: ReactNode }) {
    const [message, setMessage] = useState<string>('');

    return (
        <InputMessageContext.Provider value={{ message, setMessage }}>
            {children}
        </InputMessageContext.Provider>
    )
}
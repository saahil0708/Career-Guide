"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import ContactModal from "@/Components/Global/ContactModal";

interface ModalContextType {
    isContactOpen: boolean;
    openContact: () => void;
    closeContact: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isContactOpen, setIsContactOpen] = useState(false);

    const openContact = () => setIsContactOpen(true);
    const closeContact = () => setIsContactOpen(false);

    return (
        <ModalContext.Provider value={{ isContactOpen, openContact, closeContact }}>
            {children}
            <ContactModal 
                isOpen={isContactOpen} 
                onClose={closeContact} 
            />
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
}

import { useState } from 'react';
export const useDisclosu = (startValue =false) => {
    const [isOpen,setIsOpen]=useState(startValue);

    const onClose = () => setIsOpen(false);

    const onOpen = () => setIsOpen(true);

const onToggle = () => setIsOpen((prev) => !prev);
    return {isOpen,onOpen,onClose,onToggle}
}
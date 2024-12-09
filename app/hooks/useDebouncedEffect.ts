import { useEffect, useState } from 'react';

/**
 * Custom hook to debounce the execution of a callback function.
 * @param {Function} callback - The function to execute after the debounce delay.
 * @param {any} value - The value to watch for changes.
 * @param {number} delay - The debounce delay in milliseconds.
 */
const useDebounceEffect = (callback: Function, value: any, delay: number) => {
    useEffect(() => {
        const handler = setTimeout(() => {
            callback(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay, callback]);
};

export default useDebounceEffect;

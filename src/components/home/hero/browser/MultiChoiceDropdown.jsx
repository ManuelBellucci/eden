import React, { useState, useRef, useEffect } from 'react';
import { Checkbox, Label } from 'flowbite-react';

const MultiChoiceDropdown = ({ options, label }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Handle outside clicks for closing dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelectionChange = (option) => {
        setSelectedOptions(prev => {
            if (prev.includes(option)) {
                return prev.filter(item => item !== option);
            } else {
                return [...prev, option];
            }
        });
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div ref={dropdownRef} className="relative w-full">
            <button onClick={toggleDropdown} className="w-full flex items-center justify-between px-4 py-4 text-black bg-white border border-primary-300 rounded-full">
                {label}
                <span className="ml-2 text-xs">
                    {isDropdownOpen ? '▲' : '▼'}
                </span>
            </button>
            {isDropdownOpen && (
                <div className="absolute z-10 bg-white border w-full mt-4 flex flex-col items-center border-gray-300 rounded-lg">
                    {options.map(option => (
                        <div key={option} className="flex items-center py-2">
                            <Checkbox
                                id={option}
                                checked={selectedOptions.includes(option)}
                                onChange={() => handleSelectionChange(option)}
                                className='checked:bg-primary-500'
                            />
                            <Label htmlFor={option} className="ml-2">{option}</Label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MultiChoiceDropdown;

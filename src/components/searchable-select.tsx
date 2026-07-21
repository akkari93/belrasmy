'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

export type SearchableOption = {
  value: string;
  label: string;
  searchText?: string;
  secondary?: string;
};

type SearchableSelectProps = {
  value: string;
  options: SearchableOption[];
  onChange: (value: string) => void;
  placeholder: string;
  noResultsText: string;
  disabled?: boolean;
  ariaLabel: string;
  dir?: 'ltr' | 'rtl';
};

export function SearchableSelect({
  value,
  options,
  onChange,
  placeholder,
  noResultsText,
  disabled = false,
  ariaLabel,
  dir = 'ltr',
}: SearchableSelectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((option) => option.value === value);
  const [query, setQuery] = useState(selectedOption?.label || '');
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const lastSyncedValue = useRef(value);

  useEffect(() => {
    if (lastSyncedValue.current !== value) {
      setQuery(selectedOption?.label || '');
      lastSyncedValue.current = value;
    }
  }, [selectedOption?.label, value]);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
        setQuery(selectedOption?.label || '');
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [selectedOption?.label]);

  const filteredOptions = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    if (!normalizedQuery || normalizedQuery === selectedOption?.label.toLocaleLowerCase()) {
      return options;
    }

    return options.filter((option) =>
      `${option.label} ${option.searchText || ''} ${option.secondary || ''}`
        .toLocaleLowerCase()
        .includes(normalizedQuery),
    );
  }, [options, query, selectedOption?.label]);

  function chooseOption(option: SearchableOption) {
    onChange(option.value);
    setQuery(option.label);
    setOpen(false);
    setActiveIndex(0);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (disabled) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((index) => Math.min(index + 1, Math.max(filteredOptions.length - 1, 0)));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === 'Enter' && open && filteredOptions[activeIndex]) {
      event.preventDefault();
      chooseOption(filteredOptions[activeIndex]);
    } else if (event.key === 'Escape') {
      setOpen(false);
      setQuery(selectedOption?.label || '');
    }
  }

  return (
    <div ref={containerRef} className="relative" dir={dir}>
      <input
        type="text"
        role="combobox"
        aria-label={ariaLabel}
        aria-expanded={open}
        aria-controls={`${ariaLabel.replace(/\s+/g, '-')}-options`}
        aria-autocomplete="list"
        value={query}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={() => setOpen(true)}
        onChange={(event) => {
          const nextQuery = event.target.value;
          setQuery(nextQuery);
          setOpen(true);
          setActiveIndex(0);
          if (value) {
            lastSyncedValue.current = '';
            onChange('');
          }
        }}
        onKeyDown={handleKeyDown}
        className="w-full px-3 py-2.5 rounded-lg border border-border-light text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white disabled:bg-gray-50 disabled:text-gray-400"
      />
      {open && !disabled && (
        <div
          id={`${ariaLabel.replace(/\s+/g, '-')}-options`}
          role="listbox"
          className="absolute z-30 mt-1 w-full max-h-64 overflow-y-auto rounded-lg border border-border-light bg-white shadow-lg"
        >
          {filteredOptions.length === 0 ? (
            <p className="px-3 py-3 text-sm text-gray-text">{noResultsText}</p>
          ) : (
            filteredOptions.map((option, index) => (
              <button
                type="button"
                role="option"
                aria-selected={option.value === value}
                key={option.value}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => chooseOption(option)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`w-full px-3 py-2.5 text-sm text-start transition-colors ${
                  index === activeIndex ? 'bg-primary-light text-dark' : 'text-dark hover:bg-gray-50'
                }`}
              >
                <span className="block">{option.label}</span>
                {option.secondary && <span className="block text-xs text-gray-text mt-0.5">{option.secondary}</span>}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}

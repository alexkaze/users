import { useState, useRef, useEffect, useCallback } from 'react';
import { OptionsIcon } from '@/components/common';
import { ActiveOptions } from './active-options';
import { ArchivedOptions } from './archived-options';
import styles from './options.module.scss';

type Props = {
  id: number;
  archived?: boolean;
};

const Options = ({ id, archived }: Props) => {
  const [dropdown, setDropdown] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (optionsRef.current?.contains(target)) {
      document.removeEventListener('mousedown', handleClickOutside);
      return;
    }
    if (dropdownRef.current?.contains(target)) return;
    else {
      document.removeEventListener('mousedown', handleClickOutside);
      setDropdown(false);
    }
  }, []);

  const displayOptionsHandler = () => {
    if (!dropdown) document.addEventListener('mousedown', handleClickOutside);
    setDropdown(!dropdown);
  };

  useEffect(() => {
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <>
      <div
        className={styles.options}
        ref={optionsRef}
        onClick={displayOptionsHandler}
      >
        <OptionsIcon />
      </div>

      {dropdown && (
        <div className={styles.dropdown} ref={dropdownRef}>
          {!archived ? <ActiveOptions id={id} /> : <ArchivedOptions id={id} />}
        </div>
      )}
    </>
  );
};

export default Options;

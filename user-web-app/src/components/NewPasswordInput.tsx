import { useEffect, useRef, useState } from 'react';
import ShieldLockSvg from '../assets/icons/shield-lock.svg';
import EyeSvg from '../assets/icons/eye.svg';
import EyeSlashSvg from '../assets/icons/eye-slash.svg';
import ErrorSvg from '../assets/icons/exclamation-circle.svg';

export interface Props {
  size?: Size;
  labelPosition?: LabelPosition;
  error?: string;
  passSecurity?: PassStrength;
  helperText?: string;
  value: string | undefined;
  setValue: (value: string | undefined) => void;
}

export type Size = 'Small' | 'Medium' | 'Large';

export type LabelPosition = 'Edge' | 'Inside' | 'Outside';

export enum PassStrength {
  'weak' = 1,
  'medium',
  'strong',
  'fortress',
}

const heightSizeStyles = {
  Edge: {
    Small: 'h-[30px]',
    Medium: 'h-9',
    Large: 'h-11',
  },
  Inside: {
    Small: 'h-[45px]',
    Medium: 'h-12',
    Large: 'h-14',
  },
  Outside: {
    Small: 'h-[30px]',
    Medium: 'h-9',
    Large: 'h-11',
  },
};

const defaultLabelStyles = {
  Edge: `left-10`,
  Inside: `left-10`,
  Outside: `-top-6 left-0`,
};

const focusedLabelStyles = {
  Edge: `-top-2 text-xs bg-white px-1 leading-3`,
  Inside: `text-xs top-1 left-10`,
  Outside: `-top-6 left-0`,
};

const colorLabelStyles = {
  default: {
    Edge: `text-grey-500`,
    Inside: `text-grey-500`,
    Outside: `text-grey-500`,
  },
  focused: {
    Edge: `text-grey-800`,
    Inside: `text-grey-800`,
    Outside: `text-grey-800`,
  },
  error: {
    Edge: `text-error-700`,
    Inside: `text-error-700`,
    Outside: `text-error-700`,
  },
};

const progressBarColor = ['bg-text-error-700', 'bg-warning-500', 'bg-brand-500', 'bg-success-500'];
const passStrengthTextColor = ['text-error-700', 'text-warning-700', 'text-grey-800', 'text-success-700'];

const iconSizeStyles = {
  Small: 'w-3.5 h-3.5',
  Medium: 'w-4 h-4',
  Large: 'w-5 h-5',
};

const inputTextStyles = {
  Small: 'text-xs tracking-[0.06px]',
  Medium: 'text-sm tracking-[0.07px]',
  Large: 'text-base tracking-[0.08px]',
};

const focusedInput = {
  Edge: '',
  Inside: 'mt-4',
  Outside: '',
};

export default function NewPasswordInput({
  size = 'Medium',
  labelPosition = 'Edge',
  error = '',
  passSecurity,
  helperText = '',
  value,
  setValue,
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
        inputRef?.current?.blur();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`w-full ${labelPosition === 'Edge' ? 'mt-1' : labelPosition === 'Outside' ? 'mt-2' : ''}`}>
      <div
        tabIndex={0}
        ref={containerRef}
        className={`
        px-3 flex justify-between items-center relative border rounded-xl transition-all
        ${heightSizeStyles[labelPosition][size]} 
        ${error ?
          'border-error-700 shadow-input-error' :
          isFocused ?
            'border-brand-500 shadow-input-focus' :
            'border-grey-300'
        }
      `}
        onClick={() => {
          setIsFocused(true);
          inputRef?.current?.focus();
        }}
      >
        <img src={ShieldLockSvg.src} alt="Password icon" className={`${iconSizeStyles[size]}`}/>
        <label
          htmlFor="password"
          className={
            `font-sans absolute transition-transform
          ${(isFocused || value) ? focusedLabelStyles[labelPosition] : defaultLabelStyles[labelPosition]}
          ${inputTextStyles[size]}
          ${error ? colorLabelStyles.error[labelPosition] : isFocused ? colorLabelStyles.focused[labelPosition] : colorLabelStyles.default[labelPosition]}
          `}
        >
          Password*
        </label>
        <input
          ref={inputRef}
          type={isVisiblePassword ? 'text' : 'password'}
          name="password"
          className={`
          mx-2 w-full outline-0 transition-all text-grey-800
          ${inputTextStyles[size]} ${(isFocused || value) ? focusedInput[labelPosition] : ''}
        `}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {error && (<img src={ErrorSvg.src} alt="Error icon" className={`mr-2 ${iconSizeStyles[size]}`}/>)}
        <img
          src={isVisiblePassword ? EyeSlashSvg.src : EyeSvg.src}
          alt="visible password"
          className={`${iconSizeStyles[size]}`}
          onClick={() => setIsVisiblePassword(!isVisiblePassword)}
        />
      </div>
      <div className='flex justify-between mt-2'>
        {new Array(4).fill(0).map((_, index) => (
          <div key={index}
               className={`h-[3px] w-[24%] 
               ${passSecurity && Number(passSecurity) >= index + 1 ? progressBarColor[passSecurity - 1] : 'bg-[#E2E8F0]'}
               `}
          />
        ))}
      </div>
      <div className="flex justify-between">
        {error ?
          <div className="text-error-700 text-xs mt-1">{error}</div> :
          helperText ?
            <div className="text-grey-500 text-xs mt-1">{helperText}</div> : <div/>}
        {passSecurity &&
          <div className={`text-grey-500 text-xs mt-1 ${passStrengthTextColor[passSecurity - 1]}`}>
            {PassStrength[passSecurity]}
          </div>
        }
      </div>
    </div>
  );
}


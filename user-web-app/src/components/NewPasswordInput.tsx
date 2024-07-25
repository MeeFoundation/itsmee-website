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
    Edge: `text-[#64748B]`,
    Inside: `text-[#64748B]`,
    Outside: `text-[#1E293B]`,
  },
  focused: {
    Edge: `text-[#3B5B63]`,
    Inside: `text-[#3B5B63]`,
    Outside: `text-[#4F868E]`,
  },
  error: {
    Edge: `text-[#B91C1C]`,
    Inside: `text-[#B91C1C]`,
    Outside: `text-[#B91C1C]`,
  },
};

const progressBarColor = ['bg-[#B91C1C]', 'bg-[#ED9513]', 'bg-[#4F868E]', 'bg-[#668E4F]'];
const passStrengthTextColor = ['text-[#B91C1C]', 'text-[#AE4F0F]', 'text-[#3B5B63]', 'text-[#3F5932]'];

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
          'border-[#B91C1C] shadow-[0_0_3px_rgba(238,108,88,0.20)]' :
          isFocused ?
            'border-[#4F868E] shadow-[0_0_3px_rgba(79,134,142,0.2)]' :
            'border-[#CBD5E1]'
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
          mx-2 w-full outline-0 transition-all text-[#1E293B]
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
          <div className="text-[#B91C1C] text-xs mt-1">{error}</div> :
          helperText ?
            <div className="text-[#64748B] text-xs mt-1">{helperText}</div> : <div/>}
        {passSecurity &&
          <div className={`text-[#64748B] text-xs mt-1 ${passStrengthTextColor[passSecurity - 1]}`}>
            {PassStrength[passSecurity]}
          </div>
        }
      </div>
    </div>
  );
}


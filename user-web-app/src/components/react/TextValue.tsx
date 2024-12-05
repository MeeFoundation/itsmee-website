import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  id: string;
  label: string;
  children: string;
}

export default function TextValue({ className, id, label, children }: Props) {
  return (
    <div className={twMerge("relative", className)}>
      <div
        id={id}
        className="peer m-0 block h-14 w-full rounded-lg bg-white py-2.5 pl-0.5 pr-4 text-base font-normal leading-6 tracking-0.02 text-[#1E293B] transition duration-200 ease-linear placeholder:text-transparent focus:pb-[0.625rem] focus:pt-[1.625rem] focus:ring-1 focus:ring-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
      >
        {children}
      </div>
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent py-4 pr-3 text-primary transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
      >
        {label}
      </label>
    </div>
  );
}

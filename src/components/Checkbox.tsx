import { Check } from "./Icons";

interface CheckboxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}
export const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <span className="relative w-6 h-6">
      <input
        type="checkbox"
        className="peer appearance-none w-6 h-6 border border-gray-200 rounded-full shrink-0 bg-light-gray checked:bg-gradient-to-br checked:from-primary-grad1 checked:to-primary-grad2 checked:border-0"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <Check className="absolute top-[30%] left-[25%] hidden peer-checked:block pointer-events-none" />
    </span>
  );
};

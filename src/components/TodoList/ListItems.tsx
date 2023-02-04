import { Trash, Check } from 'phosphor-react';

export const ListItems = () => {
  return (
    <div className="flex justify-between items-start bg-grayvar-300 border border-grayvar-400 rounded-lg p-4">
      <div className="flex items-start gap-2">
        <div className="relative">
          <input
            type="checkbox"
            id="checkCompleted"
            className="peer appearance-none cursor-pointer border-2 border-babyBlue-400 rounded-full checked:border-lPurple-300 checked:bg-lPurple-300 transition-colors w-5 h-5"
          />
          <span className="pointer-events-none w-4 h-4 block absolute top-[.1875rem] left-[.1875rem] text-white opacity-0 check-1">
            <Check />
          </span>
        </div>

        <span className="text-gray-200 h-4 leading-4">
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </span>
      </div>
      <Trash className="min-w-[1.125rem] min-h-[1.125rem] text-grayvar-200 cursor-pointer hover:text-red-400 transition-colors" />
    </div>
  );
};

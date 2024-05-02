type props = {
  title: string;
  dark?: boolean;
};

export default function Button({ title, dark }: props) {
  return (
    <button
      className={`
      w-[152px] h-[56px] font-medium tracking-[1px] text-[15px] rounded-lg color-red 
    hover:bg-peachLight hover:text-white transition-all z-20
    ${dark ? "text-greyDark bg-white" : "text-white bg-peach"} 
    `}
    >
      {title}
    </button>
  );
}

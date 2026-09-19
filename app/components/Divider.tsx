interface DividerProps {
    text?: string;
}

export default function Divider({ text }: DividerProps) {
    return (
        // <hr className='border-2 border-dashed mx-6 my-4'/>
        <div className="flex items-center pt-8 pb-4">
            <div className="border-2 grow size-fit" />
            {text && <div className="px-3 text-2xl">{text}</div>}
            <div className="border-2 grow size-fit" />
        </div>
    );
}

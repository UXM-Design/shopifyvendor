import { FC } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface TextInputProps {
    id: string;
    name: string;
    placeholder: string;
    label: string;
    type: string;
    register?: any;
    error?: FieldError;

}

const TextInput: FC<TextInputProps> = ({
    name,
    type,
    id,
    label,
    placeholder,
    register,
    error,
}) => {
    return (
        <div className="w-[360px] py-2 flex flex-col gap-3 ">
            <label htmlFor={name}>{label}</label>
            <input
                className="w-[360px] border-2 border-[#989898] rounded-lg px-3 h-[54px]"
                type={type}
                id={id}
                // value={value}
                placeholder={placeholder}
                {...register(name)}
            />
            {error && (
                <div
                    className={` mt-2 text-danger-500 block text-sm `}
                >
                    {error.message}
                </div>
            )}
        </div>
    );
}

export default TextInput
export const FormInput = (props) => {
    const { inputText, ...otherProps } = props;
    return (
        <>
            <div className="mb-6">
                <label className="block mb-2 uppercase text-xs text-gray-700"
                       htmlFor="{inputName}"
                >
                    {inputText}
                </label>

                <input className="border border-gray-400 p-2 w-full"
                       {...otherProps}
                />
            </div>
        </>
    );
};
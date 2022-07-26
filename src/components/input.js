import {useState, useEffect, useRef} from "react"

export default function Input({label, type='text', ...props}) {

    const inputRef = useRef()
    const [show, setShow] = useState(false)
    const [inputType, setType] = useState(type)

    useEffect(() => {
        if (show) {
            setType('text')
            inputRef.current.focus()
        } else if (type === 'password') {
            setType('password')
            inputRef.current.focus()
        }
        
    }, [show]);

    return (
        <label className="block relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-400">       
            <input ref={inputRef} required={true} type={inputType} className="  text-sm  outline-none w-full px-2 h-[38px] valid:pt-[12px] peer" {...props} />
            <small className="absolute top-1/2 left-[9px] text-xs text-gray-500 rounded-sm cursor-text pointer-events-none -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">{label}</small>
            {type === 'password' && props ?.value && (
                <button type="button" onClick={() => setShow(show => !show)} className="pr-2 h-full flex items-center text-sm text-black font-semibold">
                    {show ? 'Hide' : 'Show'}
                </button>
            )}
        </label>
    )
}
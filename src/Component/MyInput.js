import { Input } from 'antd';


export default function MyInput(props){

    const {className, label, onChange, placeholder } = props

    return (
        <>
        <div>
             <Input className={className} placeholder={placeholder} />
        </div>
        </>
    )
}
import { IoIosSend } from "react-icons/io";


export default function MyButton(props){

    const {onClick, loadingName, className} = props;

    return (
        <>
        <div>
    <IoIosSend 
    className={className}
    onClick={onClick}
    />

        </div>
        </>
    )
}
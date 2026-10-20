export default function TabButton(children){
    function handleClick(){
        console.log('Hello World');
    }

    return(
        <li>
            <button onCLick = {handleClick} >
                {children}
            </button>
        </li>
    );
}